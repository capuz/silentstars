---
repo: "mihailinl/AstraPlugins"
name: "AstraPlugins"
description: "Astra plugin SDKs (Rust, Python, TypeScript), CLI tool, and example plugins"
readmeQualityOk: true
url: "https://github.com/mihailinl/AstraPlugins"
language: "Python"
languages: ["Python", "Rust"]
languagePcts: [43, 38]
stars: 5
forks: 0
openIssues: 1
closedIssues: 1
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-04-07T09:06:18Z"
lastCommitAt: "2026-11-05T14:05:17Z"
lastReleaseAt: "2026-08-19T13:33:19Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 89
undervaluedScore: 59
maintainers: ["mihailinl"]
openGraphImageUrl: "https://opengraph.githubassets.com/73901e4274886273fcf0baf88d85417032c2fee5a2a3f74692cea8a4aeadd6a8/mihailinl/AstraPlugins"
---

# AstraPlugins

Everything needed to write, test, build and publish a plugin for Astra: three
SDKs, one CLI, the protocol they all speak, and eleven worked examples.

Canonical repository: **<https://github.com/mihailinl/AstraPlugins>**. Every
`repository`, `homepage` and `documentation` field in this tree points there. If
you found this project under any other name, that name is stale — two others
were in circulation and neither resolves.

---

## What a plugin is

A plugin is a **separate process** that Astra's daemon starts and talks to over
gRPC on loopback. Two services run in opposite directions:

- `PluginCapabilityService` — **daemon → plugin**. Your plugin serves it; Astra
  calls in to list your tools, synthesize speech, transcribe audio, hand you an
  event.
- `PluginHostService` — **plugin → daemon**. Astra serves it; your plugin calls
  out to log, fire a trigger, set a variable, push to the UI.

41 hooks across the two, protocol version 1, one source of truth in
[`spec/hooks.yaml`](https://github.com/mihailinl/AstraPlugins/blob/HEAD/spec/hooks.yaml). All three SDKs implement all 41 — see
the generated hook-parity page under…
