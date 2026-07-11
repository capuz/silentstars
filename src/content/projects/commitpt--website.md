---
repo: "CommitPT/website"
name: "website"
description: "Repository for CommitPT website"
readmeQualityOk: true
url: "https://github.com/CommitPT/website"
homepage: "https://commitpt.com"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [95]
stars: 5
forks: 3
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 7
recentReleases: 0
createdAt: "2026-03-08T16:58:27Z"
lastCommitAt: "2026-07-11T05:57:54Z"
status: "thriving"
tags: []
healthScore: 89
undervaluedScore: 56
maintainers: ["spars57", "LuiSilvaPT", "RafaelJ13"]
openGraphImageUrl: "https://opengraph.githubassets.com/f823f48476a7793aca2908057e557b0ea544d0fd4f96967e91f103031f18653b/CommitPT/website"
---

# CommitPT — Landing Page

Marketing website for **CommitPT**, a programming accountability community for developers who want to stop coding alone and start shipping consistently.

---

## Tech Stack

| Layer           | Tool                                           |
| --------------- | ---------------------------------------------- |
| Framework       | [Next.js 14](https://nextjs.org/) (App Router) |
| Styling         | [Tailwind CSS v3](https://tailwindcss.com/)    |
| Fonts           | [Geist](https://vercel.com/font) (Sans + Mono) |
| Icons           | [Lucide React](https://lucide.dev/)            |
| Package Manager | [Yarn](https://yarnpkg.com/)                   |

---

## Getting Started

```bash
# Install dependencies
yarn

# Run development server
yarn dev

# Build for production
yarn build

# Start production server
yarn start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Project Structure

```
commitpt/
├── app/
│   ├── globals.css       # Global styles + Tailwind directives
│   ├── layout.js         # Root layout (fonts, metadata, html shell)
│   └── page.js           # Home page — assembles all sections
├── src/
│   └──…
