---
repo: "lumen-oss/luarocks-tag-release"
name: "luarocks-tag-release"
description: "GitHub workflow for automatically generating Luarocks releases from tags and running busted tests"
readmeQualityOk: true
url: "https://github.com/lumen-oss/luarocks-tag-release"
language: "Lua"
languages: ["Lua"]
languagePcts: [96]
topics: ["automation", "busted", "cicd", "luarocks", "neovim", "release", "test", "testing", "workflow"]
stars: 57
forks: 3
openIssues: 7
closedIssues: 51
watchers: 2
contributors: 6
recentReleases: 0
createdAt: "2023-01-13T10:30:53Z"
lastCommitAt: "2026-10-25T09:00:56Z"
lastReleaseAt: "2023-03-29T19:45:38Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 97
undervaluedScore: 51
maintainers: ["mrcjkb", "dependabot[bot]", "Freed-Wu"]
openGraphImageUrl: "https://opengraph.githubassets.com/5063fd26c7c1df27f43fc37f86855aa8df0980d06d6aaec4e283a853d9d0f22d/lumen-oss/luarocks-tag-release"
fundingLinks: ["OPEN_COLLECTIVE:https://opencollective.com/lumen-labs"]
discussionCount: 5
---

luarocks-tag-release
      Automatically publish <a href="https://luarocks.org/">luarocks</a> packages from git tags.
      Designed to work with <a href="https://neovim.io/">Neovim</a> plugins.

> [!TIP]
>
> We recommend switching to [gh-actions-lux](https://github.com/lumen-oss/gh-actions-lux/).

Publishes packages to [LuaRocks](https://luarocks.org/) when a git tag is pushed.
No need to add a rockspec to your repository for each release (or at all).

## Quick links

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Usage](#usage)
- [Inputs](#inputs)
- [Example configurations](https://github.com/nvim-neorocks/luarocks-tag-release/wiki/Example-configurations)
- [Limitations](#limitations)
- [Related](#related)
- [Acknowledgements](#acknowledgements)

## Features

- Generates a [lux.toml](https://lux.lumen-labs.org/reference/lux-toml) from repository metadata
  and action inputs, unless the repository already provides a `lux.toml`.
- Tests a local installation from the generated rockspec before uploading.
- Uploads the package to LuaRocks using [lux](https://lux.lumen-labs.org/).
- Tests the installation of the uploaded package.

## Prerequisites

- A LuaRocks account…
