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
recentReleases: 2
createdAt: "2026-04-18T08:13:15Z"
lastCommitAt: "2026-10-29T21:24:30Z"
lastReleaseAt: "2026-10-18T04:00:52Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "fork_magnet"]
healthScore: 92
undervaluedScore: 70
maintainers: ["hsaghir", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/d230407b69abdb9b43123108747bdbd9bc465a53fc5c2ddc4459aa6c103297a4/hsaghir/looplet"
discussionCount: 3
---

# looplet

**A Python loop for agents that call tools.**

You provide the model, tools, task, and limits.
Looplet checks each tool call, runs the tool, and records the result.
It yields a `Step` after each call.
Your code can inspect each step and stop iteration.

Looplet also provides context management for longer runs and hooks to control each stage of the loop.
The source build supplies a versioned standard harness; replace or disable its policies as needed.
Start in Python; use a cartridge when you need an agent stored and shared as files.
The [Quickstart](https://github.com/hsaghir/looplet/blob/HEAD/docs/quickstart.md) runs one agent, checks its answer, saves its calls, and replays them.

A short loop is enough if it already meets your needs.
Use Looplet when you need these controls without separate code for each agent.
The loop stays visible, and your code still controls iteration.

Looplet requires Python 3.11 or newer.
The core package has no third-party runtime dependencies.
It does not require a workflow graph, a hosted service, or a cartridge.

[Documentation](https://hsaghir.com/looplet/) | [Quickstart](https://github.com/hsaghir/looplet/blob/HEAD/docs/quickstart.md) |…
