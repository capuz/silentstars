---
repo: "rjmurillo/ai-agents"
name: "ai-agents"
description: "Multi-agent system for software development"
readmeQualityOk: true
url: "https://github.com/rjmurillo/ai-agents"
language: "Markdown"
languages: ["Markdown", "Python"]
languagePcts: [62, 37]
topics: ["ai-agents", "agentic-ai", "ai-assistant", "anthropic-claude", "automation", "ci-cd", "claude-code", "code-generation", "code-review", "developer-tools"]
stars: 38
forks: 10
openIssues: 6
closedIssues: 1279
watchers: 1
contributors: 12
recentReleases: 0
createdAt: "2025-12-14T04:56:32Z"
lastCommitAt: "2026-07-13T06:38:15Z"
lastReleaseAt: "2026-02-09T10:50:53Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 100
undervaluedScore: 44
maintainers: ["rjmurillo", "renovate[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/057104b7f728e0e01587ba4b3e905e30112218bef649aff8014413cff00b77e5/rjmurillo/ai-agents"
fundingLinks: ["GITHUB:https://github.com/rjmurillo", "BUY_ME_A_COFFEE:https://buymeacoffee.com/rjmurillo"]
discussionCount: 1
---

# AI Agent System

For platform teams, engineering managers, and orgs that want AI-assisted development with real governance. Session protocol, review gates, and ADR-steered agent behavior built in.

---

## Fastest Start

Each AI tool has its own native marketplace flow. This repo ships a Claude Code marketplace at `.claude-plugin/marketplace.json` and a Copilot CLI marketplace at `.github/plugin/marketplace.json`, so the same repository URL works in both CLIs. Pick yours and paste the command(s) inside the CLI session.

**Claude Code.** One command installs the full set; restart Claude Code when it finishes.

```text
/install-plugin rjmurillo/ai-agents
```

**GitHub Copilot CLI.** Two steps: register the marketplace, then install the Copilot-targeted toolkit. No restart needed afterward; Copilot CLI picks agents up automatically.

```text
/plugin marketplace add rjmurillo/ai-agents
/plugin install project-toolkit@ai-agents
```

A Claude install lands the full set of agents, commands, hooks, and skills. A Copilot install lands the same capabilities generated from the same canonical sources. See [Verify Installation](#verify-installation) for the per-tool sanity check that reports…
