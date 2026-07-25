---
repo: "shenmin/cassotis-lexicon"
name: "cassotis-lexicon"
description: "Open-source Chinese lexicon datasets and a reproducible build pipeline for Cassotis IME. 为言泉输入法提供开源中文词库数据与可复现构建管线，包含简繁词库、分层领域词汇，以及用于 AI 辅助候选排序的语料训练数据。"
readmeQualityOk: true
url: "https://github.com/shenmin/cassotis-lexicon"
homepage: "https://www.cassotis.org"
language: "Python"
languages: ["Python"]
languagePcts: [97]
topics: ["chinese", "ime", "lexicon", "double-pinyin", "input-method", "pinyin", "full-pinyin"]
stars: 5
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 7
createdAt: "2026-03-03T18:10:25Z"
lastCommitAt: "2026-07-25T06:00:19Z"
lastReleaseAt: "2026-06-19T10:46:36Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 79
undervaluedScore: 63
maintainers: ["shenmin"]
openGraphImageUrl: "https://opengraph.githubassets.com/4b0c53b7adaca664f10601ec7f7f6a23b965f46c6da0124b6ef28e773e7db335/shenmin/cassotis-lexicon"
---

# Cassotis Lexicon

</p>

</p>

English | [简体中文](https://github.com/shenmin/cassotis-lexicon/blob/HEAD/README.CN.md)

Lexicon build and release repository for Cassotis IME.

## Repository role
- Maintains lexicon build scripts, manifests, and generated outputs.
- Publishes versioned lexicon and local language-model artifacts consumed by Cassotis IME.
- Supports external-source bootstrap and reproducible generated dictionary builds.
- Keeps attribution and release policy files aligned with generated artifacts.

## Current dictionary snapshot (2026-07-25 build)

| File | Variant | Entries |
|------|---------|---------|
| `data/generated/dict_clean_sc.txt` | Simplified Chinese | 188,007 |
| `data/generated/dict_clean_tc.txt` | Traditional Chinese | 191,082 |
| `data/generated/dict_unihan_sc.txt` | Simplified single-char (Unihan) | 23,907 |
| `data/generated/dict_unihan_tc.txt` | Traditional single-char (Unihan) | 24,167 |

## Local ranking model data and AI reranking support

Cassotis Lexicon publishes local ranking artifacts alongside its lexical dictionaries. Query-path priors were already available in v1.0.0; v1.1.0 added corpus-trained statistical language-model data. These…
