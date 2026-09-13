---
repo: "anthony-chaudhary/fak"
name: "fak"
description: "Agentic Runtime"
readmeQualityOk: true
url: "https://github.com/anthony-chaudhary/fak"
homepage: "https://anthony-chaudhary.github.io/fak/showcase.html"
language: "Go"
languages: ["Go"]
languagePcts: [89]
topics: ["agentic-ai", "ai-agents", "golang", "kv-cache", "llm-agents", "llm-inference", "llm-serving", "mcp", "self-hosted", "llmops"]
stars: 38
forks: 15
openIssues: 3200
closedIssues: 9663
watchers: 0
contributors: 5
recentReleases: 10
createdAt: "2026-06-21T19:52:45Z"
lastCommitAt: "2026-09-13T08:28:05Z"
lastReleaseAt: "2026-07-11T21:41:37Z"
status: "thriving"
tags: ["hidden_gem", "release_machine"]
healthScore: 95
undervaluedScore: 49
maintainers: ["anthony-chaudhary"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1276297427/9494cd94-2aa0-4aa3-9306-198f0534046e"
---

<picture><source media="(prefers-color-scheme: dark)" srcset="visuals/brand/fak-logo.svg"><img src="visuals/brand/fak-logo-ink.svg" alt="fak logo" width="320"></picture>
</p>

# fak — useful local agents, accelerated automatically

**Fak is building the open runtime that makes useful local agents practical on your own machine.**

Start locally, give an agent real work, and keep useful context across turns.
Our first breakthrough milestone combines native inference, speculative decoding,
and agentic caching into an experience whose qualified acceleration is automatic.
The capability floor bounds what tools the agent may execute.

**Status:** this is the product milestone we are working toward. Today,
automatic setup and cache reuse have specific model/backend limits; speculative
decoding and physical GPU Direct paths are not universally enabled or qualified.
See the [local-agent milestone](https://github.com/anthony-chaudhary/fak/blob/HEAD/docs/local-agent-milestone.md) for the current
wiring, the meaning of automatic, and the evidence required to earn the claim.

## Try fak

Install with `curl -fsSL https://raw.githubusercontent.com/anthony-chaudhary/fak/main/install.sh | sh` (or…
