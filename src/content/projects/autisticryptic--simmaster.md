---
repo: "autisticryptic/SimMaster"
name: "SimMaster"
description: "IMS / VoWIFI user-level registration, supports voice/video calls, supports automated tasks (sending SMS/making calls), supports registering with Asterisk SIP trunks."
originalDescription: "IMS / VoWIFI 用户层级注册，支持 语音/视频 通话， 支持自动化任务（发短信/打电话），支持对接asterisk trunk注册。"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/autisticryptic/SimMaster"
language: "Rust"
languages: ["Rust"]
languagePcts: [90]
stars: 9
forks: 4
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 1
createdAt: "2026-08-09T03:22:55Z"
lastCommitAt: "2026-10-26T18:06:42Z"
lastReleaseAt: "2026-10-08T06:16:39Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 53
maintainers: ["lilith-rong"]
openGraphImageUrl: "https://opengraph.githubassets.com/b0b6aacadf7625534d9e297e9ea521814f59828dcc456f72c246db6bf86490d8/autisticryptic/SimMaster"
---

<img
      alt="Debian"
      src="https://img.shields.io/badge/Debian-%23D70A53?logo=debian&logoColor=white&style=flat-square"
    />
      <img
        alt="GPLv3"
        src="https://img.shields.io/badge/license-GPLv3-blue?style=flat-square"
      />

	

# SimAdmin - Multi-Line SIM/eSIM and IMS Management Hub

SimAdmin is a web management system for Debian cellular CPE, portable WiFi, and soft-router devices. It models each “baseband + SIM slot” as an independent line, and manages SIM/eSIM, cellular data, SMS, calls, VoLTE, VoWiFi, SIP Trunk, device networking, notifications, and automation within a single service.

The project consists of a Rust + Axum backend and a React + TypeScript frontend. By default, the backend manages modems through ModemManager D-Bus, and it also provides an experimental native QMI/MBIM/AT backend that must be explicitly enabled. For the current completion boundaries, see [native backend status](https://github.com/autisticryptic/SimMaster/blob/HEAD/docs/NATIVE_BACKEND_STATUS.md). In production, the same backend process hosts the frontend SPA. By default it is installed to `/opt/simadmin` and runs under systemd.

> The current IMS, multi-baseband, and…
