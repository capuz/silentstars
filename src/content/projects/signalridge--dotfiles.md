---
repo: "signalridge/dotfiles"
name: "dotfiles"
description: "A modern, reproducible development environment for macOS and Linux using chezmoi + Nix"
readmeQualityOk: true
url: "https://github.com/signalridge/dotfiles"
language: "Shell"
languages: ["Shell"]
languagePcts: [65]
topics: ["chezmoi", "dotfiles", "macos", "nix", "ai-integration", "fzf", "macosx", "neovim", "nix-darwin", "rust-cli"]
stars: 42
forks: 5
openIssues: 0
closedIssues: 4
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2025-01-18T12:11:37Z"
lastCommitAt: "2026-09-02T08:03:14Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 100
undervaluedScore: 56
maintainers: ["signalridge", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/4c96ef831e8dabd8398bc4b4a9810fb7a5282479f4d86f290702f7159fa4d2ee/signalridge/dotfiles"
---

<p>
</p>

<p>
</p>

[English](https://github.com/signalridge/dotfiles/blob/HEAD/README.md) | [中文](https://github.com/signalridge/dotfiles/blob/HEAD/README.zh-CN.md) | [日本語](https://github.com/signalridge/dotfiles/blob/HEAD/README.ja.md)

</div>

---

## What This Repository Is

This is a personal workstation configuration managed with `chezmoi`. It is a
working configuration rather than a generic starter template, so the sections
below describe the files and behavior that exist in this checkout today.

The main layers are:

- `chezmoi` for templates, target-file merging, and the bootstrap scripts
- Nix for the cross-platform user profile and, on macOS, `nix-darwin`
- Homebrew and the Mac App Store for macOS applications
- `aqua` for pinned CLI releases and third-party registry entries
- `mise` for runtimes and tools that are intentionally managed outside Nix
- Claude Code, Codex CLI, Pi, Cursor Agent CLI, Kimi Code, and Antigravity CLI
  configuration

> This repository contains personal defaults, including permissive AI execution
> modes and private-machine applications. Review the templates and data before
> applying them to another computer.

## Support and Profile Behavior

|…
