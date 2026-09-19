---
repo: "inouetakuya/obsidian-kill-and-yank"
name: "obsidian-kill-and-yank"
description: "Obsidian plugin to enable kill and yank in editor"
readmeQualityOk: true
url: "https://github.com/inouetakuya/obsidian-kill-and-yank"
language: "JavaScript"
languages: ["JavaScript", "TypeScript"]
languagePcts: [55, 45]
stars: 15
forks: 2
openIssues: 1
closedIssues: 2
watchers: 2
contributors: 2
recentReleases: 1
createdAt: "2023-01-18T16:57:05Z"
lastCommitAt: "2026-09-19T01:16:22Z"
lastReleaseAt: "2026-08-19T06:46:44Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 92
undervaluedScore: 66
maintainers: ["inouetakuya", "renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/ffd28f9f820192a0c3e2a4a0d0e843db6a5e4c31ee24b8f53e965cc6439a5c4f/inouetakuya/obsidian-kill-and-yank"
---

# Obsidian Kill and Yank

Obsidian plugin to enable kill and yank (like Emacs) in the editor. 

Obsidian https://obsidian.md

## Usage

### Kill line

Cut from the cursor position to the end of the line.

default: `Control + k`

### Kill region

Cut the selection.

default: `Control + w`

### Yank

Paste kill ring.

default: `Control + y`

### Set mark

Toggle the start position of the selection.

default: `Control + Space`

## Note

This plugin enables kill and yank in the editor, but does not enable kill and yank in the title.

If you wish to continue to use kill and yank in the title, change the default key mappings.

## Development

This project uses pnpm. The required version is pinned in the `packageManager` field of `package.json` and in `mise.toml`.

### Setup

```shell
pnpm install
```

### Format

```shell
pnpm format:check
pnpm format:fix
```

### Lint

```shell
pnpm lint
pnpm lint:fix
```

### Build

```shell
pnpm build
```

### Release

`main` is protected and only accepts changes through a pull request, so the version bump goes through one as well. The release tag is created afterwards, on the merge commit.

Create a branch:

```shell
git switch --create…
