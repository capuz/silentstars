---
repo: "javinizer/javinizer-go"
name: "javinizer-go"
description: "Javinizer written in Go and Svelte. This is a modern replacement for the original Javinizer. (NSFW) Organize your local Japanese Adult Video (JAV) library."
readmeQualityOk: true
url: "https://github.com/javinizer/javinizer-go"
language: "Go"
languages: ["Go"]
languagePcts: [90]
stars: 70
forks: 13
openIssues: 3
closedIssues: 45
watchers: 3
contributors: 2
recentReleases: 8
createdAt: "2026-03-15T23:04:41Z"
lastCommitAt: "2026-07-04T22:51:24Z"
lastReleaseAt: "2026-04-30T12:50:07Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 97
undervaluedScore: 40
maintainers: ["seeyabye"]
openGraphImageUrl: "https://opengraph.githubassets.com/d531526149c67b1f8d42de3874b053e302d9a52026c35174e53b87f22b1d4808/javinizer/javinizer-go"
discussionCount: 2
---

# Javinizer Go

A metadata scraper and file organizer for Japanese Adult Videos (JAV), with CLI, TUI, REST API, and a web UI. A Go recreation of the original [Javinizer](https://github.com/jvlflame/Javinizer).

---

## Quick Start

The fastest way to try Javinizer is Docker — one command gives you the web UI:

```bash
mkdir -p ./data
curl -o ./data/config.yaml \
  https://raw.githubusercontent.com/javinizer/javinizer-go/main/configs/config.yaml.example

docker run --rm \
  --user "$(id -u):$(id -g)" \
  -p 8080:8080 \
  -v "$(pwd)/data:/javinizer" \
  -v "/path/to/your/media:/media" \
  ghcr.io/javinizer/javinizer-go:latest
```

Open **http://localhost:8080**, create your admin login on first startup, and start scraping.

- Replace `/path/to/your/media` with your JAV library path.
- On Unraid, use `--user 99:100`.
- Prefer [Homebrew](#homebrew-macos--linux), a [one-shot installer](#one-shot-install-linux--macos--windows), a [binary](#prebuilt-binaries-manual-download), or [build from source](#build-from-source) for a native install.

> **First time?** Skim [Features](#features) to see what it does, then jump to [Usage](#usage) or the [Web UI](#web-ui) section.

---

## Features

|…
