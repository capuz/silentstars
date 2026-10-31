---
repo: "odarino/haren"
name: "haren"
description: "Minimal, skill-based agentic SDLC framework"
readmeQualityOk: true
url: "https://github.com/odarino/haren"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [98]
stars: 11
forks: 2
openIssues: 0
closedIssues: 2
watchers: 0
contributors: 3
recentReleases: 2
createdAt: "2026-06-08T03:59:42Z"
lastCommitAt: "2026-10-31T15:59:09Z"
lastReleaseAt: "2026-10-29T15:07:55Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 99
undervaluedScore: 57
maintainers: ["phungvm", "odarino"]
openGraphImageUrl: "https://opengraph.githubassets.com/eead08b064e20f37296e22dbd523b5d9a1b0b7a86860ea7480a33eeeec7bb5ae/odarino/haren"
fundingLinks: ["KO_FI:https://ko-fi.com/odarino"]
---

```
 ██╗  ██╗  █████╗  ██████╗  ███████╗ ███╗   ██╗
 ██║  ██║ ██╔══██╗ ██╔══██╗ ██╔════╝ ████╗  ██║
 ███████║ ███████║ ██████╔╝ █████╗   ██╔██╗ ██║
 ██╔══██║ ██╔══██║ ██╔══██╗ ██╔══╝   ██║╚██╗██║
 ██║  ██║ ██║  ██║ ██║  ██║ ███████╗ ██║ ╚████║
 ╚═╝  ╚═╝ ╚═╝  ╚═╝ ╚═╝  ╚═╝ ╚══════╝ ╚═╝  ╚═══╝
        agentic SDLC framework · brainstorm → plan → build
```

# haren

> Minimal, skill-based agentic SDLC framework.

`haren` scaffolds a structured workspace — agents, skills, templates, and an
auto-managed state file — that drives an AI coding agent (Claude Code or Cursor)
through a disciplined software-development lifecycle:

```
research → discover → decompose → plan → implement → evaluate
```

Instead of letting an LLM jump straight to code, haren enforces a phased
workflow: brainstorm and research first, decompose into modules, write a plan,
_then_ implement. The result is fewer wasted tokens, fewer half-built features,
and a paper trail of decisions you can actually review.

---

## Why

LLM coding agents are eager. Ask for a feature and they'll start writing files
before anyone has agreed on _what_ is being built. haren adds the missing
front-half of the SDLC and **gates…
