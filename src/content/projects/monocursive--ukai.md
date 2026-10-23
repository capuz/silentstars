---
repo: "monocursive/ukai"
name: "ukai"
description: "A Linux sandbox for AI agents and command-line tools, with enforced access limits and inspectable receipts."
readmeQualityOk: true
url: "https://github.com/monocursive/ukai"
homepage: "https://ukai.sh"
language: "Rust"
languages: ["Rust"]
languagePcts: [97]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-08-31T19:35:13Z"
lastCommitAt: "2026-10-23T12:05:59Z"
lastReleaseAt: "2026-10-10T17:07:04Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 89
undervaluedScore: 60
maintainers: ["monocursive"]
openGraphImageUrl: "https://opengraph.githubassets.com/8cd51c8b4520c50d63705523556ac7561d1725f5bd96b488e48455f5787c054b/monocursive/ukai"
---

# Ukai Jail

**Give your agent only the access it needs.**

Ukai Jail is a standalone Linux sandbox for AI agents and command-line
tools. The `ukai-jail` executable restricts file access, network destinations,
and runtime for a command and its children. Each attempt produces a receipt
of the policy applied, the outcome, and any gaps in observation. Your existing
agent keeps its own models and workflow.

[Website](https://ukai.sh/) · [User guide](https://github.com/monocursive/ukai/blob/HEAD/docs/guide.md) ·
[Roadmap](https://github.com/monocursive/ukai/blob/HEAD/docs/roadmap.md) · [Operator reference](https://github.com/monocursive/ukai/blob/HEAD/docs/specs/jail-v1/operating.md)

Ukai was called Ouroboros until 15 October 2026. Linux previews from
0.1.0-rc.3 on are released under the new name and install `ukai-jail`. The
earlier Linux previews and the macOS VM preview were published under the old
name, as `ouro-jail` and `ouro-vm`.

**Developer preview 0.1.0-rc.5.** [Signed Linux x86_64 and ARM64 packages](https://github.com/monocursive/ukai/releases/tag/ukai-jail-v0.1.0-rc.5)
are available. The reference x86_64 conformance host and native Raspberry Pi
checks are recorded;…
