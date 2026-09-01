---
repo: "vyos/vyos-documentation"
name: "vyos-documentation"
description: "VyOS readthedocs"
readmeQualityOk: true
url: "https://github.com/vyos/vyos-documentation"
language: "TypeScript"
languages: ["TypeScript", "Python"]
languagePcts: [58, 38]
topics: ["hacktoberfest", "vyos"]
stars: 228
forks: 396
openIssues: 0
closedIssues: 0
watchers: 17
contributors: 255
recentReleases: 0
createdAt: "2018-09-30T12:23:17Z"
lastCommitAt: "2026-09-01T08:49:03Z"
status: "thriving"
tags: ["legacy_hero", "fork_magnet"]
healthScore: 89
undervaluedScore: 44
maintainers: ["andamasov", "LiudmylaNad", "sever-sever"]
openGraphImageUrl: "https://opengraph.githubassets.com/3ea24754624ca7b29d0f994daf84ec2d320a167ff9893c2a22d778fee5479832/vyos/vyos-documentation"
---

# VyOS Documentation

Source for the VyOS user documentation hosted on Read the Docs at
https://docs.vyos.io.

The earlier wiki for VyOS 1.1.x and pre-1.2.0 docs is preserved on the
[Wayback Machine][wayback].

[badge]: https://readthedocs.org/projects/vyos/badge/?version=rolling
[rtd]: https://docs.vyos.io/en/rolling/?badge=rolling
[wayback]: https://web.archive.org/web/2020/https://wiki.vyos.net/wiki/Main_Page

## Source format

Pages are [MyST Markdown](https://myst-parser.readthedocs.io/) (`.md`) and
are built with Sphinx — `source_suffix` in `docs/conf.py` lists `.md` only.
The pre-migration RST originals are archived under `docs/_rst_legacy/`
for reference; they are excluded from the build and should not be edited.

VyOS-specific command directives (`cfgcmd`, `opcmd`, `cmdincludemd`) are
written as MyST fenced blocks and rendered as directives via
`myst_fence_as_directive`. Shared snippets under `docs/_include/*.txt` are
still RST — they are included into MyST pages through `cmdincludemd`, which
parses their content as RST so the legacy templates keep working unchanged.

## Branches

The documentation repository tracks the same branch convention as the VyOS
source itself —…
