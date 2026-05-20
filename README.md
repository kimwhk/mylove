# mylove · 6 meses Kim & Sungho 💙✨

Sitio web estático en Astro para celebrar los 6 meses. Pensado para
desplegarse en GitHub Pages.

## Lo que incluye

- 🌸 Pantalla de bienvenida con escena pixel-art (Kim, Sungho, Simba).
- ⏳ Contador en vivo desde **20-11-2025**.
- 💌 Botones sorpresa con mensajes aleatorios.
- 🧸 Mensajes escondidos (hover, click, teclado, idle, scroll).
- 🎮 Mini juego: atrapa corazones con Sungho.
- 🌙 Light/Dark mode (con preferencia del sistema + persistencia).
- 📱 100% responsive (mobile, tablet, desktop).
- 🎵 Slot opcional para música — suelta `public/music.mp3`.

## Desarrollo local

```bash
npm install
npm run dev      # http://localhost:4321/mylove/
npm run build    # genera /dist
npm run preview  # sirve /dist
```

## Personalizar

- **Fecha de inicio** → `src/pages/contador.astro` (constante `startISO`).
- **Mensajes** → `src/pages/sorpresas.astro` (objeto `messages`).
- **Personajes** → `src/components/PixelChar.astro` (matrices de strings).
- **Paleta de colores** → `src/styles/global.css` (variables `--c-*` y `:root[data-theme='dark']`).
- **Música** → coloca un archivo en `public/music.mp3`.
- **Fotos reales** → mete imágenes en `public/` y úsalas con `import.meta.env.BASE_URL + 'foto.jpg'`.

## Deploy a GitHub Pages

1. Crea un repo en GitHub (por defecto se asume `kimwhk/mylove`).
2. Empuja este código:

   ```bash
   git init
   git add .
   git commit -m "Initial commit · 6 meses 💙"
   git branch -M main
   git remote add origin https://github.com/kimwhk/mylove.git
   git push -u origin main
   ```

3. En GitHub: **Settings → Pages → Source: GitHub Actions**.
4. El workflow `.github/workflows/deploy.yml` se ejecuta solo en cada push a `main`.
5. La URL final será: <https://kimwhk.github.io/mylove/>.

> Si renombras el repo o lo subes como `kimwhk.github.io` (root), ajusta en
> `astro.config.mjs`:
>
> ```js
> site: 'https://kimwhk.github.io',
> base: '/',  // o '/nuevo-nombre/'
> ```

## Estructura

```
src/
├── components/   PixelChar, Nav, ThemeToggle, Sky
├── layouts/      Layout.astro (head, tema, nav, footer)
├── pages/        index, contador, sorpresas, mensajes, juego
└── styles/       global.css (tokens y temas)
public/           favicon.svg (+ tus fotos/música)
```

— Hecho con 💙 + ⭐.
