---
repo: "R-unic/loom"
name: "loom"
description: "roblox dsl"
readmeQualityOk: true
url: "https://github.com/R-unic/loom"
language: "C#"
languages: ["C#"]
languagePcts: [100]
topics: ["compiler", "dsl", "language", "loom", "luau", "roblox", "transpiler"]
stars: 12
forks: 3
openIssues: 14
closedIssues: 16
watchers: 0
contributors: 5
recentReleases: 0
createdAt: "2026-05-27T18:40:31Z"
lastCommitAt: "2026-07-19T06:13:27Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 86
undervaluedScore: 45
maintainers: ["R-unic", "jackprogramsjp", "kryptra"]
openGraphImageUrl: "https://opengraph.githubassets.com/6bdd5b85589687ef9865cdee816498982f5bc32a5a2d44dc89bb6846a253c418/R-unic/loom"
---

# Loom

**A domain-specific language for Roblox that transpiles to Luau.**

> ⚠️ This project is a work-in-progress. Nothing is final. Breaking changes may occur at any time. Expect bugs.

## Features

- **Immutability by default** – Variables, fields, and arrays are immutable unless explicitly marked `mut`
- **Structural type system** – Duck typing with compile-time safety
- **Modern syntax** – Familiar syntax inspired by Rust and TypeScript
- **Rich type inference** – Minimal annotations required
- **Extended number literals** – Automatic math for units of time and frequency, as well as binary/octal/hex support
- **Range expressions** – `1..10` for slicing and bounds
- **`nameof` operator** – Get names as strings at compile time. See [example](#nameof).
- **Flow-sensitive typing** - Loom supports discriminated unions and narrowing to the correct union member based on a common property
- **Generic functions and types** – Full support for type parameters including constraints and defaults
- **Result pattern for errors** – Error handling uses the result pattern from Rust, no more `pcall`s. See [example](#result-pattern).
- **Traits** – Define reusable behavior that interfaces can…
