---
repo: "eladser/mtop"
name: "mtop"
description: "htop for your local AI"
readmeQualityOk: true
url: "https://github.com/eladser/mtop"
language: "Go"
languages: ["Go"]
languagePcts: [100]
stars: 13
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 2
createdAt: "2026-06-09T20:20:18Z"
lastCommitAt: "2026-11-10T14:49:23Z"
lastReleaseAt: "2026-09-30T04:48:49Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 74
undervaluedScore: 22
maintainers: ["eladser"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1264364812/4724cda0-3f7d-4dc0-aa55-0b8ef7086393"
fundingLinks: ["KO_FI:https://ko-fi.com/eladser"]
---

One terminal window for whatever you're running locally (Ollama, llama.cpp, LM Studio, vLLM, llama-swap, Lemonade, SGLang). It shows the loaded models and how much VRAM they're sitting on, the GPU, and the requests going through with their tok/s. Hit `c` to flip the middle pane to per-model stats.

It'll also kick out models that won't leave. Pick one, press `u`, gone. Ollama is supposed to unload idle models on its own and usually does, but every so often `ollama ps` shows something that expired ten minutes ago still parked on 8 gigs. mtop flags those as overdue. `-idle-unload 15m` clears them for you.

## Install

macOS or Linux:

```
brew install eladser/tap/mtop
```

Windows:

```
scoop bucket add eladser https://github.com/eladser/scoop-bucket
scoop install mtop
winget install eladser.mtop
```

Or grab a binary from [releases](https://github.com/eladser/mtop/releases), or build it with `go install github.com/eladser/mtop@latest`.

Run `mtop`. It looks for the usual servers on their usual ports, no config file to write.

## Seeing requests

Most local servers don't expose per-request numbers anywhere. The data only exists in the response stream as it streams. So mtop runs a…
