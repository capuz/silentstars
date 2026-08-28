---
repo: "Batalex/craft-ls"
name: "craft-ls"
description: "craft-ls enables editors that support the LSP to get quality of life improvements while working on *craft configuration files."
readmeQualityOk: true
url: "https://github.com/Batalex/craft-ls"
language: "Python"
languages: ["Python"]
languagePcts: [98]
stars: 15
forks: 3
openIssues: 0
closedIssues: 3
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2024-11-29T16:58:01Z"
lastCommitAt: "2026-08-28T15:36:40Z"
lastReleaseAt: "2026-01-04T14:37:15Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 89
undervaluedScore: 51
maintainers: ["Batalex", "renovate[bot]", "Ignavar"]
openGraphImageUrl: "https://opengraph.githubassets.com/943ad7869389a47ac82ab8044555384889e06065d955cc2294d1f6d575afdded/Batalex/craft-ls"
---

# craft-ls

Get on\

`craft-ls` is a [Language Server Protocol](https://microsoft.github.io/language-server-protocol/) implementation for *craft[^1] tools.

`craft-ls` enables editors that support the LSP to get quality of life improvements while working on *craft configuration files.

## Features

| Feature                | Snapcraft | Rockcraft | Charmcraft[^1] |
| :--------------------- | :-------: | :-------: | :------------: |
| Diagnostics            |    ✅     |    ✅     |       ✅       |
| Documentation on hover |    ✅     |    ✅     |       ✅       |
| Symbols                |    ✅     |    ✅     |       ✅       |
| Autocompletion         |    ✅     |    ✅     |       ✅       |

https://github.com/user-attachments/assets/e4b831b5-dcac-4efd-aabb-d3040899b52b

## Usage

### Installation

Using `uv` or `pipx`

```shell
uv tool install craft-ls

pipx install craft-ls
```

### Setup

#### Helix

```toml
# languages.toml
[[language]]
name = "yaml"
language-servers = ["craft-ls"]

[language-server.craft-ls]
command = "craft-ls"
```

#### VSCode

The VSCode extension can be installed from the marketplace.
It requires a Python 3.12 interpreter.
If not automatically picked, you may…
