---
repo: "pzfreo/draftwright"
name: "draftwright"
description: "Automated technical-drawing generation for build123d and STEP files"
readmeQualityOk: true
url: "https://github.com/pzfreo/draftwright"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 6
forks: 0
openIssues: 40
closedIssues: 178
watchers: 1
contributors: 2
recentReleases: 10
createdAt: "2026-06-14T04:58:30Z"
lastCommitAt: "2026-07-09T20:43:59Z"
lastReleaseAt: "2026-06-16T22:49:45Z"
status: "newborn"
tags: ["hidden_gem", "release_machine", "under_pressure"]
healthScore: 96
undervaluedScore: 58
maintainers: ["pzfreo", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/86443b1a18acfca8a5ab36ff4a454e49b3504f3e6f39cfd1847c5ae81e281791/pzfreo/draftwright"
---

# draftwright

Automated technical-drawing generation for [build123d](https://github.com/gumyr/build123d).
Point it at a solid (or a STEP file) and get a fully-annotated multi-view engineering
drawing — orthographic views, dimensions, section A–A, ISO hatching, title block — ready
to export as PDF, SVG, and DXF.

*A mounting plate, generated automatically: three dimensioned orthographic views, a
counterbored bore callout (`⌀18 THRU ⊔ ⌀30 ↓14`), a `4× ⌀8 THRU` hole-pattern callout,
Section A–A with ISO hatching, an isometric, and an ISO 7200 title block — every
annotation placed by the engine.*

## Quick start

```
pip install draftwright
```

### Command line

Point it at a STEP file — that's the whole workflow:

```
draftwright my_part.step --title "Mounting Plate" --number DWG-001
# writes my_part.pdf (the default)
```

Choose formats, scale, and page; or emit an editable drawing script:

```
draftwright my_part.step --format pdf,dxf     # also: svg, all
draftwright my_part.step --scale 2 --page A3  # override the auto scale / page
draftwright my_part.step --script             # write an editable declarative Sheet script
```

`draftwright --help` lists every flag; `--version`…
