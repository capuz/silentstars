---
repo: "pathosDev/actor-ts"
name: "actor-ts"
description: "An actor-model framework for TypeScript — runs on Bun, Node.js and Deno"
readmeQualityOk: true
url: "https://github.com/pathosDev/actor-ts"
homepage: "https://actor-ts.dev/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [89]
topics: ["actor-framework", "actor-model", "actor-system", "actors", "distributed-data", "distributed-systems"]
stars: 9
forks: 2
openIssues: 726
closedIssues: 618
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-04-27T10:07:13Z"
lastCommitAt: "2026-08-29T10:22:52Z"
lastReleaseAt: "2026-05-15T00:32:18Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 50
maintainers: ["pathosDev", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/0fb25b4ce6da9170090c9f1b32c92294f3d08c7420dbaee382d6017a42900a93/pathosDev/actor-ts"
---

</p>

</p>

</p>

</p>

---

> ⚠️ **Disclaimer — please read before using.**
> This is a **complex, AI-assisted hobby project** — a from-scratch port of
> the actor-model stack (actors, supervision, cluster, sharding, persistence,
> HTTP) to TypeScript, running on Bun, Node.js, and Deno.  Large parts were
> written with AI pair-programming and **have not been battle-tested in
> production**.  Test coverage is good (~8440 tests, ~93 % line) but the
> surface area is enormous.  **Do not deploy this to anything that matters
> yet.**  Use it to learn, to prototype, to benchmark ideas — not to handle
> real money, users, or data.
>
> Those figures are measured on GitHub's hosted runners, where **three
> multi-node suites are skipped** — Bun there cannot respawn functional
> worker threads after the first worker test, so `ACTOR_TS_SKIP_FLAKY_MNS=1`
> removes `LeaseMajority`, `ParallelPubSub` and the `ParallelMultiNodeSpec`
> self-tests from the run.  They execute on a local `bun test` and in Docker,
> and a nightly job re-runs them with the flag off; see
> [Diagnosing test flakes](https://actor-ts.dev/testing/diagnosing-flakes/).

---

## What is this?

`actor-ts` is a…
