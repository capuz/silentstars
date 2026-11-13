---
repo: "kyleckroeger/moh-frontline-decomp"
name: "moh-frontline-decomp"
description: "Matching decompilation of Medal of Honor: Frontline (GameCube, GMFE69)"
readmeQualityOk: true
url: "https://github.com/kyleckroeger/moh-frontline-decomp"
language: "C++"
languages: ["C++", "C"]
languagePcts: [65, 29]
topics: ["decompilation", "gamecube", "medal-of-honor", "reverse-engineering"]
stars: 8
forks: 0
openIssues: 0
closedIssues: 1
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2026-10-04T21:10:20Z"
lastCommitAt: "2026-11-13T18:34:39Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 50
maintainers: ["kyleckroeger"]
openGraphImageUrl: "https://opengraph.githubassets.com/7d2ca0abdc28e899b0a836f46377034b3b96cd3799f1e9dbf2cf3cf38f42c04e/kyleckroeger/moh-frontline-decomp"
---

# Medal of Honor: Frontline

A matching decompilation of **Medal of Honor: Frontline** for GameCube, targeting the USA release **GMFE69, revision 0**. The game-code target is the disc's `Moh2RelGC.elf`.

The project follows the structure and verification rules of the sibling [Medal of Honor: Rising Sun decompilation](https://github.com/lifewillbeokay/moh-rising-sun), whose CC0 tooling it adapts. Accepted source is checked against the original executable as part of a complete rebuilt-image comparison; the remainder stays original binary context. AI-assisted contributions are welcome; see [CONTRIBUTING.md](https://github.com/kyleckroeger/moh-frontline-decomp/blob/HEAD/CONTRIBUTING.md).

The project reports two figures. **Exact** is the verified progress figure: nonoverlapping source-built function bytes against all bytes in the original executable sections (`.init` and `.text`). Data and BSS earn no code-progress credit; neither do linker-generated tables or original context. **Linked** adds partial source that isn't byte-identical yet but links into a separate, non-matching build. See [how progress is verified and…
