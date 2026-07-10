---
repo: "drewnix/arithma"
name: "arithma"
description: "Arithma Computer Algebra System and MCP"
readmeQualityOk: true
url: "https://github.com/drewnix/arithma"
language: "Rust"
languages: ["Rust"]
languagePcts: [97]
topics: ["calculus", "cas", "llms", "math", "mathematics", "mcp", "rust", "wasm", "agentic-ai", "agents"]
stars: 11
forks: 2
openIssues: 9
closedIssues: 21
watchers: 2
contributors: 2
recentReleases: 1
createdAt: "2024-09-22T04:45:02Z"
lastCommitAt: "2026-07-10T06:57:28Z"
lastReleaseAt: "2026-07-09T06:17:19Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 94
undervaluedScore: 70
maintainers: ["drewnix", "yelliver"]
openGraphImageUrl: "https://opengraph.githubassets.com/c58f077616a680e5d27606bccfb4de1de4efb51370a5df16d830f80d53528e12/drewnix/arithma"
discussionCount: 8
---

# Arithma

A computer algebra system written in Rust. Exact arithmetic, not
floating-point approximation. LaTeX in, LaTeX out. Works as a CLI tool
for humans and as an MCP server for AI agents.

Arithma exists because mathematics tools should be *correct*. Not
approximately correct, not usually correct, but correct in the way that
exact rational arithmetic and well-chosen algorithms make possible.

## Why Arithma

**Single binary, no dependencies.** The MCP server is 2.5 MB. No Python
runtime, no Java, no Wolfram kernel, no network calls. Copy it anywhere and
it works.

**Exact arithmetic.** Every computation uses rational numbers (`BigRational`),
not floating-point. $\frac{1}{3} + \frac{1}{3} + \frac{1}{3} = 1$, not
`0.9999999999999998`. Results are deterministic and reproducible.

**Silence over lies.** If Arithma cannot compute something, it says so. It
never guesses, approximates heuristically, or returns an unverified result.
An agent that gets "I can't do this" can try a different approach. An agent
that gets a wrong answer propagates it through its entire reasoning chain.

**Proves what's impossible.** The Risch algorithm doesn't just integrate — it
can *prove* when no…
