---
repo: "cinnabar-mc/cinnabar"
name: "cinnabar"
description: "Minecraft: Bedrock Edition, rebuilt from scratch in Rust. A fast, vanilla-accurate desktop client."
readmeQualityOk: true
url: "https://github.com/cinnabar-mc/cinnabar"
language: "Rust"
languages: ["Rust"]
languagePcts: [91]
stars: 169
forks: 29
openIssues: 60
closedIssues: 54
watchers: 0
contributors: 21
recentReleases: 10
createdAt: "2026-07-11T15:56:28Z"
lastCommitAt: "2026-10-21T23:35:31Z"
lastReleaseAt: "2026-10-09T05:02:36Z"
status: "thriving"
tags: ["release_machine"]
healthScore: 89
undervaluedScore: 30
maintainers: ["HashimTheArab", "RestartFU", "Jviguy"]
openGraphImageUrl: "https://opengraph.githubassets.com/a6975a1b895e53f955e01ba5764cabf12983affdb1bd3bd643e2bf1172fd389d/cinnabar-mc/cinnabar"
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

This fetches the vanilla assets, builds the Go core and opens the launcher.…
