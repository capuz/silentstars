---
repo: "nohzafk/devcontainer-feature-emacs-lsp-bridge"
name: "devcontainer-feature-emacs-lsp-bridge"
description: "devcontainer feature for emacs to use lsp-bridge with language server"
readmeQualityOk: true
url: "https://github.com/nohzafk/devcontainer-feature-emacs-lsp-bridge"
language: "Shell"
languages: ["Shell"]
languagePcts: [92]
topics: ["devcontainer", "devcontainer-feature", "emacs", "lsp-client"]
stars: 27
forks: 2
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2024-01-02T11:50:18Z"
lastCommitAt: "2026-09-19T02:46:39Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 55
maintainers: ["github-actions[bot]", "nohzafk"]
openGraphImageUrl: "https://opengraph.githubassets.com/e86fe4c7c0532f8a0d25c2cd16505f527b5af1fbda76cecebe19e54b84dfad0f/nohzafk/devcontainer-feature-emacs-lsp-bridge"
---

# Dev Container Features: emacs-lsp-bridge

This repository provides automation to generate devcontainer features for every language server supported by [lsp-bridge](https://github.com/manateelazycat/lsp-bridge). It uses [nix packages](https://search.nixos.org/packages) to install the language server and lsp-bridge environment inside the container.

**This DevContainer feature automatically updates and releases the latest version of LSP-Bridge daily.**

# Available Features
You can find all available features in the [Packages](https://github.com/nohzafk?tab=packages&repo_name=devcontainer-feature-emacs-lsp-bridge) section.

If `python3` and `pip3` are available in the base image, `lsp-bridge` will use it to create virtual environment instead of installing another Python interprepter from nix.

# Connect lsp-bridge to Container
Here is how you can set up [lsp-bridge](https://github.com/manateelazycat/lsp-bridge) to connect to the container and open a file in Emacs to start the auto-completion.

## Setup devcontainer
Add a `.devcontainer/devcontainer.json` to your project. Below is an example configuration:

```json
{
	"name": "Ubuntu",
    // Your base image
	"image":…
