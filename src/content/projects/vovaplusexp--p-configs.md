---
repo: "VovaplusEXP/p-configs"
name: "p-configs"
description: "High-quality V2Ray/Clash subscription lists and profiles, auto-updated every 6 hours with speed testing"
readmeQualityOk: true
url: "https://github.com/VovaplusEXP/p-configs"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 14
forks: 3
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2025-07-24T11:30:29Z"
lastCommitAt: "2026-07-04T23:15:51Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 60
maintainers: ["actions-user"]
openGraphImageUrl: "https://opengraph.githubassets.com/d0be537942b7d161f54fb000a5e96a5a715281864518322a3e87c0100e8ef760/VovaplusEXP/p-configs"
---

# V2Ray/Clash Config Aggregator

This repository provides a collection of high-quality, speed-tested, and regularly updated subscription lists and Clash Meta profiles for V2Ray, Shadowsocks, and Trojan.

The primary goal is to offer clean, reliable, and informative configurations by automatically aggregating, deduplicating, and enriching them from various public sources. The lists are **updated every 6 hours** via GitHub Actions to ensure freshness.

---

## 🤔 How It Works

The entire process is fully automated and involves the following steps:

1.  **📥 Fetch & Deduplicate:** Gathers configs from the subscription list and removes duplicates.
2.  **🚀 Speed Test:** Filters out proxies that are slow or unresponsive using a parallel speed test.
3.  **🔒 Filter Secure:** Creates separate lists for configs that use secure transports like TLS and REALITY.
4.  **📝 Generate Files:** Generates final subscription lists (Base64 and plain text) and Clash Meta profiles.

---

## 🚀 Subscription & Profile Links

All links point to the `main` branch and provide the raw file content.

### 🔵 Clash Meta Profiles

These are advanced profiles for **Clash Meta** clients. They include smart proxy…
