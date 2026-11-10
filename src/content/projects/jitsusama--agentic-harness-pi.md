---
repo: "Jitsusama/agentic-harness.pi"
name: "agentic-harness.pi"
description: "A pi package for collaborative coding workflows: planning, TDD, git hygiene, and code investigation."
readmeQualityOk: true
url: "https://github.com/Jitsusama/agentic-harness.pi"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
stars: 6
forks: 3
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2026-03-08T03:18:20Z"
lastCommitAt: "2026-11-10T11:38:03Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 70
maintainers: ["Jitsusama"]
openGraphImageUrl: "https://opengraph.githubassets.com/6ee7b41d18e0a488a2dd28e67cf60dfa490bf1232b9093316089ff008210ee4f/Jitsusama/agentic-harness.pi"
---

# agentic-harness.pi

Turn [pi](https://github.com/badlogic/pi-mono) into a
disciplined pair programmer. This package gives the agent the
habits of a good teammate: it plans before it builds, works
test-first, keeps git and GitHub history clean, reviews pull
requests like a careful reviewer, and reaches for Slack, Gmail,
the web and your language server when the task calls for it.

Nothing here is magic and nothing is all-or-nothing. Every
piece works on its own, so you can adopt one habit today and
another next week.

## Install

```bash
pi install git:github.com/Jitsusama/agentic-harness.pi
```

Or take it for a spin without installing:

```bash
pi -e git:github.com/Jitsusama/agentic-harness.pi
```

## How It Works

The package has two layers that complement each other.

**[Skills](https://github.com/Jitsusama/agentic-harness.pi/blob/HEAD/skills/)** teach the agent *how* to work: planning
methodology, TDD discipline, commit and PR conventions, a
writing voice, and how to drive each tool. They are guidance
the agent follows when a task matches, and it can decline them.

**[Extensions](https://github.com/Jitsusama/agentic-harness.pi/blob/HEAD/extensions/)** enforce *guardrails*…
