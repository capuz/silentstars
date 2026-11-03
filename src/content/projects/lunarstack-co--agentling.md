---
repo: "lunarstack-co/agentling"
name: "agentling"
description: "A tiny async tool-calling agent framework"
readmeQualityOk: true
url: "https://github.com/lunarstack-co/agentling"
homepage: "https://agentling.dev"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["agent-framework", "ai-agents", "async", "llm", "python", "tool-calling"]
stars: 23
forks: 3
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 1
createdAt: "2026-07-04T06:41:41Z"
lastCommitAt: "2026-11-03T12:47:46Z"
lastReleaseAt: "2026-10-29T16:42:52Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 81
undervaluedScore: 34
maintainers: ["folathecoder"]
openGraphImageUrl: "https://opengraph.githubassets.com/849f51bb044a38ecbec82e12840b3f57bdf71be7b1773d2838f1600cfe014cba/lunarstack-co/agentling"
---

# Agentling

A small agent engine for Python: the tool-calling loop, typed memory and
streamed events, with any model you bring. It's for developers who want to own
the code around their agent instead of adopting a framework.

> **Status: alpha (0.x).** The API may change before 1.0.

## Why Agentling

An agent is a loop: ask the model, run the tools it asks for, record what
happened, repeat until it answers. Agentling is that loop and nothing else. You
bring the model (any object with a `stream()` method), the tools (plain
functions) and whatever sits around the loop, such as a UI, approvals or a
server.

Over a hand-written loop you get retries that never repeat a tool call,
interrupt and resume, tool errors fed back to the model instead of crashing the
run, memory you can save and reload, and a checker that proves a model adapter
follows the contract. The loop is one file, [`agent.py`](https://github.com/lunarstack-co/agentling/blob/HEAD/src/agentling/agent.py).

## Install

```bash
pip install agentling
```

Or `uv add agentling`. Requires Python 3.11 or newer; the only runtime
dependency is `pyyaml`. Agentling is async: call it from async code or with
`asyncio.run`.

##…
