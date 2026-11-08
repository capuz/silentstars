---
repo: "shashankswe2020-ux/rigspark"
name: "rigspark"
description: "Which local LLMs can your computer run? Hardware-aware CLI, TUI and GUI: yes/slow/no verdicts and tok/s from your GPU VRAM and RAM, then verified installs via Ollama, llama.cpp, MLX and LM Studio. Native Rust."
readmeQualityOk: true
url: "https://github.com/shashankswe2020-ux/rigspark"
homepage: "https://www.rigspark.si/"
language: "Rust"
languages: ["Rust"]
languagePcts: [83]
topics: ["llms", "ai", "apple-silicon", "cli", "gpu", "hardware", "inference", "llama-cpp", "llm", "lm-studio"]
stars: 20
forks: 0
openIssues: 22
closedIssues: 182
watchers: 1
contributors: 2
recentReleases: 10
createdAt: "2026-08-04T07:52:10Z"
lastCommitAt: "2026-11-08T10:41:07Z"
lastReleaseAt: "2026-09-30T09:04:22Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem", "funded", "release_machine", "under_pressure"]
healthScore: 96
undervaluedScore: 52
maintainers: ["shashankswe2020-ux", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/1ef092af759896e534c179cf3674790e69d312ccc5f7a2e3af1da247afe5cfcb/shashankswe2020-ux/rigspark"
fundingLinks: ["BUY_ME_A_COFFEE:https://buymeacoffee.com/shashanksw9"]
---

RigSpark

  RigSpark is a hardware-aware native Rust CLI that gives local AI models a
  tokens per second before you commit to the weights.

> **New in 3.0:** a redesigned browser workspace. Every feature is still there,
> but each control appears only when you need it, and the Models view now loads
> the full ranked catalog.
> [See what changed →](https://github.com/shashankswe2020-ux/rigspark/blob/HEAD/CHANGELOG.md#300---2026-10-08)

---

## Let Sparky check your rig

RigSpark keeps the first question simple: **will this model actually run here?**
The answer comes from a curated offline catalog and your detected hardware, not
from a download you have already waited for.

### 1. Install RigSpark

Homebrew on macOS or Linux:

```bash
brew install shashankswe2020-ux/tap/rigspark
```

On a Mac you can also install the desktop app: download `RigSpark_aarch64.dmg`
(Apple Silicon) or `RigSpark_x86_64.dmg` (Intel) from the
[latest release](https://github.com/shashankswe2020-ux/rigspark/releases/latest)
and drag RigSpark to Applications. The app is signed with a Developer ID and
notarized by Apple, so it opens without a Gatekeeper warning. The app bundles llama.cpp, so it needs no other…
