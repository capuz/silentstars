---
repo: "abrignoni/DLEAPP"
name: "DLEAPP"
description: "DLEAPP — Desktop Logs Events And Protobuf Parser. A LEAPP for triaging desktop-application artifacts (Electron/Chromium)."
readmeQualityOk: true
url: "https://github.com/abrignoni/DLEAPP"
language: "Python"
languages: ["Python"]
languagePcts: [90]
stars: 27
forks: 7
openIssues: 2
closedIssues: 1
watchers: 2
contributors: 10
recentReleases: 7
createdAt: "2026-07-24T03:21:04Z"
lastCommitAt: "2026-10-09T18:56:23Z"
lastReleaseAt: "2026-10-02T00:35:44Z"
status: "thriving"
tags: ["hidden_gem", "release_machine"]
healthScore: 86
undervaluedScore: 42
maintainers: ["abrignoni", "actions-user", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/29deeae6461621e8d7c11eda58ae779ef3d4b257ebf0962d8a999c5530926e16/abrignoni/DLEAPP"
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
