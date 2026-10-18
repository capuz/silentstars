---
repo: "Rumia-Channel/narou.rs"
name: "narou.rs"
description: "Rust implementation of narou.rb"
originalDescription: "Narou rb の rust 実装版"
descriptionLang: "ja"
readmeQualityOk: true
url: "https://github.com/Rumia-Channel/narou.rs"
language: "Rust"
languages: ["Rust"]
languagePcts: [87]
stars: 29
forks: 4
openIssues: 0
closedIssues: 32
watchers: 3
contributors: 2
recentReleases: 0
createdAt: "2026-04-05T13:25:16Z"
lastCommitAt: "2026-10-18T08:17:18Z"
lastReleaseAt: "2026-04-23T05:33:32Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 43
maintainers: ["Rumia-Channel"]
openGraphImageUrl: "https://opengraph.githubassets.com/4f6ed9c835cd16f39ca512661d4117284b730f4dc0d8c08680a36925ef60b83b/Rumia-Channel/narou.rs"
---

# narou_rs

narou_rs is a CLI / Web UI tool for fetching, managing, and converting Japanese web novels. It emphasizes compatibility with [narou.rb](https://github.com/whiteleaf7/narou) in externally observable behavior, configuration files, YAML, and output formats, while being implemented in Rust to be easier to maintain and safer.

This README summarizes installation, basic operations, and key notes. For detailed command compatibility and unfinished items, see `COMMANDS.md`.

## Changelog

The main changes for each version are summarized in [VERSION.md](https://github.com/Rumia-Channel/narou.rs/blob/HEAD/VERSION.md).

## Acknowledgments

This software is based on [narou.rb](https://github.com/whiteleaf7/narou) created by [whiteleaf](https://github.com/whiteleaf7) and the [forked version](https://github.com/ponponusa/narou-mod) by [ponpon.USA](https://github.com/ponponusa).

Thank you to both of you for developing such excellent software.

## Features

- Downloading, updating, and converting web novels
- Bulk registration from series/collection URLs on なろう, R18 なろう, and カクヨム
- Reading and writing management data and settings under `.narou/`
- Site-definition-based fetching via…
