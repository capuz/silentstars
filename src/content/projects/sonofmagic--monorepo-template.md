---
repo: "sonofmagic/monorepo-template"
name: "monorepo-template"
description: "icebreaker's monorepo template"
url: "https://github.com/sonofmagic/monorepo-template"
homepage: "https://repo.icebreaker.top"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [97]
topics: ["action", "changesets", "docker", "husky", "monorepo", "pnpm", "turbo", "turborepo", "vscode"]
stars: 48
forks: 7
openIssues: 1
closedIssues: 2
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2022-11-02T16:18:16Z"
lastCommitAt: "2026-06-27T00:49:13Z"
lastReleaseAt: "2024-09-20T15:48:04Z"
status: "thriving"
tags: ["hidden_gem", "funded"]
healthScore: 92
undervaluedScore: 54
maintainers: ["renovate[bot]", "sonofmagic", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/e4db730314c0313c7425b9448351b64b4de3a8fdbfb8f1caed038e5650075985/sonofmagic/monorepo-template"
fundingLinks: ["CUSTOM:https://github.com/sonofmagic/sponsors"]
discussionCount: 7
---

# monorepo-template

English | [中文版本](README.zh-CN.md)

> A modern pnpm + Turbo Repo + Changesets starter that helps you bootstrap production-ready monorepos quickly.

## Overview

monorepo-template is a production-oriented pnpm + Turbo monorepo template. It ships with unified build, test, release, linting, and commit conventions, making it ideal for teams maintaining multiple deployable apps alongside reusable packages.

## Key Features

- **Modular Architecture**: Template sources live under `templates/` while reusable tooling lives in `packages/`, keeping responsibilities clear.
- **Centralized Scaffolding Assets**: `@icebreakers/monorepo-templates` packages templates and assets for both `monorepo` and `create-icebreaker`.
- **Unified Toolchain**: pnpm workspaces, Turbo task pipelines, Vitest, and Changesets streamline the entire lifecycle from development to release.
- **Engineering Standards**: ESLint, Stylelint, Husky, and Commitlint keep code quality high and commit messages consistent.
- **Extensible Template**: `repoctl` owns setup, sync, cleanup, package creation, checks, and release helpers. `repo` is the primary command, while `repoctl`, `rc`, and…
