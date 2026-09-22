---
repo: "robertdebock/ansible-role-dhcpd"
name: "ansible-role-dhcpd"
description: "Install and configure dhcpd on your system."
readmeQualityOk: true
url: "https://github.com/robertdebock/ansible-role-dhcpd"
homepage: "https://robertdebock.nl/"
language: "Jinja"
languages: ["Jinja"]
languagePcts: [100]
topics: ["ansible", "dhcpd", "dhcp", "network", "iscdhcpserver", "server", "networking", "molecule", "playbook", "system"]
stars: 8
forks: 5
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2017-11-10T15:09:23Z"
lastCommitAt: "2026-09-22T08:44:54Z"
lastReleaseAt: "2019-01-13T20:01:01Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "funded", "fork_magnet"]
healthScore: 70
undervaluedScore: 56
maintainers: ["robertdebock"]
openGraphImageUrl: "https://opengraph.githubassets.com/aad945d7ff1f6c45ab7d9b5d87451c7f485bf04498d0c4d609c513275d1b544c/robertdebock/ansible-role-dhcpd"
fundingLinks: ["GITHUB:https://github.com/robertdebock"]
---

# [Ansible role dhcpd](#ansible-role-dhcpd)

Install and configure dhcpd on your system.

|GitHub|GitLab|Downloads|Version|
|------|------|---------|-------|
|[](https://github.com/robertdebock/ansible-role-dhcpd/actions)|[](https://gitlab.com/robertdebock-iac/ansible-role-dhcpd)|[](https://galaxy.ansible.com/robertdebock/dhcpd)|[](https://github.com/robertdebock/ansible-role-dhcpd/releases/)|

## [Example Playbook](#example-playbook)

This example is taken from [`molecule/default/converge.yml`](https://github.com/robertdebock/ansible-role-dhcpd/blob/master/molecule/default/converge.yml) and is tested on each push, pull request and release.

```yaml
---
- name: Converge
  hosts: all
  become: true
  gather_facts: true

  vars:
    dhcpd_subnets:
      - network: "{{ ansible_facts['default_ipv4'].network }}"
        netmask: "255.255.255.0"

  roles:
    - role: robertdebock.dhcpd
```

The machine needs to be prepared. In CI this is done using [`molecule/default/prepare.yml`](https://github.com/robertdebock/ansible-role-dhcpd/blob/master/molecule/default/prepare.yml):

```yaml
---
- name: Prepare
  hosts: all
  become: true
  gather_facts: false

  roles:
    - role:…
