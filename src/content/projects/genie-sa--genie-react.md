---
repo: "Genie-sa/genie-react"
name: "genie-react"
description: "Live DevTools for your running React + TanStack app — driven from the terminal by your AI agent, through one CLI"
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
contributors: 4
recentReleases: 0
createdAt: "2026-07-01T19:12:26Z"
lastCommitAt: "2026-11-15T11:17:46Z"
lastReleaseAt: "2026-07-11T23:30:52Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 95
undervaluedScore: 43
maintainers: ["y0u-0", "github-actions[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/5a9925b6ca1a9bf3810b5365f578546d08ede084cdc454eb38393461b38fc0fb/Genie-sa/genie-react"
---

# Genie React

Give your coding agent a view inside your running React app.

Find out why a component rendered, whether a Query update reached the UI, or where an interaction spent its time. Then run the same flow after a fix and compare the evidence.

Works with React web and React Native. Query and routing tools support TanStack Query and TanStack Router. Use Genie in development.

[Docs](https://genie-react.com/docs) · [Setup guides](https://genie-react.com/docs/setup) · [Tool reference](https://genie-react.com/docs/tools)

## Get started

For Vite or Next.js, run these from your app folder. The CLI requires Node.js 22.12 or newer.

```bash
pnpm add -D genie-react @genie-react/cli
pnpm exec genie-react init
```

Follow the setup result, then run `pnpm dev` and open the app. In Vite, render `<Genie />` near the app root to add Query, Router, memory, and timeline tools:

```tsx
import { Genie } from 'genie-react'

// Inside your root component:
{import.meta.env.DEV && <Genie />}
```

Check that your app is connected:

```bash
pnpm exec genie-react status --sessions-only
pnpm exec genie-react call react_get_tree '{"depth":3,"maxNodes":50}'
```

Continue when the intended session…
