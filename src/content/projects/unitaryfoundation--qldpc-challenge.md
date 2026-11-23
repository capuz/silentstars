---
repo: "unitaryfoundation/qldpc-challenge"
name: "qldpc-challenge"
description: "Public challenge to find optimal qLDPC codes."
readmeQualityOk: true
url: "https://github.com/unitaryfoundation/qldpc-challenge"
homepage: "https://unitaryfoundation.github.io/qldpc-challenge/"
language: "Python"
languages: ["Python"]
languagePcts: [98]
stars: 42
forks: 59
openIssues: 32
closedIssues: 281
watchers: 0
contributors: 59
recentReleases: 0
createdAt: "2026-06-16T14:31:02Z"
lastCommitAt: "2026-11-23T10:27:22Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem", "fork_magnet"]
healthScore: 98
undervaluedScore: 51
maintainers: ["github-actions[bot]", "FarLab", "MathysRennela"]
openGraphImageUrl: "https://opengraph.githubassets.com/0080eb0821e195e921c826bb25604195b902de79395ac8d66ca2f4565a2608af/unitaryfoundation/qldpc-challenge"
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
