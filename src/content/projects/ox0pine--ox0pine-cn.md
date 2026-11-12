---
repo: "ox0pine/ox0pine.cn"
name: "ox0pine.cn"
description: "A personal homepage built with React, Vite, and Base UI, showing recent articles and tools. \"Yes, this is the page itself. GitHub Actions fetches the latest articles and repositories every day.\""
originalDescription: "一个使用 React、Vite 和 Base UI 搭建的个人主页，展示最近文章与工具。「没错，正是这个页面，Github Action每天都会抓取最新的文章和仓库。」"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/ox0pine/ox0pine.cn"
homepage: "https://qfpqhyl.top"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [70]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2025-12-10T11:11:51Z"
lastCommitAt: "2026-11-12T05:42:05Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 89
undervaluedScore: 68
maintainers: ["github-actions[bot]", "ox0pine", "Copilot"]
openGraphImageUrl: "https://opengraph.githubassets.com/183dc1710e333e65b7aaf65a2adfc9f008ea319b29768296d4c40ec109c782ca/ox0pine/ox0pine.cn"
---

# Autumn Wind Blows Yellow Leaves Fall

A personal homepage template built with React, Vite, and Base UI. By default it shows:

- Recent articles
- Recent tools / GitHub repositories
- Basic social links

To deploy your own, fork it and change it into your own personal page.

## What to change first

Start with `config/profile.ts`, which centralizes the replaceable personal information:

- Site title, author name, bio
- GitHub / blog / Twitter links
- Avatar URL and site icon path
- Section heading text on the page

## Local usage

```bash
npm install
npm run generate:content
npm run dev
```

If you change the blog URL, GitHub username, or personal info, it is recommended to run this again:

```bash
npm run generate:content
```

## Data sources

- Article list: scrapes the timeline from `blogUrl` in `config/profile.ts`
- Recent tools: scrapes public GitHub repositories based on `handle` in `config/profile.ts`
- Generated output is written to: `data/content.ts`

## Deployment

It is recommended to fork and deploy directly to **Vercel**:

1. Fork this repository
2. Modify `config/profile.ts`
3. Run `npm run generate:content`
4. Push to your own repository
5. Import the repository…
