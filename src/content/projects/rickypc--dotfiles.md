---
repo: "rickypc/dotfiles"
name: "dotfiles"
description: "Ricky Huang’s Dotfiles"
readmeQualityOk: true
url: "https://github.com/rickypc/dotfiles"
homepage: "https://ricky.one"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [63]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2015-06-25T17:11:35Z"
lastCommitAt: "2026-11-09T04:34:08Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 78
undervaluedScore: 67
maintainers: ["rickypc"]
openGraphImageUrl: "https://opengraph.githubassets.com/6adba79ee839d6276ef7bd500bd8a3efe3bbcd86d51d4816b20632fe99c4b07b/rickypc/dotfiles"
---

# [Ricky Huang](https://ricky.one) Dotfiles

This repository serves as a centralized collection of my personal
[dotfiles](https://en.wikipedia.org/wiki/Hidden_file_and_hidden_directory#Unix_and_Unix-like_environments) -
configuration files, [scripts, and tools](#user-content-script-and-tool-list)
I've curated over the years to support my daily workflows across various platforms.

While these setups are tailored to my environment, you're welcome to explore
and adapt them to your own needs.

## Supported Platforms

- [GNU/Linux](https://www.gnu.org/gnu/linux-and-gnu.en.html):
  including [RHEL](https://en.wikipedia.org/wiki/Red_Hat_Enterprise_Linux)
  and [CentOS](https://www.centos.org/)
- [Darwin](https://en.wikipedia.org/wiki/Darwin_(operating_system))/macOS:
  compatible with both [Apple Silicon](https://en.wikipedia.org/wiki/Apple_silicon#M_series)
  and Intel architectures

## Installation

To install required software and clone the dotfiles repository in one step:

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/rickypc/dotfiles/main/bin/pre-provision)"
```

Alternatively, you can manually clone the repository into a non-empty
home directory - no symlinks…
