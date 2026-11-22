---
repo: "Vita0519/tmp-preview-deploy"
name: "tmp-preview-deploy"
description: "Temporary preview site: turn any local directory (static site / single-page HTML / WebGL project / build output) into a preview link with an expiration time in one click. Lifetime is set by visibility (portal 6 hours / link-holder 12 hours / private permanent, changeable). Multiple members share one service, and administrators see everything."
originalDescription: "临时预览站：把任意本地目录（静态站 / 单页 HTML / WebGL 作品 / 构建产物）一键变成带到期时间的预览链接。 按可见性给寿命（门户 6 小时 / 持链接 12 小时 / 私有永久，可改），多成员共用一套服务，管理员看全部。"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/Vita0519/tmp-preview-deploy"
homepage: "https://pre.allfather.top/"
language: "Python"
languages: ["Python"]
languagePcts: [63]
stars: 7
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 8
createdAt: "2026-10-29T01:14:58Z"
lastCommitAt: "2026-11-22T11:47:03Z"
lastReleaseAt: "2026-11-22T11:48:45Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 79
undervaluedScore: 62
maintainers: ["Vita0519", "15457"]
openGraphImageUrl: "https://opengraph.githubassets.com/4e613881742298d4ce88cc906a16076e6cbb2836c114f95996a33bfbe78bb91c/Vita0519/tmp-preview-deploy"
---

# tmp-preview · Temporary preview site

Turn any local directory (static site / single-page HTML / WebGL project / build output) **into a preview link with an expiration time in one click**.
Lifetime is set by visibility (portal 6 hours / link-holder 12 hours / private permanent, changeable). Multiple members share one service, and administrators see everything.

Self-hosted: **FastAPI + SQLite + local disk + Vue 3**, one process per disk, runs by pulling a single image.
Migrated from Cloudflare Workers + KV; the old implementation remains in [`legacy/cloudflare/`](https://github.com/Vita0519/tmp-preview-deploy/blob/HEAD/legacy/cloudflare/).

Live demo: [Website (bilingual Chinese/English)](https://pre.allfather.top/v/homepage) · Source code in [`website/`](https://github.com/Vita0519/tmp-preview-deploy/blob/HEAD/website/)
