---
repo: "unitaryfoundation/qldpc-challenge"
name: "qldpc-challenge"
description: "Public challenge to find optimal qLDPC codes."
readmeQualityOk: true
url: "https://github.com/unitaryfoundation/qldpc-challenge"
homepage: "https://unitaryfoundation.github.io/qldpc-challenge/"
language: "Python"
languages: ["Python"]
languagePcts: [96]
stars: 36
forks: 44
openIssues: 13
closedIssues: 185
watchers: 0
contributors: 47
recentReleases: 0
createdAt: "2026-06-16T14:31:02Z"
lastCommitAt: "2026-10-12T11:15:26Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem", "fork_magnet"]
healthScore: 99
undervaluedScore: 53
maintainers: ["FarLab", "github-actions[bot]", "MathysRennela"]
openGraphImageUrl: "https://opengraph.githubassets.com/a48eedc3af62727436ebefe67e66a575e79af6b6040486f58d54805624f0b077/unitaryfoundation/qldpc-challenge"
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
