---
repo: "bnsd55/openscion"
name: "openscion"
description: "Server-centric version control for agent-heavy monorepos, in Rust. An independent open-source implementation of the design from Anthropic's \"Redesigning source control\" post. Not affiliated with Anthropic."
readmeQualityOk: true
url: "https://github.com/bnsd55/openscion"
homepage: "https://www.anthropic.com/engineering/redesigning-source-control"
language: "Rust"
languages: ["Rust"]
languagePcts: [96]
topics: ["ai-agents", "content-addressable", "git", "grpc", "monorepo", "rust", "source-control", "vcs", "version-control"]
stars: 30
forks: 4
openIssues: 16
closedIssues: 198
watchers: 0
contributors: 4
recentReleases: 1
createdAt: "2026-10-14T06:05:49Z"
lastCommitAt: "2026-11-07T16:11:15Z"
lastReleaseAt: "2026-11-01T21:16:39Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 98
undervaluedScore: 47
maintainers: ["bnsd55", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1418448489/50192809-91c9-4058-888e-f7bc0f4d51bb"
discussionCount: 1
---

# openscion

A server for large monorepos, mostly AI-agent writers, that lands changesets
on the trunk and serves sparse reads. Clients send single-parent changesets
to refs that exist; import and restore create repos and refs. There is no
client branch or merge flow yet. Written in Rust.

> **Alpha (0.x).** One server process on one machine. Not ready for
> production code yet. What holds between versions:
> [docs/stability.md](https://github.com/bnsd55/openscion/blob/HEAD/docs/stability.md). What comes next:
> [docs/ROADMAP.md](https://github.com/bnsd55/openscion/blob/HEAD/docs/ROADMAP.md).

openscion is an independent, open-source implementation of the design in
Anthropic's
[Redesigning source control](https://www.anthropic.com/engineering/redesigning-source-control)
(October 2026). It is not affiliated with or endorsed by Anthropic, and it
contains no Anthropic code. It is not related to the
[SCION Internet architecture](https://github.com/scionproto/scion), to
[GoogleCloudPlatform/scion](https://github.com/GoogleCloudPlatform/scion), or
to the `scion` crate on crates.io.

## Why

Git assumes that every clone is a full copy and that every merge starts on a
developer's machine.…
