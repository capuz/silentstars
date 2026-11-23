---
repo: "jsnelgro/atdrive"
name: "atdrive"
description: "iCloud/Dropbox alternative using ATProto Spaces"
readmeQualityOk: true
url: "https://github.com/jsnelgro/atdrive"
language: "Swift"
languages: ["Swift"]
languagePcts: [98]
stars: 5
forks: 0
openIssues: 22
closedIssues: 21
watchers: 0
contributors: 2
recentReleases: 1
createdAt: "2026-11-09T00:49:05Z"
lastCommitAt: "2026-11-23T10:28:03Z"
lastReleaseAt: "2026-11-20T07:27:52Z"
status: "newborn"
tags: ["hidden_gem", "under_pressure"]
healthScore: 88
undervaluedScore: 49
maintainers: ["claude", "jsnelgro"]
openGraphImageUrl: "https://opengraph.githubassets.com/6fc938cf2555c3378244f19023fb51f56a831a77dad72889ee771f7cde362928/jsnelgro/atdrive"
---

# ATDrive: Dropbox on the ATmosphere

> **Warning**
>
> Warning: this tool is a proof of concept and seems to work but was totally vibe-coded. I am not a professional Swift developer. Also ATProto spaces are Alpha, so don't use this for data you care about. Just assume it _will_ be deleted at some point.

# Human-written

A cli and macOS app providing an iCloud-like experience using ATProto Spaces. The macOS app includes Apple File Provider support, so it plays nicely with Finder (and potentially the iOS files app if I ever decide to dig into that). In Finder, you can drag and drop files, move them, open in a terminal, etc. On linux, you can use the `atdrive sync` command to sync a folder (`~/atdrive` by default) and use it in the same way.

## Get It
You can download the latest release from Github here: https://github.com/jsnelgro/atdrive/releases

Select `ATDrive-<version>-macos-arm64.zip` (it also includes the cli). Download, unzip, and move it to Applications.
