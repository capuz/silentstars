---
repo: "moeen-mahmud/dispach"
name: "dispach"
description: "An open-source, self-hosted agent runtime your product calls over HTTP."
readmeQualityOk: true
url: "https://github.com/moeen-mahmud/dispach"
homepage: "https://docs.dispach.moeenmahmud.com/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
topics: ["agent-backend", "agent-harness", "alpha", "hacktoberfest"]
stars: 5
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 5
recentReleases: 10
createdAt: "2026-08-12T12:46:43Z"
lastCommitAt: "2026-10-24T08:21:04Z"
lastReleaseAt: "2026-10-05T09:06:19Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 89
undervaluedScore: 66
maintainers: ["moeen-mahmud", "Sajib-Hossain-Cloud"]
openGraphImageUrl: "https://opengraph.githubassets.com/174bcbadad61d0c833edf34726c82c8949ece582f8f469ad3beab48a2c5a2571/moeen-mahmud/dispach"
discussionCount: 1
---

# Dispach

An open-source, self-hosted agent runtime your product calls over HTTP.

Your backend calls one API and Dispach runs the agents: each has its own memory, tools, schedules,
channels and approvals, on any OpenAI-compatible model (including small local ones), on
infrastructure you control. Every turn is detached and reattachable, every write takes an
idempotency key, and the wire contract is published as OpenAPI 3.1 and checked in CI. One process
hosts many agents, and scoped keys fence each one off. TypeScript, shipped on Node, Apache-2.0.

**Where it is going: the multiplayer agent runtime.** 0.2.0 gives every user and every team in your
product their own isolated runtime of agents. Those agents share rooms and memory with the people
they work for, and stand in for them, openly, when they are away. That half ships in 0.2.0 as
**experimental**: on the HTTP API, with no TUI or web screens yet, and it may change within 0.2.x.
Everything else described in this README is stable.

**Docs:** [dispach.blivius.com/docs](https://dispach.blivius.com/docs) ·
**New in 0.2.0:** [what changed and how to…
