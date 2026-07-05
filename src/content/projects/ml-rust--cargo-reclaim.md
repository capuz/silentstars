---
repo: "ml-rust/cargo-reclaim"
name: "cargo-reclaim"
description: "Smarter, background-friendly companion to cargo clean for large Rust projects and long-running  development machines"
readmeQualityOk: true
url: "https://github.com/ml-rust/cargo-reclaim"
homepage: "https://crates.io/crates/cargo-reclaim"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
topics: ["automation", "build-cache", "cache", "cargo", "cargo-subcommand", "cleanup", "cli", "developer-tools", "disk-space", "rust"]
stars: 10
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 3
createdAt: "2026-07-03T10:39:10Z"
lastCommitAt: "2026-07-05T06:30:50Z"
lastReleaseAt: "2026-07-05T05:58:18Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 54
maintainers: ["farhan-syah"]
openGraphImageUrl: "https://opengraph.githubassets.com/de6e93b2774eb17c29bb67439506fcb9fc6f58059c2588d14dd0f952f1997083/ml-rust/cargo-reclaim"
---

# cargo-reclaim

<h3>Safe Cargo cleanup for real Rust workstations.</h3>

<p>
cargo-reclaim finds large Cargo build directories, trims stale deps and incremental caches, and keeps active projects under control with a default cleanup assistant, saved plans, and a resident scheduler.
</p>

<p>
</p>

<p>
  </a>
</p>

<p>
  </a>
  </a>
  </a>
  </a>
</p>

</div>

cargo-reclaim is a safer, background-friendly companion to `cargo clean`. It opens a TTY cleanup assistant by default, trims stale artifacts instead of wiping whole targets, inventories Cargo target directories before deletion, validates saved plans before apply, and can run as a resident scheduler for active Rust workstations.

## Quickstart

Install from crates.io:

```sh
cargo install cargo-reclaim
```

From a checkout:

```sh
cargo install --path .
```

Primary cleanup assistant:

```sh
cargo-reclaim ~/Projects
cargo-reclaim list ~/Projects
cargo-reclaim ~/Projects --all --yes
cargo-reclaim ~/Projects --target ~/Projects/old-crate/target --delete-target --yes
cargo-reclaim scheduler preview --platform systemd-user --config ~/.config/cargo-reclaim/reclaim.toml
cargo-reclaim scheduler install --platform systemd-user…
