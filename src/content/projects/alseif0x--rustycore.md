---
repo: "alseif0x/rustycore"
name: "rustycore"
description: "Bringing Azeroth to Rust. An open-source WotLK Classic 3.4.3 server emulator, focused on faithful gameplay and a modular Rust core. Under active development."
readmeQualityOk: true
url: "https://github.com/alseif0x/rustycore"
homepage: "https://alseif0x.github.io/rustycore/"
language: "Rust"
languages: ["Rust"]
languagePcts: [97]
topics: ["game-server", "mariadb", "mmorpg", "open-source", "rust", "tokio", "world-of-warcraft", "wotlk", "server-emulator", "trinitycore"]
stars: 27
forks: 9
openIssues: 39
closedIssues: 369
watchers: 1
contributors: 5
recentReleases: 0
createdAt: "2026-03-02T12:51:12Z"
lastCommitAt: "2026-09-17T08:50:47Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem"]
healthScore: 98
undervaluedScore: 49
maintainers: ["alseif0x"]
openGraphImageUrl: "https://opengraph.githubassets.com/9ba8eeec7416694990df58e0a123ecd3faf7e60d59f8db43671c44ba9614af5a/alseif0x/rustycore"
discussionCount: 4
---

</p>

  <strong>Bringing Azeroth to Rust.</strong><br>
  A WotLK Classic 3.4.3 server emulator built for faithful behavior and a welcoming community.
</p>

</p>

</p>

## About

RustyCore is an active, full-port effort: a TrinityCore-style WotLK Classic server being
rebuilt in Rust. The target is full behavioral parity with the 3.4.3 C++ reference, with
packet formats, database behavior, gameplay rules, and runtime order checked against the
source before they are treated as correct.

Parts of login and world entry work, and many systems are represented in the workspace.
The live gameplay runtime is still under migration, so RustyCore is not a drop-in replacement
or a claim of complete gameplay parity yet. The [current state](https://github.com/alseif0x/rustycore/blob/HEAD/docs/migration/STATE.md) is
dated and records the evidence behind each status claim.

## Documentation

The [documentation map](https://github.com/alseif0x/rustycore/blob/HEAD/docs/README.md) routes each question to its maintained source.

- [Current state](https://github.com/alseif0x/rustycore/blob/HEAD/docs/migration/STATE.md) — implementation, evidence, and known boundaries.
- [Server…
