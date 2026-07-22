---
repo: "gutp-bim/gutp-building-os-ri"
name: "gutp-building-os-ri"
description: "Reference implementation of Building OS (OSS)"
originalDescription: "ビルOSの参考実装（OSS）"
descriptionLang: "ja"
readmeQualityOk: true
url: "https://github.com/gutp-bim/gutp-building-os-ri"
language: "C#"
languages: ["C#"]
languagePcts: [80]
stars: 5
forks: 1
openIssues: 5
closedIssues: 81
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2026-06-23T13:05:19Z"
lastCommitAt: "2026-07-22T06:09:16Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 98
undervaluedScore: 55
maintainers: ["takashikasuya", "github-actions[bot]", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/c4c4e8b1e4a9e32b49de5642db119ee6d110afe94d3de4afaf41355d37d60ba9/gutp-bim/gutp-building-os-ri"
---

# Building OS — OSS Edition

*[English summary below](#english-summary) — architecture, quick start, tech stack, license.*

An open-source IoT platform for smart building management. It collects data from building facilities (HVAC, power, environmental sensors, etc.) via gRPC / MQTT / NATS, stores it in a Parquet lake on MinIO (with the latest values in NATS KV), and provides it through REST + gRPC APIs and a Next.js dashboard.

> ℹ️ This product was created as a derivative of the research results of the **University of Tokyo Green ICT Project**.  
> **The developers, stakeholders, and original sources bear no responsibility for any use (no warranty).** Please refer to the [disclaimer](#免責事項-disclaimer) for details.

> 🔒 If you discover any security issues, please report them privately following [SECURITY.md](https://github.com/gutp-bim/gutp-building-os-ri/blob/HEAD/SECURITY.md).

---

## 👀 Appearance and First Command

Operator home (freshness summary + points requiring action), resource explorer (equipment tree + details), and point details (latest values + history graph) are three screens:

> The above is a screenshot of the actual UI mocked with route-mock taken in a browser…
