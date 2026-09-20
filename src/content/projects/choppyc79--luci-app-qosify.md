---
repo: "choppyc79/luci-app-qosify"
name: "luci-app-qosify"
description: "Luci-app for qosify"
readmeQualityOk: true
url: "https://github.com/choppyc79/luci-app-qosify"
language: "Shell"
languages: ["Shell"]
languagePcts: [98]
stars: 10
forks: 1
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-04-11T14:37:47Z"
lastCommitAt: "2026-09-20T08:46:11Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 85
undervaluedScore: 51
maintainers: ["choppyc79", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/35fb31574fab198b52b5dd233afc5f877ed8c79e44f9c310c957101c6e14d671/choppyc79/luci-app-qosify"
---

# luci-app-qosify

LuCI web interface for [qosify](https://github.com/openwrt/qosify) on OpenWrt / ImmortalWrt.

qosify is a daemon that sets up and manages CAKE together with an eBPF classifier that marks DSCP fields. This app adds a **Network → qosify** page with tabs for Overview, Config, Rules, Status, Counters, and Advanced — every option maps to a real qosify UCI key or ubus parameter, nothing is invented.

The page is built from stock LuCI markup — `div.cbi-section` sections with `h3` titles, `.table` rows, `.label` badges, `.cbi-value` form rows, `.cbi-section-table` grids and `.cbi-progressbar` bars — and `qosify.css` draws each section as a box with a title bar using the theme's own colour variables. Option names on screen are the qosify UCI option names, except the Overview quick settings, which use plain labels with a short description under each field in qosify's own wording.

Current version: **3.0.1**

## What changed since 2.9.x

3.0.0 is the whole 3.x development series folded into one release on top of v2.9.11. The daemon contract is unchanged — same UCI keys, same ubus calls, same file paths — so an upgrade needs no config changes. In short:

- **New Counters…
