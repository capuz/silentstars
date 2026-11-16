---
repo: "wookiya1364/scv-claude-code"
name: "scv-claude-code"
description: "Claude Code plugin for team workflows. Adds a plan + tests gate to every change, then accumulates those tests into an auto-running regression suite. Slack/Discord reports built-in."
readmeQualityOk: true
url: "https://github.com/wookiya1364/scv-claude-code"
language: "Shell"
languages: ["Shell"]
languagePcts: [96]
topics: ["claude-code", "discord", "plugin", "regression-testing", "slack", "slash-commands", "team-collaboration", "workflow", "ai-coding", "code-review"]
stars: 8
forks: 1
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-04-28T00:52:29Z"
lastCommitAt: "2026-11-16T04:28:56Z"
lastReleaseAt: "2026-05-18T06:52:17Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 56
maintainers: ["wookiya1364"]
openGraphImageUrl: "https://opengraph.githubassets.com/7392407a812a6be4dc7868405064e7970c8f5333153d8a881d88e76ec9885b40/wookiya1364/scv-claude-code"
---

Every change ships with a plan and tests — and the tests run forever.</b></p>

---

> **Languages**: English · [한국어](https://github.com/wookiya1364/scv-claude-code/blob/HEAD/README.ko.md) · [日本語](https://github.com/wookiya1364/scv-claude-code/blob/HEAD/README.ja.md)

## What is SCV

Talk about a change → SCV refines it into a plan with executable tests →
implements it → attaches the evidence to the PR → archives the plan. Every
archived test joins a regression suite that runs against every future change.
Six months later, a test nobody remembers still catches the break.

## Install

```bash
/plugin marketplace add https://github.com/wookiya1364/scv-claude-code
/plugin install scv@scv-claude-code
```

- **macOS**: `brew install bash` once (SCV scripts need bash 4+; system bash stays untouched).
- **Linux / WSL**: nothing to do. **Windows native**: unsupported — use WSL or Git Bash.
- Recommended CLIs: `git`, `curl`, `jq`, `gh` (or `glab`). SCV tells you if one is missing.

**Update** to the latest release with one command — in a terminal session or in the Claude app:

```bash
/scv:update
```

It updates SCV and every installed SCV mod, then tells you the versions before and after.…
