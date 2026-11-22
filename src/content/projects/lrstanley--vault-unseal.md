---
repo: "lrstanley/vault-unseal"
name: "vault-unseal"
description: "auto-unseal utility for Hashicorp Vault"
readmeQualityOk: true
url: "https://github.com/lrstanley/vault-unseal"
language: "Go"
languages: ["Go"]
languagePcts: [94]
topics: ["vault", "hashicorp", "unseal", "go", "golang", "unseals-vault-servers", "vault-api", "auto-unseal", "vault-unseal", "cli"]
stars: 318
forks: 45
openIssues: 1
closedIssues: 23
watchers: 5
contributors: 4
recentReleases: 0
createdAt: "2018-10-24T17:51:27Z"
lastCommitAt: "2026-11-22T11:46:49Z"
lastReleaseAt: "2022-03-06T21:44:21Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "funded"]
healthScore: 84
undervaluedScore: 26
maintainers: ["lrstanley", "stevapple"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/154544393/01ccb40a-2f39-4c97-bacf-632a2ad5b0f3"
fundingLinks: ["GITHUB:https://github.com/lrstanley"]
discussionCount: 3
---

## :link: Table of Contents

  - [Why](#grey_question-why)
  - [Solution](#heavy_check_mark-solution)
  - [Installation](#computer-installation)
    - [Container Images (ghcr)](#whale-container-images-ghcr)
    - [Source](#toolbox-source)
  - [Usage](#gear-usage)
  - [TODO](#ballot_box_with_check-todo)
  - [Support &amp; Assistance](#raising_hand_man-support--assistance)
  - [Contributing](#handshake-contributing)
  - [License](#balance_scale-license)

## :grey_question: Why

HashiCorp Vault provides a few options for auto-unsealing clusters:

- [Cloud KMS (AWS, Azure, GCP, and others)](https://developer.hashicorp.com/vault/docs/configuration/seal/awskms) (cloud only)
- [Hardware Security Modules with PKCS11](https://developer.hashicorp.com/vault/docs/configuration/seal/pkcs11) (enterprise only)
- [Transit Engine via Vault](https://developer.hashicorp.com/vault/docs/configuration/seal/transit) (requires another vault cluster)
- [Potentially others](https://developer.hashicorp.com/vault/docs/configuration/seal)
