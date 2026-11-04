---
repo: "JinShuo-Li/latch"
name: "latch"
description: "A ground-up agent project designed to work with APIs from various LLM providers and offer long-term task execution capabilities."
readmeQualityOk: true
url: "https://github.com/JinShuo-Li/latch"
language: "Rust"
languages: ["Rust"]
languagePcts: [81]
stars: 6
forks: 0
openIssues: 1
closedIssues: 5
watchers: 1
contributors: 5
recentReleases: 10
createdAt: "2026-09-11T03:10:01Z"
lastCommitAt: "2026-11-04T02:57:32Z"
lastReleaseAt: "2026-11-03T09:37:42Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 92
undervaluedScore: 58
maintainers: ["JinShuo-Li", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/6bec3a8beb361a6acafdc1b6b08e93cdff39c4eef11c048b66937e5349554849/JinShuo-Li/latch"
discussionCount: 1
---

# Latch

Latch is a terminal coding agent for Linux, Windows, and Apple Silicon macOS. It keeps sessions on disk and runs commands inside a mandatory platform sandbox. The current version is 0.3.4.

[Website](https://jinshuo-li.github.io/latch/) · [Documentation](https://jinshuo-li.github.io/latch/docs/introduction/) · [Example configuration](https://github.com/JinShuo-Li/latch/blob/HEAD/config.example.toml) · [Report a problem](https://github.com/JinShuo-Li/latch/issues)

## Install

Install the latest precompiled release for Linux (x86_64 or ARM64), Windows (x86_64), or Apple Silicon macOS; no Rust toolchain is needed.

**Linux / Apple Silicon macOS (Bash)**

```sh
curl -fsSL https://jinshuo-li.github.io/latch/install.sh | bash
```

**Windows (PowerShell)**

```powershell
& { $ErrorActionPreference='Stop'; [Net.ServicePointManager]::SecurityProtocol=[Net.ServicePointManager]::SecurityProtocol -bor [Net.SecurityProtocolType]::Tls12; irm -DisableKeepAlive https://jinshuo-li.github.io/latch/install.ps1 | iex; $env:Path="$env:LOCALAPPDATA\Programs\Latch\bin;$env:Path"; latch --version }
```

The Windows command enables TLS 1.2, adds the default installation directory to
the current…
