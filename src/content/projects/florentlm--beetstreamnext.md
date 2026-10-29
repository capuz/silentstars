---
repo: "FlorentLM/BeetstreamNext"
name: "BeetstreamNext"
description: "Fully-featured music server for Beets.io music libraries implementing the OpenSubsonic API"
readmeQualityOk: true
url: "https://github.com/FlorentLM/BeetstreamNext"
homepage: "https://florentlm.github.io/BeetstreamNext/"
language: "Python"
languages: ["Python"]
languagePcts: [76]
topics: ["beets-plugin", "music-library", "streaming", "subsonic-server", "beets", "music-server", "music-streaming", "opensubsonic", "subsonic", "subsonic-api"]
stars: 8
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 6
recentReleases: 8
createdAt: "2025-03-18T17:52:59Z"
lastCommitAt: "2026-10-29T14:06:15Z"
lastReleaseAt: "2026-10-29T14:08:13Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded", "release_machine"]
healthScore: 90
undervaluedScore: 84
maintainers: ["FlorentLM", "vredesbyyrd"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/950802796/feae7d10-88f6-4e88-ade8-14edd7332740"
fundingLinks: ["GITHUB:https://github.com/FlorentLM", "KO_FI:https://ko-fi.com/flo46376"]
---

Fully-featured music server for Beets.io music libraries implementing the OpenSubsonic API

> [!IMPORTANT]
> **version 2.2.0 breaking changes**
> - **Subsonic clients can no longer sign in with the account password.** Create an [app password](https://florentlm.github.io/BeetstreamNext/features/app-passwords.html) instead. The account password only works in the web UI.
> - **Account passwords are now stored as scrypt hashes.** The upgrade migrates them automatically (using your `BEETSTREAMNEXT_KEY`, so keep the same key for the first start after upgrading).

BeetstreamNext exposes your [Beets](https://beets.io) music library over the [OpenSubsonic API](https://opensubsonic.netlify.app/), letting you stream your music to any Subsonic/OpenSubsonic/Navidrome client. It supports essentially the whole specification (only video-streaming is left out), and adds a bunch of its own extras :)

## Features

- **Multi-user accounts**: per-user bookmarks, ratings, favorites, play queues... ([details](https://florentlm.github.io/BeetstreamNext/features/accounts-and-permissions.html))
- **Streaming**: direct play, on-the-fly transcoding, adaptive-bitrate HLS, server-side ReplayGain, self-healing…
