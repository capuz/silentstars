---
repo: "burin-labs/harn"
name: "harn"
description: "Harn is a programming language and runtime for building AI agents."
readmeQualityOk: true
url: "https://github.com/burin-labs/harn"
homepage: "https://harnlang.com"
language: "Rust"
languages: ["Rust", "C"]
languagePcts: [63, 35]
topics: ["acp", "agents", "ai-agents", "language", "mcp-client", "programming-language", "rust", "rust-crate"]
stars: 7
forks: 0
openIssues: 21
closedIssues: 731
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-03-26T13:36:25Z"
lastCommitAt: "2026-07-06T06:54:15Z"
lastReleaseAt: "2026-03-28T16:54:49Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 99
undervaluedScore: 56
maintainers: ["kennethsinder"]
openGraphImageUrl: "https://opengraph.githubassets.com/694c5b1942910278ceda585ada02e00e28ced0a2f8d61d804ccf1dadcaa56e56/burin-labs/harn"
---

# Harn

**Harn is a programming language and runtime for building AI agents.**

- You write the parts that are yours: workflows, tools, policies, and prompts.
- **Harn** ([harnlang.com](https://harnlang.com/)) owns the plumbing every agent needs
so you don't have to roll your own or pull in a patchwork of libraries. These include
transcripts and session management, context assembly, retries, tool routing, provider
differences, persistence, replay, and evals.

```harn
tool search(pattern: string) -> string {
  description "Search the project"
  exec("rg", "--", pattern).stdout
}

let result = agent_loop(
  "Find the failing test and fix it.",
  "You are a senior engineer.",
  {loop_until_done: true, tools: search, max_iterations: 24}
)

log(result.status)        // "done"
log(result.visible_text)  // the agent's final answer
```

That loop is provider-agnostic, resumable, replayable, and produces a durable run record without any glue
code of your own.

Harn's CLI, runtime, and rich model/provider catalog handle footguns, quirks, and differences across LLM
APIs. The Harn toolchain helps you hit the ground running with local and cloud inference without
any of the pain of figuring out…
