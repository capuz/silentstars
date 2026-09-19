---
repo: "seamapi/cli"
name: "cli"
description: "Command line interface for the Seam API"
readmeQualityOk: true
url: "https://github.com/seamapi/cli"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [94]
topics: ["maintained"]
stars: 88
forks: 3
openIssues: 0
closedIssues: 54
watchers: 3
contributors: 18
recentReleases: 0
createdAt: "2023-12-10T20:42:35Z"
lastCommitAt: "2026-09-19T02:48:44Z"
lastReleaseAt: "2024-01-30T19:21:57Z"
status: "thriving"
tags: []
healthScore: 99
undervaluedScore: 48
maintainers: ["razor-x", "seambot", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/1624ffcd3c57241949d66ab0701127f70a7f597d5b426ff52c369e86e1c3bbe0/seamapi/cli"
---

# Seam CLI

A command-line interface (CLI) for interacting with the Seam API.

## Description

Commands run as soon as every required parameter is given. Anything missing is
prompted for, with suggestions pulled from your workspace. Pass
`--non-interactive` (or `-y`) to never be prompted: the command fails instead.

## Installation

If you use Zsh, the completions only work if you enable compinit in your .zshrc with

```sh
autoload -Uz compinit
compinit
```

### npm

Install the CLI globally using [npm] with

```
$ npm install --global @seamapi/cli
$ seam completion --install
```

### Homebrew

Install the CLI from [Homebrew] with

```
$ brew install --cask seamapi/tap/seam-cli
```

The Seam CLI may also be installed from Homebrew Core,
but it does not include the Seam Wizard.

```
$ brew install seam
```

### Scoop

On Windows, install the CLI from [Scoop] with

```
> scoop install https://github.com/seamapi/cli/releases/latest/download/seam.json
```

Later, update it with `scoop update seam`.

### Standalone binary

Install the latest release on Linux and macOS with

```
$ curl -fsSL https://raw.githubusercontent.com/seamapi/cli/main/install.sh | sh
```

or on Windows with

```…
