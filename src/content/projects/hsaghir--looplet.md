---
repo: "hsaghir/looplet"
name: "looplet"
description: "Test-driven harness engineering for Python agents: own the loop, capture failures, and gate every change."
readmeQualityOk: true
url: "https://github.com/hsaghir/looplet"
homepage: "https://hsaghir.com/looplet/"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["anthropic", "asyncio", "llm", "mcp", "ollama", "openai", "python", "tool-calling", "ai-agents", "function-calling"]
stars: 7
forks: 5
openIssues: 7
closedIssues: 12
watchers: 0
contributors: 5
recentReleases: 1
createdAt: "2026-04-18T08:13:15Z"
lastCommitAt: "2026-09-24T08:41:04Z"
lastReleaseAt: "2026-07-17T09:45:27Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "fork_magnet"]
healthScore: 89
undervaluedScore: 65
maintainers: ["hsaghir", "HarperZ9", "k0505"]
openGraphImageUrl: "https://opengraph.githubassets.com/1e482f2f72589b9b93580cfcf300f86a9707375c3d15a2168ac0b34791f9d2c1/hsaghir/looplet"
discussionCount: 3
---

# looplet

**Test-driven harness engineering for Python agents.**

## Own the loop. Test every change.

Looplet is for Python teams maintaining a tool-calling agent that is
fundamentally one model in one loop. After the first working version, each
prompt, tool, hook, or model change raises a harder question: what did it fix,
and what did it break?

- keep execution visible as an iterator of typed steps;
- capture prompts, responses, tool calls, and stop reasons as readable files;
- replay recorded model responses through changed harness code when that is a
  valid experiment;
- collect actual world state and gate required outcomes in pytest or CI.

An optional cartridge puts the supported editable behavior and its self-tests
in a versioned directory. A person or external builder can change a copy; the
host can compare outcomes using replay or fresh runs. Looplet supplies the loop
and evidence, not an optimizer or protected release service. Keep acceptance
checks and isolation for untrusted candidate code outside the candidate.

No graph DSL, hosted control plane, or required third-party runtime
dependencies.

[Documentation](https://hsaghir.com/looplet/) | [Why…
