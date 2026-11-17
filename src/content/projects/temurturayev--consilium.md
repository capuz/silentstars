---
repo: "TemurTurayev/consilium"
name: "consilium"
description: "Multi-agent orchestrator for your AI coding subscriptions — Claude Code, Codex CLI and Gemini CLI deliberate, cross-review and split work without burning one subscription's limits. Rust."
readmeQualityOk: true
url: "https://github.com/TemurTurayev/consilium"
language: "Rust"
languages: ["Rust"]
languagePcts: [88]
stars: 8
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 2
createdAt: "2026-06-11T18:55:30Z"
lastCommitAt: "2026-11-17T14:42:17Z"
lastReleaseAt: "2026-11-17T14:49:41Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 28
maintainers: ["TemurTurayev"]
openGraphImageUrl: "https://opengraph.githubassets.com/751a9cdfce181a191d8936d0bb6bb8697d0ce98d232c3ab7a1ea8f87a7ccd00f/TemurTurayev/consilium"
---

# Consilium

> One task. Multiple AI coding agents. One reviewed result.

Consilium lets Claude Code, Codex, Gemini and Grok work together from the
subscriptions you already have. It runs their official CLIs locally, gives each
agent a role, and keeps the prompts, diffs and results on your machine.

Use it when one model's answer is not enough:

- **Ask a council** — get independent answers, anonymous peer review and a final synthesis.
- **Review a diff** — have another model audit the change before you merge it.
- **Build with a team** — let a conductor split a coding task between workers, run your tests and review the result.

No provider API keys. No hosted orchestration service. Consilium is open source
and works with the CLI subscriptions you already pay for.

## Try it in two minutes

You need macOS or Linux and at least one supported agent CLI already installed
and signed in: `claude`, `codex`, `agy` (Gemini), or experimental `grok`.

```sh
curl -fsSL https://raw.githubusercontent.com/TemurTurayev/consilium/main/install.sh | sh
consilium init
consilium council "What is the safest way to simplify this module?"
```

`consilium init` detects the providers available on your…
