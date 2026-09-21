---
repo: "ProgrammeVitam/vitam-ui"
name: "vitam-ui"
description: "A VITAM interface"
readmeQualityOk: true
url: "https://github.com/ProgrammeVitam/vitam-ui"
language: "TypeScript"
languages: ["TypeScript", "Java", "HTML"]
languagePcts: [39, 36, 20]
topics: ["vitam", "ui"]
stars: 29
forks: 8
openIssues: 0
closedIssues: 0
watchers: 16
contributors: 62
recentReleases: 0
createdAt: "2020-02-05T14:52:16Z"
lastCommitAt: "2026-09-21T09:13:11Z"
lastReleaseAt: "2021-12-06T09:20:08Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 89
undervaluedScore: 52
maintainers: ["Salimdev", "marob", "mkhediri"]
openGraphImageUrl: "https://opengraph.githubassets.com/213a2fba44f2aa25bc810bb0e4d54117eeba7747e75023c85f4377065efde4a4/ProgrammeVitam/vitam-ui"
---

# VitamUI

## Prerequisites

### Tools

* Install JDK 21
* Install Maven
  * Run [this script](https://github.com/ProgrammeVitam/vitam/blob/b1b7bb6e8ee83e9e747anc-dev/scripts/maven-setup-chapelle-edition.sh) to set it up
* Install Git
* Install Node.js and npm (with nvm)
  * Configure default registry: `npm config set registry https://registry.npmjs.org/`
* Python version 3.9+
* Install Ansible (see [Ansible](#Ansible))

## Ansible

VitamUI is recommended for Ansible 2.14 and Python 3.9+, but remains functional with Ansible 2.9 and Python 3.8.

To automatically set up a Python VirtualEnv with the appropriate Ansible version, you can use the provided script:
`./scripts/setup_ansible_venv.sh`

## Configuration

* Clone project and change ownership: `sudo chown -R $USER vitam-ui/`
* Build project using the "right" profile (see [Maven profiles](#Maven-profiles) and [Build](#Build))

### For Vitam internal developers

* Set up environment variables : `SERVICE_NEXUS_URL` and `SERVICE_REPOSITORY_URL`
* Build project using `vitam` profile (see [Build for Vitam developers](#Build-for-Vitam-internal-developers))
* Copy files: `collect-external-client.conf`,`access-external-client.conf`,…
