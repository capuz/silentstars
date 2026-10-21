---
repo: "SoulOfKarma/Angels-Online-Preservation"
name: "Angels-Online-Preservation"
description: "Documented network protocol and local server for Angels Online (IGG, shut down 2026). Login, tutorial, inventory, shops and combat work. Preservation project — traffic captures welcome."
readmeQualityOk: true
url: "https://github.com/SoulOfKarma/Angels-Online-Preservation"
language: "HTML"
languages: ["HTML"]
languagePcts: [82]
stars: 9
forks: 5
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 4
recentReleases: 0
createdAt: "2026-09-18T23:11:57Z"
lastCommitAt: "2026-10-21T23:36:39Z"
status: "thriving"
tags: ["fork_magnet"]
healthScore: 90
undervaluedScore: 50
maintainers: ["SoulOfKarma", "DrkGhostly", "haharpoon"]
openGraphImageUrl: "https://opengraph.githubassets.com/23dbf0740cc693e07d2aac863e45dcd66212c0bec335336ab5f66c6107b522af/SoulOfKarma/Angels-Online-Preservation"
---

# Angels Online — local server

**\*English** · [Español](https://github.com/SoulOfKarma/Angels-Online-Preservation/blob/HEAD/README.es.md)\*

Reverse-engineered network protocol for **Angels Online** (IGG, shut down in
February 2026, client 8.5.1.0) and a server that speaks it, built from the client files and
from traffic captures.

This is not a complete emulator. It is the **documented protocol** plus a
server that goes as far as it goes: you can create a character, run the
tutorial, pick a class, fight monsters, level up, and buy and sell in shops.
What is missing is listed below, without sugarcoating.

Every protocol claim in here has a measurement behind it. Where something is
a guess, it says so.

---

## Actual state

Oct 21 pet release: [scope, tests and remaining limitations](https://github.com/SoulOfKarma/Angels-Online-Preservation/blob/HEAD/docs/ENTREGA_PETS_2026-10-21.md).

Pet progression (Oct 21): fixed fusion blocked by initial bonus ranges,
general-star desynchronization and the first enhancement feed missing its
increment. Official enhancement coefficients remain unverified; existing
pets are not automatically compensated.
See [audit, fixes and…
