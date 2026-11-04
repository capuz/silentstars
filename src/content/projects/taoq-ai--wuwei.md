---
repo: "taoq-ai/wuwei"
name: "wuwei"
description: "无为 WUWEI: software development framework for agents. Run a chartered agent team through your day, with guards that make the safe path the default one. Claude Code and Codex Plugin."
readmeQualityOk: true
url: "https://github.com/taoq-ai/wuwei"
homepage: "https://taoq-ai.github.io/wuwei/"
language: "Python"
languages: ["Python"]
languagePcts: [95]
topics: ["agentic-workflow", "ai-agents", "autonomous-agents", "claude-code", "claude-code-plugin", "codex", "developer-workflow", "guardrails", "python", "spec-driven-development"]
stars: 6
forks: 0
openIssues: 19
closedIssues: 560
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-09-24T11:48:35Z"
lastCommitAt: "2026-11-04T11:27:40Z"
lastReleaseAt: "2026-10-01T10:39:02Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 99
undervaluedScore: 66
maintainers: ["leoneperdigao", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/badac89540b2ca8fa319812e7c2e9b96f4fd537cd33a0b03fc7680d7187d64fe/taoq-ai/wuwei"
---

doors that do not reopen, and asks you only what is yours.</p>

无为 (wuwei, said woo-way) means "effortless action": work gets done without forcing it.
## What it is

A plugin for Claude Code (and Codex) that turns your session into a team: a lead plans, builders
write code test first, reviewers check each change, a shepherd takes pull requests to merge. You
set goals and approve the plan. WUWEI checks each PR's evidence (test, reviews, green CI), refuses
what cannot be undone (merging with gaps, force pushes, leaking secrets), and only asks you what is
yours.

## Quickstart

Needs Python 3.11+, Git, and the [GitHub CLI](https://cli.github.com/) signed in (`gh auth login`),
in a project hosted on GitHub.

**1. Install** in Claude Code, then restart it:

```text
/plugin marketplace add taoq-ai/wuwei
/plugin install wuwei@wuwei
```

**2. Set up your project.** The CLI lives inside the plugin, not on your PATH:

```sh
cd your-project
WUWEI=$(find ~/.claude/plugins -type f -path '*/bin/wuwei' | sort | tail -n 1)
"$WUWEI" init     # creates .wuwei/ and adds permission rules to .claude/settings.json
"$WUWEI" doctor   # fix any "fail"; "warn" on doors just means no branch protection on…
