---
repo: "wuisabel-gif/MemWhale"
name: "MemWhale"
description: "Persistent, local memory for developers and their coding agents. Records commands, output, errors, and the fixes that worked into SQLite and serves them over MCP."
readmeQualityOk: true
url: "https://github.com/wuisabel-gif/MemWhale"
homepage: "https://wuisabel-gif.github.io/MemWhale/"
language: "Rust"
languages: ["Rust"]
languagePcts: [78]
topics: ["cli", "command-line", "debugging", "developer-tools", "jetson", "local-first", "memory", "react", "robotics", "rust"]
stars: 153
forks: 34
openIssues: 22
closedIssues: 101
watchers: 11
contributors: 9
recentReleases: 1
createdAt: "2026-06-17T18:47:53Z"
lastCommitAt: "2026-10-21T21:16:45Z"
lastReleaseAt: "2026-08-09T04:53:33Z"
status: "thriving"
tags: ["needs_contributors"]
healthScore: 95
undervaluedScore: 33
maintainers: ["wuisabel-gif", "dependabot[bot]", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/cfe735b209ff60047d07421922665c6609b287f10edebcd84ec7fd6597e7fe63/wuisabel-gif/MemWhale"
discussionCount: 2
---

**You hit an error. MemoryWhale remembers you've seen it before, and hands back the fix.**

MemoryWhale records what actually happened while you debug: commands, output,
failures, and the fixes that worked. It stores that evidence in local SQLite so
you and your coding agents can find it after the terminal, SSH connection, or
agent session is gone. It works with 19 coding agents through MCP, with no
account and nothing uploaded.

> On [LongMemEval](https://github.com/wuisabel-gif/MemWhale/blob/HEAD/benchmarks/longmemeval/README.md), a public long-term memory benchmark, search puts a
> session holding the answer in its top 5 for **97%** of 470 questions
> (retrieval only, no model).
>
> In a controlled evaluation on project-specific bugs, an agent solved **25%**
> without memory and **96%** with it. These are synthetic tasks that
> demonstrate the mechanism, not a field study; see
> [how it was measured](https://github.com/wuisabel-gif/MemWhale/blob/HEAD/benchmarks/README.md).

**MemoryWhale 0.22.0: Recall Before It Fails · October 21, 2026.**
The CLI, web UI, and desktop app share product version 0.22.0; the reusable
Rust core is version 0.10.0. See the [release…
