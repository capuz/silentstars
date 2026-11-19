---
repo: "Genie-sa/genie-react"
name: "genie-react"
description: "Let your coding agent verify and optimize your React and React Native apps: see what rendered and why, and prove each fix worked."
readmeQualityOk: true
url: "https://github.com/Genie-sa/genie-react"
homepage: "https://genie-react.com"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [81]
topics: ["agentic-coding", "ai-agents", "claude-code", "cli", "devtools", "expo", "performance", "performance-agent", "react", "react-agent"]
stars: 34
forks: 2
openIssues: 0
closedIssues: 12
watchers: 0
contributors: 5
recentReleases: 0
createdAt: "2026-07-01T19:12:26Z"
lastCommitAt: "2026-11-19T05:04:16Z"
lastReleaseAt: "2026-07-11T23:30:52Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 97
undervaluedScore: 43
maintainers: ["y0u-0", "github-actions[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/4ab58a9af048ee53da4198d2f9d82a2582df3ad5a5e69e5a5ba94667d62b5689/Genie-sa/genie-react"
---

# Genie React

Genie lets your coding agent verify and optimize your React and React Native apps. It sees what rendered and why, and proves each fix worked.

Your agent already drives the app with [agent-browser](https://github.com/vercel-labs/agent-browser) or [agent-device](https://github.com/callstack/agent-device) and sees the screen. Genie tells it what happened underneath: which components rendered and why, which effects ran, what TanStack Query and Router did, and which error boundary caught what. When the agent says "fixed", `genie-react verify` checks the claim and exits with the verdict.

[Docs](https://genie-react.com/docs) · [Setup guides](https://genie-react.com/docs/setup) · [Tool reference](https://genie-react.com/docs/tools)

## Prove a fix

Declare what the fix must make true, drive the interaction, and let Genie decide:

```bash
pnpm exec genie-react verify begin --session my-agent --name "put one order on hold" \
  --claim 'render OrderRow only props.order,mount' --claim 'render OrderRow min 1' --claim 'boundaries clean'
# Put one order on hold with agent-browser.
pnpm exec genie-react verify end <id> --session my-agent
```
