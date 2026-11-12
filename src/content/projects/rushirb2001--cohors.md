---
repo: "rushirb2001/cohors"
name: "cohors"
description: "A fast TUI dashboard for the status of all your git repositories, with bulk actions — one Rust core, two front-ends."
readmeQualityOk: true
url: "https://github.com/rushirb2001/cohors"
language: "Rust"
languages: ["Rust"]
languagePcts: [77]
stars: 11
forks: 2
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 5
recentReleases: 5
createdAt: "2026-06-15T08:25:28Z"
lastCommitAt: "2026-11-12T11:08:31Z"
lastReleaseAt: "2026-11-12T10:45:12Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 100
undervaluedScore: 59
maintainers: ["rushirb2001"]
openGraphImageUrl: "https://opengraph.githubassets.com/7224b566921821e78585dfe9166bc8e3a562e8b2c92da319512cab87c0f86ac1/rushirb2001/cohors"
---

### Every git repo you own, on one screen.

What's unpushed, what's behind, and what to do next, across every repository on your machine.

## Install

**Homebrew**
```sh
brew install rushirb2001/tap/cohors
```

**pip**
```sh
pip install cohors
```

**npm**
```sh
npm install -g @cohors/cli
```

**Cargo**
```sh
cargo install cohors
```

**Shell installer**
```sh
curl -LsSf https://github.com/rushirb2001/cohors/releases/latest/download/cohors-installer.sh | sh
```

**Run once, without installing**
```sh
uvx cohors@latest
```
```sh
npx @cohors/cli@latest
```

Then run `cohors`. To try it on sample repositories first, run `cohors demo`.

Prebuilt for macOS and Linux; Cargo builds it anywhere Rust runs. All it needs is `git`. The examples below are real output from the `cohors demo` sample fleet, trimmed where marked `…`.

## What it answers

**Where it looks.** With no config, the folders where code usually lives. Point it at yours with `cohors --root ~/code` (repeat for more), or save them with `cohors init`, which writes `~/.config/cohors/config.toml` for roots, aliases, groups and ignore rules.

## Use it in the terminal

```sh
cohors
```

**Do next** lists what to do, most urgent…
