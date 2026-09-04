---
repo: "superlcr/huasheng-cli"
name: "huasheng-cli"
description: "hs — Huasheng on the command line. A script goes in, a finished video comes out. A single binary, --json everywhere, built for external developers and AI clients."
readmeQualityOk: true
url: "https://github.com/superlcr/huasheng-cli"
language: "Shell"
languages: ["Shell", "PowerShell"]
languagePcts: [51, 49]
stars: 11
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 8
createdAt: "2026-08-13T12:16:00Z"
lastCommitAt: "2026-09-04T08:11:06Z"
lastReleaseAt: "2026-09-04T07:23:41Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 78
undervaluedScore: 30
maintainers: ["superlcr"]
openGraphImageUrl: "https://opengraph.githubassets.com/7707e732c6f3b90f65e3cecebd29c91e1295f77e045fc66f638b9ddda787b2a2/superlcr/huasheng-cli"
---

# hs · Huasheng CLI

**From one sentence to a finished, publishable video**

[简体中文](https://github.com/superlcr/huasheng-cli/blob/HEAD/README.zh.md) · **English**

</div>

---

`hs` brings [Huasheng](https://www.huasheng.cn)'s video creation pipeline to the command line.
Give it a sentence or a script, and it handles storyboarding, narration, footage and
composition — producing a video you can export or publish directly. You can step in and
adjust at any point along the way.

**A single self-contained binary.** No Node, no Python, no runtime to install.
Every command supports `--json`, designed for scripts and AI clients.

## Step 1: install and sign in

Do this once, regardless of which client you use later.

### Install

Pick whichever suits you — all three give you the same binary.

**macOS / Linux**

```bash
curl -fsSL https://raw.githubusercontent.com/superlcr/huasheng-cli/main/install.sh | sh
```

**Windows**, in PowerShell:

```powershell
irm https://raw.githubusercontent.com/superlcr/huasheng-cli/main/install.ps1 | iex
```

Either installer downloads the package for your platform, **verifies its SHA256**, and extracts
it to `~/.local/bin` (`%LOCALAPPDATA%\Programs\hs` on…
