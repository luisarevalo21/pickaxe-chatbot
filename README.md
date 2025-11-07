# Pickaxe Chatbot Widget (React + Vite)

A lightweight, bottom-right popup chat widget that embeds a Pickaxe assistant via an iframe. Built with React + TypeScript + Vite.

## Features

- Bottom-right floating chat launcher (💬) with open/close toggle
- Popup chat window with header and smooth transitions
- Chat UI centered inside the window; responsive on mobile
- Simple to customize: colors, size, position via CSS

## Quick start

Prerequisites:

- Node.js 18+ and npm

Install dependencies and run the dev server:

```bash
npm install
npm run dev
```

Open the printed local URL (typically http://localhost:5173).

## Configure your Pickaxe

Update the iframe `src` in `src/App.tsx` to point to your Pickaxe deployment embed URL:

```tsx
<iframe
  title="Chatbot"
  src="https://studio.pickaxe.co/_embed/YOUR_AXE_ID?d=deployment-YOUR_DEPLOYMENT_ID"
  frameBorder={0}
  allow="microphone"
/>
```

Tips:

- Default open/closed: toggle the initial state `const [open, setOpen] = useState(false)` in `App.tsx`.
- Size and position: adjust `.chat-window` and `.chat-widget` rules in `src/App.css`.
- Button style: tweak `.chat-toggle` in `src/App.css`.

## Where things live

- `src/App.tsx` – Chat widget container, toggle button, and the Pickaxe iframe
- `src/App.css` – Popup styles (positioning, transitions, centering)
- `src/main.tsx` – App bootstrap
- `public/` – Static assets

## Customize the UI

Key CSS hooks (in `src/App.css`):

- `.chat-widget` – fixed position of the widget (bottom/right offsets)
- `.chat-toggle` – floating launcher button
- `.chat-window` – popup panel size, radius, and transitions
- `.chat-content` / `.chat-iframe-wrap` – centering and iframe sizing

Example sizing snippet:

```css
.chat-window {
  width: min(92vw, 380px);
  height: min(72vh, 560px);
}
```

## Build & deploy

Create an optimized build and preview locally:

```bash
npm run build
npm run preview
```

You can deploy the `dist/` folder to any static host (Vercel, Netlify, Cloudflare Pages, GitHub Pages). On platforms like Vercel/Netlify, set the build command to `npm run build` and the output directory to `dist`.

## Troubleshooting

- Iframe not rendering: ensure the Pickaxe URL is correct and supports embedding.
- Microphone permissions: browsers typically require HTTPS for mic access.
- Mixed content: avoid loading `http` content from an `https` site.

## Acknowledgments

- Powered by [Pickaxe](https://www.pickaxeproject.com/) embeds
- Scaffolding via [Vite](https://vitejs.dev/) and React
