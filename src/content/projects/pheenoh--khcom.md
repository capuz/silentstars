---
repo: "Pheenoh/khcom"
name: "khcom"
description: "WIP Decompilation of Kingdom Hearts: Chain of Memories (GBA)"
readmeQualityOk: true
url: "https://github.com/Pheenoh/khcom"
language: "C"
languages: ["C", "Assembly"]
languagePcts: [73, 24]
stars: 8
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-08-30T17:31:50Z"
lastCommitAt: "2026-09-09T08:18:55Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 44
maintainers: ["Pheenoh"]
openGraphImageUrl: "https://opengraph.githubassets.com/06ccd8566412b8df458311d5c469a3b5e787133af231c622d51e48a3a6b5a876/Pheenoh/khcom"
---

# Kingdom Hearts: Chain of Memories

[Build Status]: https://github.com/pheenoh/khcom/actions/workflows/build.yml/badge.svg
[actions]: https://github.com/pheenoh/khcom/actions/workflows/build.yml

[us]: https://decomp.dev/pheenoh/khcom/us.svg?mode=shield&label=us
[jp]: https://decomp.dev/pheenoh/khcom/jp.svg?mode=shield&label=jp
[eu]: https://decomp.dev/pheenoh/khcom/eu.svg?mode=shield&label=eu
[progress]: https://decomp.dev/pheenoh/khcom

A work-in-progress matching decompilation of *Kingdom Hearts: Chain of Memories*
for the Game Boy Advance.

> [!IMPORTANT]
> This repository does **not** contain any game assets or ROMs. An existing
> copy of the game is required to build.

[<img src="https://decomp.dev/pheenoh/khcom/us.svg?w=512&h=256" width="512" height="256" alt="Progress graph for the us version">][progress]

The project can target the following versions:

| Version | Code | SHA-1 |
|---------|------|-------|
| `us`    | B8CE | `10729bd884f8fdca7a310b6d606c52e46657aa48` |
| `jp`    | B8CJ | `59ec0a0a4ccd1e6acb3bbd7bfb21d63988958cfa` |
| `eu`    | B8CP | `8db73586cdb11b3795907edebf43228dbcd3e6b2` |

## Dependencies

- git
- ninja
- python3
- `binutils-arm-none-eabi`
-…
