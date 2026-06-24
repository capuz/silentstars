---
repo: "frenck/YAMLRocks"
name: "YAMLRocks"
description: "Rock-solid YAML for Python, written in Rust."
url: "https://github.com/frenck/YAMLRocks"
homepage: "https://yaml.rocks"
language: "Rust"
languages: ["Rust", "Python"]
languagePcts: [62, 37]
topics: ["python", "python-library", "python3", "rust", "rustlang", "yaml", "yaml-parser", "yaml-schema"]
stars: 69
forks: 1
openIssues: 1
closedIssues: 2
watchers: 3
contributors: 3
recentReleases: 6
createdAt: "2026-06-06T14:39:09Z"
lastCommitAt: "2026-06-24T06:39:12Z"
lastReleaseAt: "2026-06-13T20:13:32Z"
status: "newborn"
tags: ["hidden_gem", "funded", "release_machine"]
healthScore: 92
undervaluedScore: 38
maintainers: ["renovate[bot]", "frenck", "pdecat"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1261327662/d51d7650-61ba-4c7b-bf9e-02a68f042364"
fundingLinks: ["GITHUB:https://github.com/frenck", "PATREON:https://patreon.com/frenck", "CUSTOM:https://frenck.dev/donate/"]
discussionCount: 0
---

# 🪨 YAMLRocks

![Project Stage][project-stage-shield]
![Project Maintenance][maintenance-shield]

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
many…
