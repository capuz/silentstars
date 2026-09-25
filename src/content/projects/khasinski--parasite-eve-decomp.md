---
repo: "khasinski/parasite-eve-decomp"
name: "parasite-eve-decomp"
description: "Source-only Parasite Eve PS1 decompilation work in progress"
readmeQualityOk: true
url: "https://github.com/khasinski/parasite-eve-decomp"
language: "C"
languages: ["C"]
languagePcts: [80]
stars: 29
forks: 1
openIssues: 0
closedIssues: 1
watchers: 4
contributors: 1
recentReleases: 0
createdAt: "2026-06-29T16:27:37Z"
lastCommitAt: "2026-09-25T09:01:40Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 90
undervaluedScore: 40
maintainers: ["khasinski"]
openGraphImageUrl: "https://opengraph.githubassets.com/28f309e7eefbdb1f50f7ce05a670c148068349f3f18c3fd143cbe9f34415f52a/khasinski/parasite-eve-decomp"
---

# parasite-eve-decomp

Work-in-progress matching decompilation of the North American PlayStation
release of Parasite Eve, target `SLUS-006.62`.

This repository is source-only. It does not contain disc images, extracted game
assets, FMV, memory cards, Sony PSYQ SDK files, compiler binaries, or generated
split output. Contributors must provide their own legally obtained copy of the
game and local toolchains.

## Target

| Field | Value |
|---|---|
| Game | Parasite Eve, USA Disc 1 |
| Executable | `SLUS_006.62` |
| Target path | `assets/USA/main.exe` |
| SHA-1 | `452fb033f2eaa4b18aa20a5bca60b8125af3a37b` |
| Entry PC | `0x80072534` |
| Text VRAM | `0x80010000..0x801FE000` |

## Progress

Progress is measured by objdiff against a disassembly of the retail binaries,
the same `report.json` CI publishes for decomp.dev. Regenerate locally with
`make report` and render the badges and per-category table with `make
progress`. This README intentionally avoids hardcoded numbers.
CI regenerates the badges after auditing the report and rejects stale committed
values. Run `make report`, `make progress`, and `make debt` before committing
changes that affect progress or debt; include…
