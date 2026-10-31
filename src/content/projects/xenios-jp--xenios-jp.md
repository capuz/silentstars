---
repo: "xenios-jp/xenios.jp"
name: "xenios.jp"
description: "Repository for the xenios.jp website"
readmeQualityOk: true
url: "https://github.com/xenios-jp/xenios.jp"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [86]
stars: 22
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-02-19T12:23:09Z"
lastCommitAt: "2026-10-31T02:00:18Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 89
undervaluedScore: 43
maintainers: ["github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/c1454851f90b5d6020bd19b04e5077373a92143fd78d2d61a0bd20dc6690e3d7/xenios-jp/xenios.jp"
---

# XeniOS Website

Official website for the XeniOS project.

## Stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS v4

## Development

```bash
cd /Users/admin/Documents/xenios-website
npm install
npm run dev
```

Open `http://localhost:3000`.

If a stale Next.js dev lock is left behind:

```bash
pkill -f "next dev"
rm -f .next/dev/lock
npm run dev
```

## Scripts

- `npm run dev` - start local development server
- `npm run build` - build the server output used by OpenNext/Cloudflare
- `npm run build:pages` - build the static export used by GitHub Pages
- `npm run start` - run production server
- `npm run lint` - run ESLint
- `npm run preview` - build and preview the Cloudflare Worker locally
- `npm run deploy` - build and deploy the Cloudflare Worker

## Project Structure

- `src/app` - routes and page layouts
- `src/components` - shared UI components
- `src/lib` - constants and data logic
- `data/compatibility.json` - compatibility dataset
- `data/discussions.json` - cached discussion snapshot for compatibility pages
- `data/credits.json` - scheduled credits snapshot
- `data/xenia-upstream-license.txt` - vendored upstream license text
- `public/compatibility`…
