---
repo: "bug-ops/deps-lsp"
name: "deps-lsp"
description: "Universal LSP server for dependency management — autocomplete, version hints, diagnostics, and OSV vulnerability scanning across Cargo, npm, PyPI, Go, Maven, Gradle, Swift, NuGet, Composer, Bundler, Dart, Deno, and GitHub Actions. Supports Zed, Neovim, Helix, VS Code."
readmeQualityOk: true
url: "https://github.com/bug-ops/deps-lsp"
homepage: "https://bug-ops.github.io/deps-lsp/"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
topics: ["cargo", "dependency-management", "helix", "inlay-hints", "language-server", "lsp", "neovim", "npm", "rust", "zed"]
stars: 21
forks: 1
openIssues: 17
closedIssues: 453
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2025-12-21T22:28:34Z"
lastCommitAt: "2026-09-13T08:30:21Z"
lastReleaseAt: "2025-12-26T17:55:10Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "under_pressure"]
healthScore: 99
undervaluedScore: 55
maintainers: ["bug-ops"]
openGraphImageUrl: "https://opengraph.githubassets.com/10bd386bb9bd8667174230c97e5576b46181b9af88481e88dac0b370acd27948/bug-ops/deps-lsp"
---

# deps-lsp

A universal Language Server Protocol (LSP) server for dependency management across Cargo, npm, PyPI, Go, Bundler, Dart, Maven, Gradle, Swift, Composer, NuGet, Deno, GitHub Actions, and GitLab CI/CD ecosystems.

## Features

- **Intelligent autocomplete** — Package names, versions, and feature flags
- **Version hints** — Inlay hints showing latest available versions
- **Loading indicators** — Visual feedback during registry fetches with LSP progress support
- **Lock file support** — Reads resolved versions from Cargo.lock, package-lock.json, pnpm-lock.yaml, poetry.lock, uv.lock, go.sum, Gemfile.lock, pubspec.lock, Package.resolved, composer.lock, packages.lock.json
- **Diagnostics** — Warnings for outdated, unknown, yanked, unsatisfiable-requirement, or deprecated/abandoned dependencies
- **License hover & policy** — SPDX license for the resolved and latest version in hover, flagging a "License changed" when they differ, plus an optional `license_policy` allow/deny-list diagnostic, across all 14 ecosystems
- **Vulnerability scanning** — OSV.dev-backed advisories in diagnostics and hover, across all supported ecosystems
- **Supply-chain trust signal** — OpenSSF Scorecard…
