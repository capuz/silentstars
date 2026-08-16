---
repo: "burin-labs/harn"
name: "harn"
description: "Harn is a programming language and runtime for building AI agents."
readmeQualityOk: true
url: "https://github.com/burin-labs/harn"
homepage: "https://harnlang.com"
language: "Rust"
languages: ["Rust", "C"]
languagePcts: [66, 31]
topics: ["acp", "agents", "ai-agents", "language", "mcp-client", "programming-language", "rust", "rust-crate"]
stars: 19
forks: 1
openIssues: 28
closedIssues: 1567
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2026-03-26T13:36:25Z"
lastCommitAt: "2026-08-16T04:08:17Z"
lastReleaseAt: "2026-03-28T16:54:49Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 100
undervaluedScore: 48
maintainers: ["kennethsinder", "harn-release-bot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/ccfdce3b0571681431db33239daef6609c424894342b217b403d756e84c73337/burin-labs/harn"
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
