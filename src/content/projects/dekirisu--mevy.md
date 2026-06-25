---
repo: "dekirisu/mevy"
name: "mevy"
description: "Magical Bevy Macros: Simplified bevy_ui & bevy_ecs Syntax!"
url: "https://github.com/dekirisu/mevy"
homepage: "http://dekirisu.com/mevy/"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
topics: ["bevy", "bevy-engine", "bevy-ui", "proc-macro"]
stars: 125
forks: 1
openIssues: 0
closedIssues: 2
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2025-01-01T11:58:31Z"
lastCommitAt: "2026-06-25T01:31:39Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 79
undervaluedScore: 31
maintainers: ["dekirisu"]
openGraphImageUrl: "https://opengraph.githubassets.com/7607540d06e2979b037ccd71e89ef1c5a83aafc215dd15234f069391ddee2729/dekirisu/mevy"
---

</p>
</p>

</p

A **growing** set of **m**acros which add some witchcraft into b**evy**, currently available: 🪄
- **Simpler** `Entity` spawning & modifying
- **Style Sheet Notation** for `bevy_ui` components (and your own) - `ui!(( width: 20px; ))`
- **Simplified Notation** for `Color`, `Val` and `UiRect` - `code!{ let red = #ff0000; //..any code }`

> [!IMPORTANT]
> This crate is meant to provide macros only - no additional bevy plugins, resources, components or systems

## Setup
Multiple bevy versions are supported and managed by features:
```toml
# bevy 0.18
mevy = {version="0.3",features=["0.18"]}

# bevy 0.17
mevy = {version="0.3",features=["0.17"]}

# bevy 0.16
mevy = {version="0.3",features=["0.16"]}

# bevy 0.15
mevy = {version="0.3",features=["0.15"]}
```

Then just `use` all of it:
```rust
use bevy::prelude::*;
use mevy::*;
```

## Simpler Hierarchy Spawning
Spawn children just by stating `[]` - the 'names' are just variables containing their `Entity`
- those variables can be used anywhere in the macro - even 'before'
- [read more](crates/ecs/README.md) or see [this example](examples/ecs_simple_spawn.rs).

```rust
entity!{
    <world> // pass a mut World, Commands, ...…
