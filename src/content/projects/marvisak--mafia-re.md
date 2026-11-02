---
repo: "Marvisak/mafia-re"
name: "mafia-re"
description: "Decompilation of Mafia: The City of Lost Heaven"
readmeQualityOk: true
url: "https://github.com/Marvisak/mafia-re"
language: "C++"
languages: ["C++"]
languagePcts: [90]
stars: 41
forks: 2
openIssues: 0
closedIssues: 1
watchers: 5
contributors: 2
recentReleases: 0
createdAt: "2025-02-25T18:19:07Z"
lastCommitAt: "2026-11-02T17:53:36Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 90
undervaluedScore: 55
maintainers: ["Marvisak"]
openGraphImageUrl: "https://opengraph.githubassets.com/a177da43a344bedd98c9ef9c9265b04d8ad97ac2502a5886ba338ce99ebf6524/Marvisak/mafia-re"
---

# Mafia-RE

Decompilation of *Mafia: The City of Lost Heaven* (Illusion Softworks, 2002) for PC, in every released version: the
original 1.0, the official patches 1.1 and 1.2, and Steam's rebuild of the setup ([Versions](#versions)). Version 1.2,
the last official patch and the version Steam ships, is the main target. The other versions are built from the same
source, with their differences kept behind macros.

The goal is a byte-exact decompilation: source code that, built with the compilers and linkers the original binaries were
built with, produces files identical to the originals of each version.

## Progress

The cards count each binary's own functions, without the C runtime linked into it. *Implemented* is how many of them
have source, *accuracy* is [reccmp](https://github.com/isledecomp/reccmp)'s average score for those, and the bar is the
score summed over all of them. The function counts are exact but for `Game.exe`'s, an estimate until its code has been
worked through.
*LS3DF.dll (patch 1.1)* is the engine of the 1.1 patch, built from the same source with its differences behind
`ENGINE_VERSION`.

| Binary | Status |
| --- | --- |
| `rw_data.dll` | Done. The Visual C++…
