---
repo: "LottoLottoLotto/localmaxxing-cli"
name: "localmaxxing-cli"
description: "localmaxxing.com cli"
readmeQualityOk: true
url: "https://github.com/LottoLottoLotto/localmaxxing-cli"
language: "Go"
languages: ["Go"]
languagePcts: [87]
stars: 24
forks: 2
openIssues: 9
closedIssues: 3
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-05-22T06:55:12Z"
lastCommitAt: "2026-08-12T05:15:23Z"
lastReleaseAt: "2026-06-28T09:34:01Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 68
undervaluedScore: 37
maintainers: ["LottoLottoLotto"]
openGraphImageUrl: "https://opengraph.githubassets.com/4a6a70537bf7d60a010be146d44097165af6df865453c2b49a90d53a768c72cc/LottoLottoLotto/localmaxxing-cli"
---

# LocalMaxxing CLI

The official CLI for [localmaxxing.com](https://localmaxxing.com) — run local LLM inference speed tests and quality benchmarks, then submit results from your terminal.

## Install

### Download Binary (Recommended)

Download a pre-built archive for your platform from the [latest release](https://github.com/LottoLottoLotto/localmaxxing-cli/releases/latest):

| Platform | Asset |
|----------|-------|
| Linux (amd64) | `lmx-linux-amd64.tar.gz` |
| Linux (arm64) | `lmx-linux-arm64.tar.gz` |
| macOS (Apple Silicon) | `lmx-darwin-arm64.tar.gz` |
| Windows (amd64) | `lmx-windows-amd64.zip` |

Linux and macOS binaries ship inside `.tar.gz` archives so executable bits survive the download. Windows binaries ship inside a `.zip`. Each archive includes `lmx`/`lmx.exe` and the bundled `lmx-llama-score-hellaswag` helper.

```bash
# Linux / macOS (adjust the asset name for your platform)
base=https://github.com/LottoLottoLotto/localmaxxing-cli/releases/latest/download
curl -fsSLO "$base/lmx-linux-amd64.tar.gz"
curl -fsSLO "$base/checksums.txt"
sha256sum --check --ignore-missing checksums.txt   # macOS: shasum -a 256 --check --ignore-missing checksums.txt
tar -xzf…
