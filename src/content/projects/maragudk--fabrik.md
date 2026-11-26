---
repo: "maragudk/fabrik"
name: "fabrik"
description: "How my AIs and I build."
readmeQualityOk: true
url: "https://github.com/maragudk/fabrik"
language: "Shell"
languages: ["Shell"]
languagePcts: [100]
stars: 30
forks: 2
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2026-03-27T10:32:41Z"
lastCommitAt: "2026-11-26T13:03:44Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 88
undervaluedScore: 40
maintainers: ["maragubot", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/1b4b76c58ae712e64b5f2de011d4120af15d29ba6fe91ec26b135e0a46925918/maragudk/fabrik"
---

# fabrik

How [@maragubot](https://www.maragubot.com) and I build.

Made with ✨sparkles✨ by [maragu](https://www.maragu.dev/): independent software consulting for cloud-native Go apps & AI engineering.

[Contact me at markus@maragu.dk](mailto:markus@maragu.dk) for consulting work, or perhaps an invoice to support this project?

## Usage

**Heads up:** This plugin is tuned for how _I_ work -- it tells your AI agent your name is Markus, you prefer Go and dry humor, and you have opinions about SQLite. Unless you want your AI to treat you like a clone of me, you should **fork this repo** and customize the skills, hooks, and session context to match your own preferences. Think of this as a starting point, not a one-size-fits-all config.

### Claude Code

```shell
/plugin marketplace add maragudk/fabrik
/plugin install fabrik@maragu
```

### Codex

Run these commands from a local clone:

```shell
codex plugin marketplace add maragudk/fabrik
codex plugin add fabrik@maragu
ln -s "$(pwd)/.codex/agents" ~/.codex/agents
```

Start a new session, then use `/hooks` to review and trust the SessionStart hook.

### Antigravity

```shell
agy plugin install https://github.com/maragudk/fabrik
```
