# ComunicaLab — Laboratorio de Contenidos para Community Managers

**ComunicaLab** es un entorno de trabajo integral para Community Managers, creadores de contenido y directores de arte. Permite gestionar identidades de marca, sprints de contenido, cronogramas de publicación, fichas técnicas de producción y un copiloto estratégico.

La aplicación funciona como una **Single Page Application (SPA)** moderna, estática y optimizada para ejecutarse al 100% en el navegador y alojarse sin costo en **GitHub Pages**.

---

## 🌐 Enlaces en Producción

- **Acceso Principal:** [https://danflorez-cmd.github.io/COMUNICALAB/](https://danflorez-cmd.github.io/COMUNICALAB/)
- **Acceso Alternativo:** [https://danflorez-cmd.github.io/COMUNICALAB/app2.html](https://danflorez-cmd.github.io/COMUNICALAB/app2.html)

---

## ✨ Características y Módulos

### 1. Panel Principal (Pulso Creativo)
- Saludo dinámico según la hora del día (*Buenos días*, *Buenas tardes*, *Buenas noches*).
- Personalización completa del nombre o alias en el perfil (con soporte para saludo neutral).
- Bento Grid de métricas en vivo (tareas pendientes, contenidos en producción, piezas aprobadas, ideas).
- Acciones prioritarias y acceso directo a proyectos.

### 2. Gestión de Marcas y Proyectos
- Crear, editar y eliminar marcas con su paleta de color corporativo, categoría y estrategia.
- Creación de proyectos con objetivos comunicacionales, estado y fechas de inicio/cierre.
- Filtros por marca y cambio rápido de marca activa desde la cabecera.

### 3. Fichas de Contenido y Producción
- Pipeline horizontal de estados (*Idea*, *Guion*, *Grabación*, *Edición*, *Revisión*, *Aprobado*, *Programado*, *Publicado*).
- Optimización de ganchos (hooks) con métricas estimadas de retención para video vertical (Reels / TikTok / Shorts).
- Adaptador multiplataforma automático (Instagram, TikTok, Facebook).
- Checklist técnico de rodaje y material bruto.

### 4. Calendario Editorial Dinámico
- Navegación mes a mes con botones de anterior, siguiente y botón *Hoy*.
- Vista de Mes, Vista de Semana y Vista de Agenda completa.
- Cálculo de fechas seguro ante diferencias de zona horaria (UTC-safe).
- Sincronización automática entre fichas de contenido y eventos del calendario.

### 5. Gestión de Tareas Operativas
- Crear, editar y eliminar tareas.
- Filtros por estado (*Todas*, *Pendientes*, *En curso*, *Completadas*).
- Responsable dinámico adaptado al perfil del usuario.

### 6. Banco de Ideas (Laboratorio)
- Clasificación por categorías: *Ideas crudas*, *Tendencias / Audio*, *Formatos* e *Inspiración*.
- Conversión con un clic en **Proyecto** o **Ficha de Contenido** sin duplicidad.

### 7. Copiloto de Comunicación Digital
- **Modo Local Offline:** Operativo inmediatamente con fórmulas de hooks, variaciones de copy, auditoría de checklist y pilares de contenido.
- **Modo IA Conectada (Opcional):** Arquitectura lista para conectar una API externa o función Serverless (Google Gemini / OpenAI) mediante configuración segura en `Configuración > Inteligencia Artificial`.

### 8. Almacenamiento, Respaldo y Seguridad
- Persistencia total en `localStorage` con protección ante cuotas de almacenamiento.
- Copia de seguridad automática previa a cada importación (`comunicalab_backup_pre_import`).
- Exportación e importación de archivos `.json` con validación estricta de estructura.
- Sanitización de entradas y prevención de ataques XSS / inyección HTML en todos los campos.

---

## 🛠️ Cómo Publicar Cambios en GitHub

1. Realiza commit de los archivos actualizados:
   - `index.html` (Página de inicio para GitHub Pages)
   - `app2.html` (Compatibilidad directa con la ruta previa)
   - `api-backend-proxy-example.js` (Plantilla de proxy de backend)
   - `README.md`

2. Sube los cambios al repositorio:
   ```bash
   git add .
   git commit -m "feat: auditoria integral ComunicaLab - correccion saludo, crud completo, calendario dinamico y seguridad"
   git push origin main
   ```

3. Verifica en **Settings > Pages** de tu repositorio que la rama `main` y la carpeta `/ (root)` estén seleccionadas.
