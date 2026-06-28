---
repo: "lampepfl/tacit"
name: "tacit"
description: "TACIT — Tracked Agent Capabilities In Types"
url: "https://github.com/lampepfl/tacit"
language: "Scala"
languages: ["Scala"]
languagePcts: [90]
topics: ["agent", "capability", "mcp", "scala"]
stars: 58
forks: 9
openIssues: 0
closedIssues: 0
watchers: 6
contributors: 7
recentReleases: 5
createdAt: "2026-01-29T20:08:26Z"
lastCommitAt: "2026-06-28T02:00:21Z"
lastReleaseAt: "2026-06-04T11:24:12Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 82
undervaluedScore: 31
maintainers: ["noti0na1", "Linyxus", "bracevac"]
openGraphImageUrl: "https://opengraph.githubassets.com/184c76685a8a9b757276e3afef26581c935db18db3ce78d889687840bd8d9682/lampepfl/tacit"
discussionCount: 0
---

# TACIT: Tracked Agent Capabilities In Types

**Paper:** [Securing Agents With Tracked Capabilities](https://dl.acm.org/doi/10.1145/3786335.3813127) (ACM) · [arXiv:2603.00991](https://arxiv.org/abs/2603.00991) · 🏆 **Best Paper Award at CAIS 26**

TACIT (Tracked Agent Capabilities In Types) is a **safety harness** for AI agents.
Instead of calling tools directly, agents write code in Scala 3 with [capture checking](https://nightly.scala-lang.org/docs/reference/experimental/capture-checking/index.html): a type system that statically tracks capabilities and enforces that agent code cannot forge access rights, cannot perform effects beyond its budget, and cannot leak information from pure sub-computations.
It provides an [MCP](https://modelcontextprotocol.io/) interface, so that it can be easily used by all MCP-compatible agents.

The framework has three main components:

- **Scala 3 compiler.** Agent-submitted code is validated and type-checked with capture checking enabled in *safe mode*, which enforces a capability-safe language subset.
- **Scala REPL.** A local REPL instance executes compiled code and manages state across interactions. Supports both stateless one-shot execution…
