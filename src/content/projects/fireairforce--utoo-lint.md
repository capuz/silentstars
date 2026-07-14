---
repo: "fireairforce/utoo-lint"
name: "utoo-lint"
description: "High performance linter for JavaScript and TypeScript written by Zig."
readmeQualityOk: true
url: "https://github.com/fireairforce/utoo-lint"
language: "Zig"
languages: ["Zig"]
languagePcts: [92]
stars: 12
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-05-18T06:57:02Z"
lastCommitAt: "2026-07-14T05:53:00Z"
lastReleaseAt: "2026-06-17T02:57:44Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 88
undervaluedScore: 48
maintainers: ["fireairforce"]
openGraphImageUrl: "https://opengraph.githubassets.com/244b6419b941290deb34905052f891305076137d3840ec491eb21c742ca0b3a9/fireairforce/utoo-lint"
---

# utoo-lint

`@utoo/lint` is a High performance linter for JavaScript and TypeScript written by Zig.
It uses [`yuku`](https://github.com/yuku-toolchain/yuku) for parsing, AST
traversal, scope tracking, and symbol resolution.

It currently has some performance advantages compared with other lint tools:

## Status

This repo is a working scaffold, not a production linter yet.

Useful docs:

- [Rule status](https://github.com/fireairforce/utoo-lint/blob/HEAD/docs/rule-status.md) lists implemented rules and their ESLint
  documentation links.
- [Configuration](https://github.com/fireairforce/utoo-lint/blob/HEAD/docs/configuration.md) describes `utoo.json` files for
  frontend projects.
- [Migrating from ESLint](https://github.com/fireairforce/utoo-lint/blob/HEAD/docs/eslint-migration.md) covers the current migration
  path.
- [Contributing](https://github.com/fireairforce/utoo-lint/blob/HEAD/CONTRIBUTING.md) covers local development, rule work,
  packaging, and publishing.

## Install

```bash
pnpm add -D @utoo/lint
```

Run it with:

```bash
pnpm exec utoo-lint src
```

## CLI

```bash
utoo-lint [options] [file-or-directory ...]
```

If no target is provided, `utoo-lint` scans the…
