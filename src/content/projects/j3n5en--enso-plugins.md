---
repo: "J3n5en/enso-plugins"
name: "enso-plugins"
description: "EnsoCode Official Plugin Marketplace"
originalDescription: "EnsoCode 官方插件市场"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/J3n5en/enso-plugins"
homepage: "https://enso-plugins.j3.do/"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [62]
stars: 5
forks: 7
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 8
recentReleases: 0
createdAt: "2026-11-02T11:32:49Z"
lastCommitAt: "2026-11-21T13:32:15Z"
status: "thriving"
tags: ["fork_magnet"]
healthScore: 90
undervaluedScore: 68
maintainers: ["J3n5en", "github-actions[bot]", "Aierlanta"]
openGraphImageUrl: "https://opengraph.githubassets.com/be475577f1cfa17abf9fc91f42ecffa2b27aa4a8fbd1102bc67add3cdb3fbfd7/J3n5en/enso-plugins"
---

# Enso Plugin Marketplace

Source repository of the EnsoCode official plugin marketplace · [Browse plugins](https://enso-plugins.j3.do/) · [Submit a plugin](#贡献插件)

Community members submit plugins via Pull Request. After merging into `main`, CI packages and signs them, then publishes the artifacts to the `dist` branch; the Cloudflare Worker (`enso-plugins.j3.do`) fetches from `dist` as origin and caches to R2.

The client does not trust any single distribution node; it only verifies the **Ed25519 signature** and the zip's **sha256**.

## Contents

- [Plugin list](#插件列表)
- [Repository structure](#仓库结构)
- [Contributing plugins](#贡献插件)
- [Review rules](#审核规则)
- [UI and design guidelines](#界面与设计规范)
- [Release](#发布)
- [Worker](#worker)
- [External plugins](#外部插件)
- [Takedown](#下架)
- [Friend links](#友链)

## Plugin list

To install, open **Settings → Plugins → Marketplace** in EnsoCode, or visit the web directory at <https://enso-plugins.j3.do/>.
