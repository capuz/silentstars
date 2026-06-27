---
repo: "plyght/wax"
name: "wax"
description: "wax is a fast Homebrew-compatible package manager, built in Rust."
url: "https://github.com/plyght/wax"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
topics: ["brew", "homebrew", "linux", "mac", "macos", "package-manager", "rust"]
stars: 18
forks: 2
openIssues: 0
closedIssues: 4
watchers: 0
contributors: 5
recentReleases: 0
createdAt: "2026-01-08T19:38:36Z"
lastCommitAt: "2026-06-27T00:38:08Z"
lastReleaseAt: "2026-03-11T17:02:40Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 99
undervaluedScore: 46
maintainers: ["undivisible", "plyght", "hidehiroanto"]
openGraphImageUrl: "https://opengraph.githubassets.com/339e382e08c438e218fc4fea721e8ea11d5b487657e79b051a7ef1c8e7dd6a7a/plyght/wax"
---

</div>

# Wax

A fast, modern package manager that leverages Homebrew's ecosystem without the overhead. Built in Rust for speed and reliability, wax provides 16-20x faster search operations and parallel installation workflows while maintaining full compatibility with Homebrew formulae and bottles.

## Overview

Wax reimagines package management by replacing Homebrew's git-based tap system with direct JSON API access and parallel async operations. It reads from the same bottle CDN and formula definitions but executes operations through a compiled binary with modern concurrency primitives. The result is a package manager that feels instant for read operations and maximizes throughput for installations.

## Features

- **Lightning-Fast Queries**: Search and info commands execute in <100ms (16-20x faster than Homebrew)
- **Intelligent Auto-Detection**: Automatically detects formulae vs casks - no need to specify `--cask` flags
- **Parallel Operations**: Concurrent downloads with individual progress tracking for each package
- **Full Cask Support**: Install, uninstall, upgrade, and manage GUI applications seamlessly
- **Source Building**: Automatic fallback to source compilation when…
