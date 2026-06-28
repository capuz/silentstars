---
repo: "mohsen1/git-lazy-mount"
name: "git-lazy-mount"
description: "Lazily mount a git repo without cloning it. Works with ordinary git commands"
url: "https://github.com/mohsen1/git-lazy-mount"
language: "Rust"
languages: ["Rust"]
languagePcts: [96]
topics: ["git", "rust"]
stars: 8
forks: 0
openIssues: 0
closedIssues: 13
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-06-23T06:17:25Z"
lastCommitAt: "2026-06-28T01:44:08Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 100
undervaluedScore: 50
maintainers: ["mohsen1"]
openGraphImageUrl: "https://opengraph.githubassets.com/f4c0110b446c2b4248aee23bd3d355b0aba42a3e61db4e6f48719e5bfafcd401/mohsen1/git-lazy-mount"
---

# `git-lazy-mount`

**Lazily mount a git repo without cloning it. Files materialize as they are read or edited.**

```bash
git lazy-mount https://github.com/example/huge-repo ~/huge-repo
```

After it returns, **your ordinary `git` and tools just work**:

```bash
cd ~/huge-repo
vim src/main.rs
git commit -am 'Some edit'
git switch -c feature
git push
```

## Why?

This is aimed at microVMs that spin up to run coding agents against a git repository. The idea is that the coding agent can start working immediately without having to wait for a full clone.

When the agent runs a test or build, only relevant files are downloaded on demand.

### `Grep` tool in AI session

Tools like `rg` and `git grep` read every file, so they pull the whole repo and undo the point of `lazy-mount`.

To mititgate this, we can route search through [`sgrep`](crates/sgrep) instead. It queries a code-search index ([Sourcegraph](https://sourcegraph.com) by default, and pluggable) and overlays your uncommitted edits, fetching nothing.

More in [`crates/sgrep`](crates/sgrep).

## Performance in real world

Across **20 repositories** — `facebook/react` to the 179k-file LLVM tree — a full
`git clone` totals **23…
