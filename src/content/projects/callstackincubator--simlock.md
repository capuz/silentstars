---
repo: "callstackincubator/simlock"
name: "simlock"
description: "A control plane so parallel coding agents stop fighting over the same simulator."
readmeQualityOk: true
url: "https://github.com/callstackincubator/simlock"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
topics: ["agents", "emulators", "simulators"]
stars: 19
forks: 1
openIssues: 52
closedIssues: 150
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-07-17T19:34:16Z"
lastCommitAt: "2026-10-11T10:16:16Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 94
undervaluedScore: 42
maintainers: ["V3RON"]
openGraphImageUrl: "https://opengraph.githubassets.com/124e9dabc097dc66565ca2a7c7b4be381b1c4dfb2c6b9fa7792fd64076e67b14/callstackincubator/simlock"
---

### A control plane so parallel coding agents stop fighting over the same simulator

Simlock is a CLI-first control plane for iOS simulators and Android
emulators, built for environments where multiple coding agents run at the
same time — on one machine, or across a fleet of them behind a single
address. Agents don't touch `simctl` or `avdmanager`
directly — they ask Simlock for a device and get one back, booted and
health-checked, that no other agent will touch until they're done with it.

## Why you'd want this

**Two agents, one simulator, zero coordination.** Left to themselves, agents
that need a device grab whatever `simctl` / `avdmanager` happens to show
them. Two agents that pick the same one start booting, erasing, and
installing over each other — without either ever knowing the other exists.
Simlock gives them a single primitive instead: **lease a device**.

**You don't provision devices by hand.** If nothing matching is free,
Simlock provisions one itself, up to a capacity limit it derives from the
machine's CPU and RAM. Once that limit is reached, further requests block
and wait in a fair queue rather than failing outright, with `--timeout` and
`--no-wait` escape…
