---
repo: "cinnabar-mc/cinnabar"
name: "cinnabar"
description: "Minecraft: Bedrock Edition, rebuilt from scratch in Rust. A fast, vanilla-accurate desktop client."
readmeQualityOk: true
url: "https://github.com/cinnabar-mc/cinnabar"
language: "Rust"
languages: ["Rust"]
languagePcts: [91]
stars: 100
forks: 26
openIssues: 62
closedIssues: 49
watchers: 0
contributors: 20
recentReleases: 10
createdAt: "2026-07-11T15:56:28Z"
lastCommitAt: "2026-10-18T08:15:47Z"
lastReleaseAt: "2026-10-09T05:02:36Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 88
undervaluedScore: 34
maintainers: ["HashimTheArab", "RestartFU", "JustTalDevelops"]
openGraphImageUrl: "https://opengraph.githubassets.com/486052a95513434addfa33b1774bebcf8aa0f7e608240daf0e71c6573362eb4f/cinnabar-mc/cinnabar"
---

# Cinnabar

> An independent, unofficial client compatible with Minecraft: Bedrock Edition. Not approved by
> or associated with Mojang or Microsoft. Minecraft is a trademark of Microsoft Corporation.

> [!WARNING]
> Cinnabar is a non-vanilla client and still in development. Its movement and combat may not yet
> match the official client exactly, so server anticheats may flag you and some servers may ban
> you. Play on servers at your own risk.

A Minecraft: Bedrock Edition client written from scratch in Rust. It plays on real servers, Realms
and friends' worlds with vanilla behaviour, and it's built to run much faster than the official
client.

## Download

- **Stable:** [latest release](https://github.com/cinnabar-mc/cinnabar/releases/latest)
- **Nightly:** daily builds of `dev` for macOS, Windows and Linux ([nightly](https://github.com/cinnabar-mc/cinnabar/releases/tag/nightly))

On first launch, Cinnabar downloads the vanilla resource pack after you accept the Minecraft EULA.
No Mojang assets are bundled. The release notes explain how to open unsigned builds.

## Build and run

```sh
make play
```

This fetches and compiles the vanilla assets, builds the Go core, and opens the…
