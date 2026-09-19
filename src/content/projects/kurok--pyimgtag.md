---
repo: "kurok/pyimgtag"
name: "pyimgtag"
description: "Tag images with AI using a local Gemma model (via Ollama) — EXIF GPS reverse geocoding, Apple Photos write-back on macOS, no cloud, fully on-device"
readmeQualityOk: true
url: "https://github.com/kurok/pyimgtag"
language: "Python"
languages: ["Python"]
languagePcts: [93]
topics: ["gemma", "image-tagging", "macos", "ollama", "photos", "python", "exif", "local-ai", "reverse-geocoding"]
stars: 5
forks: 1
openIssues: 6
closedIssues: 57
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-04-15T15:28:42Z"
lastCommitAt: "2026-09-19T08:13:27Z"
lastReleaseAt: "2026-04-20T07:47:44Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 94
undervaluedScore: 34
maintainers: ["kurok"]
openGraphImageUrl: "https://opengraph.githubassets.com/3d286e02affb7ae63ec4c8f3274a039a509aa06c64ba368fee5690d2f90ed40c/kurok/pyimgtag"
---

# pyimgtag

**Tag your whole photo library with a local AI model — your images never leave your machine.** `pyimgtag` runs a vision model (Gemma via [Ollama](https://ollama.ai)) over a folder or your Apple Photos library and writes 1–5 searchable tags, a scene category, location (from EXIF GPS, never guessed), and cleanup hints for every photo — on-device by default.

Then `query`, filter, score, and prune your library straight from the CLI. Optional cloud backends (Claude, OpenAI, Gemini) when you want them. Runs on **macOS, Linux, and Windows**.

## Demo

<sub>Recorded against the bundled mock backend with [asciinema](https://asciinema.org) + [agg](https://github.com/asciinema/agg) — regenerate with `docs/record-demo.sh`.</sub>

## Install

```bash
pip install pyimgtag
```

## Minimal example

```bash
pip install pyimgtag
ollama pull gemma4:e4b              # one-time: pull the local vision model
pyimgtag run --input-dir ~/Photos   # tag a folder, fully on-device
```

Add `--dry-run` to preview without writing, `--limit N` to sample, or `--output-json results.json` to export — see [Quick Start](#quick-start) below.

> **See also:**…
