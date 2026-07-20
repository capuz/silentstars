---
repo: "limehawk/lazyreno"
name: "lazyreno"
description: "TUI dashboard for self-hosted Renovate CE"
readmeQualityOk: true
url: "https://github.com/limehawk/lazyreno"
language: "Rust"
languages: ["Rust"]
languagePcts: [99]
stars: 6
forks: 0
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-03-10T15:20:13Z"
lastCommitAt: "2026-07-20T06:33:54Z"
lastReleaseAt: "2026-03-12T08:16:41Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 77
undervaluedScore: 26
maintainers: ["limehawk", "renolh[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/8a35c3e86b582ca1f6961163e537e37eba42ec4e54aaa581bf41a05cf99696a4/limehawk/lazyreno"
---

# lazyreno

A lazy TUI for taming [Renovate CE](https://github.com/mend/renovate-ce-ee) dependency PRs.

</div>

---

## Elevator Pitch

Self-hosted Renovate is great until you have 30 repos and wake up to 47 open PRs. You click into GitHub, merge the safe ones, wait for CI, click the next repo, realize half of them need a rebase, go back and comment `/rebase` one by one...

lazyreno puts everything in one keyboard-driven TUI. See every PR across every repo, bulk-merge the safe ones with `M`, rebase the rest with `R`, watch the Renovate job queue drain in real time. No browser tabs. No clicking.

## Features

- **Bento layout** — repo sidebar, PR table + detail, Renovate status + jobs + activity log
- **Bulk merge** — `M` merges all safe PRs (minor/patch, mergeable, checks passing); `A` merges everything
- **Queue-based merging** — handles GitHub's lazy mergeability computation automatically, no repeated retries
- **Renovate commands** — `r` rebase, `e` recreate, `t` retry — posts comments directly to PRs
- **Job monitoring** — live view of running/pending Renovate jobs with queue depth
- **Vim navigation** — `hjkl`, `g`/`G`, `Ctrl+u`/`Ctrl+d`, mouse scroll, context-sensitive…
