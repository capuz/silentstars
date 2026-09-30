---
repo: "djyt/sonic2mod"
name: "sonic2mod"
description: "Convert SMPS Sonic Music Files to MOD Format"
readmeQualityOk: true
url: "https://github.com/djyt/sonic2mod"
language: "Python"
languages: ["Python"]
languagePcts: [78]
topics: ["amiga", "mod", "sonic"]
stars: 31
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-02-16T21:01:25Z"
lastCommitAt: "2026-09-30T09:56:44Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 76
undervaluedScore: 37
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/61730f304d3f5439b955dae15fe37805941832a8f0a6c4b399040ec6e84f6741/djyt/sonic2mod"
---

# SONIC2MOD

Convert Sonic The Hedgehog 1 SMPS assembly music files from the Sega Megadrive to MOD format.

> reassembler 2026 | https://youtube.com/@reassembler68k | https://reassembler.blogspot.com

## Requirements

- Python 3.11+
- GCC or MSVC on PATH *(only needed if recompiling the synthesis DLLs — pre-compiled Windows binaries are included)*

## Installation

```bash
git clone https://github.com/djyt/sonic2mod
cd sonic2mod
pip install .
```

For a development install (edits to source take effect immediately):

```bash
pip install -e .
```

This registers three CLI commands: `sonic2mod` (convert), `sonic2mod-analyze` (analyse) and
`sonic2wav` (render the sound effects). All three take `--version`.

## Quick Start

There are two main components to this package:

1/ A **converter** to convert SMPS files to MOD, including FM and PSG synthesis.

2/ An **analyzer** to parse Sonic's SMPS files. *(Only required if you're planning to make your own configs from scratch - if you just want to convert the existing Sonic tracks you can ignore this).*

Once installed, run the following commands from the repo root:

**Convert a song:**

```bash
sonic2mod configs/02_green_hill_zone.yaml
```…
