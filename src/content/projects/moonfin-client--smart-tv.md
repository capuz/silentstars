---
repo: "Moonfin-Client/Smart-TV"
name: "Smart-TV"
description: "A premium Jellyfin Client for Tizen and webOS"
url: "https://github.com/Moonfin-Client/Smart-TV"
homepage: "https://moonfin.io"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [83]
stars: 306
forks: 40
openIssues: 19
closedIssues: 178
watchers: 4
contributors: 17
recentReleases: 3
createdAt: "2025-12-25T06:51:58Z"
lastCommitAt: "2026-06-28T01:45:45Z"
lastReleaseAt: "2026-06-03T14:29:38Z"
status: "thriving"
tags: []
healthScore: 96
undervaluedScore: 32
maintainers: ["RadicalMuffinMan", "jmawet", "zhen-zen"]
openGraphImageUrl: "https://opengraph.githubassets.com/de69339c8ec456f5e934f65b7868f392934f0978b1931aff610aec6a0af037b0/Moonfin-Client/Smart-TV"
discussionCount: 17
---

<h1 align="center">Moonfin for Smart-TVs</h1>
<h3 align="center">Premium Jellyfin and Emby client for webOS and Tizen TVs</h3>

---

</p>

</p>

> **[Back to main Moonfin project](https://github.com/Moonfin-Client)**

Moonfin is a premium Jellyfin and Emby client built with the **Enact/Sandstone framework**, optimized for Samsung Smart TVs (Tizen) and LG Smart TVs (webOS). A single shared codebase powers both platforms with native video pipelines tuned for each.

</p>

## Features & Enhancements

Moonfin builds on the solid foundation of Jellyfin with targeted improvements for the TV viewing experience.

### Hardware-Accelerated Video Playback
- **Samsung AVPlay** (Tizen) and **Starfish/HTML5** (webOS) native video pipelines
- Smooth playback with proper hardware decoding for H.264, HEVC, HDR10, HLG, and Dolby Vision (where supported)
- Automatic DirectPlay to native transcode to hls.js fallback chain when a format isn't natively supported
- **Accurate per-TV codec profiles**: Your device reports exactly what it can play, so more content direct plays instead of burning server CPU on transcodes
- **Lossless audio passthrough**: DTS, DTS-HD, and Dolby TrueHD bitstreaming to a…
