---
repo: "halestats/widget-harbor"
name: "widget-harbor"
description: "Widget Harbor: a self-hosted module library, subscription collection, and resource file management platform for Forward / Rex. Deployable via Docker / iStoreOS, with daily sync and backup support."
originalDescription: "模块港湾：支持 Forward / Rex 的自托管模块库、订阅合集与资源文件管理平台。Docker / iStoreOS 部署，支持每日同步与备份。"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/halestats/widget-harbor"
language: "Python"
languages: ["Python", "JavaScript"]
languagePcts: [57, 27]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-10-23T04:58:53Z"
lastCommitAt: "2026-11-23T13:26:16Z"
lastReleaseAt: "2026-11-23T08:21:03Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 76
undervaluedScore: 41
maintainers: ["halestats"]
openGraphImageUrl: "https://opengraph.githubassets.com/b03e7e8a96a6d4448396af0ad26f42068dc937b3babef4e74e4196ff48d9e027/halestats/widget-harbor"
---

# Widget Harbor · 模块港湾

A lightweight, self-hosted module management platform for **Forward / Rex**. Launch with Docker to centrally manage modules, resource files, and subscription collections.

- Upload `.js` modules, parse `WidgetMetadata`, and edit or replace files online.
- Import remote modules and `.fwd` / `.rex` subscriptions, downloading referenced modules to this site; manually refresh remote files, and collections can refresh automatically every day.
- The same collection generates both a **Forward `.fwd`** and a **Rex `.rex`** subscription link, with modules filtered by platform tags.
- Supports `FWENC1` / `REXENC` encrypted files, storing and distributing the original bytes; does not decrypt or execute uploaded code.
- Hosts arbitrary resource files, providing access and download links; active content such as HTML/SVG is forced to download.
- Horizontal strip cards, grid cards, and list views, with module grouping, drag-to-sort, desktop rubber-band selection, and batch management.
- Manage subscriptions, link sources, and Rex homepage configuration under "Collections / Home"; supports private homepage export and revocable share links.
