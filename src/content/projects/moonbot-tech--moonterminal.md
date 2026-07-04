---
repo: "Moonbot-Tech/MoonTerminal"
name: "MoonTerminal"
description: "Development repository for the Moonbot cross-platform terminal"
readmeQualityOk: true
url: "https://github.com/Moonbot-Tech/MoonTerminal"
language: "Rust"
languages: ["Rust"]
languagePcts: [96]
stars: 5
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 7
createdAt: "2026-06-24T00:21:25Z"
lastCommitAt: "2026-07-04T22:52:55Z"
lastReleaseAt: "2026-07-02T14:24:21Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 90
undervaluedScore: 62
maintainers: ["guyverino", "Moonbot-Tech"]
openGraphImageUrl: "https://opengraph.githubassets.com/f4f06666480a713c8f5faf30ea8503660a7c1f91dfe552626bafe217e188c176/Moonbot-Tech/MoonTerminal"
---

</a>
</p>

# MoonTerminal

Development repository for the Moonbot cross-platform trading terminal.

MoonTerminal is not a finished product yet. This repository is the active desktop terminal
workspace: GPUI shell, MoonUI integration, MoonProto live feed, chart rendering, debug tooling,
and platform work for Windows, macOS, and Linux.

---

## Repository Status

- Active development branch: `main`.
- Runtime/UI dependency: [`Moonbot-Tech/MoonUI`](https://github.com/Moonbot-Tech/MoonUI).
- Protocol/client dependency: [`Moonbot-Tech/MoonProtoBeta`](https://github.com/Moonbot-Tech/MoonProtoBeta).
- `Cargo.lock` is intentionally ignored during this development phase.

The terminal currently tracks rolling Git heads for MoonUI and MoonProtoBeta. A fresh checkout
builds against the current public state of those repositories. Existing checkouts can refresh
their local lock with:

```bash
make update-moon-ui
```

For stabilization or release branches we can switch to pinned revisions/tags; `main` is kept
rolling to make terminal/component/protocol development move together.

---

## Clone

```bash
git clone https://github.com/Moonbot-Tech/MoonTerminal.git
cd MoonTerminal
```

## Windows…
