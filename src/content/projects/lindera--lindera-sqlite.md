---
repo: "lindera/lindera-sqlite"
name: "lindera-sqlite"
description: "Lindera for SQLite FTS5 extention"
readmeQualityOk: true
url: "https://github.com/lindera/lindera-sqlite"
language: "Rust"
languages: ["Rust"]
languagePcts: [96]
stars: 24
forks: 2
openIssues: 0
closedIssues: 6
watchers: 1
contributors: 7
recentReleases: 0
createdAt: "2024-10-25T14:50:21Z"
lastCommitAt: "2026-11-23T13:32:25Z"
lastReleaseAt: "2025-06-29T13:44:39Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 80
undervaluedScore: 44
maintainers: ["mosuka", "Saeris", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/60a2eafeb35c53559e7a240cab4bceef4e254516370dddb089d1dfa179bfbd73/lindera/lindera-sqlite"
fundingLinks: ["GITHUB:https://github.com/mosuka"]
---

# Overview

lindera-sqlite is a C ABI library which exposes a [FTS5](https://www.sqlite.org/fts5.html) tokenizer function.

When used as a custom FTS5 tokenizer this enables application to support Chinese, Japanese and Korean in full-text search.

## Use a prebuilt extension

Every [release](https://github.com/lindera/lindera-sqlite/releases) publishes a per-platform, per-dictionary archive containing the shared library and a `lindera.yml` matching the dictionary that archive embedded. Unpack it and point `LINDERA_CONFIG_FILE` at that file:

```sh
% unzip lindera-sqlite-x86_64-unknown-linux-gnu-v7.0.0.zip
% export LINDERA_CONFIG_FILE=./lindera.yml
```

Then skip to [Load extension](#load-extension), using the unpacked library path.

## Build extension

```sh
% cargo build --features=embed-cjk
```

Each `embed-*` feature embeds a different set of dictionaries into the built extension:
