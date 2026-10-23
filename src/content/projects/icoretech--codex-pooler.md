---
repo: "icoretech/codex-pooler"
name: "codex-pooler"
description: "The full featured self-hosted Codex gateway, for teams, agents and you"
readmeQualityOk: true
url: "https://github.com/icoretech/codex-pooler"
homepage: "https://codex-pooler.com"
language: "Elixir"
languages: ["Elixir"]
languagePcts: [96]
topics: ["codex", "openai", "openclaw", "opencode", "hermes-agent", "api-gateway", "mcp-server", "openai-api", "oh-my-pi", "pi"]
stars: 233
forks: 32
openIssues: 9
closedIssues: 67
watchers: 2
contributors: 20
recentReleases: 0
createdAt: "2026-05-24T02:16:31Z"
lastCommitAt: "2026-10-23T08:47:34Z"
lastReleaseAt: "2026-06-10T13:53:05Z"
status: "thriving"
tags: ["solo_builder", "funded"]
healthScore: 97
undervaluedScore: 29
maintainers: ["masterkain", "renovate[bot]", "github-actions[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1247958165/ee80d539-0b5f-472a-8a64-efc0a41de7fe"
fundingLinks: ["GITHUB:https://github.com/masterkain", "BUY_ME_A_COFFEE:https://buymeacoffee.com/masterkain"]
---

·
  ·
  ·

  ·
  ·
  ·
  ·
  ·
  ·
  ·

Codex Pooler is a self-hosted gateway for running Codex-compatible agents,
tools, and automation through stable Pool API keys. It works with one upstream
Codex account for credential isolation, client normalization, metadata-only
operations, and saved reset visibility; add more accounts when you want shared
capacity and routing across eligible accounts.

Clients send familiar Codex backend or OpenAI-compatible requests; Codex Pooler
selects an eligible account based on model support, quota evidence, limits,
session continuity, routing policy, and health. The Pool key stays stable while
upstream assignments, lifecycle state, reset policy, and capacity change behind
it.

Operators get one place to manage Pools, accounts, API keys, saved resets,
routing, request accounting, audit logs, and health without storing prompts,
files, audio, images, bearer tokens, or raw Codex secrets. Instance owners keep
the global administration surface, while instance admins work only with their
assigned Pools.

## Highlights

- 🧩 **Use the tools you already know:** connect Codex, OpenCode and other
  supported coding agents, plus apps built with…
