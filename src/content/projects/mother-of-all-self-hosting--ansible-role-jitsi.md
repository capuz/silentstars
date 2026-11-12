---
repo: "mother-of-all-self-hosting/ansible-role-jitsi"
name: "ansible-role-jitsi"
description: "Ansible role for installing Jitsi"
readmeQualityOk: true
url: "https://github.com/mother-of-all-self-hosting/ansible-role-jitsi"
homepage: "https://jitsi.org/"
language: "Jinja"
languages: ["Jinja", "Shell"]
languagePcts: [71, 21]
topics: ["ansible-role", "docker", "jitsi-meet"]
stars: 6
forks: 6
openIssues: 3
closedIssues: 2
watchers: 2
contributors: 7
recentReleases: 0
createdAt: "2023-04-02T06:31:59Z"
lastCommitAt: "2026-11-12T11:44:03Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem", "funded", "fork_magnet"]
healthScore: 84
undervaluedScore: 86
maintainers: ["spantaleev", "renovate[bot]", "luixxiul"]
openGraphImageUrl: "https://opengraph.githubassets.com/c0e2fe5c2e780ba900dbda765fed74ce5b90e21a85ec24704181f687462fa8ba/mother-of-all-self-hosting/ansible-role-jitsi"
fundingLinks: ["GITHUB:https://github.com/etkecc", "LIBERAPAY:https://liberapay.com/mother-of-all-self-hosting"]
---

# Jitsi Ansible role

This is an [Ansible](https://www.ansible.com/) role which installs [Jitsi](https://jitsi.org/) to run as a bunch of [Docker](https://www.docker.com/) containers wrapped in systemd services. The architecture is inspired by the [docker-jitsi-meet](https://github.com/jitsi/docker-jitsi-meet) project, but does not use Docker Compose.

This role *implicitly* depends on:

- [`com.devture.ansible.role.playbook_help`](https://github.com/devture/com.devture.ansible.role.playbook_help)
- [`com.devture.ansible.role.systemd_docker_base`](https://github.com/devture/com.devture.ansible.role.systemd_docker_base)

Check [`defaults/main.yml`](https://github.com/mother-of-all-self-hosting/ansible-role-jitsi/blob/HEAD/defaults/main.yml) for the full list of supported options. Refer to [this page](https://github.com/mother-of-all-self-hosting/ansible-role-jitsi/blob/HEAD/docs/configuring-jitsi.md) for details about setting up the service with this role.

💡 For an Ansible playbook which integrates this role and makes it easier to use, see the [Mother-of-All-Self-Hosting Ansible playbook](https://github.com/mother-of-all-self-hosting/mash-playbook).

## Development

Please refer…
