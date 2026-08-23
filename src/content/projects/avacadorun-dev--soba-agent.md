---
repo: "avacadorun-dev/soba-agent"
name: "soba-agent"
description: "Open-source coding agent that produces tamper-evident, CI-verifiable proof for every code change"
readmeQualityOk: true
url: "https://github.com/avacadorun-dev/soba-agent"
homepage: "https://soba-agent.dev/"
language: "TypeScript"
languages: ["TypeScript", "MDX"]
languagePcts: [79, 20]
topics: ["ai-agent", "bun", "cli", "coding-agent", "context-management", "developer-tools", "llm", "mcp", "openai-compatible", "project-memory"]
stars: 7
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-06-21T09:55:56Z"
lastCommitAt: "2026-08-23T04:05:06Z"
lastReleaseAt: "2026-07-10T12:11:10Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 89
undervaluedScore: 57
maintainers: ["avacadorun-dev"]
openGraphImageUrl: "https://opengraph.githubassets.com/329efe084d403efeadad8aa307b1ba106141baa42d24045521a00fe6ed753cff/avacadorun-dev/soba-agent"
---

<h1 align="center">SOBA Agent</h1>

  <strong>Local-first engineering agent for code changes with a verifiable trail.</strong>
</p>

</p>

  · <a href="#first-workflow">First workflow</a>
  · <a href="https://soba-agent.dev/en/docs/quick-start">Docs</a>
  · <a href="https://soba-agent.dev/en/docs/changelog">Changelog</a>
</p>

SOBA runs in your terminal, keeps project context close to the repository, works through bounded tool loops, and writes
receipts for the work it claims to have done. It is built for everyday engineering tasks where the important question is
not only "did the agent edit the code?", but also "what changed, what was checked, what permissions were used, and what
evidence supports the handoff?"

</p>

SOBA is built for engineers who want an agent to stay close to the repo: inspect before editing, ask for permission
before risky operations, run the project's own checks, and leave behind receipts that can be reviewed after the session.

## What SOBA is for

SOBA is a coding agent with a local workflow:

- **Interactive TUI** for agent sessions, shell commands, slash commands, permissions, context, and model state.
- **Live agent shell output** that opens as soon as…
