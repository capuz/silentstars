---
repo: "aleos/claude-plugins"
name: "claude-plugins"
description: "Claude plugins by Alexander Ostrovsky, as the plugin marketplace aleos"
readmeQualityOk: true
url: "https://github.com/aleos/claude-plugins"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-10-24T06:37:44Z"
lastCommitAt: "2026-11-23T10:24:02Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 68
undervaluedScore: 12
maintainers: ["aleos"]
openGraphImageUrl: "https://opengraph.githubassets.com/3008a4aa7a50d6229a42f20031b61a6f5f98be128e5663579fc97bb83e28c250/aleos/claude-plugins"
---

# claude-plugins

Claude plugins, published as a plugin marketplace named `aleos`.

| Plugin | What it does |
| :-- | :-- |
| [`decision-docs`](https://github.com/aleos/claude-plugins/blob/HEAD/decision-docs/plugin/README.md) | Keeps a project's decisions, research, open questions and current state in a `docs/` folder, and adds rules that make agents consult it |

Each plugin has its own folder here:

- `plugin/` is the plugin itself, and the only part that gets installed. Its README says what the plugin does and how to use it.
- `docs/` is its decision log: why it works the way it does.

Decisions about the repository itself are in the root [`docs/`](https://github.com/aleos/claude-plugins/blob/HEAD/docs/README.md).

## Install

### Claude Code

Run these two commands in Claude Code, one after the other:

```
/plugin marketplace add aleos/claude-plugins
/plugin install decision-docs@aleos
```

From a shell, they are `claude plugin marketplace add aleos/claude-plugins` and `claude plugin install decision-docs@aleos`.

Or declare the plugin in `~/.claude/settings.json`, and Claude Code installs it the next time it starts:
