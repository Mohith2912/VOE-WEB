# VOE Signal Studio

A completely independent website for Voice of Easwarians. It reimagines the club as a cinematic, editorial “campus frequency” with a video gateway, expressive content system and responsive single-page experience.

## Experience

- Cinematic, skippable VOE emblem introduction
- Asymmetric editorial hero and mobile navigation
- Club manifesto and four creative program tracks
- Event transmissions and real VOE team structure
- Accessible contact handoff and social footer
- Scroll reveals, reduced-motion support and keyboard focus states

## Local development

```bash
npm install
npm run dev
```

## Quality checks

```bash
npm run lint
npm run build
```

## Deployment

The project is configured for Vercel as a Vite single-page application. All routes rewrite to `index.html`, while static media and brand assets are served from `public`.

Production: [voe-signal-studio.vercel.app](https://voe-signal-studio.vercel.app)
