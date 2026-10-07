# VK Zvoncac

Next.js App Router project, ready to deploy on Vercel. Content will be added later.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Copy `.env.example` to `.env.local` if you need environment variables.

| Script          | Purpose                    |
| --------------- | -------------------------- |
| `npm run dev`   | Development server         |
| `npm run build` | Production build           |
| `npm run start` | Serve the production build |
| `npm run lint`  | ESLint                     |

## Vercel

Vercel detects Next.js automatically. You do not need a `vercel.json` file for a standard app.

1. Push this repository to GitHub, GitLab, or Bitbucket.
2. Import the project at [vercel.com/new](https://vercel.com/new).
3. Keep the default framework preset (**Next.js**), build command (`next build`), and output directory.
4. Add environment variables from `.env.example` in **Project Settings → Environment Variables**. Set `NEXT_PUBLIC_SITE_URL` to your production URL (for example `https://your-domain.vercel.app`).
5. Deploy.

The first production deploy gets a `*.vercel.app` URL. You can attach a custom domain later in the Vercel dashboard.

## Project layout

```
src/app/          # App Router pages and layouts
src/config/site.ts # Site name, description, and URL (edit when content is defined)
public/           # Static files (favicon, images)
```
