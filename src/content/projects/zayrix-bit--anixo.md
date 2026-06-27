---
repo: "Zayrix-bit/Anixo"
name: "Anixo"
description: "🎌 AniXO — A high-performance, next-gen anime streaming experience. Built with React 19 & Python, featuring a Hybrid Resilience Engine (AniList + Jikan fallback), elite HLS playback, smart metadata integration, and a seamless ad-free UI. The ultimate bridge between metadata and high-quality streams."
url: "https://github.com/Zayrix-bit/Anixo"
homepage: "https://anixo.online"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [95]
stars: 13
forks: 11
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-05-04T08:05:29Z"
lastCommitAt: "2026-06-27T06:24:54Z"
status: "thriving"
tags: ["solo_builder", "fork_magnet"]
healthScore: 89
undervaluedScore: 58
maintainers: ["Zayrix-bit"]
openGraphImageUrl: "https://opengraph.githubassets.com/b7dcad1e255f6895d47226bcbf77061cf65e0bad50c6601f791b6f90217bb516/Zayrix-bit/Anixo"
---

</p>

# <p align="center">🎌 AniXo - The Next-Gen Anime Experience 🎌</p>

</p>

> [!CAUTION]
> **Self-hosting this application is strictly limited to personal use only.** Commercial utilization is prohibited, and the inclusion of advertisements on your self-hosted website may lead to serious consequences, including potential site takedown measures. Ensure compliance to avoid any legal or operational issues.

---

## 📸 Interface Preview

  
  <br>

</p>

  
  <br>
  <i>Advanced Filtering & Discovery System</i>
</p>

---

## 🌌 Overview

**AniXo** is a high-performance, premium anime streaming platform built for speed, aesthetics, and reliability. It bridges the gap between multiple metadata providers (AniList, MAL, Kitsu) and high-quality streaming sources to deliver a seamless, ad-free watching experience.

Unlike traditional platforms, AniXo features a **Hybrid Resilience Engine**—ensuring the platform remains functional even during major third-party API outages.

---

## 🏗️ Architectural Blueprint

The system is split into three core layers designed for maximum scalability and zero downtime.

```text
anixo/
├── online-server/              # 🟢 Socket.IO Server (Online Users…
