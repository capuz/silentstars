---
repo: "amedee/ansible-servers"
name: "ansible-servers"
description: "This repository manages the infrastructure for my personal servers (mail server, blog, supporting services) using Ansible. Focus on reproducibility, minimal manual intervention and secure defaults."
readmeQualityOk: true
url: "https://github.com/amedee/ansible-servers"
homepage: "https://amedee.be"
language: "Jinja"
languages: ["Jinja", "Python"]
languagePcts: [53, 31]
topics: ["ansible", "mailinabox", "nginx", "postfix", "ubuntu", "wordpress", "email", "github-actions", "mail-in-a-box"]
stars: 6
forks: 1
openIssues: 9
closedIssues: 196
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2024-06-04T23:55:48Z"
lastCommitAt: "2026-10-07T22:28:59Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 98
undervaluedScore: 83
maintainers: ["amedee", "github-actions[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/b98ee90b7eeec1a33c7872ab93f3ca776f774d54c6480168630ee6fd42bd12ff/amedee/ansible-servers"
postedAt: "2026-10-07T10:37:46.775Z"
---

# ansible-servers

Infrastructure-as-Code for my personal production servers, fully managed with
Ansible.

This repository contains Ansible playbooks used to provision and maintain
self‑hosted services that I run in production, with a focus on reproducibility,
automation, and secure defaults.

## ✨ Managed systems

- **[amedee.be]** Personal technical blog, deployed on a DigitalOcean LEMP stack
  (based on DigitalOcean’s [1‑Click LEMP Droplet][lemp droplet], extended and
  hardened)

- **[box.vangasse.eu]** Mail server (Postfix, Dovecot, etc.) running on Ubuntu
  22.04 LTS Bootstrapped using [Mail‑in‑a‑Box][mailinabox], with additional
  configuration and automation

## 🛠 Design goals

- Idempotent and repeatable server configuration
- Minimal manual intervention after provisioning
- Clear separation between roles and responsibilities
- Automation over ad‑hoc fixes
- Preference for maintainability over cleverness

## 🚀 Deployment

```shell
ansible-playbook playbooks/site.yml
```

## ✅ Continuous Integration & Code Quality

This repository uses CI to continuously validate configuration quality:

| Role…
