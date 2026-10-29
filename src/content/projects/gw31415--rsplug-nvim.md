---
repo: "gw31415/rsplug.nvim"
name: "rsplug.nvim"
description: "A blazingly fast Neovim plugin manager written in Rust"
readmeQualityOk: true
url: "https://github.com/gw31415/rsplug.nvim"
language: "Rust"
languages: ["Rust"]
languagePcts: [95]
stars: 12
forks: 0
openIssues: 2
closedIssues: 33
watchers: 0
contributors: 2
recentReleases: 1
createdAt: "2025-07-26T11:32:22Z"
lastCommitAt: "2026-10-29T10:22:10Z"
lastReleaseAt: "2026-08-29T14:04:15Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 91
undervaluedScore: 56
maintainers: ["gw31415", "dependabot[bot]", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/6768d5a4253b87eb199362191dff15789291a7d3c8ac700d932143142e8c7011/gw31415/rsplug.nvim"
---

# rsplug.nvim

> A fast, reproducible Neovim plugin manager that builds a standard Vim pack
> with an external Rust binary.

## What it does

rsplug reads one or more TOML files, resolves plugin dependencies, fetches Git
repositories in parallel, and generates a self-contained pack under
`~/.cache/rsplug/`. Neovim loads that pack through a generated `init.lua`.
Plugin management therefore happens from the shell or a build system; Neovim
does not need to be running.

The generated output contains only the selected revisions and runtime files.
The repository cache and the generated pack are separate, so the pack can be
copied into a Nix or other reproducible build.

Highlights:

- shallow, parallel Git operations and a fast GitHub tarball path;
- JSON lockfile with exact commit revisions;
- lazy loading by event, command, filetype, function, mapping, source, or
  automatically detected Lua `require`;
- `lua_before`, `lua_after`, startup, build, and post-update hooks;
- dependency co-loading and conflict-aware merging to reduce `runtimepath`;
- configuration-only entries for startup or setup scripts.

## Installation

Neovim must load the generated bootstrap file. Add this once to…
