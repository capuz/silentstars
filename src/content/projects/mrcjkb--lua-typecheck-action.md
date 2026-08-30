---
repo: "mrcjkb/lua-typecheck-action"
name: "lua-typecheck-action"
description: "A GitHub action that lets you leverage sumneko lua-language-server and EmmyLua to statically type check lua code."
readmeQualityOk: true
url: "https://github.com/mrcjkb/lua-typecheck-action"
language: "Lua"
languages: ["Lua", "Nix"]
languagePcts: [70, 30]
stars: 52
forks: 3
openIssues: 0
closedIssues: 6
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2023-01-17T20:52:34Z"
lastCommitAt: "2026-08-30T00:44:47Z"
lastReleaseAt: "2025-02-20T14:36:33Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 98
undervaluedScore: 38
maintainers: ["mrcjkb", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/ba3e31e7aaab450023052c1dd5a89c14735665aba2e8c2a03576b689a621f17c/mrcjkb/lua-typecheck-action"
fundingLinks: ["GITHUB:https://github.com/mrcjkb"]
---

# lua-language-server type check action

A GitHub action that lets you leverage [`lua-language-server`](https://github.com/LuaLS/lua-language-server)
and [luaCATS](https://luals.github.io/wiki/annotations/) to statically type check and lint lua code.

## Introduction

What I found the most frustrating about developing Neovim plugins in Lua is the lack
of type safety.

When I [added](https://github.com/mrcjkb/haskell-tools.nvim/pull/103/files) some LuaCATS
annotations to one of my plugins (to generate Vimdoc using [`lemmy-help`](https://github.com/numToStr/lemmy-help)),
I noticed `lua-language-server` was giving me diagnostics based on my documentation.
This was something I was not getting from linters like `luacheck`.
So I asked myself, "Can I leverage `lua-language-server` and EmmyLua to statically type check my Lua code?"

The result is this GitHub action, which type checks itself: 

## Usage

Create `.github/workflows/typecheck.yml` in your repository with the following contents:

```yaml
---
name: Type Check Code Base
on:
  pull_request: ~
  push:
    branches:
      - master

jobs:
  build:
    name: Type Check Code Base
    runs-on: ubuntu-latest

    steps:
      - name:…
