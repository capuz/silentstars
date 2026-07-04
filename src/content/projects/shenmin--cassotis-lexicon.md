---
repo: "shenmin/cassotis-lexicon"
name: "cassotis-lexicon"
description: "Open-source Chinese lexicon datasets and build pipeline powering Cassotis IME candidate ranking."
url: "https://github.com/shenmin/cassotis-lexicon"
homepage: "https://www.cassotis.org"
language: "Python"
languages: ["Python"]
languagePcts: [97]
stars: 5
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 8
createdAt: "2026-03-03T18:10:25Z"
lastCommitAt: "2026-07-04T06:12:07Z"
lastReleaseAt: "2026-06-19T10:46:36Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 79
undervaluedScore: 63
maintainers: ["shenmin"]
openGraphImageUrl: "https://opengraph.githubassets.com/e43503e5ceb9302b2195228b8e83380452700bd9caeb5f347b46f3c71352bcd3/shenmin/cassotis-lexicon"
---

# Cassotis Lexicon

</p>

</p>

English | [简体中文](README.CN.md)

Lexicon build and release repository for Cassotis IME.

## Repository role
- Maintains lexicon build scripts, manifests, and generated outputs.
- Supports external-source bootstrap and reproducible generated dictionary builds.
- Keeps attribution and release policy files aligned with generated artifacts.

## Current dictionary snapshot (2026-07-04 build)

| File | Variant | Entries |
|------|---------|---------|
| `data/generated/dict_clean_sc.txt` | Simplified Chinese | 177,613 |
| `data/generated/dict_clean_tc.txt` | Traditional Chinese | 180,939 |
| `data/generated/dict_unihan_sc.txt` | Simplified single-char (Unihan) | 23,905 |
| `data/generated/dict_unihan_tc.txt` | Traditional single-char (Unihan) | 24,166 |

## External sources and project-maintained supplements (`external_broad`)

### External sources

| Source | License | Usage |
|--------|---------|-------|
| Unicode Unihan | Unicode-3.0 | Character-level Mandarin fallback and single-char dictionaries |
| CC-CEDICT | CC BY-SA 4.0 | Core dictionary entries and pinyin |
| OpenCC STPhrases | Apache-2.0 | SC-TC phrase mapping |
| THUOCL | THUOCL custom open…
