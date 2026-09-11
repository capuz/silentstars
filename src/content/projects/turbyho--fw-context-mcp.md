---
repo: "turbyho/fw-context-mcp"
name: "fw-context-mcp"
description: "C/C++ semantic index for AI coding assistants — powered by your compile_commands.json. Query the program your compiler actually builds, not just the source files."
readmeQualityOk: true
url: "https://github.com/turbyho/fw-context-mcp"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 8
forks: 1
openIssues: 0
closedIssues: 4
watchers: 1
contributors: 3
recentReleases: 6
createdAt: "2026-06-03T15:33:25Z"
lastCommitAt: "2026-09-11T08:14:34Z"
lastReleaseAt: "2026-06-18T08:00:51Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 100
undervaluedScore: 61
maintainers: ["turbyho"]
openGraphImageUrl: "https://opengraph.githubassets.com/c6d9f124dc0b3e9d4b5f9c47118184d03e5d14a94d6789f663f156c0cef60ef2/turbyho/fw-context-mcp"
discussionCount: 0
---

# fw-context

**Build-aware code intelligence for AI coding agents working on embedded C and C++ firmware.**

fw-context builds a persistent semantic index from `compile_commands.json` and the libclang AST, then exposes it to coding agents through MCP. Instead of reconstructing your firmware through repeated file reads and text searches, the agent can query the program structure produced by the active build configuration.

It helps agents answer questions such as:

- Which implementation is active in this build?
- Who calls this function, directly or indirectly?
- Where is this callback registered?
- Which function-pointer assignments can reach this call site?
- Which code is excluded by preprocessing?
- What will be affected if this API changes?
- How does execution flow from an ISR to application code?

The goal is not to give the model more source code. It is to give it the **smallest useful, build-aware context** needed for the current task.

## Results from a real firmware review

In the included [firmware review case study](https://github.com/turbyho/fw-context-mcp/blob/HEAD/docs/examples/firmware-review/), fw-context was used on an nRF52/Mbed OS project containing…
