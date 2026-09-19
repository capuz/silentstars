---
repo: "firewalker06/tycho"
name: "tycho"
description: "Its Factorio for coding agents"
readmeQualityOk: true
url: "https://github.com/firewalker06/tycho"
language: "Ruby"
languages: ["Ruby"]
languagePcts: [75]
stars: 48
forks: 5
openIssues: 0
closedIssues: 8
watchers: 2
contributors: 4
recentReleases: 2
createdAt: "2026-05-23T01:58:17Z"
lastCommitAt: "2026-09-19T01:17:01Z"
lastReleaseAt: "2026-07-04T04:24:09Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 41
maintainers: ["firewalker06", "webbrain-one"]
openGraphImageUrl: "https://opengraph.githubassets.com/97723c0ca91247ba767d3b0fa2320832ef18a2a16522af2b2ae497207cc627d1/firewalker06/tycho"
---

# Tycho

Tycho is a local-first control center for supervising coding-agent sessions
across projects. It gives a solo developer or technical lead one place to
start agents, answer follow-up questions, inspect logs and results, and run
recurring work. Use it in the terminal or through its optional Remote UI.

Tycho currently supports Codex, Claude, OpenCode, Pi, and custom profiles for
any of those native harness families. It keeps each agent's conversation,
status, and artifacts under your local `~/.tycho` directory.

Tycho is early, single-operator software. Homebrew installs target macOS;
source installs also work in Linux-style environments and Windows 11 through
WSL when Ruby and the selected agent CLIs are available.

## Install

Homebrew is the primary install path:

```bash
brew tap firewalker06/tycho
brew install tycho
tycho
```

Homebrew bottles support Apple Silicon macOS and Linux. v0.11.0 is the last
Tycho Intel macOS bottle; v0.11.1 ships no Intel macOS bottle. Intel users can
run Tycho from source and should migrate Homebrew installations to Apple
Silicon.

To run from source, install Ruby 3.2+, Bundler, Go, and native build tools,
then run:

```bash
git clone…
