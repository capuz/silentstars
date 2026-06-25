---
repo: "TheBevyFlock/bevy_cli"
name: "bevy_cli"
description: "A Bevy CLI tool and linter."
url: "https://github.com/TheBevyFlock/bevy_cli"
homepage: "https://thebevyflock.github.io/bevy_cli/"
language: "Rust"
languages: ["Rust"]
languagePcts: [97]
stars: 397
forks: 38
openIssues: 128
closedIssues: 195
watchers: 4
contributors: 27
recentReleases: 0
createdAt: "2024-08-27T13:52:33Z"
lastCommitAt: "2026-06-25T06:41:57Z"
lastReleaseAt: "2026-02-01T21:06:29Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 90
undervaluedScore: 36
maintainers: ["dependabot[bot]", "DaAlbrecht", "BD103"]
openGraphImageUrl: "https://opengraph.githubassets.com/7ae80aaa9755cc901d477e6d335084416b4a5244197f188a0af9f19a06959db7/TheBevyFlock/bevy_cli"
---

# Bevy CLI (Alpha)

A prototype [Bevy] CLI tool intended to streamline common tasks when working on projects. Please see the [initial scope document] and [original issue] for history and motivation.

- [**Documentation**](https://thebevyflock.github.io/bevy_cli/)
- [**Repository**](https://github.com/TheBevyFlock/bevy_cli)
- [**Issue Tracker**](https://github.com/TheBevyFlock/bevy_cli/issues)

If you need assistance or want to help, reach out to the [`bevy_cli` working group channel] in the [Bevy Discord].

[Bevy]: https://bevy.org
[initial scope document]: https://hackmd.io/cCHAfbtaSviU_MDnbNHKxg
[original issue]: https://github.com/bevyengine/bevy/issues/436
[`bevy_cli` working group channel]: https://discord.com/channels/691052431525675048/1278871953721262090
[Bevy Discord]: https://discord.gg/bevy

## Installation

As the CLI is currently an unofficial tool, it is not yet published to <https://crates.io>. It is available [on Github](https://github.com/TheBevyFlock/bevy_cli), however.

You may compile the latest version of the CLI from scratch using `cargo install`:

```sh
cargo install --git https://github.com/TheBevyFlock/bevy_cli --tag cli-v0.1.0-alpha.2 --locked bevy_cli…
