---
repo: "hslee16/Archy"
name: "Archy"
description: "Architectural sensor for Python codebases - keeps structure honest under AI-assisted development"
readmeQualityOk: true
url: "https://github.com/hslee16/Archy"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 9
forks: 34
openIssues: 138
closedIssues: 308
watchers: 0
contributors: 30
recentReleases: 0
createdAt: "2026-05-09T18:53:31Z"
lastCommitAt: "2026-11-27T16:29:32Z"
lastReleaseAt: "2026-05-10T23:00:24Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem", "fork_magnet"]
healthScore: 93
undervaluedScore: 64
maintainers: ["hslee16", "nightlab-agent", "tylrcc"]
openGraphImageUrl: "https://opengraph.githubassets.com/993bfc13fab98f79570694b5fb990009eb9925aa68dee2cf06fc13cd706f7054/hslee16/Archy"
discussionCount: 1
---

> **Your folders show your architecture. Your imports decide it.**
> archy turns a Python import graph into something an agent can *use*: blast radius before an edit, the tests that edit affects, the modules most at risk. And it *fails* when the graph disagrees with the layers you declared. Same graph either way, as a CLI and an MCP server, every session and in CI.

> **Important**
>
> **Status, 2026-09-10: active, and pointed at the loop rather than the surface area.**
>
> **What archy does.** One graph, two front ends. It parses a Python project's
> imports and calls once, keeps the parse cached, and answers the questions a
> file tree cannot: what does this change reach, which tests does that affect,
> where are the cycles, and does the graph still agree with the layers you
> declared. It runs as a CLI in CI and as an MCP server inside an agent session,
> off the same graph either way, and it *fails* when the declared architecture
> and the real one disagree.
