---
repo: "hermeum/hermeum"
name: "hermeum"
description: "A platform creating fully autonomous Hermes agents for your team."
readmeQualityOk: true
url: "https://github.com/hermeum/hermeum"
homepage: "https://docs.hermeum.app"
language: "TypeScript"
languages: ["TypeScript", "Python"]
languagePcts: [77, 22]
topics: ["agent", "ai", "hermes-agent", "hermeum", "kubernetes", "platform", "self-hosted", "agent-sprawl"]
stars: 31
forks: 4
openIssues: 1
closedIssues: 5
watchers: 0
contributors: 2
recentReleases: 7
createdAt: "2026-06-22T23:25:00Z"
lastCommitAt: "2026-10-25T02:46:26Z"
lastReleaseAt: "2026-10-23T07:36:02Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 96
undervaluedScore: 49
maintainers: ["noahingh", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/904ca4089466d54e9168aa217307e3f443241e3328d39b356f4bad22d6b6f18c/hermeum/hermeum"
---

# Hermeum

**Fully autonomous Hermes agents, shaped by a sentence — deployed, monitored, and managed from one dashboard.**

## See it in action

The demo builds a Hermes agent, adds a GitHub webhook, and gets a code review.

## Features

- **Tailor an agent by chat** — describe what your agent should do in natural
  language and Hermeum generates the configuration for you.
- **Templates** — create reusable agent templates for the agent shapes your
  team uses most.
- **Shared env sets** — share credentials (such as API keys) across agents
  without re-entering them each time.
- **Session monitoring** — inspect every agent session as a live transcript
  beside a stream of telemetry events (model calls, tool calls, errors).
- **Powered by Kubernetes** — agents run as `HermesAgent` custom resources, with
  a mutating admission webhook that shapes each agent at creation time.

## Why Hermeum instead of running Hermes directly?

A [Hermes agent](https://hermes-agent.nousresearch.com/docs) is one agent you run
yourself: you hand-write its `config.yaml`, start it, and manage it on your own
machine. Hermeum adds the control plane around it:

- **Describe, don't configure** — turn a…
