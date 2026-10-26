---
repo: "prime-radiant-inc/evener"
name: "evener"
description: "A coding agent: give it a prompt and it reads, writes, runs commands, and searches code in a loop until the work is done, using native tool-calling across OpenAI, Anthropic, and Google models."
readmeQualityOk: true
url: "https://github.com/prime-radiant-inc/evener"
language: "Go"
languages: ["Go", "TypeScript"]
languagePcts: [59, 38]
topics: ["ai-agent", "cli", "coding-agent", "go", "llm"]
stars: 185
forks: 17
openIssues: 347
closedIssues: 1411
watchers: 0
contributors: 8
recentReleases: 8
createdAt: "2026-02-10T05:44:12Z"
lastCommitAt: "2026-10-26T20:41:42Z"
lastReleaseAt: "2026-09-30T06:38:54Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "release_machine"]
healthScore: 96
undervaluedScore: 37
maintainers: ["obra"]
openGraphImageUrl: "https://opengraph.githubassets.com/4e73f19e21b75dba6d22ab57fcdda1c60ed020dc7aacc72ac680c1f108d66fcf/prime-radiant-inc/evener"
---

# Evener

Evener is a coding agent that works in your project: it reads files, runs commands, edits code, and checks the result. Use the browser to follow and steer its work, the CLI to run a task from a script, or the iPhone client to reach your hub away from your desk. The hub is the service that connects these interfaces to your sessions.

**[Get started](https://github.com/prime-radiant-inc/evener/blob/HEAD/docs/getting-started.md)** to install Evener, connect a model provider, and repair a small program with a check you can run yourself.

These guides track **main**. The first-run guide uses the latest successful snapshot from main; tagged releases can lag the behavior described here.

Start the service with `evener hub`. Its listener (`--addr`, `EVENER_HUB_LISTEN_ADDR`, or TOML `addr`), a client's destination (`--hub-url` or `EVENER_HUB_URL` where supported), and the advertised `public_url` are separate settings. See [hub endpoints](https://github.com/prime-radiant-inc/evener/blob/HEAD/docs/evener-hub-endpoints.md) for discovery and migration.

## Find your next step

| You want to… | Read |
| --- | --- |
| Install and finish a first task | [Get…
