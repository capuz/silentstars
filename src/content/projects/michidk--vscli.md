---
repo: "michidk/vscli"
name: "vscli"
description: "A CLI/TUI that simplifies launching VSCode projects, with a focus on dev containers"
readmeQualityOk: true
url: "https://github.com/michidk/vscli"
homepage: "https://crates.io/crates/vscli"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
topics: ["devcontainer", "vscode", "cli", "rust", "command-line", "hacktoberfest", "terminal"]
stars: 457
forks: 12
openIssues: 2
closedIssues: 24
watchers: 3
contributors: 9
recentReleases: 0
createdAt: "2023-03-04T18:00:48Z"
lastCommitAt: "2026-10-24T08:21:11Z"
lastReleaseAt: "2023-10-22T08:24:26Z"
status: "thriving"
tags: []
healthScore: 91
undervaluedScore: 37
maintainers: ["renovate[bot]", "michidk", "vibepodml[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/9ead1c1fc8b874fbec61ad703d339a4feec86658f010d7e799ff18292aaccbfd/michidk/vscli"
---

# vscli

A CLI/TUI which makes it easy to launch [Visual Studio Code](https://code.visualstudio.com/) (vscode) [dev containers](https://containers.dev/). Also supports other editors like [Cursor](https://www.cursor.com/).

Read [here](https://blog.lohr.dev/launching-dev-containers) about the journey of reverse engineering Microsoft's dev container CLI in order to make this.

## Features

- A shorthand for launching vscode projects (to be used like the `code` command but with dev container support)
- Supports different editors like `vscode`, `vscode-insiders`, `cursor` and other vscode forks
- Detects whether a project is a [dev container](https://containers.dev/) project, and launches the dev container instead
- Supports [multiple dev containers](https://github.com/microsoft/vscode-docs/blob/main/remote-release-notes/v1_75.md#folders-with-multiple-devcontainerjson-files) in the same project
- Tracks your projects and allows you to open them using a CLI-based UI
- External devcontainer configs: store reusable configs separately and apply them to any project via `--config <name>`
- Container management: list, inspect and stop running devcontainers

## Installation

###…
