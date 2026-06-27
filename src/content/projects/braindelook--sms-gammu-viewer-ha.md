---
repo: "BrainDeLook/sms-gammu-viewer-ha"
name: "sms-gammu-viewer-ha"
description: "SMS Gammu Viewer — native panel for Home Assistant (HACS compatible)"
url: "https://github.com/BrainDeLook/sms-gammu-viewer-ha"
language: "JavaScript"
languages: ["JavaScript", "Python"]
languagePcts: [56, 44]
stars: 10
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-06-14T14:14:17Z"
lastCommitAt: "2026-06-27T00:39:22Z"
lastReleaseAt: "2026-06-20T07:44:56Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 80
undervaluedScore: 50
maintainers: ["BrainDeLook"]
openGraphImageUrl: "https://opengraph.githubassets.com/867a8ceaa2155bc1e42f2ee61d4b2aad1862c3b20e9d6116557f1380ca51356b/BrainDeLook/sms-gammu-viewer-ha"
---

# SMS Gammu Viewer for Home Assistant

> 🇷🇺 [Русская версия](README_RU.md)

A native panel for **SMS messaging and voice calls** directly in Home Assistant. Works with the [sms-gammu-gateway](https://github.com/PavelVe/home-assistant-addons/tree/main/sms-gammu-gateway) add-on and any compatible gateway based on [pajikos/sms-gammu-gateway](https://github.com/pajikos/sms-gammu-gateway).

> 💬 **Send & receive SMS** · 📞 **Outgoing voice calls** · 📇 **Phonebook** · 🔔 **Push notifications** · 🚪 **Call entities for gates & intercoms**

After installation, an **SMS** tab appears in the sidebar. Messages are stored in an internal SQLite database and are automatically deleted from the modem after being received.

  <sub>Desktop — chat list, conversation thread, send box</sub>
</p>

---

## Features

- 💬 **Chat-style SMS** — all messages from one sender in one thread, with full send/receive support
- 📞 **Outgoing voice calls** (dial-only) — via a separate voice AT interface on modems with multiple serial ports (e.g. Huawei)
- 🚪 **Call entities** — `cover`/`button` entities that dial a fixed number, for gates and intercoms that open via a phone call
- 📇 **Phonebook** — save contact…
