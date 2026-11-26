---
repo: "rh-shrink/rh-shrink.github.io"
name: "rh-shrink.github.io"
description: "Size of the Lean proof of the Riemann Hypothesis per commit (unofficial)"
readmeQualityOk: true
url: "https://github.com/rh-shrink/rh-shrink.github.io"
homepage: "https://rh-shrink.github.io"
language: "HTML"
languages: ["HTML", "Python"]
languagePcts: [71, 29]
stars: 7
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-11-22T16:52:59Z"
lastCommitAt: "2026-11-26T23:30:54Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 51
maintainers: ["github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/b3fe6a472818075e6056982f1a129b098ccef2061e8a8652eddb27340c65e825/rh-shrink/rh-shrink.github.io"
---

# RH proof size

Size of the Lean source of [leanprover-community/riemann-hypothesis](https://github.com/leanprover-community/riemann-hypothesis)
per commit on `main`: <https://rh-shrink.github.io>. Unofficial.

- `collect.py` counts lines, declarations, files and import statements with regular expressions over the
  file contents in git (no Lean). The page lists exactly what is counted.
- `.github/workflows/update.yml` runs it every 15 minutes and deploys `site/` to GitHub Pages.
- `site/earlier.json`: `main` before it was replaced on 2026-11-25 by the readable edition of
  [grh-lean](https://github.com/lsernau/grh-lean), up to the commit `EARLIER` in the workflow (the
  branch `alpoge` goes on from there). The page shows it before `main`, with an arrow at the
  jump; the workflow measures it again only when `collect.py`'s VERSION changes.
  `site/graph-earlier.json`: the import graph of its first commit, the original (2.5 min, 1.5 GB),
  computed again only when `graph.py`'s VERSION changes.
