---
repo: "iamvirul/nexora"
name: "nexora"
description: "Nexora is a Java execution engine that turns a high-level goal into a set of steps and runs them. "
readmeQualityOk: true
url: "https://github.com/iamvirul/nexora"
homepage: "https://iamvirul.github.io/nexora/"
language: "Java"
languages: ["Java"]
languagePcts: [97]
topics: ["event-bus", "execution-engine", "grafana", "java", "prometheus"]
stars: 5
forks: 1
openIssues: 15
closedIssues: 20
watchers: 0
contributors: 2
recentReleases: 1
createdAt: "2026-05-20T10:15:05Z"
lastCommitAt: "2026-10-23T08:48:30Z"
lastReleaseAt: "2026-10-11T17:51:24Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "under_pressure"]
healthScore: 90
undervaluedScore: 58
maintainers: ["iamvirul", "dependabot[bot]", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/5fd85e8f605e8b5aabff89c11e1223997caef98932af4b2ba9881e5be91016fe/iamvirul/nexora"
---

# Nexora

Nexora is a Java execution engine that turns a high-level goal into a set of steps and runs them. You tell it what you want to happen, and it figures out the order, runs independent steps in parallel, and gives you back a result.

The idea is that you shouldn't have to hard-code execution logic. You declare capabilities (things the system can do), define which steps map to which goal keywords, and Nexora handles the rest: planning, scheduling, retrying on failure, and tracing what happened.

Three things set it apart from every other workflow engine:

- **Pluggable planner SPI** - the planner itself is a plugin. Swap in an LLM, a constraint solver, or your own rule engine. The built-in keyword matcher is just the default.
- **Reactive plan amendment** - a step can reshape the remaining plan based on what it produced. Inject new steps, skip pending ones, or override inputs for downstream steps, all at runtime without touching the planner.
- **Capability contracts with automatic fallback** - capabilities declare their expected latency and error rate. The engine monitors live call metrics and silently reroutes to a fallback capability when the primary starts breaching its…
