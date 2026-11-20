---
repo: "leostera/git-twig"
name: "git-twig"
description: "lightweight git-worktrees for agents"
readmeQualityOk: true
url: "https://github.com/leostera/git-twig"
homepage: "https://twig.leostera.dev"
language: "Rust"
languages: ["Rust", "TypeScript"]
languagePcts: [69, 20]
topics: ["agents", "git", "worktrees"]
stars: 266
forks: 11
openIssues: 4
closedIssues: 5
watchers: 0
contributors: 4
recentReleases: 5
createdAt: "2026-11-15T11:12:07Z"
lastCommitAt: "2026-11-20T11:40:24Z"
lastReleaseAt: "2026-11-17T21:36:03Z"
status: "newborn"
tags: ["solo_builder", "funded", "release_machine"]
healthScore: 81
undervaluedScore: 29
maintainers: ["leostera", "github-actions[bot]", "mateo-m"]
openGraphImageUrl: "https://opengraph.githubassets.com/60c8065e8ff5924230f3ca125917f940fd54f73c865a29fd41f36d24554d79d3/leostera/git-twig"
fundingLinks: ["GITHUB:https://github.com/leostera"]
---

# git twig 🌱

With twig, your agents can create cheap lightweight worktrees and use up to 97% less space on disk. Imagine all the worktrees you could now make!

## Install

```sh
brew tap leostera/git-twig https://github.com/leostera/git-twig
brew install leostera/git-twig/git-twig
```

Or install from crates.io with Rust 1.95+ and Git 2.40+:

```sh
cargo install git-twig --locked
```

On Windows, use `cargo install` or the `.zip` attached to each release.

For local development: `cargo install --path crates/git-twig --locked`.

## Use

With your source checkout in `main/`:

```sh
git -C main twig new -b feat/x ../feat-x HEAD
git -C main twig list
```

Version 0.5.0 can reuse matching files from nearby worktrees for other revisions
too. Git writes changed or new files, and converted files whose bytes differ.
Short help works outside a checkout: `git twig -h` or `git twig new --help`.
