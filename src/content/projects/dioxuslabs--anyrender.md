---
repo: "DioxusLabs/anyrender"
name: "anyrender"
description: "Rust 2D drawing abstraction"
readmeQualityOk: true
url: "https://github.com/DioxusLabs/anyrender"
homepage: "https://docs.rs/anyrender"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
stars: 116
forks: 43
openIssues: 12
closedIssues: 10
watchers: 3
contributors: 18
recentReleases: 8
createdAt: "2025-10-05T19:02:37Z"
lastCommitAt: "2026-11-02T11:36:16Z"
lastReleaseAt: "2026-08-16T21:17:56Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "release_machine"]
healthScore: 81
undervaluedScore: 50
maintainers: ["nicoburns", "tronical", "kgoedecke"]
openGraphImageUrl: "https://opengraph.githubassets.com/99160236f72617fbdf7e5f541d84e76bfe0da1bc918d6cedf6cb8028aac627b6/DioxusLabs/anyrender"
---

# AnyRender

**A Rust 2D drawing abstraction.**

AnyRender is a 2D drawing abstaction that allows applications/frameworks to support many rendering backends through a unified API.

Discussion of AnyRender development happens in the Linebender Zulip at <https://xi.zulipchat.com/>.

## Crates

### `anyrender`

The core [anyrender](https://docs.rs/anyrender) crate is a lightweight type/trait-only crate that defines three abstractions:

- **The [PaintScene](https://docs.rs/anyrender/latest/anyrender/trait.PaintScene.html) trait accepts drawing commands.**
  Applications and libraries draw by pushing commands into a `PaintScene`. Backends generally execute those commands to
  produce an output (although they may do other things like store them for later use).
- **The [WindowRenderer](https://docs.rs/anyrender/latest/anyrender/trait.WindowRenderer.html) trait abstracts over types that can render to a window**
- **The [ImageRenderer](https://docs.rs/anyrender/latest/anyrender/trait.ImageRenderer.html) trait abstracts over types that can render to a `Vec<u8>` image buffer**

### Backends

Currently existing backends are:

- [anyrender_vello_hybrid](https://docs.rs/anyrender_vello_hybrid)…
