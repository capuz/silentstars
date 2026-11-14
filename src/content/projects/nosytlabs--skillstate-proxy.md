---
repo: "NosytLabs/skillstate-proxy"
name: "skillstate-proxy"
description: "Local OpenAI/Anthropic-compatible proxy using structured conversation state to reduce repeated context. Savings and compatibility depend on the workload."
readmeQualityOk: true
url: "https://github.com/NosytLabs/skillstate-proxy"
homepage: "https://www.npmjs.com/package/skillstate-proxy"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
topics: ["agent", "ai-cost-optimization", "arxiv", "context-management", "llm", "llm-agent", "long-horizon", "openai-compatible", "proxy", "token-savings"]
stars: 10
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 1
createdAt: "2026-08-30T00:55:00Z"
lastCommitAt: "2026-11-14T21:56:52Z"
lastReleaseAt: "2026-09-07T09:02:20Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 88
undervaluedScore: 49
maintainers: ["NosytLabs", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/ba744f8f6f3b291923f82aff9ca687e2bd11fee647d3e294a7454a615e5f6357/NosytLabs/skillstate-proxy"
---

# skillstate-proxy

A local HTTP proxy for agent workflows that can represent their progress as explicit structured state.

[Documentation](https://nosytlabs.github.io/skillstate-proxy/) · [npm package](https://www.npmjs.com/package/skillstate-proxy) · [CI runs](https://github.com/NosytLabs/skillstate-proxy/actions) · [Security](https://github.com/NosytLabs/skillstate-proxy/blob/HEAD/SECURITY.md)

## What it does

The proxy sits between a client and a configured model provider. It builds context from the task specification, the session's JSON state and the latest observation, then extracts a `state_patch` from the model's response.

This can reduce repeated history on a suitable workload. **Savings, latency, accuracy and provider compatibility are not guaranteed.** State design, observation size, model output, retries, output tokens and billing rules all affect the result.

This repository contains software you run yourself. The GitHub Pages site is **not a hosted inference API**. Requests to the configured upstream may incur charges. `skillstate-proxy` and the separately maintained npm package `skillstate` are different projects.

## Install

The package declares Node.js 20 or…
