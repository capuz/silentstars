---
repo: "metal-stack/metal-roles"
name: "metal-roles"
description: "Ansible roles for deploying metal-stack"
readmeQualityOk: true
url: "https://github.com/metal-stack/metal-roles"
language: "Jinja"
languages: ["Jinja", "Python"]
languagePcts: [71, 25]
topics: ["ansible-roles"]
stars: 5
forks: 2
openIssues: 14
closedIssues: 69
watchers: 6
contributors: 24
recentReleases: 0
createdAt: "2020-02-11T14:50:20Z"
lastCommitAt: "2026-10-21T13:22:35Z"
lastReleaseAt: "2020-12-07T11:31:38Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem", "legacy_hero"]
healthScore: 92
undervaluedScore: 75
maintainers: ["Gerrit91", "simcod", "GeertJohan"]
openGraphImageUrl: "https://opengraph.githubassets.com/301c3c1911bf68811755b03eb24b8129c1e5e1871740dedab944743a15048873/metal-stack/metal-roles"
postedAt: "2026-10-19T09:20:39.406Z"
---

# metal-roles

This repository contains Ansible roles for deploying metal-stack. It does not contain any specific playbooks.

The metal-stack primarily consists of a control plane and partitions that register at the control plane. For this reason, the roles in this repository are divided into two separate folders, one containing roles relevant for the control plane and another directory containing roles for bootstrapping a partition. Please find more documentation in the respective sub folders:

- [Control Plane Deployment](https://github.com/metal-stack/metal-roles/blob/HEAD/control-plane)
- [Partition Deployment](https://github.com/metal-stack/metal-roles/blob/HEAD/partition)

## Usage

It's convenient to use ansible-galaxy in order to use this project. The roles of this repository depend on roles, modules and plugins of the project [ansible-common](https://github.com/metal-stack/ansible-common).

For your deployment project, set up a `requirements.yml`:

```yaml
- src: https://github.com/metal-stack/ansible-common.git
  name: ansible-common
  version: master # use release versions if you want to have stable deployment!
- src: https://github.com/metal-stack/metal-roles.git…
