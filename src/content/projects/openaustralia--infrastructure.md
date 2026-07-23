---
repo: "openaustralia/infrastructure"
name: "infrastructure"
description: "Automated setup and configuration for most of OpenAustralia Foundation's servers"
readmeQualityOk: true
url: "https://github.com/openaustralia/infrastructure"
language: "HCL"
languages: ["HCL", "Shell"]
languagePcts: [46, 41]
stars: 14
forks: 5
openIssues: 64
closedIssues: 192
watchers: 3
contributors: 9
recentReleases: 0
createdAt: "2015-02-02T05:27:15Z"
lastCommitAt: "2026-07-23T06:15:24Z"
status: "thriving"
tags: ["needs_contributors", "legacy_hero", "funded"]
healthScore: 93
undervaluedScore: 68
maintainers: ["benrfairless", "ianheggie-oaf", "Br3nda"]
openGraphImageUrl: "https://opengraph.githubassets.com/317a7eec2b2f9f23616e97d57fd5223ce71900850636036c1766d43fff3e3dd0/openaustralia/infrastructure"
fundingLinks: ["GITHUB:https://github.com/openaustralia"]
---

**Table of Contents**

# Automated setup and configuration for most of OpenAustralia Foundation's servers

- [Automated setup and configuration for most of OpenAustralia Foundation's servers](#automated-setup-and-configuration-for-most-of-openaustralia-foundations-servers)
  - [A little history](#a-little-history)
  - [Approach](#approach)
  - [The tools](#the-tools)
  - [Updates](#updates)
    - [2025-05-27](#2025-05-27)
      - [Supported Platforms](#supported-platforms)
      - [RightToKnow Dev platform](#righttoknow-dev-platform)
      - [PlanningAlerts Production](#planningalerts-production)
    - [2018-05-26](#2018-05-26)
  - [Requirements](#requirements)
    - [Prerequisites](#prerequisites)
      - [CLI tools for credentials](#cli-tools-for-credentials)
    - [Environment setup](#environment-setup)
    - [Add the Ansible Vault password](#add-the-ansible-vault-password)
      - [Recommended: 1Password](#recommended-1password)
      - [Rotating a vault passphrase](#rotating-a-vault-passphrase)
      - [Memory and CPU Usage](#memory-and-cpu-usage)
      - [Access to everything except right to know](#access-to-everything-except-right-to-know)
  - [Generating SSL certificates…
