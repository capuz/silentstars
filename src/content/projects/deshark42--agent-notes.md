---
repo: "deshark42/agent-notes"
name: "agent-notes"
description: "Template for introducing DSH Agent Notes into code projects"
originalDescription: "把 DSH Agent Notes 引入代码项目的模板"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/deshark42/agent-notes"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
stars: 10
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-09-01T16:48:19Z"
lastCommitAt: "2026-10-20T08:49:23Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 77
undervaluedScore: 28
maintainers: ["deshark42"]
openGraphImageUrl: "https://opengraph.githubassets.com/b39c50a1a23b75f6f3bdd04c95a3a92ef9917cd0e3990afba6c0866242463ae5/deshark42/agent-notes"
---

# Agent Notes

An Agent Note is an RFC-style document written by an agent that records the reasoning behind a long-term decision and the alternatives that were rejected.

This repository organizes the Agent Notes system from [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness) (DSH) into a template that other code projects can adopt. The contract is at [`.agents/notes/README.md`](https://github.com/deshark42/agent-notes/blob/HEAD/.agents/notes/README.md).

Compared with the original DSH, this template removes DSH-specific content (package paths, pnpm/run-gates, GH stack; skills drop the `dsh-` prefix), uses the `npm run verify` aggregate gate instead, keeps only the Chinese contract, and rewrites the root `AGENTS.md` as a neutral version.

## Template contents

```text
AGENTS.md       agent instructions: contract pointer, commands, check selection
.agents/notes/  note tree, contract, and lifecycle/class descriptions
.agents/skills/ archive workflow, pre-push check selection strategy
scripts/        gates: note path/class, header/sections, sealed archive
package.json    npm run verify aggregate script, one script per gate
```

Note paths follow…
