---
repo: "ejboy/agent-scripts"
name: "agent-scripts"
description: "Token-efficient, local-first scripts for coding agents - compact Maven output, predictable browser launch, and reusable development workflows."
readmeQualityOk: true
url: "https://github.com/ejboy/agent-scripts"
language: "Shell"
languages: ["Shell"]
languagePcts: [100]
topics: ["maven", "ai-assisted-development", "coding-agents", "local-first", "shell-scripts", "token-efficiency"]
stars: 8
forks: 0
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-07-30T17:11:04Z"
lastCommitAt: "2026-08-11T04:48:31Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 70
undervaluedScore: 28
maintainers: ["ejboy"]
openGraphImageUrl: "https://opengraph.githubassets.com/4b41e0a7247be6cd41d27f3f3cace0bf738e961b5b22e0a09f342238f9b30013/ejboy/agent-scripts"
---

# agent-scripts

agent-scripts is a collection of small, local-first command-line utilities for AI-assisted development. Some reduce noisy tool output and save agent context; others make common development tasks easier to automate. Scripts use predictable command names, work well from PATH, and are designed to be easy for both developers and coding agents to discover and invoke.

## Tools

- `mvn-lite` — compact Maven output for builds and tests
- `npm-lite` — compact output for selected npm test and verification workflows
- `html-screenshot` — render local HTML or URLs to PNG
- `launch-browser` — launch Chrome with DevTools enabled
- `repo-map` — local repository and agent-capability discovery

See [choosing the right tool](https://github.com/ejboy/agent-scripts/blob/HEAD/docs/choosing-tools.md) for measured output savings, recommended use cases, and experiment limitations.

Public, standalone utilities live under `scripts/`. Repository release tooling lives
separately under `maintainers/` and is not part of the public utility interface.

## Installation

Clone the repository and add its `scripts/` directory to `PATH`:

```bash
git clone https://github.com/ejboy/agent-scripts.git…
