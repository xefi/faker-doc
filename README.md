# Faker PHP documentation

Source of [faker-php.xefi.com](https://faker-php.xefi.com), the documentation of [xefi/faker-php](https://github.com/xefi/faker-php).

Built with [Nuxt](https://nuxt.com), [Nuxt UI](https://ui.nuxt.com) and [Nuxt Content](https://content.nuxt.com). Pages live in [`content/`](content) as Markdown, the landing page in [`content/index.yml`](content/index.yml).

## Setup

Requires Node.js 22.5 or later (Node 24 recommended).

```bash
npm install
```

## Development

Start the development server on `http://localhost:3000`:

```bash
npm run dev
```

Or with Docker:

```bash
docker compose up
```

## Production

The site is deployed to GitHub Pages as a static build on every push to `main`:

```bash
npm run generate
```

Preview the result:

```bash
npx serve .output/public
```

## Checks

```bash
npm run lint
npm run typecheck
```
