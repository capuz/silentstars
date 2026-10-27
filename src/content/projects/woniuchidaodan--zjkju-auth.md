---
repo: "woniuchidaodan/zjkju-auth"
name: "zjkju-auth"
description: "Zhanjiang Science and Technology College Ruijie web internet authentication software package"
originalDescription: "湛江科技学院锐捷web上网认证软件包"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/woniuchidaodan/zjkju-auth"
language: "Lua"
languages: ["Lua", "Go", "Shell"]
languagePcts: [39, 25, 23]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 8
createdAt: "2026-10-09T03:10:02Z"
lastCommitAt: "2026-10-27T12:40:39Z"
lastReleaseAt: "2026-10-27T12:02:47Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 80
undervaluedScore: 55
maintainers: ["woniuchidaodan"]
openGraphImageUrl: "https://opengraph.githubassets.com/d18c26fa74e2ddf5b065f1d9c749280686d2abcd4897bb2466a19719e44ec6d3/woniuchidaodan/zjkju-auth"
---

# LuCI App - Zhanjiang Science and Technology College Ruijie Campus Network Auto-Authentication (luci-app-zjkju-auth)

A LuCI application for ImmortalWrt / OpenWrt that automatically completes Ruijie ePortal web authentication for Zhanjiang Science and Technology College in the background. It supports automatic reconnection after disconnects, start on boot, and web-based configuration.

The core authentication logic of this project is based on the upstream project [Micro-Cnhua/Ruijie_Porta_Auth](https://github.com/Micro-Cnhua/Ruijie_Porta_Auth) (which in turn references [Turris-Babel/school_ruijie](https://github.com/Turris-Babel/school_ruijie)), and it also draws to some extent on the approach of earlier students at this school, [ZJKJU-Network-Login](https://github.com/YaYa404/ZJKJU-Network-Login). We packaged it as an OpenWrt software package and added a LuCI graphical interface and an automatic reconnection wrapper.

> ⚠️ This project is only adapted for Zhanjiang Science and Technology College (ZJKJU) Ruijie ePortal web authentication. Ruijie web authentication pages at other schools may theoretically work if their structure is the same, but they need to be tested separately.…
