---
repo: "NekoBoxHQ/Mihomo-Suite"
name: "Mihomo-Suite"
description: "MTUN-XD (Mozhu Yunjing) · Mihomo management suite for OpenWrt / iStoreOS: configuration generator + MetaCubeXD panel + maintenance center, all bundled under the LuCI Services menu"
originalDescription: "MTUN-XD（墨枢云境）· OpenWrt / iStoreOS 的 Mihomo 管理套件：配置生成器 + MetaCubeXD 面板 + 维护中心，统一装进 LuCI 服务菜单"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/NekoBoxHQ/Mihomo-Suite"
homepage: "https://mihomo-suite.wxcircle.top/"
language: "JavaScript"
languages: ["JavaScript", "Shell"]
languagePcts: [60, 27]
topics: ["clash", "istoreos", "luci", "metacubexd", "mihomo", "mihomo-suite", "openwrt", "openwrt-package", "proxy", "mtun-xd"]
stars: 20
forks: 9
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-10-13T17:37:13Z"
lastCommitAt: "2026-11-18T12:03:29Z"
lastReleaseAt: "2026-11-17T12:01:26Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 80
undervaluedScore: 53
maintainers: ["lima-droid", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/44a7f2b85252ea6868e8fb3768f8142cd24c828a463bc333662dc5f79cb49c2c/NekoBoxHQ/Mihomo-Suite"
---

OpenWrt / iStoreOS management suite for Mihomo

---

## Project Introduction

The suite brings the Mihomo core, the MetaCubeXD UI, the configuration generator, and maintenance features together under a single entry in LuCI's "Services → Mozhu Yunjing" menu.

### Interface Preview

### Features

- **Control panel**: Embedded MetaCubeXD that follows the LuCI light/dark theme.
- **One-click load**: Validates with `mihomo -t` before writing to disk; on failure, it rolls back and keeps a backup.
- **Unified entry**: LuCI, the panel, and the configuration tools all use port 80, so there is no need to remember ports.
- **Maintenance center**: Update the core, panel, and suite separately. Updates run in the background and logs can be viewed.
- **Routing and grouping**: Precise traffic splitting, egress assignment by device IP, and automatic load balancing across multiple nodes.
- **Configuration generator**: Import nodes (links / subscriptions / Clash YAML) and generate a usable `config.yaml`.
