---
repo: "thedvxch/yandex-music"
name: "yandex-music"
description: "Typed, async TypeScript client for the Yandex Music API — zero runtime deps, full type declarations"
originalDescription: "Typed, async TypeScript client for the Yandex Music API — zero runtime deps, full type declarations"
descriptionLang: "ru"
readmeQualityOk: true
url: "https://github.com/thedvxch/yandex-music"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 5
recentReleases: 0
createdAt: "2026-06-22T16:47:51Z"
lastCommitAt: "2026-11-27T12:54:19Z"
lastReleaseAt: "2026-06-24T10:42:21Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 67
undervaluedScore: 16
maintainers: ["ragedrugg", "neverlane"]
openGraphImageUrl: "https://opengraph.githubassets.com/3d48c62ccb4300b05ee557284d9c4f6286a477adb6d3e729d87703044919f9d9/thedvxch/yandex-music"
---

A typed, asynchronous **TypeScript client for the Yandex Music API**.

`@dvxch/yandex-music` is an independent implementation of the Yandex Music HTTP API in TypeScript. It targets modern Node.js (≥ 20), ships as ESM with full type declarations, and has **no runtime dependencies** (it uses the built-in `fetch`).

> Status: ready. The entire HTTP API is implemented and tested — `account` / `tracks` / `albums` / `artists` / `search` / `likes` / `playlists` / `device auth` / `landing` / `radio` / `queue` / `history` / `clips` / `credits` / `disclaimers` / `labels` / `metatags` / `pins` / `presaves` / `concerts` — including playlist mutations, dislikes and rotor feedback, as well as realtime "now playing" via Ynison.

Every endpoint has been run against the live Yandex Music API with a real token. The few endpoints the server no longer serves to a regular account (for example, the legacy queue creation and rotor feedback) throw a typed error rather than failing silently.
