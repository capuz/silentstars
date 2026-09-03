---
repo: "burin-labs/harn"
name: "harn"
description: "Harn is a programming language and runtime for building AI agents."
readmeQualityOk: true
url: "https://github.com/burin-labs/harn"
homepage: "https://harnlang.com"
language: "Rust"
languages: ["Rust", "C"]
languagePcts: [67, 29]
topics: ["acp", "agents", "ai-agents", "language", "mcp-client", "programming-language", "rust", "rust-crate"]
stars: 20
forks: 1
openIssues: 91
closedIssues: 2019
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2026-03-26T13:36:25Z"
lastCommitAt: "2026-09-03T08:13:43Z"
lastReleaseAt: "2026-03-28T16:54:49Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 99
undervaluedScore: 47
maintainers: ["kennethsinder", "harn-release-bot[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/83941df80699027fbf68add012e0d685d5082d0f63e2e19a068d6c52d50bba7f/burin-labs/harn"
---

# Harn

**Harn is a programming language and runtime for building AI agents.**

- You write the parts that are yours: workflows, tools, policies, and prompts.
- **Harn** ([harnlang.com](https://harnlang.com/)) owns the plumbing every agent needs
so you don't have to roll your own or pull in a patchwork of libraries. These include
transcripts and session management, context assembly, retries, tool routing, provider
differences, persistence, replay, and evals.

```harn,check
import {agent_loop} from "std/agent/loop"

fn main(harness: Harness) {
  tool search(pattern: string) -> string {
    description "Search the project"
    return harness.process.exec("rg", "--", pattern).stdout ?? ""
  }

  const result = agent_loop(harness,
    "Find the failing test and fix it.",
    "You are a senior engineer.",
    {loop_until_done: true, tools: search, max_iterations: 24},
  )

  harness.stdio.log(result.status)        // "done"
  harness.stdio.log(result.visible_text)  // the agent's final answer
}
```

That loop is provider-agnostic, resumable, replayable, and produces a durable run record without any glue
code of your own.

Harn's CLI, runtime, and rich model/provider catalog handle…
