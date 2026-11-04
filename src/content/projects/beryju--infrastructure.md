---
repo: "BeryJu/infrastructure"
name: "infrastructure"
description: "Ansible playbooks and Terraform code for my environment and infrastructure."
readmeQualityOk: true
url: "https://github.com/BeryJu/infrastructure"
homepage: "https://github.com/BeryJu"
language: "HCL"
languages: ["HCL"]
languagePcts: [75]
topics: ["playbooks", "ansible-playbooks", "infrastructure", "ansible", "packer", "docker", "docs", "vmware", "vault", "terraform"]
stars: 35
forks: 6
openIssues: 1
closedIssues: 0
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2021-05-01T18:21:05Z"
lastCommitAt: "2026-11-04T11:27:34Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 79
undervaluedScore: 50
maintainers: ["renovate[bot]", "dependabot[bot]", "BeryJu"]
openGraphImageUrl: "https://opengraph.githubassets.com/2e7c8a4071daccb6b38b1b6d1eb7c9c7966ac42965856fde8b1422f199c3c6d3/BeryJu/infrastructure"
---

# Ansible playbooks/Puppet stuff for my infrastructure

See also https://github.com/BeryJu/k8s, repository for GitOps with flux.

## Requirements

- Ansible latest
- Puppet latest
- HashiCorp Vault (for credentials)
- VMware vSphere (for provisioning)

## Installation

```shell
poetry shell
poetry install # (--dev if you want to lint)
export OBJC_DISABLE_INITIALIZE_FORK_SAFETY=YES # Seems to workaround a bug with hvac on macOS
```

## Non-puppet files

- `tf/`:

    Terraform stuff

- `images/`:

    Various docker images for things.

    Docker image that I use for day-to-day tasks, has all required utilities installed.

## Playbooks

- `actions/cleanup.yaml`:

    Remove unused docker images (executed on a schedule by AWX)

- `actions/sentry-cleanup.yaml`:

    Cleanup sentry data and vacuum the database (run once a day by AWX).

- `actions/update.yaml`:

    Update all systems
