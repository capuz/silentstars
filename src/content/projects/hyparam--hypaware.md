---
repo: "hyparam/hypaware"
name: "hypaware"
description: "Records sessions, logs, and telemetry from your AI agents into one queryable history"
readmeQualityOk: true
url: "https://github.com/hyparam/hypaware"
homepage: "https://hyperparam.app"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
stars: 8
forks: 0
openIssues: 304
closedIssues: 539
watchers: 0
contributors: 5
recentReleases: 0
createdAt: "2026-05-21T14:35:44Z"
lastCommitAt: "2026-09-18T08:23:53Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem"]
healthScore: 92
undervaluedScore: 50
maintainers: ["philcunliffe", "platypii", "bgmcmullen"]
openGraphImageUrl: "https://opengraph.githubassets.com/112b0cdbc0552001f952f10762eb70c751c2ac234de223e822ad2549ff7a30c6/hyparam/hypaware"
---

# HypAware

HypAware records the sessions, logs, and telemetry from your AI agents
into one queryable history.

It captures conversations and traffic from local AI clients (Claude
Code, Codex), raw Anthropic / OpenAI API traffic, and OpenTelemetry
logs / traces / metrics. Recordings land in a local query cache and can
stay on your machine or sync to a central server.

There are two ways to run it:

- **Shared.** Each machine signs into your organization on the central
  server with one command, [`hyp remote login`](#set-up-for-your-team-hyp-remote-login),
  and forwards its recordings there. One history follows you across
  machines and harnesses, and usage, spend, and activity can be queried
  and reported across the whole team.
- **Solo, fully local.** No central server, no account. Everything stays in
  a local query cache on your machine. Start with [`npx hypaware`](#quickstart-solo-fully-local).

> Part of **[HypStack](https://hypstack.ai/)**, an open-source stack for AI observability.

**[Documentation](https://github.com/hyparam/hypaware/blob/HEAD/docs/README.md):** setup, clients, querying, configuration, privacy, and troubleshooting.

**Contents:**…
