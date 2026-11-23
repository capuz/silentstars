---
repo: "azu/sdev"
name: "sdev"
description: "Spec-driven development toolkit"
readmeQualityOk: true
url: "https://github.com/azu/sdev"
language: "Rust"
languages: ["Rust", "HTML"]
languagePcts: [45, 40]
stars: 7
forks: 0
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 2
recentReleases: 10
createdAt: "2026-10-17T05:26:36Z"
lastCommitAt: "2026-11-23T10:20:52Z"
lastReleaseAt: "2026-11-11T15:57:48Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "funded", "release_machine"]
healthScore: 88
undervaluedScore: 50
maintainers: ["azu", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/47347be6c53876621059bf0cf5c57bd1c405c578a362ea66bd99f8cc8d8b8810/azu/sdev"
fundingLinks: ["GITHUB:https://github.com/azu"]
---

# sdev

[日本語](https://github.com/azu/sdev/blob/HEAD/README.ja.md)

sdev is a framework for developing software from specifications with people and AI.
Record purposes, requirements, and design decisions so implementation and review can follow their reasons.
The CLI provides writing guidelines and templates.

Specifications have three responsibilities.
Follow the consuming project's existing documents and conventions when available.

| Document | What it defines |
| --- | --- |
| Product | Whose problem to solve and what to provide |
| Requirements | Feature behavior and acceptance criteria |
| Design | How to meet requirements and why that approach was chosen |

## Install

### macOS and Linux

Run these commands at the root of the project where you want to use sdev.
The installer selects the given release for your OS and CPU and initializes the project.
The version in these commands is the latest stable release. Without `--version`, the installer looks up the latest release on GitHub instead, which some networks, such as cloud agent environments, block.
No Rust, Node.js, or PATH setup is required.
