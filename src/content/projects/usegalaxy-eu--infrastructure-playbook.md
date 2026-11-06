---
repo: "usegalaxy-eu/infrastructure-playbook"
name: "infrastructure-playbook"
description: "Ansible playbook for managing UseGalaxy.eu infrastructure. "
readmeQualityOk: true
url: "https://github.com/usegalaxy-eu/infrastructure-playbook"
language: "Jinja"
languages: ["Jinja"]
languagePcts: [71]
topics: ["ansible"]
stars: 25
forks: 114
openIssues: 29
closedIssues: 60
watchers: 6
contributors: 109
recentReleases: 0
createdAt: "2017-08-17T09:07:33Z"
lastCommitAt: "2026-11-06T11:23:11Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 93
undervaluedScore: 67
maintainers: ["domgz", "gsaudade99", "bgruening"]
openGraphImageUrl: "https://opengraph.githubassets.com/0affd54eae1087b6d4fa7b3c75094144cf0cb3050b629eccd1750ed6659ff2d9/usegalaxy-eu/infrastructure-playbook"
---

# usegalaxy.eu infrastructure playbook

Ansible playbook for managing UseGalaxy.EU infrastructure. For the playbook
managing Galaxy itself, see https://github.com/galaxyproject/usegalaxy-playbook/

## Detailed documentation
* Is available [here](https://github.com/usegalaxy-eu/operations/blob/main/infrastructure_playbook_repo.md)

## Running Notes

This probably won't work for your infra. We require everything to run on
CentOS7. We make no effort in this repository that the playbooks can be re-used
on other infrastructure as-is.

A virtualenv located at .venv is *required*:

```
virtualenv .venv
. .venv/bin/activate
pip install -r requirements.txt
```

Install the ansible roles that are not tracked in this repository

```
ansible-galaxy install -r requirements.yml
```

And then you can run playbooks. No venv activation is required for this step.

```
make cvmfs CHECK=1
```

### Role naming convention

There is none. `hxr.` used to mean Helena's custom code that isn't reusable but the division is not a good one. It could all be renamed `usegalaxy-eu.`

# Build Statuses

The playbooks are being automatically and regularly run against the following machines:

Server          | Status…
