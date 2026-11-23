---
repo: "smallmain/moontv-aggr-config"
name: "moontv-aggr-config"
description: "Automatically aggregates multiple MoonTV/LunaTV config repositories into one continuously updated config set."
readmeQualityOk: true
url: "https://github.com/smallmain/moontv-aggr-config"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-03-06T03:49:06Z"
lastCommitAt: "2026-11-23T12:22:38Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 54
maintainers: ["github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/927279347bd83fe218e6871424dc4dd8038ec1b22d3e8476d1ec19143f8e8506/smallmain/moontv-aggr-config"
---

[English](https://github.com/smallmain/moontv-aggr-config/blob/HEAD/README.md) | [简体中文](https://github.com/smallmain/moontv-aggr-config/blob/HEAD/README_zh-CN.md)

# MoonTV Aggregator Config

Automatically aggregates multiple MoonTV/LunaTV config repositories into one continuously updated config set.

This repository does more than mirror upstream files:

- clones and scans multiple upstream repositories
- detects the most likely primary config file instead of assuming one fixed path
- normalizes `api`, `name`, and `detail`
- unwraps proxy-style URLs such as `?url=...` back to the real API endpoint
- deduplicates and ranks entries by cross-repo consensus
- outputs four config variants
- runs MoonTVPlus-style search validation and writes the latest report back into both README files

## Output Files

Each build generates:

- `lite.json` / `lite.txt`
  Safe-only sources with a higher cross-repo consensus threshold.
- `lite-plus18.json` / `lite-plus18.txt`
  Lite set including adult sources.
- `full.json` / `full.txt`
  Full safe-only set.
- `full-plus18.json` / `full-plus18.txt`
  Full set including adult sources.
