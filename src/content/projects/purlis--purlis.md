---
repo: "purlis/purlis"
name: "purlis"
description: "charter as one cross-platform desktop app on a Rust core: run tons of harness sessions in parallel (ADR 0025)"
readmeQualityOk: true
url: "https://github.com/purlis/purlis"
language: "Rust"
languages: ["Rust", "TypeScript"]
languagePcts: [73, 25]
stars: 8
forks: 1
openIssues: 446
closedIssues: 548
watchers: 0
contributors: 5
recentReleases: 7
createdAt: "2026-09-17T12:49:42Z"
lastCommitAt: "2026-10-09T10:49:48Z"
lastReleaseAt: "2026-09-29T05:05:50Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 91
undervaluedScore: 55
maintainers: ["diazoxide", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/138af477b345724a250cf3bfbde7505721b9854b7807c7b25d33135bd7db0e18/purlis/purlis"
discussionCount: 0
---

# purlis

purlis as one cross-platform desktop app: run tons of harness sessions (Claude Code, Codex) in
parallel, across workspaces and repos, and always know which one needs you.

purlis was called charter until 2026-10, and this repo was `diazoxide/charter`
([ADR 0091](https://github.com/purlis/purlis/blob/HEAD/docs/adr/0091-the-product-is-purlis-and-reads-its-old-names-until-1-0.md)).
Before 2026-09, `diazoxide/charter` meant the plane repo, now
[`purlis/purlis-plane`](https://github.com/purlis/purlis-plane), which is private.

This is the rebuild decided in [ADR 0025](https://github.com/purlis/purlis/blob/HEAD/docs/adr/0025-charter-is-rebuilt-as-a-desktop-app-on-a-rust-core.md),
and it stands alone: nothing it ships needs the Python charter it replaces. The spec, with its
milestones and acceptance limits, is [`docs/spec.md`](https://github.com/purlis/purlis/blob/HEAD/docs/spec.md); the decisions since are in
[`docs/adr/`](https://github.com/purlis/purlis/blob/HEAD/docs/adr/), and the plane's on-disk format is
[`docs/plane-format.md`](https://github.com/purlis/purlis/blob/HEAD/docs/plane-format.md). All three moved here from…
