---
repo: "metask-ai/metacodes"
name: "metacodes"
description: "The agent harness you can embed anywhere: a 5.5 MB Zig agent core and coding CLI with a C ABI, graph memory and a kernel no plugin can bypass."
readmeQualityOk: true
url: "https://github.com/metask-ai/metacodes"
homepage: "https://app.metask-ai.com"
language: "Zig"
languages: ["Zig", "Python"]
languagePcts: [72, 24]
topics: ["agent-harness", "agent-memory", "agentic-ai", "ai-agents", "c-abi", "cli", "coding-agent", "developer-tools", "embeddable", "knowledge-graph"]
stars: 8
forks: 2
openIssues: 0
closedIssues: 110
watchers: 2
contributors: 4
recentReleases: 7
createdAt: "2026-08-24T12:15:07Z"
lastCommitAt: "2026-10-29T13:50:23Z"
lastReleaseAt: "2026-10-26T08:37:42Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 100
undervaluedScore: 65
maintainers: ["wayfind"]
openGraphImageUrl: "https://opengraph.githubassets.com/2f46edc714a5fa775c694a065536d42847a2ea85d52e04039bc5b222be93fcda/metask-ai/metacodes"
discussionCount: 0
---

# metacodes

**The agent harness you can embed anywhere.**

Benchmarked on WorkBuddy-Bench against CodeBuddy Code and Claude Code · a 5.5 MB native binary · a fixed kernel no plugin can bypass · graph memory · a C ABI for every host

**English** · [简体中文](https://github.com/metask-ai/metacodes/blob/HEAD/README.zh-CN.md)

metacodes is a coding-agent harness written from scratch in Zig. You can use
it today as a terminal agent, but it is built as a library: one fixed agent
loop, with permissions, budgets and formal checks that no plugin can bypass,
inside surfaces that let any program host it. Those surfaces are a Zig module,
a C ABI (callable from C, C++, Rust, Python, Node and anything else with an
FFI), headless NDJSON, an HTTP/UDS daemon and a web UI.

## Why another harness

Agents are leaving the terminal. They are moving into editors and desktop apps,
CI pipelines, browsers, games and edge devices, and into fleets of hundreds of
workers splitting one job. There the harness is no longer an app you open. It
is infrastructure you embed, and it runs many copies at once.

Most harnesses today are applications: often a Node or Python runtime, tens
to hundreds of megabytes of memory…
