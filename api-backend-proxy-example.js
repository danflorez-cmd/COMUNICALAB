/**
 * ComunicaLab - Plantilla de Backend Proxy Seguro para Inteligencia Artificial
 * 
 * OBJETIVO:
 * Proteger las credenciales (API Keys) de Google Gemini o OpenAI en variables
 * de entorno del servidor, evitando exponerlas en el código JavaScript del navegador.
 * 
 * COMPATIBILIDAD:
 * Puedes desplegar este archivo como una función Serverless en Vercel, Netlify,
 * Cloudflare Workers o en un servidor Node.js (Express).
 * 
 * VARIABLES DE ENTORNO REQUERIDAS:
 * - GEMINI_API_KEY: Tu clave de API obtenida en Google AI Studio (https://aistudio.google.com/)
 *   o
 * - OPENAI_API_KEY: Tu clave de API obtenida en OpenAI Platform
 */

// Ejemplo de implementación para Node.js / Vercel Serverless Function (/api/ai)
export default async function handler(req, res) {
  // Configuración de CORS para permitir solicitudes desde GitHub Pages
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método no permitido. Usa POST.' });
  }

  try {
    const { prompt, context } = req.body;

    if (!prompt) {
      return res.status(400).json({ error: 'El campo "prompt" es obligatorio.' });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return res.status(500).json({
        error: 'El servidor no tiene configurada la variable GEMINI_API_KEY en su entorno.'
      });
    }

    // Contexto del Community Manager y la Marca
    const brandName = (context && context.brandName) || 'Marca general';
    const projectName = (context && context.projectName) || 'General';

    const systemPrompt = `Eres el copiloto de inteligencia artificial de ComunicaLab, un entorno de trabajo para Community Managers y estrategas de contenido.
Tu objetivo es ayudar con copywriting persuasivo, retención en los primeros 3 segundos de video vertical (Reels, TikTok, Shorts), ideas de contenido, pilares editoriales y diagnóstico de proyectos.
Marca activa: "${brandName}".
Proyecto activo: "${projectName}".
Responde con tono profesional, conciso, editorial y práctico.`;

    // Llamada segura a la API de Google Gemini (gemini-1.5-flash)
    const geminiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;

    const apiResponse = await fetch(geminiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        systemInstruction: {
          parts: [{ text: systemPrompt }]
        },
        contents: [
          {
            parts: [{ text: prompt }]
          }
        ],
        generationConfig: {
          temperature: 0.7,
          maxOutputTokens: 800
        }
      })
    });

    if (!apiResponse.ok) {
      const errorData = await apiResponse.text();
      console.error('Error desde Gemini API:', errorData);
      return res.status(apiResponse.status).json({ error: 'Error del proveedor de IA', details: errorData });
    }

    const result = await apiResponse.json();
    const replyText = result.candidates?.[0]?.content?.parts?.[0]?.text || 'No se obtuvo respuesta del modelo.';

    return res.status(200).json({
      reply: replyText
    });
  } catch (error) {
    console.error('Error interno en el proxy:', error);
    return res.status(500).json({ error: 'Error interno en el servidor proxy', message: error.message });
  }
}
