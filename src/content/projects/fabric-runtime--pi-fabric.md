---
repo: "fabric-runtime/pi-fabric"
name: "pi-fabric"
description: "A programmable tool and agent runtime for Pi"
readmeQualityOk: true
url: "https://github.com/fabric-runtime/pi-fabric"
homepage: "https://www.npmjs.com/package/pi-fabric"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [96]
topics: ["agents", "coding-agent", "mcp", "multi-agent", "orchestration", "pi", "pi-extension", "pi-package", "quickjs", "rlm"]
stars: 323
forks: 39
openIssues: 7
closedIssues: 70
watchers: 4
contributors: 20
recentReleases: 9
createdAt: "2026-07-13T14:35:18Z"
lastCommitAt: "2026-11-05T11:24:59Z"
lastReleaseAt: "2026-11-04T17:15:17Z"
status: "thriving"
tags: ["solo_builder", "funded", "release_machine"]
healthScore: 97
undervaluedScore: 32
maintainers: ["monotykamary", "chrisgoddard"]
openGraphImageUrl: "https://opengraph.githubassets.com/109e7196d6dd521ac67a42894ce719a7643a23bb67bb4434f0590ea66770fef8/fabric-runtime/pi-fabric"
fundingLinks: ["GITHUB:https://github.com/monotykamary", "OPEN_COLLECTIVE:https://opencollective.com/pi-fabric", "KO_FI:https://ko-fi.com/monotykamary", "BUY_ME_A_COFFEE:https://buymeacoffee.com/monotykamary", "POLAR:https://polar.sh/monotykamary"]
---

# pi-fabric

**A programmable tool and agent runtime for [Pi](https://github.com/earendil-works/pi-coding-agent)**

_One program for tools, MCP, agents, workflows, actors, mesh, councils, and recursion._

  🏆 <strong><a href="https://arcprize.org/scorecards/d4c56c67-136b-4643-b648-62ae28fe2a54">100% on ARC-AGI-3</a></strong>. A Fabric-powered agent won <strong>all 25 environments</strong> in one 22.4-hour session with 4 minutes of human time ($1,349 in model spend).

---

Fabric gives Pi one programmable tool called `fabric_exec`, which composes core tools and MCP servers with captured extension tools. The default kernel runs checked TypeScript in isolated QuickJS; select sandboxed **Python (Monty)** with `executor.kernel: "python"`. CPython is an explicit native escape hatch via `executor.pythonRuntime: "cpython"`. The configured kernel is exclusive: there is no per-call language selector. Trusted TypeScript workloads can also use unsafe Node/Bun processes. Programs call host providers for agents, actors, and durable coordination, then return the result of their branches, loops, fan-out, and data flow. See [execution…
