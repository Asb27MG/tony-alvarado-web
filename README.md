# Tony Alvarado — sitio React actualizado

Sitio web con el diseño original (React + TypeScript + Vite + Tailwind), adaptado a la historia del arpista Tony Alvarado recibida el 18 de octubre de 2026.

## Cómo abrirlo en Windows / VS Code

1. Descomprime la carpeta del proyecto.
2. Abre esa carpeta en Visual Studio Code.
3. Abre una terminal y ejecuta:

```bash
npm install
npm run dev
```

4. Abre la URL que indica Vite (habitualmente `http://localhost:5173`).

También puedes abrir `iniciar.bat`, que instala las dependencias cuando es necesario y ejecuta Vite.

## Contenido integrado

- Portada con presentación real de Tony Alvarado.
- Historia completa organizada en capítulos: orígenes en Cojedes, Nueva Generación, docencia, producciones, banda sonora, premios, Miami y eventos.
- Estadísticas sustituidas por tres hitos documentados: 1982, 1992 y 2016.
- Repertorio como propuestas y estilos (sin inventar un programa de canciones).
- Sección de presentaciones dedicada a contratación, sin fechas ficticias.
- Discografía, música audiovisual y reconocimientos.
- Enlaces a las cuentas comunicadas por el artista.
- Contacto real por correo y WhatsApp: el formulario prepara la consulta en WhatsApp para que el visitante confirme su envío. **No utiliza un servidor de correo ni envía información sin confirmación.**

## Editar información

La mayoría de los contenidos se encuentran en `src/data/site.ts`.

Los componentes React se encuentran en `src/components/`.

Imágenes actuales: `public/assets/images/` (conservadas de la plantilla).

## Antes de publicar

- Verificar con el artista que el retrato y las fotografías actuales son las que desea usar (se han mantenido las originales de la maqueta).
- En Spotify, Apple Music y Amazon Music los enlaces van a una **búsqueda por su nombre**, porque no se facilitó una URL directa de perfil. Sustituirla por su perfil confirmado cuando lo indique.
- Confirmar el número de WhatsApp en formato internacional: se utilizó el número de Miami suministrado, +1 305 842 9912.
- Si se desean videos o pistas musicales embebidos en la propia página, solicitar los enlaces oficiales de los videos y audios autorizados. Por ahora el enlace de video conduce al canal comunicado de YouTube.
- Cuando existan fechas reales de próximos conciertos se podrá recuperar un calendario de eventos sin mostrar información inventada.

## Generar versión de producción

```bash
npm run build
```

Se genera la carpeta `dist/`, lista para subir a un hosting compatible con sitios estáticos.

## Referencias originales

En `referencia/` se conserva el archivo original `.fig` y su vista previa.

## Música y ecualizador circular en Inicio (octubre de 2026)

En la fotografía del arpa de la portada (`src/components/Hero.tsx`) se añadió un visualizador circular con barras segmentadas doradas, inspirado en la referencia facilitada.

- **No hay tarjeta ni reproductor visual bajo el texto**: el control `Escuchar arpa / Pausar arpa` está sobre la parte inferior de la foto circular.
- La canción indicada es `https://www.youtube.com/watch?v=1YHhIWvxJe4` (se configura en `src/components/HeroMusic.tsx`).
- Los segmentos del aro se mueven solo si la API de YouTube indica que el video está reproduciéndose. La animación **simula** barras de sonido: no analiza las frecuencias de la pista, porque YouTube no proporciona el audio para el análisis.
- Al salir de la sección de inicio, cambiar de pestaña o navegar hacia abajo lo suficiente para que el inicio deje de ocupar el centro de la ventana, la música se pausa. Al volver puede reanudarse si el visitante no la había pausado manualmente.
- El navegador puede bloquear el sonido automático hasta que la persona haga clic sobre `Escuchar arpa`.
- **Importante:** YouTube no ofrece un modo oficial garantizado de audio de fondo con video totalmente oculto; ciertas versiones de navegador, videos o políticas de la plataforma pueden bloquear esta modalidad. Hay un enlace a YouTube cuando se detecta un error de reproducción. La solución más estable para **solo sonido y ondas** es usar un archivo de audio MP3/M4A autorizado por Tony Alvarado, en vez de una incrustación oculta de YouTube.
- La animación se desactiva para usuarios que prefieren movimiento reducido.

Para un audio propio autorizado en el futuro, guarda el archivo en `public/assets/audio/` y cambia el reproductor para usar un `<audio>` HTML5 (en ese caso no hará falta YouTube).

Actualización de galería (octubre 2026): fotografías originales aportadas por Tony Alvarado; siete imágenes optimizadas WebP en la sección Galería.
