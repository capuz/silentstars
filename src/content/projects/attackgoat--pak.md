---
repo: "attackgoat/pak"
name: "pak"
description: "A data pak format for games"
readmeQualityOk: true
url: "https://github.com/attackgoat/pak"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2022-04-22T23:27:45Z"
lastCommitAt: "2026-11-21T11:34:37Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 84
undervaluedScore: 42
maintainers: ["attackgoat"]
openGraphImageUrl: "https://opengraph.githubassets.com/be52bf267734598b976b2e2624fc7a4260f045156201d24d1ce56aea294318f3/attackgoat/pak"
---

# `.pak` Asset Crate

Bundles assets with compression, string tables, and other game-related special handling functions.
Release baking produces a self-contained `.pak`. Debug baking stores content-group payloads in
generation-named `.pakseg` files beside the root so unchanged groups can be reused. Keep the root
and its referenced segments together; segment placement is internal, not a manifest setting.
During Cargo build scripts the baker uses the target's `PROFILE`; standalone baking falls back to
the baker's debug assertions.

See the [changelog](https://github.com/attackgoat/pak/blob/HEAD/CHANGELOG.md) for archive compatibility and upgrade instructions.

A `.pak` file is written at build time and streamed in at runtime. Each asset package is "baked" from a configuration source file. _Example:_

_Rust code_

```rust
PakBuf::bake("game_art.toml", "game_art.pak")?;
```

When generating bake inputs into a build/artifact directory, keep those generated files outside
the source tree and pass the source asset root explicitly:

```rust
PakBuf::bake_with_dir(
    out_dir.join("generated/game_art.toml"),
    out_dir.join("game_art.pak"),
    manifest_dir.join("assets"),
)?;
```
