---
repo: "gvart/proschi"
name: "proschi"
description: "Pro[ject]schi[matics].  Design IT, Load IT, Build IT"
readmeQualityOk: true
url: "https://github.com/gvart/proschi"
homepage: "https://proschi.app"
language: "TypeScript"
languages: ["TypeScript", "JavaScript"]
languagePcts: [76, 20]
topics: ["architecture", "code", "diagram", "hld", "system-design"]
stars: 150
forks: 19
openIssues: 2
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2025-11-05T23:28:17Z"
lastCommitAt: "2026-11-09T00:54:43Z"
lastReleaseAt: "2026-10-08T16:48:20Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "release_machine"]
healthScore: 78
undervaluedScore: 40
maintainers: ["gvart", "github-actions[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/e6dc08240bab81a76eebeedbca5b57465c33885cf80fb16b6bef76f572b52657/gvart/proschi"
---

Proschi is a small text language for architecture diagrams. You write the
nodes, connections and request flows of a system as plain text; Proschi lays
out the diagram, plays every use case step by step, and runs a deterministic
simulation of load, latency, availability and cost against the requirements
and tests you write next to it. The same parser runs in the browser, the CLI,
the language server and the editor plugins, so they always agree.

## What's in the box

- **[Editor](https://proschi.app/app/)**: completion, live diagnostics,
  automatic layout, use case playback, share links and PNG/SVG/Mermaid
  export. Runs in the browser; nothing is uploaded.
- **Simulation and HLD**: traffic, replicas, shards, capacity and decisions
  turn a diagram into a design document with load, p99, availability and
  cost per node. [How the simulation works](https://proschi.app/docs/model/).
- **[Practice](https://proschi.app/practice/)**: system design problems (URL
  shortener, payments, chat, video streaming and more) whose tests tell you
  whether your design holds up, plus review cards and the Scale or Fail game.
- **Tooling**: the [`proschi`](https://www.npmjs.com/package/proschi) CLI…
