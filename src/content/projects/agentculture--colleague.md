---
repo: "agentculture/colleague"
name: "colleague"
description: "Colleague is a harness for Qwen, that is designed to run by itself - and other agents"
readmeQualityOk: true
url: "https://github.com/agentculture/colleague"
homepage: "https://agentculture.org/agents/colleague"
language: "Python"
languages: ["Python"]
languagePcts: [99]
stars: 7
forks: 2
openIssues: 68
closedIssues: 172
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-05-26T22:44:15Z"
lastCommitAt: "2026-08-22T04:06:18Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "under_pressure"]
healthScore: 93
undervaluedScore: 57
maintainers: ["OriNachum"]
openGraphImageUrl: "https://opengraph.githubassets.com/aa886c6c7b27fb47cf36f14edf717f9ddbfbd84d60200592a60d7c17b31622d3/agentculture/colleague"
---

# colleague

> Colleague is a swappable coder-agent harness that turns different model
> backends into repo workers behind one shared task runtime.
>
> **One runtime, many minds.**

**The problem it solves.** AI coder backends are not interchangeable — a local
vLLM model, an OpenAI-compatible endpoint, and a hosted assistant each bring their
own SDK, controls, and output shape. Colleague is the *harness around the model*:
you point it at a repo task, pick a backend, and it runs the work through that
backend's bounded tool-loop and hands back the **same typed result every time**.
Swap the backend and nothing else about your workflow changes — the caller never
has to care which mind ran the task.

## Quickstart (30 seconds)

No model and no network required — the `mock` backend runs the full loop
deterministically, so you can see the shape of a task before wiring up a real
model:

```bash
uv sync
uv run pytest -n auto                            # full suite, offline

# Run your first task through the deterministic mock backend:
uv run colleague work "add a CONTRIBUTING.md stub" --repo . --engine mock --no-pr

# Open the interactive cockpit (the session palette) at a terminal:
uv run…
