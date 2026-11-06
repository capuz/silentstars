---
repo: "refcell/needlefish"
name: "needlefish"
description: "zig all the way down"
readmeQualityOk: true
url: "https://github.com/refcell/needlefish"
language: "Zig"
languages: ["Zig"]
languagePcts: [100]
stars: 19
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-11-05T12:34:32Z"
lastCommitAt: "2026-11-06T12:11:02Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 38
maintainers: ["refcell"]
openGraphImageUrl: "https://opengraph.githubassets.com/bd15867bef9a1d1eadd3b692b111dbd7bbb374701059a3f3452b646bd36dc23b/refcell/needlefish"
---

# needlefish

needlefish is [Base](https://base.org), the Ethereum L2, rewritten from scratch in Zig: execution
client, rollup consensus node, block builder, batcher, and tooling, with zero dependencies.
L2 blocks are full blocks at Base's native 200 ms subsecond cadence; there are no flashblocks.

It is a ground-up port of the public [base/base](https://github.com/base/base) repository and
keeps its layout, so every crate there has an obvious home here.

    alt="just replay fetches the latest 10 Base mainnet blocks and replays them offline">

`just replay` fetches the latest 10 Base mainnet blocks and the state they touch from public
RPC, re-executes them offline, and checks every header field against the chain
([docs/REPLAY.md](https://github.com/refcell/needlefish/blob/HEAD/docs/REPLAY.md), [video](https://github.com/refcell/needlefish/blob/HEAD/docs/assets/demo.mp4)). `just replay 100` does the
same for 100 blocks: 100 consecutive mainnet blocks (1747 transactions) reproduce exactly.

> [!WARNING]
> Pre-alpha. Components are landing daily and the devnet is being assembled now. Do not run it
> against a real network or with real funds.

## Design

- **Zero dependencies.** Only…
