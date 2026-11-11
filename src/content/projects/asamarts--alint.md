---
repo: "asamarts/alint"
name: "alint"
description: "Language-agnostic linter for repository structure, files, and content"
readmeQualityOk: true
url: "https://github.com/asamarts/alint"
homepage: "https://alint.org"
language: "Rust"
languages: ["Rust"]
languagePcts: [93]
topics: ["agent-friendly", "ci-cd", "devtools", "file-structure", "language-agnostic", "linter", "monorepo", "rust-cli", "repolinter-alternative", "repository-quality"]
stars: 84
forks: 1
openIssues: 5
closedIssues: 20
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-04-18T19:43:54Z"
lastCommitAt: "2026-11-11T19:42:55Z"
lastReleaseAt: "2026-04-23T15:39:50Z"
status: "thriving"
tags: ["solo_builder", "funded"]
healthScore: 95
undervaluedScore: 35
maintainers: ["asamarts", "dependabot[bot]", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/150ce733d0a6bb816d20c0e3cff7a092e4d057bda4cb475fb5c5881d03f46230/asamarts/alint"
fundingLinks: ["GITHUB:https://github.com/asamarts"]
discussionCount: 1
---

# alint

**A fast, general linter.**

Code linters check what's inside a source file. alint checks the repository around it: files that should or shouldn't exist, naming conventions, file contents, values buried in `package.json`, `Cargo.toml` or a workflow YAML, and the relationships between files. The rules live in one `.alint.yml` and run on every pull request, in pre-commit and in your editor.

**Fast at scale:** the workspace-bundle benchmark checks 100,000 files in about 1.5 seconds and one million in under 20 seconds ([measured on every release](https://alint.org/benchmarks/)).

Every repository has a shape it is supposed to keep. Every package carries a README. Workflows pin their actions to a commit SHA. Nobody commits `target/` or `node_modules/`. Source files that need a license header have one. These rules are real, and a repo drifts when they slip, but they usually live in a reviewer's head or a line of `CONTRIBUTING.md`, where nothing fails when a pull request ignores them.

alint writes those rules down and enforces them. It takes over from [Repolinter](https://github.com/todogroup/repolinter) (archived in 2026), runs alongside ESLint, Clippy, or Ruff, and ships as…
