---
repo: "bedrock-mc/cinnabar"
name: "cinnabar"
description: "Minecraft: Bedrock Edition, rebuilt from scratch in Rust. A fast, vanilla-accurate desktop client."
readmeQualityOk: true
url: "https://github.com/bedrock-mc/cinnabar"
language: "Rust"
languages: ["Rust"]
languagePcts: [89]
stars: 62
forks: 21
openIssues: 47
closedIssues: 37
watchers: 0
contributors: 19
recentReleases: 10
createdAt: "2026-07-11T15:56:28Z"
lastCommitAt: "2026-10-12T11:15:02Z"
lastReleaseAt: "2026-10-09T05:02:36Z"
status: "thriving"
tags: ["hidden_gem", "release_machine"]
healthScore: 88
undervaluedScore: 38
maintainers: ["HashimTheArab", "JustTalDevelops", "schphe"]
openGraphImageUrl: "https://opengraph.githubassets.com/daf97815ecbeb6f236c1da311cbb107184621c3023e4ec322e79e36a12f408b2/bedrock-mc/cinnabar"
---

# Cinnabar

> An independent, unofficial client compatible with Minecraft: Bedrock Edition. Not approved by
> or associated with Mojang or Microsoft. Minecraft is a trademark of Microsoft Corporation.

A Minecraft: Bedrock Edition client written from scratch in Rust. It plays on real servers, Realms
and friends' worlds with vanilla behaviour, and it's built to run much faster than the official
client.

## Download

- **Stable:** [latest release](https://github.com/bedrock-mc/cinnabar/releases/latest)
- **Nightly:** daily builds of `dev` for macOS, Windows and Linux ([nightly](https://github.com/bedrock-mc/cinnabar/releases/tag/nightly))

On first launch, Cinnabar downloads the vanilla resource pack after you accept the Minecraft EULA.
No Mojang assets are bundled. The release notes explain how to open unsigned builds.

## Build and run

```sh
make play
```

This fetches and compiles the vanilla assets, builds the Go core, and opens the launcher. Sign-in
uses a Microsoft device code. The token is cached in `.local/auth/`, so never share or commit
that folder. `make play PROFILE=release` builds the fully optimised binary, and `make help` lists
every target.

On Debian/Ubuntu,…
