---
repo: "zenml-io/kitaru"
name: "kitaru"
description: "Record, replay, and improve AI agents in production, built on ZenML"
url: "https://github.com/zenml-io/kitaru"
homepage: "https://kitaru.ai"
language: "Python"
languages: ["Python"]
languagePcts: [98]
topics: ["agent-framework", "ai-agents", "checkpoints", "durable-execution", "llm", "mcp", "mlops", "observability", "pydantic", "pydantic-ai"]
stars: 190
forks: 13
openIssues: 30
closedIssues: 98
watchers: 2
contributors: 10
recentReleases: 6
createdAt: "2026-03-05T14:04:26Z"
lastCommitAt: "2026-06-26T21:32:31Z"
lastReleaseAt: "2026-04-11T15:37:55Z"
status: "thriving"
tags: ["release_machine"]
healthScore: 94
undervaluedScore: 33
maintainers: ["strickvl", "dependabot[bot]", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/c830b99d390ac2d03a22fd2f21b68af4293b8b6119cb12b469fad1473201b59d/zenml-io/kitaru"
discussionCount: 2
---

</a>
</p>

<h3 align="center">Every agent run, recorded and replayable.</h3>

  Kitaru (来る, "to arrive") is a self-hosted, framework-agnostic runtime for autonomous agents — underneath the harness your team already picked. You keep your agent SDK, your prompts, your tools, your model. Kitaru records every step of every run — each model call, tool call, and decision — as a replayable checkpoint, so you can diagnose failures, replay runs with a different model or input, and ship agent updates with confidence. All on your own infrastructure.
</p>

</p>

</p>

---

</p>

## 🧩 Where Kitaru fits

Agent stacks break cleanly into four layers. Kitaru is exactly one of them.

| Layer | What it does | Examples |
|---|---|---|
| **Model** | The LLM itself — a compute unit over a context window | OpenAI, Anthropic, Google, open-weights, fine-tuned in-house |
| **Harness** | The *loop around the model* — prompts, tools, model loop, framework choice | Pydantic AI / Pydantic AI Harness, LangGraph, Claude Agent SDK, OpenAI Agents SDK, raw Python |
| **Runtime (Kitaru)** | How the agent's runs are *recorded, replayed, and improved over time* — checkpoints, replay, resume, `wait()`, versioned…
