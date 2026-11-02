---
repo: "pulibrary/princeton_ansible"
name: "princeton_ansible"
description: "Ansible Roles and Playbooks for Princeton University Library"
readmeQualityOk: true
url: "https://github.com/pulibrary/princeton_ansible"
language: "Jinja"
languages: ["Jinja"]
languagePcts: [46]
stars: 18
forks: 5
openIssues: 108
closedIssues: 2158
watchers: 9
contributors: 61
recentReleases: 0
createdAt: "2016-10-10T21:40:19Z"
lastCommitAt: "2026-11-02T11:36:12Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 99
undervaluedScore: 64
maintainers: ["renovate[bot]", "kayiwa", "hackartisan"]
openGraphImageUrl: "https://opengraph.githubassets.com/d67944a1c9faad652f44656c2080830d74592c4aefd05c8c3a55f85ad5bdabea/pulibrary/princeton_ansible"
---

Princeton Ansible Playbooks
===========================

A collection of roles and playbooks for provisioning and managing the machines that run PUL applications.

Project Setup for Development and Testing
-----------------------------------------

First-time setup
----------------

Do these things once, after you clone this repo.

### Mac

1. Install [Docker Desktop](https://docs.docker.com/desktop/install/mac-install/)
2. Run `bin/first-time-setup.sh` - this installs Devbox and all language/tooling dependencies
3. If you encounter Nix build user errors, run: `./fix-nix-build-users.sh`
4. Follow the steps under "Every time setup"

### Microsoft Windows/ Ubuntu

1. Use the [WSL Document](https://github.com/pulibrary/princeton_ansible/blob/HEAD/README_Windows.md)

### Linux

1. Install Docker
2. Run `bin/first-time-setup.sh` - this installs Devbox and all dependencies
3. Follow the steps under "Every time setup"

Every time setup
----------------

Run these commands every time you use this repo:

```bash
# Enter the Devbox development environment
devbox shell

# Initialize the Python environment (first time in new shell)
devbox run init

# Login to LastPass
lpass login…
