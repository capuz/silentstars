---
repo: "ai-outfitter/outfitter"
name: "outfitter"
description: "Swap between configurations in Pi — it's like dotfiles for your coding agent."
readmeQualityOk: true
url: "https://github.com/ai-outfitter/outfitter"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [94]
topics: ["ai", "ai-agents", "claude", "pi"]
stars: 19
forks: 3
openIssues: 23
closedIssues: 59
watchers: 0
contributors: 5
recentReleases: 0
createdAt: "2026-05-27T20:43:37Z"
lastCommitAt: "2026-10-29T10:34:10Z"
lastReleaseAt: "2026-07-01T22:31:39Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 89
undervaluedScore: 43
maintainers: ["ncrmro", "dependabot[bot]", "tylerwillis"]
openGraphImageUrl: "https://opengraph.githubassets.com/18ec1c75f21a8b4ce9a538896944389d5fd937a0d4e5cde264c0455d08f2e676/ai-outfitter/outfitter"
discussionCount: 0
---

# Outfitter

**[How AI Outfitter fits together →](https://github.com/ai-outfitter/outfitter/blob/HEAD/docs/documentation/ai-outfitter.md)** —
the mission, adoption ramp, end-to-end workflow, and relationship between the
projects.

Outfitter is the toolchain for [`.agents`](https://github.com/ai-outfitter/outfitter/blob/HEAD/docs/documentation/concepts.md#the-agents-protocol): it resolves agent configuration from local and remote `.agents` trees, composes agents, skills, and knowledge by slug, and launches the result through wrapped agent CLIs like [`pi`](https://github.com/earendil-works/pi-coding-agent), Claude Code, and Codex CLI.

Outfitter does not own a configuration format. Your `.agents/` directory is the source of truth — useful without Outfitter, committed and reviewed like any other code.

## Why

Your agent setup is configuration: prompts, skills, MCP servers, model choices, permissions. Left alone it lives per tool and per laptop, gets pasted between repos, and drifts. Outfitter treats it like the rest of your infrastructure — layered, composed by slug, pinned by SHA, reviewed through pull requests.

That turns one person's improvement into everyone's default. On…
