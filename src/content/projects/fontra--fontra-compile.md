---
repo: "fontra/fontra-compile"
name: "fontra-compile"
description: "A Variable Font compiler for Fontra"
readmeQualityOk: true
url: "https://github.com/fontra/fontra-compile"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 6
forks: 2
openIssues: 4
closedIssues: 9
watchers: 5
contributors: 4
recentReleases: 0
createdAt: "2023-06-25T19:46:06Z"
lastCommitAt: "2026-09-01T08:50:10Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 82
undervaluedScore: 54
maintainers: ["justvanrossum", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/c3b48229c00ae515ba082324bd722ae78caa14639678491fcd45b406a421d8e5/fontra/fontra-compile"
---

# fontra-compile — A Variable Font outline compiler for Fontra

This is for now a work in progress proof of concept.

Initial goals:

- Focus on outlines and (variable) components
- Input: Fontra "backend" objects ([core](https://github.com/fontra/fontra/tree/main/src/fontra/backends) and [rcjk](https://github.com/fontra/fontra-rcjk/blob/main/src/fontra_rcjk/backend_fs.py))
- Initially [`glyf-1`](https://github.com/harfbuzz/boring-expansion-spec/blob/main/glyf1.md)-only
- [Variable Components](https://github.com/harfbuzz/boring-expansion-spec/blob/main/glyf1-varComposites.md)
- [Cubics outlines in glyf](https://github.com/harfbuzz/boring-expansion-spec/blob/main/glyf1-cubicOutlines.md)

Future goals:

- Output regular components when possible
- Add option to convert cubic curves to quadratics
- Add option to convert quadratic curves to cubics
- Add option to flatten variable components
- Add option to build a backwards compatible `glyf-0` table

## Install

- Clone this repository
- `cd` into the cloned repository folder
- Create and activate a virtual environment with Python 3.10 or up
- Install dependencies:

  `pip install -r requirements.txt`

- Install this package:

  `pip…
