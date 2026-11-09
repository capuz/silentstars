---
repo: "plimsollmark/plimsoll"
name: "plimsoll"
description: "A sandbox service for running untrusted, agent-authored code that reports the isolation boundary each run executed behind. Lessons, no clone needed: https://plimsollmark.github.io/plimsoll/trainers/"
readmeQualityOk: true
url: "https://github.com/plimsollmark/plimsoll"
homepage: "https://plimsollmark.github.io/plimsoll/"
language: "Go"
languages: ["Go"]
languagePcts: [80]
topics: ["ai-agents", "code-execution", "firecracker", "golang", "gvisor", "llm-agents", "mcp", "sandbox", "security", "webassembly"]
stars: 27
forks: 3
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 10
createdAt: "2026-09-10T20:07:00Z"
lastCommitAt: "2026-11-09T04:32:57Z"
lastReleaseAt: "2026-09-25T07:00:38Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 69
undervaluedScore: 46
maintainers: ["carrollco"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1364859191/1c2b8e16-8816-4886-8530-24b2242eed96"
discussionCount: 0
---

# plimsoll

**Run agent-written code across sandbox [providers](https://github.com/plimsollmark/plimsoll/blob/HEAD/docs/trainers/glossary.html#provider), control which APIs it can call,
and check a record of what ran.**

[Run the quickstart](#run-something-locally) · [See what it does](#what-you-can-do) ·
[Agent connections](#connect-an-agent) · [Choose a provider](#choose-a-provider)

Use one interface for disposable runs and persistent workspaces. Require a minimum
Keep upstream API credentials outside <dfn>*guest*</dfn> code, the code running inside
the sandbox, and check the service's account of the input and result. Sign records separately
when you need saved evidence. An API is a service's callable interface, such as
an endpoint that places an order or queries a database.

**One job, every sandbox.** A Mandelbrot picture is a fractal, an image made by
repeatedly applying a small formula. The example splits it into
tiles and sends pieces to sandboxes working at once. That is <dfn>*fan-out*</dfn>; assembling
the results is *fan-in*. Each tile runs twice so the example can compare answers
across the nine configurations shown.
[INTERNAL · example guide and reproduction commands…
