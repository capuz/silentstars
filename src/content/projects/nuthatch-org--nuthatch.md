---
repo: "nuthatch-org/nuthatch"
name: "nuthatch"
description: "Be your own indexer. One Rust binary, one command, live indexed API in under two minutes. No mandatory third-party data dependency."
readmeQualityOk: true
url: "https://github.com/nuthatch-org/nuthatch"
homepage: "https://nuthatch-indexer.com/"
language: "Rust"
languages: ["Rust"]
languagePcts: [95]
stars: 7
forks: 4
openIssues: 23
closedIssues: 1020
watchers: 0
contributors: 5
recentReleases: 0
createdAt: "2026-07-14T09:22:54Z"
lastCommitAt: "2026-10-29T10:37:24Z"
lastReleaseAt: "2026-07-22T17:50:47Z"
status: "thriving"
tags: ["solo_builder", "funded"]
healthScore: 99
undervaluedScore: 66
maintainers: ["cargopete"]
openGraphImageUrl: "https://opengraph.githubassets.com/9e979bd3f5a64f53c1842c98ad69b01c3cab5a441ed627dedd4529b6c36ba816/nuthatch-org/nuthatch"
fundingLinks: ["GITHUB:https://github.com/cargopete"]
discussionCount: 1
---

# nuthatch

> **Turn an EVM contract's history into a local SQL database.** One Rust binary, no Postgres, no
> subgraph to write, and an MCP server built in.

· Website: [www.nuthatch-indexer.com](https://www.nuthatch-indexer.com)

```sh
curl -fsSL https://nuthatch-indexer.com/install.sh | sh
export PATH="$HOME/.local/bin:$PATH"
nuthatch init 0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2 --alias weth
nuthatch dev --backfill 300
```

Then, in a second terminal:

```sh
nuthatch sql "SELECT count(*) FROM weth__transfer"
```

The installer covers macOS Apple Silicon and Linux x86_64 and aarch64, and the `export` adds its
directory, which a fresh macOS shell lacks. `init` indexes WETH and detects its chain. The block
carries no `#` comments because zsh, the macOS default, does not treat a pasted `#` as one: it
passes the rest of the line on as arguments.

The Linux binary needs glibc 2.35 or newer to run from 4.1.0, which is also what it is built on;
4.0.x ran on 2.34. No Intel Mac binary is published: there, and on other platforms, build from
source with Rust 1.95.0 ([docs/install.md](https://github.com/nuthatch-org/nuthatch/blob/HEAD/docs/install.md)).
`init` creates a **nest**: a…
