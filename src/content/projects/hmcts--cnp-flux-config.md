---
repo: "hmcts/cnp-flux-config"
name: "cnp-flux-config"
description: "FluxCD config for AKS clusters"
readmeQualityOk: true
url: "https://github.com/hmcts/cnp-flux-config"
language: "Shell"
languages: ["Shell"]
languagePcts: [100]
topics: ["flux"]
stars: 34
forks: 21
openIssues: 0
closedIssues: 5
watchers: 128
contributors: 743
recentReleases: 0
createdAt: "2019-02-26T11:40:39Z"
lastCommitAt: "2026-09-14T09:11:46Z"
status: "watched"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "community_watch", "fork_magnet"]
healthScore: 100
undervaluedScore: 48
maintainers: ["fluxcdbot", "adusumillipraveen", "hfilmore"]
openGraphImageUrl: "https://opengraph.githubassets.com/3aab9d93dd3fe20b93e0af9dc522cf3296594eb01419c84fe3e1b27b67e32f17/hmcts/cnp-flux-config"
---

# cnp-flux-config
Flux v2 config for CFT AKS clusters

## Repo Structure

Please see [Repo setup](https://github.com/hmcts/cnp-flux-config/blob/HEAD/docs/repo-setup.md) for details on how this repo is organized and meant to work.

## Adding an app to flux

- All App deployments are managed through `HelmRelease` manifests.
- Any new/existing application that is getting added to an environment for the first time should use [Flux v2](https://github.com/hmcts/cnp-flux-config/blob/HEAD/docs/app-deployment-v2.md).

## Encrypting Secrets With Sops

 [Sops setup](https://github.com/hmcts/cnp-flux-config/blob/HEAD/docs/secrets-sops-encryption.md)

### SOPs

Sops fails linting by default as we require 2 spaces while it uses 4 spaces.
You can use `yq` to fix this:

```
yq eval -I 2 --inplace apps/mi/mi-adf-shir/sbox/mi-adf-auth-values.enc.yaml
```

upstream issue: https://github.com/mozilla/sops/issues/900

## Rebooting nodes with kured

[Documentation](https://github.com/hmcts/cnp-flux-config/blob/HEAD/docs/reboot-node-using-kured.md)

## Upgrading flux v2

Update `flux` cli in your local and run 
 ```bash
flux install --export > apps/flux-system/base/gotk-components.yaml
flux install…
