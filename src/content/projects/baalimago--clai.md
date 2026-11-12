---
repo: "baalimago/clai"
name: "clai"
description: "Command line artificial intelligence - Context engineering for terminal powerusers"
readmeQualityOk: true
url: "https://github.com/baalimago/clai"
language: "Go"
languages: ["Go"]
languagePcts: [100]
topics: ["ai", "cli", "go", "golang-tools", "llm", "context-feeder"]
stars: 153
forks: 12
openIssues: 0
closedIssues: 8
watchers: 2
contributors: 7
recentReleases: 0
createdAt: "2024-03-03T12:36:02Z"
lastCommitAt: "2026-11-12T05:42:24Z"
lastReleaseAt: "2024-06-17T16:42:02Z"
status: "thriving"
tags: []
healthScore: 99
undervaluedScore: 44
maintainers: ["baalimago", "github-actions[bot]", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/99d90a87ae4424efa216f1396242e23367298673d51d0a6c674fd067d5c8d7e2/baalimago/clai"
---

Test coverage: 91.7% 😍👌

### Get started

Installing:

```bash
curl -fsSL https://raw.githubusercontent.com/baalimago/clai/main/setup.sh | sh
```

You can also install via go:

```bash
go install github.com/baalimago/clai@latest
```

Or run it from the Nix flake without installing (flakes must be enabled):

```bash
nix run github:baalimago/clai
```

Then run:

```bash
clai | clai query Please give a concise explanation of clai
```

Install [Glow](https://github.com/charmbracelet/glow) for formatted markdown output when querying text responses.

See <a href="https://www.clai.chat">clai.chat</a> for details on usecase of all the features. Here's a brief summary:

## Features

- **[Shell context injection](https://github.com/baalimago/clai/blob/HEAD/architecture/shell-context.md)** - Inject shell context into the system prompt via configurable templates.
- **[Seamless conversation import](https://github.com/baalimago/clai/blob/HEAD/architecture/continue-from-claudex.md)** - Ran out of session? Continue in clai!
- **[Agent Skills](https://github.com/baalimago/clai/blob/HEAD/architecture/skills.md)** - Import skills from custom global directories, or project-level `.agents/skills`.
-…
