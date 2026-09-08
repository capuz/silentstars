---
repo: "AdityaKodez/adityaojha"
name: "adityaojha"
description: "Aditya — Full-stack developer building with Next.js"
readmeQualityOk: true
url: "https://github.com/AdityaKodez/adityaojha"
homepage: "https://akoder.xyz"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [95]
topics: ["nextjs", "portfolio", "portfolio-site", "monochrome-theme", "tailwindcss"]
stars: 19
forks: 3
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-01-23T08:23:11Z"
lastCommitAt: "2026-09-08T08:16:01Z"
lastReleaseAt: "2026-03-05T13:55:19Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 81
undervaluedScore: 48
maintainers: ["AdityaKodez", "v0", "kiro-agent"]
openGraphImageUrl: "https://opengraph.githubassets.com/48858e1648a9cd08d5ac627697f1a28bb4b7910665f8f79bfb95733ac36c49ba/AdityaKodez/adityaojha"
---

# hey, i'm aditya

this is my portfolio and a record of how i think about shipping products.

i help early-stage founders launch scoped saas mvps. my sweet spot is auth, billing, dashboards, admin tools, and the first core workflow that needs to get into users' hands quickly.

the site is open source because i want the work to be inspectable, reusable, and easy to learn from.

## the stack

built with the tools i use for actual product work

- **next.js 16** (app router)
- **tailwind css v4** + **shadcn ui**
- **typescript**
- **motion** for animations

## run it locally

clone the repo and install dependencies

```bash
git clone https://github.com/AdityaKodez/adityaojha.git
cd adityaojha
npm install
npm run dev
```

go to [http://localhost:3000](http://localhost:3000) and check it out.

## the component registry

every component under `/components` is published as a [shadcn](https://ui.shadcn.com) registry, so you can install it into your own project instead of copying files.

```bash
npx shadcn@latest add https://akoder.xyz/r/dotted-world-map.json
```

or register the namespace in your `components.json` to install by name:

```json
"registries": {
  "@akoder":…
