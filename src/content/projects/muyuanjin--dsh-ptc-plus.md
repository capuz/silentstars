---
repo: "muyuanjin/dsh-ptc-plus"
name: "dsh-ptc-plus"
description: "A session-bound agent-native REPL for DeepSeek Harness PTC mode."
originalDescription: "A session-bound agent-native REPL for DeepSeek Harness PTC mode."
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/muyuanjin/dsh-ptc-plus"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
topics: ["cordis-plugin", "deepseek-harness", "dsh", "dsh-plugin", "ptc", "ptc-mode", "repl"]
stars: 27
forks: 5
openIssues: 0
closedIssues: 11
watchers: 2
contributors: 3
recentReleases: 8
createdAt: "2026-08-20T14:09:49Z"
lastCommitAt: "2026-11-23T13:30:15Z"
lastReleaseAt: "2026-10-03T20:11:38Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 99
undervaluedScore: 49
maintainers: ["muyuanjin"]
openGraphImageUrl: "https://opengraph.githubassets.com/f83c6be9e0e8a612e18b840941a4ce0aa0fd0d6e578fe7649e37b01859ba1817/muyuanjin/dsh-ptc-plus"
---

**Let the model keep computing and revise directly within the same session, reducing repeated work and avoidable tool-call errors.**

PTC Plus provides a stateful TypeScript compute environment for DSH's **PTC mode**. Built on a REPL, it lets variables, functions, imports, and intermediate results be reused across tool calls. To support models that continuously write and modify code, the extension declares update rules and provides module syntax adaptation, call fault tolerance, and code editing capabilities.

- **Keep computing:** Data that has been read and organized stays in the session, so the next call continues directly from it.
- **Edit in place:** Revise a variable or function of the same name, and existing closures read the updated bindings; small changes can send only a code diff.
- **Fewer call errors:** Adapts common module syntax, handles accurately identifiable call omissions, and provides fix suggestions for verifiable syntax errors.
- **Reuse common capabilities:** Save frequently used functions as global bindings, provide interfaces and usage hints to the model, and use them across multiple sessions.
