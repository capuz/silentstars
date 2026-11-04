---
repo: "reuteras/remnux-tools"
name: "remnux-tools"
description: "Tools and script for my remnux/sift installation"
readmeQualityOk: true
url: "https://github.com/reuteras/remnux-tools"
language: "Shell"
languages: ["Shell"]
languagePcts: [95]
stars: 24
forks: 5
openIssues: 0
closedIssues: 26
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2016-03-02T15:14:05Z"
lastCommitAt: "2026-11-04T13:05:44Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 92
undervaluedScore: 55
maintainers: ["reuteras", "dependabot[bot]", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/339391f242f2a6076b4f383c3b1ba5be20a5c7a70a97f5dc9240ac3ef1b761a5/reuteras/remnux-tools"
---

# remnux-tools

This repository contains my scripts to install [REMnux](https://remnux.org) with some added tools. I started this repository to be able to quickly install a new virtual machine with the tools I use or would like to use more often. This way it is easy to maintain the same images on many computers.
To make it even easier to install I use [packer.io](https://www.packer.io/) to automate process. My repository for this is called [packer](https://github.com/reuteras/packer).

The following scripts are available for installs:

- `setup-remnux.sh` - install [REMnux](https://remnux.org) and tools.
- `setup-arkime.sh` - install [Arkime](https://arkime.com/).

## setup-remnux.sh

This script installs [REMnux](https://remnux.org) and some other tools.

The additions are:

- [Ubuntu](https://www.ubuntu.com/) is updated
- Some general packages are installed. This includes bsdgames (some useful tools for CTFs), vim, tshark, exfat and more. Also a basic development environment is installed
- Installs open-vm-tools for VMware
- Create a basic directory structure
- Run the REMnux install script
- Install Google Chrome
- The repository `ppa:pi-rho/security` is activated and newer…
