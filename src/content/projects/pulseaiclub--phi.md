---
repo: "pulseaiclub/phi"
name: "phi"
description: "a coding Agent. Sub-agents, hashline edits, and a permission gate"
readmeQualityOk: true
url: "https://github.com/pulseaiclub/phi"
language: "Go"
languages: ["Go"]
languagePcts: [96]
topics: ["coding-agent", "ai", "cli"]
stars: 8
forks: 2
openIssues: 0
closedIssues: 3
watchers: 2
contributors: 2
recentReleases: 2
createdAt: "2026-08-03T03:16:48Z"
lastCommitAt: "2026-08-08T04:33:09Z"
lastReleaseAt: "2026-08-07T09:38:38Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 100
undervaluedScore: 59
maintainers: ["yumosx", "libinops"]
openGraphImageUrl: "https://opengraph.githubassets.com/e2cfce0437356a05430f4652923391be02c5c3ed36f4957505d7d861020dd630/pulseaiclub/phi"
---

# phi

A minimal terminal coding agent harness in Go — a sibling to Pi.
Sub-agents, hashline edits, and a permission gate; any OpenAI-compatible or Anthropic model, no vendor lock-in.

phi is deliberately small: a model loop, a handful of tools, a TUI, and
Markdown rendering that makes assistant output readable. Extend it with
[skills](#skills) and configure it with a single YAML file.

- [Quick start](#quick-start)
- [Footprint](#footprint)
- [Configuration](#configuration)
- [Interactive mode](#interactive-mode)
- [Commands](#commands)
- [Sessions](#sessions)
- [Headless mode](#headless-mode)
- [Skills](#skills)
- [Permissions](#permissions)
- [Tools](#tools)
- [Project layout](https://github.com/pulseaiclub/phi/blob/HEAD/doc/project-layout.md)

## Quick start

Install the latest release (macOS / Linux):

```sh
curl -fsSL https://raw.githubusercontent.com/pulseaiclub/phi/main/scripts/install.sh | bash
```

First launch needs a model. Open the config editor (creates `~/.phi` layout
and writes `~/.phi/config.yaml`):

```sh
phi config
```

Or set env vars for a one-off run:

```sh
export PHI_MODEL=gpt-4o
export PHI_API_KEY=sk-...
```

Then start the TUI:

```sh
phi
```

Or build…
