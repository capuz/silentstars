---
repo: "mrmgxxxx/vim"
name: "vim"
description: "Personal vim settings"
readmeQualityOk: true
url: "https://github.com/mrmgxxxx/vim"
language: "Shell"
languages: ["Shell", "Vim Script"]
languagePcts: [60, 40]
topics: ["vim", "personal-vim-settings"]
stars: 5
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2021-07-10T05:29:55Z"
lastCommitAt: "2026-09-24T08:42:17Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 65
undervaluedScore: 42
maintainers: ["mrmgxxxx"]
openGraphImageUrl: "https://opengraph.githubassets.com/ce256310b28fe679d5bb752a13ee656ababe7bde8f925ba6b4d7717bc7fdadb2/mrmgxxxx/vim"
---

🐸 Personal Vim8 Settings
=========================

Before installation, backup and clean all files and directories starting with '.vim' in the HOME directory to avoid effects related to the old and new configurations.

Recommended OS is CentOS 8 which have Clang 11+, GCC 7+/8+, and you also could install universal ctags(https://github.com/universal-ctags/ctags) by your self for more ctag features.

Install:

Run the command to install and config your vim shit ~

```sh
sudo wget -O - https://raw.githubusercontent.com/mrmgxxxx/vim/master/install.sh | sh
```

Keybindings:

## Custom Keybindings

| Key          | Mode   | Description                                                                                                                            | Source          |
| ------------ | ------ | -------------------------------------------------------------------------------------------------------------------------------------- | --------------- |
| `<Leader>`   | -      | **Leader key**: defaults to `\` (backslash), used as prefix for custom keybindings                                                     | Vim default     |
| `<Leader>gg` | Normal | **Search word under…
