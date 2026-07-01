---
repo: "akiomik/git-branch-status"
name: "git-branch-status"
description: "A command line tool for displaying git branch colored by status"
url: "https://github.com/akiomik/git-branch-status"
language: "Rust"
languages: ["Rust"]
languagePcts: [91]
topics: ["git", "prompt", "rust", "cli", "zsh", "vcs-information", "git-branch", "git-status", "starship"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 4
createdAt: "2021-08-31T12:34:47Z"
lastCommitAt: "2026-07-01T07:06:14Z"
lastReleaseAt: "2026-06-30T14:11:56Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 90
undervaluedScore: 79
maintainers: ["akiomik", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/3f29a30fcf053dbdb745de3a87a5f6dfcf5271bd4e8f83387980d2b20c9fda2d/akiomik/git-branch-status"
fundingLinks: ["GITHUB:https://github.com/akiomik"]
---

# git-branch-status

A command line tool for displaying git branch colored by status, like zsh's [vcs_info](https://zsh.sourceforge.io/Doc/Release/User-Contributions.html#Version-Control-Information).

## Installation

### From crates.io

```sh
cargo install git-branch-status
```

### Prebuilt binaries

Download the archive for your platform from the
[releases page](https://github.com/akiomik/git-branch-status/releases), extract
it, and place the `git-branch-status` binary somewhere on your `PATH` (Windows
builds are distributed as a `.zip`):

```sh
tar xzf git-branch-status-<version>-<target>.tar.gz
cp git-branch-status ~/bin
```

### From source

```sh
git clone https://github.com/akiomik/git-branch-status.git && cd git-branch-status
cargo build --release
cp target/release/git-branch-status ~/bin
```

## Usage

### Zsh

Add the following to `~/.zshrc`:

```sh
# ~/.zshrc
setopt prompt_subst
RPROMPT='$(git branch-status --mode zsh)'
```

### Zsh with Starship 🚀

Add the following to `~/.config/starship.toml`:

```toml
format = """
$directory\
$custom\
$line_break\
$character"""

[custom.branchstatus]
command = "git branch-status --mode zsh"
when = "git rev-parse…
