---
repo: "gybeyond1/Veyra"
name: "Veyra"
description: "Veyra - Short drama aggregator player (Android APK + self-hosted backend + Docker), supports multi-source Hongguo/Huangguo, private mode, proxy bypass, phone/NAS download and merge"
originalDescription: "Veyra - 短剧聚合播放器（Android APK + 自建后端 + Docker），支持红果/黄果多源、私密模式、代理绕行、手机/NAS 下载与合并"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/gybeyond1/Veyra"
language: "Java"
languages: ["Java", "JavaScript"]
languagePcts: [49, 31]
stars: 22
forks: 2
openIssues: 2
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-10-12T23:11:51Z"
lastCommitAt: "2026-10-24T08:08:39Z"
lastReleaseAt: "2026-10-14T09:20:22Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 70
undervaluedScore: 38
maintainers: ["gybeyond1"]
openGraphImageUrl: "https://opengraph.githubassets.com/17c146fc898034fffbbdc61b6f9e8421ce091d1c968c1daad19d40dda0950cb4/gybeyond1/Veyra"
---

# Veyra

Veyra is a **short drama aggregator player**: an Android client (APK) + a self-hosted Node backend (Docker). It supports online playback of 红果 / 黄果 short dramas, private mode authentication, proxy bypass, and **download and merging on phone / NAS**.

> This project originated from [MrSsg/HuangguoAPP-for-Andriod](https://github.com/MrSsg/HuangguoAPP-for-Andriod) (GPL-3.0), but has independently evolved into the **Veyra** brand: an independent package name, independent backend image, and independent data directory. Content copyright belongs to the respective content sources; this project only provides the technical implementation. Do not use it for illegal purposes.

---

## Features

- **Multi-source playback**: Online playback of 红果 / 黄果 short dramas; the backend address is entered by the user on the login / registration page, **no private domain is built in**.
- **Account system**: Login / registration (registration toggle is dynamically controlled in the WebUI). Registration requires an admin dynamic code (OTP); accounts are not tied to devices.
- **Private mode**: Requires a backend dynamic code (OTP), authenticated once and tied to the account; admin accounts enter…
