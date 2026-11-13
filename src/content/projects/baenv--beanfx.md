---
repo: "baenv/beanfx"
name: "beanfx"
description: "Pixel-art effects drawn as code: a Claude Code plugin that designs VFX from words or a reference image and exports sprite sheets, Aseprite JSON and gifs."
readmeQualityOk: true
url: "https://github.com/baenv/beanfx"
homepage: "https://beanfx.vhbien000.workers.dev/"
language: "Python"
languages: ["Python"]
languagePcts: [91]
topics: ["claude-code", "claude-code-plugin", "gamedev", "pixel-art", "sprite-sheet", "vfx"]
stars: 35
forks: 10
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 6
createdAt: "2026-10-31T09:18:07Z"
lastCommitAt: "2026-11-13T11:23:52Z"
lastReleaseAt: "2026-11-13T11:25:49Z"
status: "newborn"
tags: ["hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 42
maintainers: ["baenv", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/7f3c056e0e280537aeb2bccbc835ccb2964e38aaf42611b5cb2a9f3435c86289/baenv/beanfx"
---

Pixel-art effects drawn as code. Describe an effect, and the `/beanfx` skill for Claude Code draws it in Rust
and exports a sprite sheet with JSON that any engine plays.

**[Live demo and gallery](https://beanfx.vhbien000.workers.dev/)** · used in [Nine Heavens](https://play.nineheavens.online/)

## Install

```
/plugin marketplace add baenv/beanfx
/plugin install beanfx@beanfx
```

Needs Rust (cargo, from https://rustup.rs). The first run builds the `beanfx` binary into `.beanfx/bin/` in your
project. Each draft is a small Rust crate that links the skill's kit (drawing, sheet export and checks, sound,
preview page).

## Use

```
/beanfx a fire burst, 64x64, side view, one-shot, strong glow
/beanfx path/to/reference.png make this a looping aura
```

The skill asks about anything the prompt leaves open, then writes the effect to `drafts/<name>/`:

- `src/main.rs`: the effect as code; edit it and run `cargo run --release` again
- `out/sheets/<name>.png` and `.json`: the sprite sheet and its JSON, the files a game loads
- `out/<name>.html`: a preview page that opens with a double click

Two game characters ship with the plugin (a sword caster and a staff caster, side and top-down),…
