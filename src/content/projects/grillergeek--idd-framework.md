---
repo: "GrillerGeek/idd-framework"
name: "idd-framework"
description: "A process framework for teams building software with AI coding agents. Replaces Epics/Features/Stories with Product → Intentions → Expectations → Specs."
readmeQualityOk: true
url: "https://github.com/GrillerGeek/idd-framework"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [92]
topics: ["agile", "ai-assisted-development", "ai-coding-agents", "idd", "intent-driven-development", "process-framework", "sdlc", "software-development-lifecycle", "spec-driven-development", "claude-code-plugin"]
stars: 7
forks: 2
openIssues: 0
closedIssues: 3
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2026-03-20T17:30:05Z"
lastCommitAt: "2026-11-25T13:23:27Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 93
undervaluedScore: 59
maintainers: ["GrillerGeek", "JasonRobey-Burke", "TheRealBillSiegler"]
openGraphImageUrl: "https://opengraph.githubassets.com/f79ab12960eba3512d71a9ca8b06f3d1f0c6934edb5d63a95ed8ca51c0dc43b7/GrillerGeek/idd-framework"
discussionCount: 1
---

# Intent-Driven Development Framework

**Turn an idea into a reviewed specification that developers and AI agents can build.**

Intent-Driven Development (IDD) is a planning and delivery framework with plugins
for **Codex and Claude Code**, plus portable Agent Skills. It guides you from a
stakeholder interview to linked Product, Intention, Expectation and Spec YAML
files in your project's `docs/` directory. Reviews check for missing decisions,
edge cases and unclear boundaries before implementation; validation checks the
result against the agreed outcome. You can also use the framework and templates
without installing a plugin.

**IDD works on its own. Guildhall is an optional companion, not a dependency.**

## Install

Install **IDD 1.8.0 from its published main branch**. Choose one route below for
your coding app. No source clone, contributor build or Guildhall installation is
required.

### Codex

Run in a terminal with the Codex CLI and Git installed:

```bash
codex plugin marketplace add GrillerGeek/idd-framework --ref main --json
codex plugin add idd-framework@idd-framework-local --json
```
