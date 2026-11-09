---
repo: "elianiva/quorum"
name: "quorum"
description: "The on-call simulator. Try designing your system to survive."
readmeQualityOk: true
url: "https://github.com/elianiva/quorum"
homepage: "https://playquorum.dev"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [96]
stars: 53
forks: 8
openIssues: 4
closedIssues: 11
watchers: 1
contributors: 6
recentReleases: 0
createdAt: "2026-10-17T12:15:23Z"
lastCommitAt: "2026-11-09T00:52:58Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 94
undervaluedScore: 37
maintainers: ["elianiva", "SyahrulBhudiF", "hamardikan"]
openGraphImageUrl: "https://opengraph.githubassets.com/31f8e1e2ccba899cc29a710893eb7befb3f75b8c8537021992aa39e7d5ea2060/elianiva/quorum"
fundingLinks: ["KO_FI:https://ko-fi.com/elianiva"]
---

Play it at <a href="https://playquorum.dev">playquorum.dev</a>.

---

You found a startup with one virtual machine in a garage. Users send requests. You wire
Components on a board, choose the language and runtime each server runs, and fix one bottleneck
after another, until the company serves billions of people and goes public.

Every mechanic models real behavior. PHP-FPM workers wait on the database. A Node.js event loop
stalls on bcrypt. A JVM is slow until it warms up. A cache stampedes when it restarts. An average
hides the p99. If you have been paged at 3 AM, you know the problems. The game asks you to fix
them with numbers.

## How to play

### Start small

The first Company is one Users node, one App Server, Payments, and Analytics. Requests flow
along the Links you draw. Served requests earn Cash, which waits in the Payments drawer until you
collect it. Analytics samples traffic and turns it into Insight, the research currency.

### Find the bottleneck

The Simulation is a flow network. At any time, one Node limits the most revenue, and the Board
marks it. Its card says why: out of CPU, credits, RAM, workers, or connections. Each kind of limit
needs a different fix, and…
