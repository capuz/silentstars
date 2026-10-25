---
repo: "gybeyond1/Veyra"
name: "Veyra"
description: "Veyra - Short-drama aggregator player (Android APK + self-hosted backend + Docker), supports multiple Hongguo/Huangguo sources, private mode, proxy bypass, and phone/NAS download and merge"
originalDescription: "Veyra - 短剧聚合播放器（Android APK + 自建后端 + Docker），支持红果/黄果多源、私密模式、代理绕行、手机/NAS 下载与合并"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/gybeyond1/Veyra"
language: "HTML"
languages: ["HTML", "Java", "JavaScript"]
languagePcts: [36, 33, 22]
stars: 24
forks: 2
openIssues: 2
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-10-12T23:11:51Z"
lastCommitAt: "2026-10-25T08:40:11Z"
lastReleaseAt: "2026-10-14T09:20:22Z"
status: "newborn"
tags: ["hidden_gem", "release_machine"]
healthScore: 70
undervaluedScore: 37
maintainers: ["gybeyond1", "GyBeyond"]
openGraphImageUrl: "https://opengraph.githubassets.com/9a1741cfd9d00454d50e68baeb34989b07eba273b5be9e832dcbae4036d34d8a/gybeyond1/Veyra"
---

# Veyra

Veyra is a **short-drama aggregator player**: an Android client (APK) plus a self-hosted Node backend (Docker). It supports online playback of Hongguo / Huangguo short dramas, OTP-based authentication for private mode, proxy bypass, and **download and merge on the phone or NAS**.

> This project originated from [MrSsg/HuangguoAPP-for-Andriod](https://github.com/MrSsg/HuangguoAPP-for-Andriod) (GPL-3.0), but has since evolved independently under the **Veyra** brand, with its own package name, backend image, and data directory. Content copyright belongs to the respective content sources; this project only provides the technical implementation. Do not use it for illegal purposes.

---

## Features

- **Multi-source playback**: Online playback of Hongguo / Huangguo short dramas. The backend address is entered by the user on the login / registration page, and **no private domain is built in**.
- **Account system**: Login / registration (the registration toggle is dynamically controlled in the WebUI). Registration requires an administrator dynamic code (OTP). Accounts are not tied to devices.
- **Private mode**: Requires a backend dynamic code (OTP), authenticated once and bound…
