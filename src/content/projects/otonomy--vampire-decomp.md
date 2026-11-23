---
repo: "otonomy/vampire-decomp"
name: "vampire-decomp"
description: "Vampire: The Masquerade - Bloodlines decompilation"
readmeQualityOk: true
url: "https://github.com/otonomy/vampire-decomp"
language: "C++"
languages: ["C++"]
languagePcts: [98]
stars: 21
forks: 4
openIssues: 1
closedIssues: 0
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2026-11-21T10:44:18Z"
lastCommitAt: "2026-11-23T10:18:56Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 60
undervaluedScore: 32
maintainers: ["otonomy"]
openGraphImageUrl: "https://opengraph.githubassets.com/aa4f2db2cf18ad34089340e279a3abcda04c0e94be9a575a17ef5fd07396ae2f/otonomy/vampire-decomp"
---

# Vampire: The Masquerade – Bloodlines: `vampire.dll` decompilation

A matching decompilation of `vampire.dll`, the game-code DLL of *Vampire: The Masquerade – Bloodlines*
(Troika Games, 2004), patch 1.2. Each function in `src/` is C++ that Microsoft Visual C++ 6.0 (`/O2 /GR`, the
compiler and flags the game was built with) compiles to the same bytes as the original DLL.

The work was done with **pcdecomp**, a matching-decompilation tool for 32-bit Windows games. pcdecomp compiles a
function with the game's own compiler, compares it with the original byte for byte, and saves it only when the two are
identical. The functions were written by AI agents working through pcdecomp, by hand, and by pcdecomp's own
automatic passes (machine drafts, copies of already matched twin functions).

## Status (2026-11-23)

The picture is drawn by `tools/make_progress_svg.py` from `docs/progress.json` (numbers of 2026-11-23). To redraw
it: `python tools/make_progress_svg.py`; with `--collect --client <client project> --game <game folder>` it first
reads the numbers again from pcdecomp's databases and the game's files.
