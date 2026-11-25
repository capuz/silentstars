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
languagePcts: [64]
stars: 6
forks: 7
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 8
recentReleases: 0
createdAt: "2026-11-02T11:32:49Z"
lastCommitAt: "2026-11-25T13:19:35Z"
status: "thriving"
tags: ["solo_builder", "fork_magnet"]
healthScore: 90
undervaluedScore: 66
maintainers: ["J3n5en", "github-actions[bot]", "Aierlanta"]
openGraphImageUrl: "https://opengraph.githubassets.com/28044c0233c192b072714ef1666fcb19ff73f7885d97d93f949d841f74c21695/J3n5en/enso-plugins"
---

# Enso Plugin Marketplace

Source repository for the EnsoCode official plugin marketplace · [Browse plugins](https://enso-plugins.j3.do/) · [Submit a plugin](#贡献插件)

Community members submit plugins via Pull Request. After merging into `main`, CI packages and signs them, then publishes the artifacts to the `dist` branch. A Cloudflare Worker (`enso-plugins.j3.do`) fetches from `dist` to origin and caches the content in R2.

Clients trust no single distribution node. They only verify the **Ed25519 signature** and the **sha256** of the zip.

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
- [Friendly links](#友链)

## Plugin list

To install, open **Settings → Plugins → Marketplace** in EnsoCode, or visit the web catalog at <https://enso-plugins.j3.do/>.
