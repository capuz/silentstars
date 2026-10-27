---
repo: "auth0/auth0-evals"
name: "auth0-evals"
description: "Benchmark AI agent accuracy on Auth0 integration tasks."
readmeQualityOk: true
url: "https://github.com/auth0/auth0-evals"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [92]
topics: ["ai", "auth0", "dx-sdk", "evals"]
stars: 11
forks: 3
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 17
recentReleases: 7
createdAt: "2026-06-02T07:18:48Z"
lastCommitAt: "2026-10-27T09:16:31Z"
lastReleaseAt: "2026-10-07T11:34:17Z"
status: "thriving"
tags: ["hidden_gem", "release_machine"]
healthScore: 87
undervaluedScore: 53
maintainers: ["dependabot[bot]", "sanchitmehtagit", "kailash-b"]
openGraphImageUrl: "https://opengraph.githubassets.com/227925033cd3f2d2c912552ee455e350599589dd788a93efa45dfb5c5e460edf/auth0/auth0-evals"
---

An evaluation framework for measuring how accurately LLM agents complete Auth0 integration tasks. It runs each task across multiple configurations - from a single LLM call with no tools, to a full agentic loop with MCP servers and skills - and compares the results so you can see exactly where each investment pays off.

## What it's used for

We use `auth0-evals` to measure how well AI agents integrate Auth0 across our SDKs, MCP servers, and skills - and to track how those scores improve as we invest in better documentation, tooling, and agent experiences. The results power the [Auth0 Agent Experience](https://auth0.com/agent-experience) page.

> [!NOTE]
> We develop `auth0-evals` in public for our own internal use. It is not intended for external use cases, and we provide no support, guarantees, or stability commitments for anyone building on top of it. You're welcome to read it, learn from it, provide feedback, and use it - but do so at your own risk.

## Packages

- [`@a0/evals`](https://github.com/auth0/auth0-evals/blob/HEAD/packages/evals/) - CLI (`a0-eval`), agent runners (Claude Code, Copilot, Gemini CLI), scoring, and result persistence.
-…
