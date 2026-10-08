---
repo: "HLND2T/CS2_VibeSignatures"
name: "CS2_VibeSignatures"
description: "Generate CS2 signatures via Agent SKILLS with ida-pro-mcp"
readmeQualityOk: true
url: "https://github.com/HLND2T/CS2_VibeSignatures"
language: "Python"
languages: ["Python"]
languagePcts: [96]
stars: 67
forks: 11
openIssues: 5
closedIssues: 365
watchers: 2
contributors: 6
recentReleases: 0
createdAt: "2026-01-23T02:45:56Z"
lastCommitAt: "2026-10-08T10:51:07Z"
lastReleaseAt: "2026-05-09T06:28:00Z"
status: "thriving"
tags: []
healthScore: 98
undervaluedScore: 42
maintainers: ["hzqst"]
openGraphImageUrl: "https://opengraph.githubassets.com/ad425a822ea0964b467fe9558ec5c248e97d46cdb0dfb12c9b18667dff46de9a/HLND2T/CS2_VibeSignatures"
discussionCount: 0
---

# CS2 VibeSignatures

[中文文档](https://github.com/HLND2T/CS2_VibeSignatures/blob/HEAD/README_CN.md) | [GUI](https://hlnd2t.github.io/CS2_VibeSignatures/)

CS2 VibeSignatures generates CS2 signatures and offsets, updates HL2SDK_CS2 C++ headers through Agent skills and MCP calls, and produces versioned downstream gamedata.

The project is designed to update signatures, offsets, and C++ headers without manual intervention. It currently automates the signatures and offsets consumed by CounterStrikeSharp, CS2Fixes, and other supported projects.

## Quick start

Install the [requirements](https://github.com/HLND2T/CS2_VibeSignatures/blob/HEAD/docs/en/requirements.md), then prepare and analyze one game version:

```bash
uv sync
uv run download_depot.py -tag 14156
uv run copy_depot_bin.py -gamever 14156 -platform all-platform
uv run ida_analyze_bin.py -gamever 14156 -oldgamever 14155
```

These commands populate the binary workspace under `bin/<GAMEVER>/` and run the configured deterministic, LLM-assisted, and Agent-assisted analysis. Canonical per-symbol results belong in `bin_artifacts/<GAMEVER>/` and must be committed with the source/config changes that produce them.

## Documentation

-…
