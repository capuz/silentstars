---
repo: "diegopetrucci/pi-extensions"
name: "pi-extensions"
description: "A collection of pi extensions I made"
readmeQualityOk: true
url: "https://github.com/diegopetrucci/pi-extensions"
homepage: "https://github.com/diegopetrucci"
language: "JavaScript"
languages: ["JavaScript", "TypeScript"]
languagePcts: [58, 40]
topics: ["developer-tools", "pi", "pi-package", "terminal", "typescript"]
stars: 62
forks: 13
openIssues: 1
closedIssues: 19
watchers: 0
contributors: 7
recentReleases: 0
createdAt: "2026-04-15T19:27:56Z"
lastCommitAt: "2026-10-19T09:14:13Z"
lastReleaseAt: "2026-05-01T16:48:10Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 97
undervaluedScore: 40
maintainers: ["diegopetrucci", "davidlondono", "denusklo"]
openGraphImageUrl: "https://opengraph.githubassets.com/71f3de811985d0f568500afb0cadefb82c7c98f8f272405b97aca4ccd8e969c1/diegopetrucci/pi-extensions"
---

# pi-extensions

A collection of [pi](https://pi.dev) agent extensions I made. (Btw, [I am also building my own harness on top of pi](https://github.com/diegopetrucci/the-last-harness). Have a look if that sounds interesting!)

### Subagents

- [`code-reviewer`](https://github.com/diegopetrucci/pi-extensions/blob/HEAD/extensions/code-reviewer): Adds a `code_reviewer` subagent tool with read-only built-in tools plus configured MCP tools (run without confirmation, may have side effects, Pi >=1.0.4) that reviews local changes for ticket fit, diff mismatches, correctness, security, simplicity, and validation gaps without implementing fixes, auto-selects a contrarian-style opposite-provider review model when available, and clamps requested thinking to the chosen model's capabilities.
- [`contrarian`](https://github.com/diegopetrucci/pi-extensions/blob/HEAD/extensions/contrarian): Adds a contrarian tool with read-only built-in tools plus configured MCP tools (run without confirmation, may have side effects, Pi >=1.0.4) that spins up an isolated subprocess to stress-test plans, designs, assumptions, bug hypotheses, and conclusions by steelmanning the strongest opposing case.
-…
