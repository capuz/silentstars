---
repo: "arillso/action.playbook"
name: "action.playbook"
description: "GitHub Action for running Ansible playbooks with Galaxy support and automated SSH key handling in CI/CD pipelines"
readmeQualityOk: true
url: "https://github.com/arillso/action.playbook"
language: "Go"
languages: ["Go"]
languagePcts: [92]
topics: ["go", "golang", "ansible", "ansible-playbook", "ansible-galaxy", "github-actions", "actions", "automation", "ci-cd", "continuous-deployment"]
stars: 38
forks: 12
openIssues: 1
closedIssues: 10
watchers: 4
contributors: 5
recentReleases: 0
createdAt: "2020-03-30T17:04:47Z"
lastCommitAt: "2026-10-31T19:01:53Z"
lastReleaseAt: "2025-06-15T02:11:31Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "funded"]
healthScore: 96
undervaluedScore: 58
maintainers: ["renovate[bot]", "sbaerlocher"]
openGraphImageUrl: "https://opengraph.githubassets.com/5532fa561f904482b95e1e8fe196f6d9d938e2d75276c4c01b735d11f74e409c/arillso/action.playbook"
fundingLinks: ["GITHUB:https://github.com/sbaerlocher", "CUSTOM:https://arillso.io"]
---

# Action: Play Ansible Playbook

GitHub Action for running Ansible Playbooks with comprehensive configuration options for Galaxy, SSH, Vault, and privilege escalation.

## Features

- **Ansible Playbook Execution**: Run Ansible playbooks in GitHub Actions workflows
- **Galaxy Integration**: Install roles and collections from Ansible Galaxy
- **SSH Authentication**: Automatic SSH key normalization and authentication
- **Vault Support**: Secure handling of Ansible Vault passwords
- **Flexible Configuration**: Comprehensive options for inventory, tags, variables, and more

## Inputs

### galaxy_file

Specifies the path to the Ansible Galaxy requirements file.

### galaxy_force

Forces the reinstallation of roles or collections from the Galaxy file.

### galaxy_api_key

Sets the API key used for authenticating to Ansible Galaxy.

### galaxy_api_server_url

Defines the URL of the Ansible Galaxy API server to interact with.

### galaxy_collections_path

Sets the path to the directory where Galaxy collections are stored.

### galaxy_disable_gpg_verify

Disables GPG signature verification for Ansible Galaxy operations.

### galaxy_force_with_deps

Forces the installation of collections…
