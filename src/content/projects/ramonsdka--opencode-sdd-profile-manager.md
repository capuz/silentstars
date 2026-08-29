---
repo: "RamonsDka/opencode-sdd-profile-manager"
name: "opencode-sdd-profile-manager"
description: "Keyboard-first SDD profile, model, reasoning, plugin, and Task Manager management for OpenCode"
readmeQualityOk: true
url: "https://github.com/RamonsDka/opencode-sdd-profile-manager"
language: "TypeScript"
languages: ["TypeScript", "HTML", "JavaScript"]
languagePcts: [50, 29, 21]
topics: ["engram", "opencode", "opentui", "profile-manager", "solidjs", "spec-driven-development", "tui", "typescript", "plugins", "sdd"]
stars: 7
forks: 0
openIssues: 5
closedIssues: 1
watchers: 0
contributors: 7
recentReleases: 1
createdAt: "2026-08-24T07:03:03Z"
lastCommitAt: "2026-08-29T17:27:14Z"
lastReleaseAt: "2026-08-29T00:45:22Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 78
undervaluedScore: 42
maintainers: ["j0k3r-dev-rgl", "semantic-release-bot", "RamonsDka"]
openGraphImageUrl: "https://opengraph.githubassets.com/47c07b653a2d9c1528189e4c0eac9b681ae2c27a0c72ad93497d20cf3f9f5af2/RamonsDka/opencode-sdd-profile-manager"
---

# OpenCode SDD Profile Manager

A keyboard-first OpenCode TUI plugin for creating, editing, versioning, and activating model profiles across Spec-Driven Development agents.

It provides one consistent catalog for SDD, Judgment Day, review, and auxiliary agents; grouped model navigation; per-agent reasoning effort; fallback control; profile history; and project-scoped Engram memory browsing.

> **Project lineage**
>
> This repository is an independently maintained derivative of [`j0k3r-dev-rgl/sdd-engram-plugin`](https://github.com/j0k3r-dev-rgl/sdd-engram-plugin). The original MIT copyright and license are preserved in [`LICENSE`](https://github.com/RamonsDka/opencode-sdd-profile-manager/blob/HEAD/LICENSE). See [Origin and attribution](#origin-and-attribution).

## What it solves

OpenCode agent configurations become difficult to manage when every SDD phase uses a different model, reasoning level, or fallback. Editing those values directly in JSON is error-prone and makes it hard to answer simple questions:

- Which profile is active?
- Which model does each agent use?
- Which agents support fallback or reasoning effort?
- Can a complete configuration be changed without destroying…
