---
repo: "Wy2926/node-comics"
name: "node-comics"
description: "A manga reading and AI translation browser extension that supports manga discovery, bookshelf organization, offline reading, and imports from websites, local files, and Google Drive."
originalDescription: "漫画阅读与 AI 翻译浏览器插件，支持漫画发现、书架整理、离线阅读，以及网站、本地文件和 Google Drive 导入。"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/Wy2926/node-comics"
homepage: "https://comics.nodelane.net/"
language: "TypeScript"
languages: ["TypeScript", "Python"]
languagePcts: [59, 23]
topics: ["ai", "machine-translation", "manga-translator"]
stars: 20
forks: 1
openIssues: 0
closedIssues: 3
watchers: 0
contributors: 1
recentReleases: 9
createdAt: "2026-09-13T15:00:30Z"
lastCommitAt: "2026-11-11T11:19:44Z"
lastReleaseAt: "2026-11-05T11:42:11Z"
status: "newborn"
tags: ["hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 55
maintainers: ["Wy2926"]
openGraphImageUrl: "https://opengraph.githubassets.com/9cee9d6623634559a46d5476610d05117b8329b9382ad928dc214d5487cbaf64/Wy2926/node-comics"
---

# NodeLane 漫译 (Manga Translation)

[English](https://github.com/Wy2926/node-comics/blob/HEAD/README_EN.md) · [Download](https://comics.nodelane.net/) · [Feedback](https://github.com/Wy2926/node-comics/issues) · [Telegram](https://t.me/+pPyxB0Sxocw0MDc1)

Browser extension for Chrome, Edge, and Firefox for reading manga and translating images. Supports local files, Google Drive, OPDS, and supported websites, with a bookshelf, offline caching, and reading progress restoration. Translation can use the official service, on-device processing in the browser, or a self-hosted manga-translator-ui.

## Development

Node.js 22.12+, run in `apps/extension`:

```sh
npm ci
npm run dev
npm run check
npm test
npm run build
```

Build output: `apps/extension/.output/chrome-mv3/`.

- [Extension development](https://github.com/Wy2926/node-comics/blob/HEAD/apps/extension/README.md) · [Site adapters](https://github.com/Wy2926/node-comics/blob/HEAD/docs/SITE_ADAPTERS.md) · [Translation constraints](https://github.com/Wy2926/node-comics/blob/HEAD/docs/TRANSLATION.md)
- [Drive connect page](https://github.com/Wy2926/node-comics/blob/HEAD/apps/drive-connect/README.md) · [Helper…
