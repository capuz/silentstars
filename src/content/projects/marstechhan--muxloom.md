---
repo: "MarsTechHAN/Muxloom"
name: "Muxloom"
description: "A terminal-native control plane for persistent Codex, Claude Code, and shell sessions across local and SSH machines."
readmeQualityOk: true
url: "https://github.com/MarsTechHAN/Muxloom"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
stars: 11
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 3
createdAt: "2026-07-21T14:36:51Z"
lastCommitAt: "2026-10-26T09:16:46Z"
lastReleaseAt: "2026-08-11T07:02:26Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 76
undervaluedScore: 49
maintainers: ["MarsTechHAN"]
openGraphImageUrl: "https://opengraph.githubassets.com/2cc4e20e38f44d18929a06fa2c1f9865c5993d9c83483315a8927fc82270fcaf/MarsTechHAN/Muxloom"
---

# Muxloom

**A terminal-native workspace for persistent Codex, Claude Code, OpenCode, Pi, and shell sessions across local and SSH machines.**

[English](https://github.com/MarsTechHAN/Muxloom/blob/HEAD/README.md) · [中文](https://github.com/MarsTechHAN/Muxloom/blob/HEAD/README.zh-CN.md) · [Releases](https://github.com/MarsTechHAN/Muxloom/releases) · [CI](https://github.com/MarsTechHAN/Muxloom/actions/workflows/regression.yml)

**Homebrew (macOS)** — tap once, then take either line:

```bash
brew tap marstechhan/muxloom https://github.com/MarsTechHAN/Muxloom

brew install --cask muxloom                               # stable: tagged releases
brew install --HEAD marstechhan/muxloom/muxloom-nightly   # nightly: newest green commit on main
```

> [!IMPORTANT]
> Muxloom manages terminal sessions; it does not replace the agent CLIs.
> Those CLIs run normally on the selected target. A detached `muxloomd` process
> owns each managed PTY, so closing the dashboard or losing SSH never stops the
> agent.

## Contents

- [Why Muxloom](#why-muxloom)
- [Features](#features)
- [Feature tour](#feature-tour)
- [Install](#install)
- [Quick start](#quick-start)
- [Controls](#controls)
-…
