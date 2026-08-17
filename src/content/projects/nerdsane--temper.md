---
repo: "nerdsane/temper"
name: "temper"
description: "A machine tool for agents: a verified runtime for systems agents build."
readmeQualityOk: true
url: "https://github.com/nerdsane/temper"
language: "Rust"
languages: ["Rust"]
languagePcts: [88]
stars: 47
forks: 11
openIssues: 19
closedIssues: 3
watchers: 0
contributors: 9
recentReleases: 0
createdAt: "2026-02-09T08:04:18Z"
lastCommitAt: "2026-08-17T04:18:58Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 78
undervaluedScore: 31
maintainers: ["rita-aga", "nerdsane"]
openGraphImageUrl: "https://opengraph.githubassets.com/7d12dd0f5e4a493bd84a986152b31422bf881fb36c559e29d21306e6d63a165b/nerdsane/temper"
---

</p>

  <em>A verified, policy-driven runtime for agents that build their own tools.</em>
</p>

</p>

---

## Why Temper

Temper is a machine tool for agents.

Agents are fast at writing code, but the code drifts — invariants get missed, integrations break in ways no one anticipated. Temper inverts the path: agents describe what a system should do, and Temper builds the running version from the description.

The description hot-reloads. What an agent shipped keeps running while the agent revises it.

```text
Agent
  understands a need
    |
    | writes
    v
Spec
  state machine + WASM modules + policies + data
    |
    | verifies
    v
Kernel
  SMT + model checking + simulation + property tests
    |
    | deploys
    v
Runtime
  live state machine + typed API + audit log
    |
    | used by
    v
Same or another agent
  calls in, composes, writes the next spec

Tools build on tools.
```

---

## Quick start

Temper is an HTTP server with an OData API. Agents talk to it directly, through one of the SDKs, or via the MCP bridge for stdio agent clients.

**Start the kernel:**

```bash
temper serve --port 3000          # HTTP server, OData API, Observe UI
temper decide --port 3000…
