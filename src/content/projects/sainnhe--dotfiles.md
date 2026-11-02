---
repo: "sainnhe/dotfiles"
name: "dotfiles"
description: "My Dotfiles (Containerized)"
readmeQualityOk: true
url: "https://github.com/sainnhe/dotfiles"
language: "Shell"
languages: ["Shell", "Vim Script"]
languagePcts: [57, 26]
topics: ["dotfiles", "vim", "neovim", "zsh", "tmux", "docker", "container"]
stars: 250
forks: 29
openIssues: 0
closedIssues: 3
watchers: 5
contributors: 1
recentReleases: 0
createdAt: "2018-12-20T03:16:16Z"
lastCommitAt: "2026-11-02T13:38:47Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 98
undervaluedScore: 35
maintainers: ["sainnhe"]
openGraphImageUrl: "https://opengraph.githubassets.com/40ff60077278f01a60708b31bcdd03dd21250c4a023c66d342ad0c368acc822c/sainnhe/dotfiles"
---

## Gallery

## About

This repository contains my personal configuration files for development on Windows && macOS && Linux.

It's not recommended to directly copy my configs, unless you know what they mean. Google and the manual pages are your best friends when exploring the open source world.

If you want to have a look at my vim configs, check out [sainnhe.txt](https://github.com/sainnhe/dotfiles/blob/HEAD/.vim/doc/sainnhe.txt).

For portable development, I bundled my dotfiles and development tools into a container image. You can try it out if you have podman or docker installed.

The container image is based on alpine and will be built on schedule. It features the following:

- Vim/Neovim
- Zsh
- Tmux
- Some UNIX Development Tools

Currently, it supports two architectures:

- `amd64`
- `arm64`

To run it, install podman or docker and run this command:

```shell
podman run -it --rm <registry>/sainnhe/dotfiles:latest
```

Where `<registry>` is one of the following:

- [`ghcr.io`](https://github.com/sainnhe/dotfiles/pkgs/container/dotfiles)
- [`quay.io`](https://quay.io/repository/sainnhe/dotfiles)

To access local directory in the container, use:

```shell
podman run -v…
