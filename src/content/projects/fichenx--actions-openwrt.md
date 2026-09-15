---
repo: "fichenx/Actions-OpenWrt"
name: "Actions-OpenWrt"
description: "自动编译OpenWrt固件，每周四定时编译。现支持红米AX6、Newifi-D2、S905D、S905X3!"
readmeQualityOk: true
url: "https://github.com/fichenx/Actions-OpenWrt"
language: "Shell"
languages: ["Shell", "Makefile"]
languagePcts: [66, 22]
stars: 151
forks: 89
openIssues: 0
closedIssues: 14
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2022-08-26T05:11:15Z"
lastCommitAt: "2026-09-15T08:55:34Z"
lastReleaseAt: "2025-07-11T17:28:22Z"
status: "thriving"
tags: ["fork_magnet"]
healthScore: 85
undervaluedScore: 45
maintainers: ["fichenx", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/da7c276dd91e4bcb5890fa344a985850e6c04a3ae4d7d9316bc1502ef005de85/fichenx/Actions-OpenWrt"
---

**中文** | [上游源代码](https://github.com/P3TERX/Actions-OpenWrt)

<h1>Actions-OpenWrt(多设备固件云编译)</h1>

</div>

## 项目说明 [](#项目说明-)
- 固件来源：[](https://github.com/coolsnowwolf/lede) [](https://github.com/immortalwrt/immortalwrt) [](https://github.com/VIKINGYFY/immortalwrt) [](https://github.com/LiBwRT/openwrt-6.x)
- 脚本使用及参考： [](https://github.com/P3TERX/Actions-OpenWrt) [](https://github.com/unifreq/openwrt_packit) [](https://github.com/ZqinKing/wrt_release)
- 项目使用 Github Actions 拉取 [coolsnowwolf](https://github.com/coolsnowwolf/lede) | [immortalwrt](https://github.com/immortalwrt/immortalwrt) | [VIKINGYFY](https://github.com/VIKINGYFY/immortalwrt) | [LiBwRT](https://github.com/LiBwRT/openwrt-6.x) 的 OpenWrt 源码仓库进行云编译
- 提供适配于 NEWIFI D2、Redmi AX6、ARMv8 电视盒子（斐讯N1、Tanix-TX3）的 OpenWrt 固件
- 每台设备提供多个变体（lede_lua/lede_js/imm 或 imm/libwrt），详见下表
- Redmi AX6 固件使用 [VIKINGYFY](https://github.com/VIKINGYFY/immortalwrt) 或 [LiBwRT](https://github.com/LiBwRT/openwrt-6.x) 添加 NSS 的源码
- 固件集成的所有 ipk 插件全部打包在 Packages 文件中，可以在 [Releases](https://github.com/fichenx/Actions-OpenWrt/releases) 内进行下载

## 固件下载 [](#固件下载-)
点击下表中 [](https://github.com/fichenx/Actions-OpenWrt/releases) 即可跳转到该设备固件下载页面
| 设备 / 变体 | 固件编译状态 |…
