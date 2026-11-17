---
repo: "caffeinelabs/mops"
name: "mops"
description: "Package manager for the Motoko programming language"
readmeQualityOk: true
url: "https://github.com/caffeinelabs/mops"
homepage: "https://mops.one"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [68]
topics: ["ic", "internet-computer", "motoko", "package-manager"]
stars: 46
forks: 16
openIssues: 49
closedIssues: 233
watchers: 1
contributors: 20
recentReleases: 0
createdAt: "2022-06-19T09:02:45Z"
lastCommitAt: "2026-11-17T13:37:16Z"
lastReleaseAt: "2026-04-14T12:34:21Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 94
undervaluedScore: 59
maintainers: ["Kamirus", "caffeine-ci-bot[bot]", "giorgiopiatti-caffeinated"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/505059381/886ca2bb-0c37-47f2-935b-12a6ae1a1f86"
---

# Mops

Mops is a package manager for the Motoko programming language.

- [Motoko Package Registry](https://mops.one)
- [Documentation](https://docs.mops.one)
- [Blog](https://blog.mops.one)
- [CLI](https://cli.mops.one)

## Setup

### 1. Check system requirements
- [Node.js](https://nodejs.org/) >= 22.0.0

Mops downloads and manages the Motoko toolchain itself. It does not need `dfx`, and does not support it.

### 2. Install CLI tool
```
curl -fsSL cli.mops.one/install.sh | sh
```
or
```
npm i -g ic-mops
```

## Install Packages

### 1. Initialize
Run this command in the root directory of your project

```
mops init
```

### 2. Pin the Motoko compiler
Every command that compiles uses the `moc` pinned in `mops.toml`

```
mops toolchain use moc latest
```

### 3. Install Motoko Packages
Use `mops add <package_name>` to install a specific package and save it to `mops.toml`

```
mops add core
```

You can also add packages from GitHub like this
```
mops add https://github.com/dfinity/motoko-base
```

For GitHub-packages you can specify branch, tag, or commit hash by adding `#<branch/tag/hash>`
```
mops add https://github.com/dfinity/motoko-base#moc-0.9.1
```

You can also add local…
