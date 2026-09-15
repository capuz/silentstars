---
repo: "deeeed/farmslot"
name: "farmslot"
description: "Experimental agentic engineering framework and supervised dev-agent workflow."
readmeQualityOk: true
url: "https://github.com/deeeed/farmslot"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [88]
stars: 6
forks: 1
openIssues: 2
closedIssues: 15
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2026-06-03T08:03:05Z"
lastCommitAt: "2026-09-15T08:55:37Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 97
undervaluedScore: 55
maintainers: ["abretonc7s", "deeeed"]
openGraphImageUrl: "https://opengraph.githubassets.com/16e36936a3b968b9c72002243e1dc5d8d00aaae727d12f637a97a59e7b8a98ff/deeeed/farmslot"
---

# farmslot

Project-agnostic orchestration for dispatching autonomous coding agents to a fleet of machines.

**Install with one command:**

```bash
curl -fsSL https://raw.githubusercontent.com/deeeed/farmslot/main/install.sh | bash
```

Checks prerequisites, sets up `~/farmslot/`, and ends with a green `farmslot doctor`. On macOS, missing common tools are offered via Homebrew prompts; use `FARMSLOT_AUTO_INSTALL=1` for non-interactive Homebrew installs. Existing `asdf`/`nvm` Node setups are honored, and the standalone `capture-helper` CLI is checked/installed for live evidence capture. If you have [GitHub CLI](https://cli.github.com/) signed in, the installer may ask once to star the repo (`gh repo star deeeed/farmslot`). Multi-project packs can start with `farmslot project add <pack> --no-setup`, then build one farm later with `--project <name>`. [Getting started →](https://farmslot.io/docs/guides/getting-started)

> Why the name? I know. It stuck: agentic dev farming across many isolated slots. Naming is harder than scheduling the agents.

> [!WARNING]
> **Active development preview.** Farmslot is moving quickly while the product is finalized in
> this repo. Expect experimental…
