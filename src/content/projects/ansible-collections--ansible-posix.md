---
repo: "ansible-collections/ansible.posix"
name: "ansible.posix"
description: "Ansible Collection for Posix"
readmeQualityOk: true
url: "https://github.com/ansible-collections/ansible.posix"
language: "Python"
languages: ["Python"]
languagePcts: [96]
topics: ["ansible-collection", "hacktoberfest"]
stars: 201
forks: 179
openIssues: 169
closedIssues: 162
watchers: 15
contributors: 103
recentReleases: 1
createdAt: "2020-03-03T15:53:21Z"
lastCommitAt: "2026-08-07T05:16:48Z"
lastReleaseAt: "2026-05-18T12:03:05Z"
status: "thriving"
tags: ["legacy_hero", "fork_magnet"]
healthScore: 80
undervaluedScore: 41
maintainers: ["barpavel", "Akasurde", "saito-hideki"]
openGraphImageUrl: "https://opengraph.githubassets.com/3e9f07ec07ea7bb2081ca28dd7ccd3b49ea267d0092389b092a08252464c1c3a/ansible-collections/ansible.posix"
---

# ansible.posix

https://dev.azure.com/ansible/ansible.posix/_apis/build/status/CI?branchName=main)](https://dev.azure.com/ansible/ansible.posix/_build?definitionId=26)

## Communication

* Join the Ansible forum:
  * [Get Help](https://forum.ansible.com/c/help/6): get help or help others.
  * [Social Spaces](https://forum.ansible.com/c/chat/4): gather and interact with fellow enthusiasts.
  * [News & Announcements](https://forum.ansible.com/c/news/5): track project-wide announcements including social events.

## Description

An Ansible Collection of modules and plugins that target POSIX UNIX/Linux and derivative Operating Systems.

## Requirements

* Python:
  * The Python interpreter version must meet Ansible Core's requirements.
* Ansible Core:
  - ansible-core 2.16 or later

## Installation

Before using this collection, you need to install it with the Ansible Galaxy command-line tool:

```shell
ansible-galaxy collection install ansible.posix
```

You can also include it in a requirements.yml file and install it with ansible-galaxy collection install -r requirements.yml, using the format:

```yaml
collections:
  - name: ansible.posix
```

Note that if you install any…
