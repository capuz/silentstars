---
repo: "jegj/ub-dev-playbook"
name: "ub-dev-playbook"
description: "Ansible playbook to install and configures most of the software I use on my Ubuntu Dev Env"
readmeQualityOk: true
url: "https://github.com/jegj/ub-dev-playbook"
language: "Shell"
languages: ["Shell", "Lua"]
languagePcts: [59, 38]
stars: 8
forks: 0
openIssues: 1
closedIssues: 16
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2021-11-23T01:55:27Z"
lastCommitAt: "2026-11-06T12:16:27Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 79
undervaluedScore: 50
maintainers: ["jegj"]
openGraphImageUrl: "https://opengraph.githubassets.com/6b4e1e7ae0062dfade0f40f52ef45e395e7ddf89c9c96e448e5d7a48f41bb9c3/jegj/ub-dev-playbook"
---

# ub-dev-playbook

This playbook installs and configures my Ubuntu Dev Env

## Dev dependecies

```sh
sudo apt-get install yamllint
pip3 install ansible-lint
```

- [Issues wide dependecies](https://stackoverflow.com/questions/75608323/how-do-i-solve-error-externally-managed-environment-every-time-i-use-pip-3)

## Installation

1. [Install Ansible](https://docs.ansible.com/ansible/latest/installation_guide/index.html)

2. Clone or download this repo

3. Install dependencies `ansible-galaxy install -r requirements.yml`

4. Run playbook

```sh
ansible-playbook main.yml --ask-become-pass --become-user=<ADMIN_ACCOUNT>
```

Supports check mode

```sh
ansible-playbook main.yml --ask-become-pass --become-user=<ADMIN_ACCOUNT> --check
```

## Default values

Check [config.default.yml](https://github.com/jegj/ub-dev-playbook/blob/HEAD/config.default.yml)

## Override Default values

Create a config.yml file and setting the overrides in that file.
Follow [config.default.yml](https://github.com/jegj/ub-dev-playbook/blob/HEAD/config.default.yml) for more information

## Tags

- `sw` : All the software below
- `apt` : APT packages
- `deb` : Local deb packages
- `snap` : Snap packages
- `pip` :…
