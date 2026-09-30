---
repo: "hmcts/cnp-flux-config"
name: "cnp-flux-config"
description: "FluxCD config for AKS clusters"
readmeQualityOk: true
url: "https://github.com/hmcts/cnp-flux-config"
language: "Shell"
languages: ["Shell"]
languagePcts: [95]
topics: ["flux"]
stars: 34
forks: 22
openIssues: 0
closedIssues: 6
watchers: 128
contributors: 746
recentReleases: 0
createdAt: "2019-02-26T11:40:39Z"
lastCommitAt: "2026-09-30T09:57:52Z"
status: "watched"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "community_watch", "fork_magnet"]
healthScore: 100
undervaluedScore: 48
maintainers: ["fluxcdbot", "larslnde", "adityadwadasi"]
openGraphImageUrl: "https://opengraph.githubassets.com/9d4d4af73a7c4f57d940675dde883d16d8e2397372ba2a1a794a5001726a00d1/hmcts/cnp-flux-config"
---

# cnp-flux-config
Flux v2 config for CFT AKS clusters

## Repo Structure

Please see [Repo setup](https://github.com/hmcts/cnp-flux-config/blob/HEAD/docs/repo-setup.md) for details on how this repo is organized and meant to work.

## Adding an app to flux

- All App deployments are managed through `HelmRelease` manifests.
- Any new/existing application that is getting added to an environment for the first time should use [Flux v2](https://github.com/hmcts/cnp-flux-config/blob/HEAD/docs/app-deployment-v2.md).

## Encrypting Secrets With Sops

Secrets can be stored in this repository but they must be encrypted using the SOPS tool.

[Click here for info on how to setup SOPS](https://github.com/hmcts/cnp-flux-config/blob/HEAD/docs/secrets-sops-encryption.md).

## Preventing commit of secrets

To prevent unencrypted secrets being committed to this repository, a pre-commit hook has been provided via `.pre-commit-config.yaml`

To install it, run `brew install pre-commit` and then `pre-commit install` on macOS or Linux (with homebrew).

On the first commit after installing, `pyyaml` will be downloaded and installed to parse the yaml files in the repo.

This will take a bit longer than…
