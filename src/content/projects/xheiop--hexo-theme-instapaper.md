---
repo: "xheiop/hexo-theme-instapaper"
name: "hexo-theme-instapaper"
description: "A minimalist Hexo theme inspired by Instapaper"
originalDescription: "仿 instapaper 的一款极简 Hexo 主题"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/xheiop/hexo-theme-instapaper"
language: "SCSS"
languages: ["SCSS"]
languagePcts: [62]
topics: ["hexo", "hexo-theme", "hexoblog"]
stars: 57
forks: 6
openIssues: 4
closedIssues: 10
watchers: 2
contributors: 3
recentReleases: 0
createdAt: "2020-04-30T09:18:13Z"
lastCommitAt: "2026-11-27T16:27:57Z"
lastReleaseAt: "2024-01-09T10:16:38Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 94
undervaluedScore: 28
maintainers: ["xheiop"]
openGraphImageUrl: "https://opengraph.githubassets.com/b6fe2956ed887496c70d0ecdbdc66758593a3d4d2952cf7a728151b824cb8382/xheiop/hexo-theme-instapaper"
---

# hexo-theme-instapaper

A minimalist Hexo theme inspired by Instapaper

## Theme Preview

[Demo](https://duyu.page)

## Feature

- Supports switching DarkMode (follows the system by default; remembers the choice after manual switching)
- Native image lazy loading (`loading="lazy"`)
- Mobile-friendly

## TODO

- Multi-language support

## Comments

Comments use [giscus](https://giscus.app/zh-CN) (based on GitHub Discussions). Before use, you need: a public repository, Discussions enabled, the [giscus app](https://github.com/apps/giscus) installed, and then enter the repository name on the giscus website to get `repoId` and `categoryId`.

To disable comments for a single post: add `comments: false` in the front-matter.

> Migrating from the old gitalk version: gitalk comments are stored in Issues, while giscus reads from Discussions, so old comments will not display automatically. If needed, you can convert issues to discussions on GitHub, and adjust titles according to giscus's `mapping` rules.

## Environment Requirements

- Hexo 7 and above (tested on Hexo 8)
- The template uses Pug, so you need to install the renderer in the blog directory:
