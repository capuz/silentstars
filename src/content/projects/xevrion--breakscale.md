---
repo: "xevrion/breakscale"
name: "breakscale"
description: "Build a system, load it until it breaks, and watch why. A system design simulator for learning distributed systems."
readmeQualityOk: true
url: "https://github.com/xevrion/breakscale"
homepage: "https://breakscale.vercel.app"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [83]
topics: ["canvas", "distributed-systems", "education", "learning", "queueing-theory", "react", "simulator", "system-design", "teaching-tool", "typescript"]
stars: 28
forks: 2
openIssues: 7
closedIssues: 2
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-08-23T06:21:21Z"
lastCommitAt: "2026-08-29T10:21:58Z"
status: "newborn"
tags: ["solo_builder", "needs_contributors", "hidden_gem"]
healthScore: 70
undervaluedScore: 35
maintainers: ["xevrion", "Shashank-Tripathi-07", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/218ab42ce5a130bd7140be876af4d858a8bb8ce147377cdce5fa609e27f29bd8/xevrion/breakscale"
discussionCount: 0
---

</p>

</p>

</p>

Breakscale is a system design simulator for learning how distributed systems behave under load.
You place components on a canvas, wire them together, then drag a slider and watch real queueing
behaviour emerge: latency percentiles climbing, queues filling, circuit breakers tripping, whole
systems collapsing into retry storms.

Every number comes from an actual discrete-event simulation. Nothing is faked, approximated, or
animated to look plausible.

## Why this exists

Most system design material is static diagrams and rules of thumb. "Add a cache." "Use a queue."
It is hard to build intuition for why p99 latency falls off a cliff as utilisation passes 80
percent, or how a short timeout with retries turns one slow database into a total outage.

Breakscale runs the experiment instead. Load the Retry Storm example, drag the traffic up, and
watch goodput fall to zero while the database still runs flat out, because every request that
completes has already been abandoned by a caller that gave up.

## Getting started

You need [Bun](https://bun.sh).

```bash
git clone https://github.com/xevrion/breakscale.git
cd breakscale
bun install
bun dev
```

Open…
