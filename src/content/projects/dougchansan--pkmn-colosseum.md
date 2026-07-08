---
repo: "dougchansan/pkmn-colosseum"
name: "pkmn-colosseum"
description: "ai decompilation project for pokemon colosseum"
readmeQualityOk: true
url: "https://github.com/dougchansan/pkmn-colosseum"
language: "C"
languages: ["C"]
languagePcts: [89]
stars: 6
forks: 2
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-03-30T07:04:39Z"
lastCommitAt: "2026-07-08T05:40:39Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 60
maintainers: ["dougchansan"]
openGraphImageUrl: "https://opengraph.githubassets.com/72ad7e36ba80dc9b461260fb1c886a19625ac28aa0aebf0b2bc695b160133e42/dougchansan/pkmn-colosseum"
---

# Pokémon Colosseum Decompilation (GC6E01)

A matching decompilation project for the GameCube game **Pokémon Colosseum**
(`GC6E01`, NTSC-U). The active project has been reset to the standard
[dtk-template](https://github.com/encounter/dtk-template) workflow.

## Status

| Metric | Value |
|---|---|
| Fuzzy match | 32.64% |
| Function match | 46.14% (3,969 / 8,603 functions) |
| Code match | 16.91% (421,948 / 2,495,108 matched code bytes) |
| Data match | 97.33% (2,137,589 / 2,196,124 matched data bytes) |

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

```bash
python3 tools/check_object_map_freeze.py
```

The check…
