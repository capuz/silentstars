---
repo: "mother-of-all-self-hosting/ansible-role-infisical"
name: "ansible-role-infisical"
description: "Ansible role for installing Infisical"
readmeQualityOk: true
url: "https://github.com/mother-of-all-self-hosting/ansible-role-infisical"
homepage: "https://github.com/Infisical/infisical"
language: "Jinja"
languages: ["Jinja", "Shell"]
languagePcts: [46, 38]
topics: ["ansible-role", "docker"]
stars: 7
forks: 1
openIssues: 1
closedIssues: 1
watchers: 0
contributors: 7
recentReleases: 0
createdAt: "2023-06-02T14:32:24Z"
lastCommitAt: "2026-11-12T11:42:59Z"
status: "thriving"
tags: ["hidden_gem", "funded"]
healthScore: 87
undervaluedScore: 75
maintainers: ["renovate[bot]", "spantaleev", "luixxiul"]
openGraphImageUrl: "https://opengraph.githubassets.com/9c03c56c68f1c44df6753aada2b23348e6a940281a55be0b1729ea42f096cfd5/mother-of-all-self-hosting/ansible-role-infisical"
fundingLinks: ["GITHUB:https://github.com/etkecc", "LIBERAPAY:https://liberapay.com/mother-of-all-self-hosting"]
---

# Infisical Ansible role

This is an [Ansible](https://www.ansible.com/) role which installs [Infisical](https://github.com/Infisical/infisical) to run as a [Docker](https://www.docker.com/) container wrapped in a systemd service.

This role *implicitly* depends on:

- [`com.devture.ansible.role.playbook_help`](https://github.com/devture/com.devture.ansible.role.playbook_help)
- [`com.devture.ansible.role.systemd_docker_base`](https://github.com/devture/com.devture.ansible.role.systemd_docker_base)

Check [`defaults/main.yml`](https://github.com/mother-of-all-self-hosting/ansible-role-infisical/blob/HEAD/defaults/main.yml) for the full list of supported options. Refer to [this page](https://github.com/mother-of-all-self-hosting/ansible-role-infisical/blob/HEAD/docs/configuring-infisical.md) for details about setting up the service with this role.

💡 For an Ansible playbook which integrates this role and makes it easier to use, see the [Mother-of-All-Self-Hosting Ansible playbook](https://github.com/mother-of-all-self-hosting/mash-playbook).

## Development

Please refer to [this…
