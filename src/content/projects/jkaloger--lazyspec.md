---
repo: "jkaloger/lazyspec"
name: "lazyspec"
description: "A little TUI for project documentation. "
url: "https://github.com/jkaloger/lazyspec"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
topics: ["ai", "spec-driven", "tui", "cli", "sdd", "planning", "specification"]
stars: 8
forks: 1
openIssues: 0
closedIssues: 8
watchers: 0
contributors: 2
recentReleases: 3
createdAt: "2026-03-04T14:09:08Z"
lastCommitAt: "2026-06-24T00:20:47Z"
lastReleaseAt: "2026-06-24T00:21:50Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 96
undervaluedScore: 52
maintainers: ["jkaloger"]
openGraphImageUrl: "https://opengraph.githubassets.com/4366e098408dd462e93d3dab4208ea08a925c13f9ddf63d1a9096a322e8cdc4f/jkaloger/lazyspec"
---

<h1 align="center">
  🤖
  <br>lazyspec
</h1>
    A little TUI & CLI for project documentation.
</p>

</p>

> [!WARNING]
> Lazyspec is experimental. APIs and CLI interfaces will change frequently and without notice.

## Features

Lazyspec manages project documentation as version-controlled markdown files with YAML frontmatter. Documents live in your repo, so agents and humans read from the same source of truth.

- Create, update, link, and validate documents. Config-driven relationships (the starter set is `implements`, `supersedes`, `blocks`, `related-to`) keep the chain explicit.
- Catch broken links, orphaned documents, and incomplete frontmatter before they rot. `lazyspec validate` exits non-zero on errors, so it slots into CI.
- Embed `@ref` directives in your specs to point at source code. Lazyspec expands them inline using `git show`, with symbol-level extraction for Rust and TypeScript.
- Fuzzy search, markdown preview, live file watching, and document creation without leaving the terminal.
- Every command supports `--json` output for automation and agent integration.
- Define your own types, templates, and directory layout in `.lazyspec.toml`.

## Install

### Nix

```sh…
