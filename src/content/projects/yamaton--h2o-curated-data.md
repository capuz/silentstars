---
repo: "yamaton/h2o-curated-data"
name: "h2o-curated-data"
description: "Semi-hand curated command-line option data for many CLI programs, geared toward bioinformatics tools. Shell completion scripts are also available. "
readmeQualityOk: true
url: "https://github.com/yamaton/h2o-curated-data"
language: "Shell"
languages: ["Shell"]
languagePcts: [76]
topics: ["dataset", "cli", "vscode-extension", "shell", "bash", "zsh", "fish", "bioinformatics"]
stars: 18
forks: 0
openIssues: 1
closedIssues: 3
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2021-06-15T15:48:50Z"
lastCommitAt: "2026-08-27T23:52:25Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 66
undervaluedScore: 34
maintainers: ["yamaton"]
openGraphImageUrl: "https://opengraph.githubassets.com/7d208439acfb40e00deeba3ed979c86ab78f765e67ad38f160af38dc214a424e/yamaton/h2o-curated-data"
---

# CLI curated data for shell completion

This repository contains command-line specs for [Shell Completion](https://marketplace.visualstudio.com/items?itemName=tetradresearch.vscode-h2o) for VS Code. This repository also contains tab completion scripts for bash/zsh/fish shells.

Shell completion scripts for bioinformatics tools are located in the separate repositories:
  * [yamaton/fish-completions-bio](https://github.com/yamaton/fish-completions-bio)
  * [yamaton/zsh-completions-bio](https://github.com/yamaton/zsh-completions-bio)

## Loading the data in VS Code

* In VS Code,  type `Ctrl`+`Shift`+`P` (or `⌘`+`⇧`+`P` on macOS) and run following commands:
  * `Shell Completion: Load Common CLI Data` to load commands in [general.txt](https://github.com/yamaton/h2o-curated-data/blob/main/general.txt)
  * `Shell Completion: Load Bioinformatics CLI Data` to load commands in [bio.txt](https://github.com/yamaton/h2o-curated-data/blob/main/bio.txt)

## Shell completion for bash/zsh/fish

They would be useful especially for bioinformaticians.

### bash

Copy files ([general](https://github.com/yamaton/h2o-curated-data/tree/main/general/bash)) to `~/.bash_completion.d/`, and add the…
