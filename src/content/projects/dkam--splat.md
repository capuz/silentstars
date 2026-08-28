---
repo: "dkam/splat"
name: "splat"
description: "A lightweight, self-hosted exception and performance monitoring tool built with Rails and SQLite. Inspired by Sentry/Glitchtip but optimsed for simplicity. Features live updates, MCP integration for AI agents to query production data, and efficient trace storage."
readmeQualityOk: true
url: "https://github.com/dkam/splat"
language: "Ruby"
languages: ["Ruby", "HTML"]
languagePcts: [78, 21]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 9
createdAt: "2025-10-22T05:28:01Z"
lastCommitAt: "2026-08-28T14:28:22Z"
lastReleaseAt: "2026-08-28T14:26:05Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 69
undervaluedScore: 71
maintainers: ["dkam"]
openGraphImageUrl: "https://opengraph.githubassets.com/6f99637ad53b58c84027f98b89e196d8d58703945720f56762f8a1f86bacb6aa/dkam/splat"
---

# Splat - Lightweight Error Tracker & APM

Splat is a simple error tracker and lightweight backend APM. It's a fast, reliable alternative to Sentry for applications that need error monitoring and performance insight without the overhead.

Splat supports OIDC but defaults to no authentication. It has an MCP endpoint for your LLM Agents to use. This app was Agentically Engineered, partnering with GLM / Sonnet / Opus. 

Initially built as an experiment in using SQLite in a write-heavy service, it's performed well enough for my use case, growing into a capable error tracker, a focused backend APM, and a structured log store — exception grouping plus transaction tracing, span waterfalls, latency percentiles, N+1 detection, and full-text searchable logs that tie back to traces, all queryable by an LLM over MCP.

I've only used Splat with Rails, but there's no reason it shouldn't work with other systems. Happy to accept pull requests for wider compatibility.

If you're looking for other Sentry clones, take a look at Glitchtip, Bugsink & Telebugs. 

## Run a local Splat instance

Want your own Splat to point your apps at — on your laptop or a box on your network? This gets one running in…
