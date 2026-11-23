---
repo: "SwanHubX/SwanLab-Docs"
name: "SwanLab-Docs"
description: "SwanLab Official Documentation | SwanLab官方文档"
readmeQualityOk: true
url: "https://github.com/SwanHubX/SwanLab-Docs"
homepage: "https://docs.swanlab.cn"
language: "TypeScript"
languages: ["TypeScript", "Vue"]
languagePcts: [49, 29]
topics: ["javascript", "vue3", "vite"]
stars: 26
forks: 90
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 11
recentReleases: 0
createdAt: "2024-03-23T07:40:46Z"
lastCommitAt: "2026-11-23T10:28:08Z"
lastReleaseAt: "2024-06-03T07:51:07Z"
status: "thriving"
tags: ["solo_builder", "fork_magnet"]
healthScore: 88
undervaluedScore: 71
maintainers: ["Nexisato", "Zeyi-Lin", "Feudalman"]
openGraphImageUrl: "https://opengraph.githubassets.com/19815734fcf13c98dad1c1b5c5d5084b9a0862a43921a81737b166609c6ac198/SwanHubX/SwanLab-Docs"
---

# swanlab-docs

This repository regroups documentation and information that is hosted on the SwanLab website.

You can access the SwanLab documentation at [Document](https://docs.swanlab.cn). Powered by [vitepress](https://vitepress.dev/zh/guide/getting-started).

### How to contribute to the docs

It's very simple! Just clone the project, add or modify Markdown files, commit them, and then create a PR.

### Previewing locally

**1. Clone this repository**

```bash
git clone https://github.com/SwanHubX/SwanLab-Docs
cd SwanLab-Docs
```

**2. Install**

You need to install Node.js and pnpm in advance. For detailed instructions, please refer to the [pnpm tutorial](https://pnpm.io/installation).

Use the following commands to install other dependencies:

```bash
pnpm install
```

**3. Run**

If you are performing local development or previewing documents, you can run the following in the project root directory:

```bash
pnpm docs:dev
```

If a complete compilation and packaging is required, use the following command:

```bash
pnpm docs:build
pnpm docs:preview
```
