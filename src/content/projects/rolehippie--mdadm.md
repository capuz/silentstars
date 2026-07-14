---
repo: "rolehippie/mdadm"
name: "mdadm"
description: "Ansible role to install and configure mdadm RAID manager"
readmeQualityOk: true
url: "https://github.com/rolehippie/mdadm"
language: "Nix"
languages: ["Nix"]
languagePcts: [86]
topics: ["ansible", "role", "ansible-role", "hacktoberfest"]
stars: 5
forks: 2
openIssues: 1
closedIssues: 3
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2020-02-19T10:39:04Z"
lastCommitAt: "2026-07-14T05:53:21Z"
lastReleaseAt: "2026-03-30T09:02:22Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 92
undervaluedScore: 81
maintainers: ["renovate[bot]", "semantic-release-bot", "tboerger"]
openGraphImageUrl: "https://opengraph.githubassets.com/1fe3704e6dae8adce38d6cfbc7849a0ef1b75a00c6fe3b2b2570589defe38d90/rolehippie/mdadm"
---

# mdadm

Ansible role to install and configure mdadm RAID manager.

## Sponsor

Building and improving this Ansible role have been sponsored by my current and previous employers like **[Cloudpunks GmbH](https://cloudpunks.de)** and **[Proact Deutschland GmbH](https://www.proact.eu)**.

## Table of contents

- [Requirements](#requirements)
- [Default Variables](#default-variables)
  - [mdadm_arrays](#mdadm_arrays)
  - [mdadm_homehost](#mdadm_homehost)
  - [mdadm_mailaddr](#mdadm_mailaddr)
- [Discovered Tags](#discovered-tags)
- [Dependencies](#dependencies)
- [License](#license)
- [Author](#author)

---

## Requirements

- Minimum Ansible version: `2.10`

## Default Variables

### mdadm_arrays

List of docker registries to auto login

#### Default value

```YAML
mdadm_arrays: []
```

#### Example usage

```YAML
mdadm_arrays:
  - number: 0
    level: 1
    filesystem: ext4
    mountpoint: /var/lib/foo
    devices:
      - /dev/sdb
      - /dev/sdc
  - number: 1
    level: 1
    filesystem: ext4
    mountpoint: /var/lib/bar
    args:
      - --data-offset=1024
    devices:
      - /dev/sdd
      - /dev/sde
```

### mdadm_homehost

Hostname for the mdadm config

#### Default value…
