---
repo: "bergie/dotfiles"
name: "dotfiles"
description: "My Linux dotfiles"
readmeQualityOk: true
url: "https://github.com/bergie/dotfiles"
homepage: "https://bergie.iki.fi/blog/docker-developer-shell/"
language: "Shell"
languages: ["Shell", "Dockerfile"]
languagePcts: [47, 37]
topics: ["dotfiles"]
stars: 24
forks: 4
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2011-12-14T10:31:18Z"
lastCommitAt: "2026-08-19T04:06:49Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 86
undervaluedScore: 55
maintainers: ["bergie"]
openGraphImageUrl: "https://opengraph.githubassets.com/4bdb21da92b6145d06760b8b953cfff1d82d818ed6aa4d17bbeb9cdecad83fe3/bergie/dotfiles"
---

My Unix dotfiles
================

Mostly used for Node.js and IoT development.

## Running via Docker

There is a multi-arch Docker image available for this setup (linux/amd64, linux/arm64). Run it with:

```shell
$ docker run -v ~/Projects:/projects -v workstation:/home/bergie -v ~/.ssh:/keys --name workstation --rm -it bergie/shell
```

### Updating the container

```shell
$ docker volume rm workstation && docker volume create workstation
$ docker pull bergie/shell
```

### Requirements

* Terminal application (xterm, ghostty, whatever)
* Docker

## Installation on host

These dotfiles can be deployed in two ways:

### Option 1: Ansible (recommended, cross-platform)

A comprehensive Ansible playbook is available that installs developer tools **and** sets up dotfiles. It supports Linux, macOS, and Termux.

```bash
# Install Ansible requirements
ansible-galaxy collection install -r requirements.yml

# Run the full setup (packages + dotfiles)
ansible-playbook -i localhost, -c local setup.yml
```

**Note for Termux users:** Set these environment variables before running (Android W^X restrictions):
```bash
export ANSIBLE_LOCAL_TEMP="$PREFIX/tmp/.ansible/tmp"
export…
