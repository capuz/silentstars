---
repo: "ErsatzTV/next"
name: "next"
description: "Transcode and stream your media as live TV channels."
readmeQualityOk: true
url: "https://github.com/ErsatzTV/next"
homepage: "https://ersatztv.org/next-docs/"
language: "Rust"
languages: ["Rust"]
languagePcts: [99]
stars: 217
forks: 17
openIssues: 7
closedIssues: 53
watchers: 9
contributors: 9
recentReleases: 5
createdAt: "2026-03-13T14:57:19Z"
lastCommitAt: "2026-11-01T22:59:36Z"
lastReleaseAt: "2026-10-31T12:39:16Z"
status: "thriving"
tags: ["solo_builder", "funded", "release_machine"]
healthScore: 97
undervaluedScore: 37
maintainers: ["jasongdove", "nixsupernova-ux", "mrlindstrom"]
openGraphImageUrl: "https://opengraph.githubassets.com/564120fa22ca43d7c53b3da7ea22a53fc9cea7cfeb6befcc5aa48b3b8ebf7e60/ErsatzTV/next"
fundingLinks: ["GITHUB:https://github.com/jasongdove", "CUSTOM:https://www.paypal.me/jasongdove"]
discussionCount: 1
---

> [!NOTE]
> This project is a rewrite of the ErsatzTV streaming engine in Rust. It is the default streaming engine in [ErsatzTV (legacy)](https://github.com/ErsatzTV/legacy), and can also run standalone. Configuration and playout formats are versioned, and breaking changes are called out in the [changelog](https://github.com/ErsatzTV/next/blob/HEAD/CHANGELOG.md).

# ErsatzTV

ErsatzTV is a modular, self-hosted IPTV server that transcodes and streams your media as live TV channels.

## Background

This rewrite focuses on a "one thing well" philosophy: **reliable transcoding and streaming**.

> [!IMPORTANT]
> Library and metadata management, scheduling and playout creation **are not in scope for this project**.

Unlike [the legacy version](https://github.com/ErsatzTV/legacy), this version is decoupled from library management and scheduling. It consumes **playouts** (JSON documents describing what to play and when) and handles the heavy lifting of keeping a stream alive and consistent, regardless of source media variations.

### Ways to use it

- **With ErsatzTV (legacy):** channels use this engine by default (**Streaming Engine** set to **Next**). Legacy keeps handling libraries and…
