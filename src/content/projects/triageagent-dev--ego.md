---
repo: "triageagent-dev/ego"
name: "ego"
description: "ego: agents' evaluations on the go - pure go"
readmeQualityOk: true
url: "https://github.com/triageagent-dev/ego"
language: "Go"
languages: ["Go", "TypeScript"]
languagePcts: [66, 33]
topics: ["agent-evaluation", "ai-agents", "claude-code", "evals", "golang", "helm", "llm-evaluation", "llm-observability", "mcp", "model-context-protocol"]
stars: 6
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-10-20T11:13:52Z"
lastCommitAt: "2026-10-25T22:09:31Z"
lastReleaseAt: "2026-10-21T18:03:25Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 80
undervaluedScore: 60
maintainers: ["den-vasyliev", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/7ed54bade25ab8713ce850a161baf1722c6ce055c8f1b77739fe2cbdc111fbfc/triageagent-dev/ego"
---

In psychology, the ego is the part of the mind that tests reality: it tells what is imagined from what actually happened, and holds the self-image up against the world. An agent has the same split.

ego is recursive self-improvement (RSI) for AI agents, run on the OpenTelemetry traces they already emit: it
scores the agent, and when scores drop it diagnoses why, hands the diagnosis to the agent over MCP, records what
the agent changed and checks that the scores recovered. It never re-runs the agent.

One static Go binary: REST API, web UI, OTLP receivers and an MCP server. No SDK to add, no extra runtime.

## RSI: the loop

```
sample → score → detect → diagnose → correct → verify
```

| Step | What happens | Where to look |
|---|---|---|
| sample | completed sessions are sampled per tenant and call kind, errors and outliers first, within a daily judge budget | Quality view, `GET /api/online/status` |
| score | each sampled session is scored by the evaluators of its kind's profile | Runs view, `explain_session` |
| detect | a significant drop of a (tenant, kind, metric) series opens an alert, attributed to the version or model that changed | `get_quality`, `explain_regression` |
|…
