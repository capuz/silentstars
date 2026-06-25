---
repo: "mjason/long"
name: "long"
description: "Single-binary LLM agent runtime built on Elixir/OTP: chat UI, 4-tier memory, Anthropic-compatible Skills, scheduled tasks, multi-provider LLM routing, and platform bots."
url: "https://github.com/mjason/long"
homepage: "https://github.com/mjason/long"
language: "Elixir"
languages: ["Elixir"]
languagePcts: [97]
topics: ["ai-agent", "anthropic-skills", "ash-framework", "chat", "elixir", "liveview", "llm", "phoenix"]
stars: 25
forks: 3
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-05-16T03:54:05Z"
lastCommitAt: "2026-06-25T01:37:37Z"
lastReleaseAt: "2026-05-17T04:40:28Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 80
undervaluedScore: 47
maintainers: ["mjason"]
openGraphImageUrl: "https://opengraph.githubassets.com/2f9e68d97334936c51a3812730d6646bf35538b95873552d30c4b277ab180481/mjason/long"
---

# Long

**English** · [简体中文](README.zh-CN.md)

> A single-process, multi-user LLM agent runtime on Elixir/OTP — for a household or a small team. Phoenix for the UI, Ash for the data layer, Oban for scheduled tasks, ReqLLM for provider abstraction.

Long *started* as a port of the Python [GenericAgent](https://github.com/lsdefine/GenericAgent) to Elixir, borrowing its core shape — *one session → ReAct loop → tools + memory + skills*. The design has since diverged substantially: on the BEAM it gets real concurrency, fault tolerance, and long-lived push messaging natively (one supervised GenServer per session rather than a bolted-on Python process model), and the agent's capability layer has been rebuilt on **mature, standard technology rather than a bespoke tool protocol** — most notably **GraphQL as the agent's primary skill** (see below).

It's **web-first**: you don't run a CLI to talk to it. Open the browser, and chat, configuration, memory, channels, and scheduled tasks are all just pages.

## Design philosophy

Long is built to install and run **like a personal CLI tool, not like server infrastructure.** Everything below follows from that one decision.

- **One self-contained…
