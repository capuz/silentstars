---
repo: "Avarok-Cybersecurity/atlas-recipes"
name: "atlas-recipes"
description: "Official Atlas Spark recipe registry for sparkrun (@atlas namespace) — Qwen3.5/3-Next, Gemma-4, Nemotron-3, Mistral-Small-4, MiniMax-M2.7, Qwen3-VL on the public avarok/atlas-gb10 image"
readmeQualityOk: true
url: "https://github.com/Avarok-Cybersecurity/atlas-recipes"
language: "Rust"
languages: ["Rust"]
languagePcts: [98]
stars: 17
forks: 7
openIssues: 1
closedIssues: 1
watchers: 0
contributors: 4
recentReleases: 7
createdAt: "2026-05-09T02:48:16Z"
lastCommitAt: "2026-08-28T12:22:28Z"
lastReleaseAt: "2026-08-28T05:45:16Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 87
undervaluedScore: 51
maintainers: ["tbraun96", "github-actions[bot]", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/ad8846975c31ba35b547c711d3b770cdde7117ccbe6303a71e3d71c2afc22dd4/Avarok-Cybersecurity/atlas-recipes"
---

# Atlas recipes and `atlasctl`

Recipes for [Atlas](https://github.com/Avarok-Cybersecurity/atlas), the pure-Rust
LLM inference server for NVIDIA DGX Spark (GB10), plus **`atlasctl`**, the
launcher that runs them.

A recipe describes one model deployment — the checkpoint, the container image,
and the serve settings it was validated under. `atlasctl` reads a recipe and
runs the `docker run` it implies.

## Install

```sh
curl -fsSL https://atlasinference.io/install.sh | sh
```

Or, if you already have the toolchains:

```sh
cargo install atlasctl        # from crates.io
uvx pyatlasctl list            # from PyPI, no install step
```

The installer downloads a prebuilt binary, verifies its SHA-256 against the
release, and puts it in `~/.local/bin`. It needs no Python and no Rust
toolchain. `sh scripts/install.sh --uninstall` reverses it.

## Use

```sh
atlasctl list                              # what is available
atlasctl show qwen3.6-35b-a3b-fp8-mtp      # what a recipe does
atlasctl run qwen3.6-35b-a3b-fp8-mtp       # serve it
atlasctl run <recipe> --print              # print the command instead of running it
atlasctl logs <recipe> --follow
atlasctl stop <recipe>
atlasctl status…
