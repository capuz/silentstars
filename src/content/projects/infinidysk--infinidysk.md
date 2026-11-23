---
repo: "infinidysk/infinidysk"
name: "infinidysk"
description: "infinidysk - The NzbDAV successor in Rust. Usenet streaming with a WebDAV server and a SABnzbd-compatible API."
readmeQualityOk: true
url: "https://github.com/infinidysk/infinidysk"
homepage: "https://infinidysk.com"
language: "Rust"
languages: ["Rust"]
languagePcts: [86]
topics: ["nzb", "plex", "rclone", "streaming", "usenet", "dav", "nzbdav", "rust", "silo"]
stars: 318
forks: 29
openIssues: 20
closedIssues: 592
watchers: 2
contributors: 22
recentReleases: 0
createdAt: "2026-02-25T01:54:04Z"
lastCommitAt: "2026-11-23T13:29:03Z"
lastReleaseAt: "2026-07-11T04:26:01Z"
status: "thriving"
tags: ["funded"]
healthScore: 99
undervaluedScore: 33
maintainers: ["hoivikaj", "dependabot[bot]", "github-actions[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1166217118/d20e564b-2867-47a3-8ce8-d1ca9efe0561"
fundingLinks: ["GITHUB:https://github.com/hoivikaj", "BUY_ME_A_COFFEE:https://buymeacoffee.com/hoivikaj", "PATREON:https://patreon.com/hoivikaj"]
---

infinidysk is a Usenet-backed virtual filesystem. Sonarr, Radarr and other Arr apps add it as a SABnzbd download client. It never downloads the release: your media server reads the files over a native FUSE mount or WebDAV, and infinidysk streams them from your Usenet providers on demand.

This is infinidysk **2.0**, rewritten in Rust and now in **beta**. On 1.x? See [Looking for 1.x?](#looking-for-1x)

> **Warning**
>
> **Moving from 1.x to 2.x is a breaking change.** Changing the image name alone is not an upgrade. Follow [Upgrade from 1.x](https://www.infinidysk.com/v2/upgrade/), and check [what is not in 2.x yet](https://www.infinidysk.com/v2/whats-new/#feature-comparison).

When staging saved 1.x repair data, unusable candidates are reported and kept in the original directory. Valid candidates still migrate. Previously staged copies are checked and kept if their originals become unusable. Retries replace corrupt saved copies from usable originals. Saved bytes become repairs only after complete PAR2 verification.
