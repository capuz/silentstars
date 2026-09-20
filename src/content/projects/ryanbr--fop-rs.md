---
repo: "ryanbr/fop-rs"
name: "fop-rs"
description: "FOP  Filter Orderer and Preener re-written in Rust"
readmeQualityOk: true
url: "https://github.com/ryanbr/fop-rs"
language: "Rust"
languages: ["Rust"]
languagePcts: [98]
stars: 13
forks: 0
openIssues: 0
closedIssues: 5
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2025-12-07T09:42:50Z"
lastCommitAt: "2026-09-20T08:46:20Z"
lastReleaseAt: "2025-12-10T10:48:09Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 59
maintainers: ["ryanbr", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/35fb31574fab198b52b5dd233afc5f877ed8c79e44f9c310c957101c6e14d671/ryanbr/fop-rs"
---

# FOP - Filter Orderer and Preener (Rust Edition)

A Rust port of the EasyList FOP tool for sorting and cleaning ad-blocking filter lists.

## Features

- **Filter sorting**: Alphabetically sorts blocking rules and element hiding rules
- **Domain combining**: Merges rules with identical selectors/patterns but different domains
- **Option normalization**: Converts uBO-specific options to standard ABP format (can be disabled)
- **Wildcard cleanup**: Removes unnecessary wildcards from filters
- **Validation**: Removes invalid/overly-broad rules (TLD-only, too short, etc.)
- **Git integration**: Commit changes directly to repositories (can be disabled)
- **easylist_adservers.txt validation**: Ensures rules start with `|` or `/`
- **:has-text() merging**: Combines rules with same base selector into single regex
- **Parallel processing**: Processes files in parallel via Rayon, using up to 8 worker threads. Past that, extra workers mostly buy memory rather than speed; set `--threads=N` (or `RAYON_NUM_THREADS`) to override

## Extended Syntax Support

FOP preserves extended filter syntax from various adblockers:

### uBlock Origin
- Scriptlet injection: `##+js(...)`,…
