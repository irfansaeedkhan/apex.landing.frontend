# Apex Order — Landing Frontend

Marketing landing page for **Apex Order** ([apexorder.xyz](https://www.apexorder.xyz)): hero, ecosystem, NFTs, roadmap, art/team, FAQ, and footer.

## Tech stack

| Layer | Choice |
| --- | --- |
| Framework | [Next.js 16](https://nextjs.org/) (App Router, Turbopack) |
| UI | React 19, TypeScript |
| Styling | Tailwind CSS 3, Sass |
| Animation | GSAP |
| Carousel | react-slick / slick-carousel |
| Icons / SVG | react-icons, SVGR (`@svgr/webpack`) |
| Tooling | ESLint 9 (flat config), Prettier, Yarn |

## Features

- Static App Router pages (`/`, `robots.txt`, `sitemap.xml`)
- SEO metadata, Open Graph, and Twitter cards
- Deferred below-the-fold sections for faster first paint
- Security headers (CSP, HSTS, frame denial, etc.) in `next.config.js`
- Optimized images (AVIF/WebP) and long-cache static assets

## Getting started

```bash
yarn install
yarn dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | Description |
| --- | --- |
| `yarn dev` | Dev server with Turbopack |
| `yarn build` | Production build |
| `yarn start` | Serve the production build |
| `yarn lint` | ESLint (Next core-web-vitals + TypeScript) |

## Project structure

```
app/                 # App Router (layout, page, SEO routes)
components/          # Landing sections, buttons, media helpers
assets/              # Shared assets used by components
public/              # Static images, videos, favicons
utils/               # Shared utilities
```

## Requirements

- Node.js 20+
- Yarn 1.x

## License

Private — all rights reserved.
