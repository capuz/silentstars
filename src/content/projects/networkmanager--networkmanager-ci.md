---
repo: "NetworkManager/NetworkManager-ci"
name: "NetworkManager-ci"
description: "Read-only Mirror of the freedesktop.org repository of integration tests for NM. Please make pull requests against freedesktop.org."
readmeQualityOk: true
url: "https://github.com/NetworkManager/NetworkManager-ci"
homepage: "https://gitlab.freedesktop.org/NetworkManager/NetworkManager-ci"
language: "Gherkin"
languages: ["Gherkin", "Python"]
languagePcts: [56, 34]
stars: 10
forks: 11
openIssues: 0
closedIssues: 0
watchers: 4
contributors: 30
recentReleases: 0
createdAt: "2015-11-09T12:45:10Z"
lastCommitAt: "2026-10-29T09:28:56Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 88
undervaluedScore: 80
maintainers: ["vbenes", "pfeifferj", "praksany"]
openGraphImageUrl: "https://opengraph.githubassets.com/f1742ee815cfa9597b8a6d823523ef4268d5a97cd86b507030ef6571c9d72c97/NetworkManager/NetworkManager-ci"
---

# NetworkManager-ci
This repo contains a set of integration tests for NetworkManager and CentOS 8 Stream based VM test instructions

### Nightly status (CentOS CI)

| Code Branch | Build Status                                                                                                                                                                                                     |
| ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| main        | [](https://jenkins-networkmanager.apps.ocp.cloud.ci.centos.org/job/NetworkManager-main-c10s/) |
| 1.54.x      | [](https://jenkins-networkmanager.apps.ocp.cloud.ci.centos.org/job/NetworkManager-1.54-c10s/) |
| 1.52.x      | [](https://jenkins-networkmanager.apps.ocp.cloud.ci.centos.org/job/NetworkManager-1.52-c10s/) |

### Howto execute basic test suite manually on localhost

* Prerequisites
  * CentOS qcow2 image, running libvirtd
    ```bash
    dnf -y install virt-install /usr/bin/virt-sysprep virt-viewer libvirt
    systemctl start libvirtd…
