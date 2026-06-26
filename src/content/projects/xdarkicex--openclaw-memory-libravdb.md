---
repo: "xDarkicex/openclaw-memory-libravdb"
name: "openclaw-memory-libravdb"
description: "Persistent local memory engine for OpenClaw — replaces default memory-system with a full context lifecycle: hybrid vector recall, automatic compaction, and domain-adaptive gating over LibraVDB"
url: "https://github.com/xDarkicex/openclaw-memory-libravdb"
language: "TypeScript"
languages: ["TypeScript", "JavaScript"]
languagePcts: [67, 29]
topics: ["ai-memory", "compaction", "context-engine", "golang", "hybrid-search", "local-first", "memory", "nlp", "onnx", "openclaw"]
stars: 9
forks: 7
openIssues: 23
closedIssues: 93
watchers: 1
contributors: 9
recentReleases: 10
createdAt: "2026-03-29T10:01:37Z"
lastCommitAt: "2026-06-26T06:46:16Z"
lastReleaseAt: "2026-03-30T09:12:46Z"
status: "thriving"
tags: ["solo_builder", "release_machine", "fork_magnet"]
healthScore: 94
undervaluedScore: 67
maintainers: ["xDarkicex", "github-actions[bot]", "JuanHuaXu"]
openGraphImageUrl: "https://opengraph.githubassets.com/6465aeafc1fbd01e4244c403ed5998b190ad81407fdcee8a7f355d335a856b28/xDarkicex/openclaw-memory-libravdb"
discussionCount: 1
---

# ♎ LibraVDB - Memory and Context Management

</div>

</div>

`@xdarkicex/openclaw-memory-libravdb` is a local-first OpenClaw memory plugin
backed by the `libravdbd` memory kernel. It replaces the lightweight default memory
path with scoped session, user, and global memory; continuity-aware prompt
assembly; durable recall; and kernel-owned compaction.

[Install](./docs/install.md) · [Full installation reference](./docs/installation.md) · [Architecture](./docs/architecture.md) · [Security](./docs/security.md) · [Performance and tuning](./docs/performance-and-tuning.md) · [Contributing](./docs/contributing.md)

New install? Start here: [Install guide](./docs/install.md).

## Install

Install `libravdbd` with your system package manager, then install
the OpenClaw plugin.

**macOS (Homebrew)**

```bash
brew tap xDarkicex/homebrew-openclaw-libravdb-memory
brew install libravdbd
brew services start libravdbd
```

> **After upgrades:** Always restart the memory kernel so the newly installed binary takes effect:
> ```bash
> # macOS (Homebrew)
> brew services restart libravdbd
>
> # Linux (systemd)
> systemctl --user restart libravdbd
>
> # Linux (no systemd — kill and restart manually)
>…
