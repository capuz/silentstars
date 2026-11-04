---
repo: "ansible/ansible.platform"
name: "ansible.platform"
description: "This collection contains modules that can be used to automate the creation of resources on an install of Ansible Automation Platform."
readmeQualityOk: true
url: "https://github.com/ansible/ansible.platform"
language: "Python"
languages: ["Python"]
languagePcts: [99]
stars: 11
forks: 40
openIssues: 7
closedIssues: 2
watchers: 2
contributors: 85
recentReleases: 0
createdAt: "2025-04-10T10:58:07Z"
lastCommitAt: "2026-11-04T08:04:28Z"
lastReleaseAt: "2026-06-05T08:33:51Z"
status: "thriving"
tags: ["fork_magnet"]
healthScore: 79
undervaluedScore: 73
maintainers: ["adrisala", "rohitthakur2590", "TheNova22"]
openGraphImageUrl: "https://opengraph.githubassets.com/e0d14a4a86594cf8b33ed8b1698737efa2a36759dbcaa4c7ea95b114dc54c22f/ansible/ansible.platform"
---

# Ansible Platform Collection

## Changelog for v2.7.20260313

* Added OIDC User Identity support for Ansible Automation Platform Gateway
* New modules: feature_flag, ca_certificates, role_team_assignment, role_definition
* Add request_timeout_seconds and idle_timeout_seconds to route modules
* Add enable_mtls attribute to route module for mutual TLS support
* Add associated_authenticators parameter to users module
* Add Gateway UI plugin Route Collection Module
* Enhanced organization association logic and auditor user support
* Multiple bug fixes for role assignment, object deletion, and URL handling
* Deprecated authenticator_uid and authenticators fields

## Upgrading to AAP 2.7?

Ensure you are on `ansible.platform >= 2.7.x` before upgrading. Connection variables have changed — replace `controller_host` with `aap_hostname` pointing to your gateway URL.

See the [AAP 2.7 documentation](https://docs.redhat.com/en/documentation/red_hat_ansible_automation_platform/2.7) for the full upgrade guide.

## Description

This collection contains modules that can be used to automate the creation of resources on an install of Ansible Automation Platform.

## Requirements

This collection…
