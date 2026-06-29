---
repo: "ya-luotao/microsandbox-rb"
name: "microsandbox-rb"
description: "Community-maintained Ruby bindings for microsandbox — hardware-isolated microVM sandboxes for AI agents and untrusted code."
url: "https://github.com/ya-luotao/microsandbox-rb"
language: "Ruby"
languages: ["Ruby", "Rust"]
languagePcts: [61, 39]
topics: ["microsandbox", "ruby", "sdk"]
stars: 6
forks: 0
openIssues: 13
closedIssues: 7
watchers: 0
contributors: 3
recentReleases: 1
createdAt: "2026-06-16T10:55:55Z"
lastCommitAt: "2026-06-29T07:23:34Z"
lastReleaseAt: "2026-06-17T10:54:13Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 87
undervaluedScore: 43
maintainers: ["ya-luotao"]
openGraphImageUrl: "https://opengraph.githubassets.com/6ba91d2bfa1c6bc0146d32041ba3ff7ccc4ec79b6c4b1a4acb47a6c886461e6f/ya-luotao/microsandbox-rb"
---

# microsandbox-rb

Lightweight microVM sandboxes for Ruby — run AI agents and untrusted code with hardware-level isolation.

The `microsandbox-rb` gem provides native bindings to the [microsandbox](https://github.com/superradcompany/microsandbox) runtime via a Rust extension (magnus). It spins up real microVMs (not containers) in under 100 ms, runs standard OCI (Docker) images, and gives you full control over command execution, the guest filesystem, networking, and metrics — all from an idiomatic, **synchronous** Ruby API. There is no daemon to install and no server to connect to: the runtime is embedded directly in your process.

This is an **unofficial, community-maintained** Ruby implementation — not part of the official SDK family — though it wraps the same core engine.

## Upstream & acknowledgements

`microsandbox-rb` exists only because of the excellent work by the [Super Rad
Company](https://github.com/superradcompany) team on the upstream
**microsandbox** runtime. All the hard parts — the microVM engine, the guest
`agentd`, the networking stack — are theirs; this gem is a thin Ruby skin over
them. Our deepest thanks to the maintainers and community. 🙏

- **Website &…
