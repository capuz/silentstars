---
repo: "laetuz/HoloMarket"
name: "HoloMarket"
description: "3rd party Android app store for legacy devices, built mainly for Neotica retro ecosystem, supporting legacy Android starting from SDK 3."
readmeQualityOk: true
url: "https://github.com/laetuz/HoloMarket"
homepage: "https://neotica.id/holomarket"
language: "Java"
languages: ["Java"]
languagePcts: [100]
topics: ["android", "legacy-android", "retro-android"]
stars: 11
forks: 1
openIssues: 0
closedIssues: 6
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2026-03-21T07:28:00Z"
lastCommitAt: "2026-11-25T03:14:27Z"
lastReleaseAt: "2026-08-18T14:28:03Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 93
undervaluedScore: 39
maintainers: ["laetuz"]
openGraphImageUrl: "https://opengraph.githubassets.com/6a6e6e0d2c4a3a5c83ec99c2d8ebfe0bbe370983e3baf3be7dddd316307a796c/laetuz/HoloMarket"
---

# HoloMarket

<!-- <details>

Legacy Android app store client with `minSdkVersion 3` (Android 1.5+ / API 3, Cupcake) — practically exercised on Eclair / Froyo / Gingerbread.

Built to solve the TLS/SSL certificate deprecation wall that breaks standard web browsing on 2010–2013 hardware. HoloMarket speaks raw HTTP/JSON to give early Android devices a functional, on-device package manager again.

## Features

- **Browse apps** by category with paginated feeds and collections
- **Featured apps** carousels (home + categories)
- **Search** apps by keyword, or tap a developer to list their apps
- **App detail** page with screenshots, version history, developer, and install state (Download / Update / Open)
- **Ratings & reviews** — rate an app; update or delete your own review (login required)
- **APK download** via the downloads manager (`DownloadService`) with progress notifications, cancel, and auto-install
- **Authentication** (login / register / forgot password) with JWT stored in `SharedPreferences`
- **Settings** screen with self-update check, clear cache (app + icon caches), logout, root auto-install, and 18+ content toggle
- **Trackball / D-pad navigation** — focusable rows with…
