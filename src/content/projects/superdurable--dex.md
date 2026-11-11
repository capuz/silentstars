---
repo: "superdurable/dex"
name: "dex"
description: "Durable Execution(D-EX). No Replay, Zero Dependencies. Forked from iWF of IndeedEng by the creator. "
readmeQualityOk: true
url: "https://github.com/superdurable/dex"
homepage: "https://superdurable.io"
language: "Rust"
languages: ["Rust"]
languagePcts: [34]
stars: 144
forks: 12
openIssues: 177
closedIssues: 178
watchers: 3
contributors: 33
recentReleases: 0
createdAt: "2023-09-07T16:37:07Z"
lastCommitAt: "2026-11-11T19:20:48Z"
lastReleaseAt: "2026-08-07T19:25:21Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 90
undervaluedScore: 42
maintainers: ["longquanzheng"]
openGraphImageUrl: "https://opengraph.githubassets.com/49c1e9f9d0bfbafbb5562ccee1edc109af3e304232c765e6419842f80cc82700/superdurable/dex"
---

# Durable Execution(D-EX). No Replay, Zero Dependencies.

**Dex** provides a structural programming model as [primitives](https://docs.superdurable.io/concepts) as Durable Execution Engine.  

You use Dex to write a Flow filled with native programming code: Steps, Attributes, RPCs, Conditions, Stream. Worker hosts the Flow code and pull tasks from Dex server.

Client calls Server to start and interact with Flow runs. Dex Server dispatches Step and RPC tasks to your Workers.

## Why Dex

### No Replay

Dex is created by **a core contributor to Uber Cadence&Temporal, and the original creator of iWF**—bringing deep, firsthand experience from generations of durable execution technology.

Unlike most durable execution frameworks, Dex takes a fundamentally different approach as **No Replay**. 

So why **"No Replay"** Matters?

Using our unique structural programming model:
1. Simpler & Cleaner APIs. Less primitives. Less code, less bug
2. Eliminate the "Non Deterministic Error", completely
3. Support long-running Flows without manual history rollover
4. No requires to rely on memory to cache workflow state as "sticky cache"
5. Data native -- explicit data storage primitives as "data…
