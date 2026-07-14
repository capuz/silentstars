---
repo: "dougchansan/pkmn-colosseum"
name: "pkmn-colosseum"
description: "ai decompilation project for pokemon colosseum"
readmeQualityOk: true
url: "https://github.com/dougchansan/pkmn-colosseum"
language: "C"
languages: ["C"]
languagePcts: [89]
stars: 8
forks: 3
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2026-03-30T07:04:39Z"
lastCommitAt: "2026-07-14T05:54:01Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 58
maintainers: ["dougchansan"]
openGraphImageUrl: "https://opengraph.githubassets.com/9513aa535aaf27fb3757ed20558ed2ee82221ee962c0ec4efbc79b8788fdad81/dougchansan/pkmn-colosseum"
---

# Pokémon Colosseum Decompilation (GC6E01)

A matching decompilation project for the GameCube game **Pokémon Colosseum**
(`GC6E01`, NTSC-U). The active project has been reset to the standard
[dtk-template](https://github.com/encounter/dtk-template) workflow.

## Status

| Metric | Value |
|---|---|
| Fuzzy match | 37.57% |
| Function match | 54.83% (4,717 / 8,603 functions) |
| Code match | 20.49% (511,324 / 2,495,108 matched code bytes) |
| Data match | 97.28% (2,136,477 / 2,196,124 matched data bytes) |
| Linked into DOL | 110 / 644 units (1.53% of code) |

These numbers come from the canonical dtk/objdiff report generated at
`build/GC6E01/report.json`. Old campaign metrics and helper reports are archived
under `archive/previous_campaign/` and are not used for the published progress.
After rebuilding the report, refresh the table with:

```bash
python3 tools/update_readme_progress.py
```

Use `python3 tools/update_readme_progress.py --check` to verify that the README
matches the current report.

The published denominator is frozen in
`config/GC6E01/object_map.freeze.json`. After changing `splits.txt`,
`symbols.txt`, or object declarations, rebuild the report and run:

```bash…
