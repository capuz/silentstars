---
repo: "anubhab7105/Assembly"
name: "Assembly"
description: "It coordinates multiple AI agents to solve a problem independently, compare their responses, examine disagreements, and synthesize an answer with sources and uncertainty notes where possible."
readmeQualityOk: true
url: "https://github.com/anubhab7105/Assembly"
homepage: "https://assembly-murex.vercel.app"
language: "TypeScript"
languages: ["TypeScript", "Python"]
languagePcts: [53, 37]
topics: ["multi-agent-ai", "open-source", "python", "ai-agents", "fastapi", "llm-orchestration", "nextjs", "typescript"]
stars: 8
forks: 9
openIssues: 24
closedIssues: 43
watchers: 0
contributors: 10
recentReleases: 0
createdAt: "2026-08-15T21:36:42Z"
lastCommitAt: "2026-11-27T16:15:44Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "fork_magnet"]
healthScore: 92
undervaluedScore: 66
maintainers: ["anubhab7105", "piyushbaruadebug"]
openGraphImageUrl: "https://opengraph.githubassets.com/b10a419e7134c5ebd139097c395f924dc2fe75a1eaea8f238a160733fecbf8e6/anubhab7105/Assembly"
discussionCount: 1
postedAt: "2026-11-27T13:08:11.077Z"
---

# Assembly

Assembly is an experimental multi-agent AI workspace. Give it a question and a time budget, and it coordinates a temporary team of AI agents that work independently, examine disagreements, and produce a synthesized answer with sources and uncertainty notes where available.

Assembly is a research project, not a promise of correctness. Multiple models can share the same blind spots, citations may be incomplete, and a confident-looking consensus can still be wrong.

## Technical writing

- [Assembly: An Experimental Multi-Agent AI Workspace for Independent Solving, Structured Disagreement, and Synthesis](https://assembly-ai.hashnode.dev/assembly-an-experimental-multi-agent-ai-workspace-for-independent-solving-structured-disagreement-and-synthesis) — an engineering overview of the project's architecture, orchestration workflow, model routing, consensus, debate, and development status.

## What Assembly does

A typical run goes through these stages:

1. **Plan:** estimate the task and choose agent roles for the available time and configured models.
2. **Solve independently:** selected agents work on the problem before seeing one another's answers.
3.
