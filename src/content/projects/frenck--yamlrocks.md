---
repo: "frenck/YAMLRocks"
name: "YAMLRocks"
description: "Rock-solid YAML for Python, written in Rust."
readmeQualityOk: true
url: "https://github.com/frenck/YAMLRocks"
homepage: "https://yaml.rocks"
language: "Rust"
languages: ["Rust", "Python"]
languagePcts: [61, 39]
topics: ["python", "python-library", "python3", "rust", "rustlang", "yaml", "yaml-parser", "yaml-schema"]
stars: 89
forks: 1
openIssues: 2
closedIssues: 2
watchers: 2
contributors: 4
recentReleases: 0
createdAt: "2026-06-06T14:39:09Z"
lastCommitAt: "2026-09-27T09:29:12Z"
lastReleaseAt: "2026-06-27T14:36:39Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 89
undervaluedScore: 30
maintainers: ["renovate[bot]", "frenck", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1261327662/d51d7650-61ba-4c7b-bf9e-02a68f042364"
fundingLinks: ["GITHUB:https://github.com/frenck", "PATREON:https://patreon.com/frenck", "CUSTOM:https://frenck.dev/donate/"]
discussionCount: 2
---

# 🪨 YAMLRocks

Rock-solid YAML for Python, written in Rust.

## About

YAMLRocks is the rock-solid YAML library for Python: a Rust-backed extension
that parses and emits YAML fast, follows the YAML 1.2 specification (with a
YAML 1.1 compatibility mode), and, unlike PyYAML, round-trips documents while
preserving comments, anchors, and formatting.

Rock-solid means three things: correct, secure by default, and fast, with a
Rust core doing the heavy lifting. (The R in Rock is for Rust.)

The Python YAML ecosystem has long forced a trade-off. YAMLRocks refuses it:

| Library       |      Fast       |   YAML 1.2   | Comments / round-trip | Native includes |
| ------------- | :-------------: | :----------: | :-------------------: | :-------------: |
| PyYAML        |  with C loader  | ✗ (1.1 only) |           ✗           |        ✗        |
| ruamel.yaml   | ✗ (pure Python) |      ✓       |           ✓           |        ✗        |
| **YAMLRocks** |    ✓ (Rust)     |      ✓       |           ✓           |        ✓        |

It is also fast. Release-build benchmarks (`python bench/bench.py`) show how
many times faster YAMLRocks is:

| Operation                                    | vs…
