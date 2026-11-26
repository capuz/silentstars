---
repo: "gabrielkoerich/git-cow"
name: "git-cow"
description: "Git worktrees that share files through copy-on-write clones (APFS, XFS, btrfs). A git subcommand and a Rust crate"
readmeQualityOk: true
url: "https://github.com/gabrielkoerich/git-cow"
homepage: "https://docs.rs/git-cow/"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
topics: ["apfs", "btrfs", "cli", "clonefile", "copy-on-write", "developer-tools", "git", "git-worktree", "reflink", "rust"]
stars: 73
forks: 1
openIssues: 1
closedIssues: 2
watchers: 0
contributors: 1
recentReleases: 8
createdAt: "2026-10-17T14:13:36Z"
lastCommitAt: "2026-11-26T22:16:29Z"
lastReleaseAt: "2026-11-26T22:10:26Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 85
undervaluedScore: 26
maintainers: ["gabrielkoerich"]
openGraphImageUrl: "https://opengraph.githubassets.com/32bd8ea5b6fc2bf53101b77e68c4a39881425eee0235f6a4f1a352bbacc3e9eb/gabrielkoerich/git-cow"
---

# git-cow

Git worktrees that share their build output. git-cow keeps one extra checkout of each repository and makes every new worktree a copy-on-write clone of it. So `target/`, `node_modules` and other ignored folders take no extra disk until a build changes them. A worktree that would cost gigabytes starts at a few megabytes, and its first build is incremental.

```bash
git cow add -b feat/login                 # ~/.worktrees/<repo>/login
git cow add -b feat/login ../login        # any path, like git worktree add
git cow list                              # your worktrees, without the extra checkout
git cow remove --warm ~/.worktrees/<repo>/login   # after a merge: give its build output to the extra checkout, then remove it
```

## Install

```bash
cargo install git-cow   # into ~/.cargo/bin
```

Git runs any program named `git-<name>` on your `PATH` as `git <name>`, so `git cow` works right after the install. If git says `cow` is not a git command, add `~/.cargo/bin` to your `PATH`:

```bash
export PATH="$HOME/.cargo/bin:$PATH"   # in your shell profile
```

For a different name, add an alias: `git config --global alias.wt '!git-cow'` makes `git wt add -b feat/x` work.
