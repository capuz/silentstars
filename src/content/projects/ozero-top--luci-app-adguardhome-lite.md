---
repo: "Ozero-top/luci-app-adguardhome-lite"
name: "luci-app-adguardhome-lite"
description: "AdGuard Home assistant LuCI plugin for OpenWrt / ImmortalWrt / iStoreOS, completing kernel installation and DNS takeover in three steps"
originalDescription: "面向 OpenWrt / ImmortalWrt / iStoreOS 的 AdGuard Home 助手 LuCI 插件，三步完成内核安装与 DNS 接管"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/Ozero-top/luci-app-adguardhome-lite"
homepage: "https://agh.ozero.asia"
language: "Lua"
languages: ["Lua", "Shell"]
languagePcts: [28, 28]
stars: 5
forks: 0
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-11-08T12:13:07Z"
lastCommitAt: "2026-11-18T12:03:14Z"
lastReleaseAt: "2026-11-12T05:24:48Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "release_machine"]
healthScore: 70
undervaluedScore: 51
maintainers: ["Ozero-top", "ozero"]
openGraphImageUrl: "https://opengraph.githubassets.com/6a855b2440aa888932d89214d5a6e40c36c269ed270b480990e795d9824a6343/Ozero-top/luci-app-adguardhome-lite"
---

# AdGuard Home Management Assistant

Lightweight AdGuard Home LuCI management assistant plugin for OpenWrt / ImmortalWrt / iStoreOS, supporting three-step installation and low-intrusion DNS takeover.

> The plugin handles installation, DNS takeover, filtering, and statistics; more advanced settings can still be adjusted in the AdGuard Home panel.

## Contents

- **Overview**: [Structured Summary](#结构化摘要) · [Project Motivation](#项目初衷) · [Features](#功能特性)
- **Installation**: [Compatibility](#兼容性) · [Installation](#安装) · [Three-Step Quick Start](#三步上手)
- **DNS**: [Takeover Methods](#dns-接管方式)
- **Troubleshooting & Development**: [FAQ](#常见问题faq) · [Project Structure](#项目结构) · [Build](#构建) · [Docs](#文档) · [Feedback & Contributing](#反馈与贡献) · [Security Recommendations](#安全建议) · [License](#许可证)

---

## Structured Summary

**In one sentence**: Consolidates AdGuard Home's "install the core, connect DNS, check status" into a single LuCI page. It takes three steps and requires no manual config file editing.

> 💡 If you can install `.ipk`, use the installation package. If the software package page shows `apk` or the firmware is 25.12 or above, use `install.sh` directly.
