---
repo: "leonardcser/smelt"
name: "smelt"
description: "A fast, Lua-scriptable AI coding agent for the terminal"
readmeQualityOk: true
url: "https://github.com/leonardcser/smelt"
homepage: "https://leonardcser.github.io/smelt/"
language: "Rust"
languages: ["Rust"]
languagePcts: [93]
topics: ["agent", "cli"]
stars: 41
forks: 7
openIssues: 0
closedIssues: 16
watchers: 4
contributors: 6
recentReleases: 0
createdAt: "2026-02-25T21:37:53Z"
lastCommitAt: "2026-08-31T09:55:58Z"
lastReleaseAt: "2026-03-20T17:29:53Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 43
maintainers: ["leonardcser", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/85df0a380f54c4e77953f20e89cc07fdd601848e72ef7dea7b72464c33bc909b/leonardcser/smelt"
---

<picture>
    <source media="(prefers-color-scheme: dark)" srcset="docs/docs/logo-dark.svg">
    <source media="(prefers-color-scheme: light)" srcset="docs/docs/logo-light.svg">
  </picture>
</p>

<h1 align="center">smelt</h1>

  &nbsp;·&nbsp;
  &nbsp;·&nbsp;
  &nbsp;·&nbsp;
</p>

> [!WARNING]
> smelt is beta software until 1.0. Beta maturity is not encoded as a SemVer
> prerelease: releases use normal `0.x.y` versions. Use the latest release and
> update often; interfaces may still change between releases.

## Why

Most coding agents are bloated and hard to customize. smelt is small, fast, and
scriptable in Lua like Neovim. Built from scratch, with care for the details.

</p>

## What's inside

- **Lua plugins.** Keymaps, commands, autocmds, custom tools, and custom modes.
- **Terminal renderer.** Its own grid and layout engine, not `ratatui`.
- **Vim editor.** Motions, text objects, registers, undo.
- **Deterministic fuzzing.** Fixed clock and stubbed I/O, so any crash can be
  replayed.
- **No config needed.** Run with flags, or use `smelt auth` for ChatGPT, GitHub
  Copilot, and Kimi Code.

## Install

Prebuilt Linux and macOS binaries for x86_64 and aarch64, plus Windows…
