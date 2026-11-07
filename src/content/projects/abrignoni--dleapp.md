---
repo: "abrignoni/DLEAPP"
name: "DLEAPP"
description: "DLEAPP — Desktop Logs Events And Protobuf Parser. A LEAPP for triaging desktop-application artifacts (Electron/Chromium)."
readmeQualityOk: true
url: "https://github.com/abrignoni/DLEAPP"
language: "Python"
languages: ["Python"]
languagePcts: [93]
stars: 34
forks: 11
openIssues: 2
closedIssues: 1
watchers: 2
contributors: 12
recentReleases: 8
createdAt: "2026-07-24T03:21:04Z"
lastCommitAt: "2026-11-07T09:30:25Z"
lastReleaseAt: "2026-11-03T07:12:56Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 87
undervaluedScore: 41
maintainers: ["abrignoni", "actions-user"]
openGraphImageUrl: "https://opengraph.githubassets.com/8fa754a7de7a4207fbfc6e60ca35d70489b449bdd018b1f081f527e73ec90eb4/abrignoni/DLEAPP"
---

# Desktop Logs Events And Protobuf Parser

**DLEAPP** parses artifacts left behind by **desktop applications** — the logs, events, and stored data of Electron/Chromium-based desktop apps: IndexedDB/LevelDB stores (including protobuf-encoded values), Local Storage, service-worker and HTTP caches, cookies, and application logs. It is a member of the LEAPP family, built on the RLEAPP framework.

DLEAPP is also meant to be a home for parsers that don't fit neatly into any of the other LEAPPs — a place for desktop-application and other odds-and-ends artifacts to live rather than being forced into iLEAPP, ALEAPP, RLEAPP, and the like.

### Supported applications

| Application | What is parsed |
| --- | --- |
| **Wire** (desktop) | Accounts, devices, conversations, messages, calls, attachments, cookies, service-worker cache, and media recovered by decrypting cached asset blobs. |
| **Discord** (desktop) | Messages, attachments and recovered media, servers, channels, users, searches, reactions, message drafts, client activity, channel navigation, gateway sessions, account and application details, and a full cache index. |
| **Signal** (desktop) | Messages, attachments decrypted from…
