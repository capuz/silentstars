---
repo: "brizzai/fleet"
name: "fleet"
description: "TUI tool for managing multiple Claude Code sessions in parallel using tmux"
readmeQualityOk: true
url: "https://github.com/brizzai/fleet"
language: "Go"
languages: ["Go"]
languagePcts: [93]
stars: 47
forks: 5
openIssues: 11
closedIssues: 21
watchers: 1
contributors: 6
recentReleases: 6
createdAt: "2026-03-08T11:38:07Z"
lastCommitAt: "2026-07-28T14:52:59Z"
lastReleaseAt: "2026-05-28T09:37:16Z"
status: "thriving"
tags: ["hidden_gem", "release_machine"]
healthScore: 89
undervaluedScore: 40
maintainers: ["hayke102", "brizz-bot[bot]", "denniszag"]
openGraphImageUrl: "https://opengraph.githubassets.com/4e42674265c0f4c7a32e900a4a89fb4574d83b186044d6d3fbbd6f17c7c446d7/brizzai/fleet"
---

<h1 align="center">fleet</h1>
    <strong>Run 10 coding agents. Stay sane.</strong>
  </p>
    A terminal cockpit for orchestrating Claude Code, Codex &amp; OpenCode sessions in parallel.
    <br />
    See which agents need you. Jump in, direct, jump out.
  </p>
    &middot;
  </p>
  </p>
</p>

<br />

</p>

  <em>Sessions grouped by repo &middot; Real-time status via hooks &middot; PR state &middot; One-key approve</em>
</p>

<br />

Your agents are coding. fleet keeps you in control.

- 👀 **See** — every session's live status in one sidebar: running, waiting for you, finished
- ⚡ **Act** — **`Space`** jumps to the agent that needs you, **`Enter`** drops you in to approve or steer
- 🚀 **Ship** — branch, dirty state, and full PR status (CI, reviews, threads) on every repo header

## Install

### Homebrew (recommended)

```bash
brew install brizzai/tap/fleet
```

### Shell script

```bash
curl -fsSL https://raw.githubusercontent.com/brizzai/fleet/master/install.sh | bash
```

Requires [`gh`](https://cli.github.com/).

### Go install

```bash
go install github.com/brizzai/fleet/cmd/fleet@latest
```

Requires Go 1.26+.

### Docker (Linux)

```bash
docker build -t fleet .
docker…
