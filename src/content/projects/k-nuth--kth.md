---
repo: "k-nuth/kth"
name: "kth"
description: "High performance Bitcoin development platform"
readmeQualityOk: true
url: "https://github.com/k-nuth/kth"
homepage: "https://kth.cash"
language: "C++"
languages: ["C++"]
languagePcts: [100]
topics: ["bcash", "bch", "bitcoin", "bitcoincash", "cash", "cpp", "cpp20", "cpp23", "crypto", "cryptocurrency"]
stars: 6
forks: 4
openIssues: 78
closedIssues: 11
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2025-06-24T08:39:36Z"
lastCommitAt: "2026-07-13T06:38:26Z"
lastReleaseAt: "2026-03-05T20:02:47Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 78
maintainers: ["fpelliccioni", "CyberAshven"]
openGraphImageUrl: "https://opengraph.githubassets.com/51d5d67078071597e72533b606622cc4ca65d62dc5681e7c0f908cf32e0928e8/k-nuth/kth"
discussionCount: 0
---

# knuth <a target="_blank" href="https://github.com/k-nuth/kth/releases"></a> <a target="_blank" href="https://github.com/k-nuth/kth/actions"></a> <a href="#"></a> <a target="_blank" href="https://deepwiki.com/k-nuth/kth"></a> <a target="_blank" href="https://t.me/knuth_cash"></a>

> High-performance Bitcoin Cash development platform.

> [!IMPORTANT]
> **Branch model — June 2026 onwards**
>
> `master` now tracks the **v1.x** line: a coroutine-based node with
> UTXO-Z storage, fast full IBD (mainnet from genesis to tip in under
> an hour on typical hardware), and a public C++/C API rebuilt around
> `asio::awaitable`. The first tag on this line is **v1.0.0**.
>
> The previous callback-based architecture lives on as a maintenance
> branch: [**`v0.x`**](https://github.com/k-nuth/kth/tree/v0.x).
> While v1.x stabilises in the field we keep `v0.x` shipping critical
> bug fixes (consensus-class issues, security patches, build/dep
> upgrades) so existing integrations have a safe place to stay. New
> features land on `master` only.
>
> If you're an existing consumer of the C-API or any language binding,
> see the **Breaking changes** section of the v1.0.0 release notes
> before upgrading —…
