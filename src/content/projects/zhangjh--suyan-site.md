---
repo: "zhangjh/suyan-site"
name: "suyan-site"
description: "The official website and issue collection repository for the Suyan input method."
originalDescription: "素言输入法的官网&Issue问题收集仓库。"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/zhangjh/suyan-site"
homepage: "https://suyan.zhangjh.cn"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [98]
stars: 169
forks: 7
openIssues: 3
closedIssues: 136
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2026-02-06T13:10:13Z"
lastCommitAt: "2026-11-12T11:37:29Z"
lastReleaseAt: "2026-02-25T16:19:06Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 94
undervaluedScore: 34
maintainers: ["zhangjh"]
openGraphImageUrl: "https://opengraph.githubassets.com/2fc04ab58b1ab146dc66104f8b4c3d5e6ad9253699083aded5c23b809e2e8cb6/zhangjh/suyan-site"
---

# Suyan Official Website (suyan-site)

Official documentation and product site for [Suyan Input Method](https://suyan.zhangjh.cn), built with [VitePress](https://vitepress.dev/) and deployed at [suyan.zhangjh.cn](https://suyan.zhangjh.cn).

## Sections

- **Home**: product introduction, core feature showcase, feature demo videos
- **Download**: installation packages for Windows / macOS / Ubuntu
- **Help Docs**: installation guide, FAQ, special input modes, custom dictionaries, acknowledgements and contact
- **Skin Community**: custom candidate window skins shared by users; copy a share code to import them
- **Enterprise Customization**: private deployment, integration with intranet large language models, industry-specific dictionaries

## Tech Stack

- [VitePress](https://vitepress.dev/): static site generation
- [Vue 3](https://vuejs.org/): frontend framework
- Node.js 18+

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:5173` in your browser to preview the site.

## Build and Preview

```bash
npm run build
npm run preview
```

Build output is written to `docs/.vitepress/dist`.

## Project Structure

```
suyan-site/
├── docs/
│   ├── .vitepress/…
