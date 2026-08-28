---
repo: "gtapps/claude-code-hermit"
name: "claude-code-hermit"
description: "Turn Claude Code into a 24/7 Agent"
readmeQualityOk: true
url: "https://github.com/gtapps/claude-code-hermit"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [96]
topics: ["ai", "ai-agent", "anthropic", "claude", "claude-code", "claude-code-plugin", "hermit", "self-hosted", "autonmous-agent"]
stars: 72
forks: 14
openIssues: 1
closedIssues: 302
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2026-03-23T18:33:11Z"
lastCommitAt: "2026-08-28T14:24:10Z"
lastReleaseAt: "2026-04-26T23:13:14Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 36
maintainers: ["gtapps", "Copilot"]
openGraphImageUrl: "https://opengraph.githubassets.com/65e5e9078c9eb2820a496c7e859b854509f4405c01d4a004875422ac1aebb23a/gtapps/claude-code-hermit"
discussionCount: 1
---

</p>

# claude-code-hermit

Claude Code plugin that turns a Claude Code instance into a 24/7 agent. **Stateful. Proactive. Self-improving through an operator-gated proposal system. Cost-aware. Observable. Works with your Claude Subscription**.

</p>

Setup your agent in any folder, empty or existing project with `/hatch` and shape its identity, priorities, routines, knowledge, autonomy, guardrails and make it yours.

```
# Install
claude plugin marketplace add gtapps/claude-code-hermit
claude plugin install claude-code-hermit@claude-code-hermit --scope local

# Boot Claude Code and run the setup wizard
/claude-code-hermit:hatch

# Go always-on
/claude-code-hermit:docker-setup
```

---

## What it adds

Hermit adds a persistent operating layer around Claude Code, a learning loop, and a quick setup to wire everything.

- **Stateful** live working state, archived session handoffs, runtime observations, lessons, findings, blockers, completed tasks, files created/modified/deleted.
- **Agent Routines** Add your own routines that run from one persistent `Monitor` subprocess that decides eligibility outside the session, so a skipped fire costs zero tokens and co-due routines batch into…
