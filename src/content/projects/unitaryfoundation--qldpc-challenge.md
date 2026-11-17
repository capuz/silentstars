---
repo: "unitaryfoundation/qldpc-challenge"
name: "qldpc-challenge"
description: "Public challenge to find optimal qLDPC codes."
readmeQualityOk: true
url: "https://github.com/unitaryfoundation/qldpc-challenge"
homepage: "https://unitaryfoundation.github.io/qldpc-challenge/"
language: "Python"
languages: ["Python"]
languagePcts: [97]
stars: 39
forks: 54
openIssues: 22
closedIssues: 268
watchers: 0
contributors: 56
recentReleases: 0
createdAt: "2026-06-16T14:31:02Z"
lastCommitAt: "2026-11-17T14:48:29Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem", "fork_magnet"]
healthScore: 98
undervaluedScore: 52
maintainers: ["MathysRennela", "github-actions[bot]", "FarLab"]
openGraphImageUrl: "https://opengraph.githubassets.com/312be383b801a4bb7c05a2de8032d0925166fdecbd50099162f163ab868ec3b8/unitaryfoundation/qldpc-challenge"
---

# QEC Challenge

Live leaderboard: https://unitaryfoundation.github.io/qldpc-challenge/

A public, automatically verified leaderboard for quantum low-density
parity-check (qLDPC) codes. Submit a code, the verifier checks it, and if it
holds up it goes on the board.

The leaderboard site is generated into `docs/` by `site/build.py` (run `uv run
python site/build.py`); open `docs/index.html` to view it.

The badges above are rendered by shields.io from the published board data
(the live `stats.json`), so they always reflect the current numbers. They read
the deployed file directly rather than a committed image, so nothing has to be
regenerated and re-committed to keep them in sync.

Unlike a single-number competition, a quantum code trades several quantities
against each other (physical qubits n, logical qubits k, distance d, check
weight, geometric locality). So the boards are a computed grid of locality class
by check weight (membership derived from the parity checks and the layout, not
self-declared), and within each cell the ranking is a Pareto frontier rather than
one winner. Construction family is a separate filter tag. See…
