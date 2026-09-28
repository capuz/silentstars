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
forks: 22
openIssues: 0
closedIssues: 6
watchers: 128
contributors: 746
recentReleases: 0
createdAt: "2019-02-26T11:40:39Z"
lastCommitAt: "2026-09-28T10:06:09Z"
status: "watched"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "community_watch", "fork_magnet"]
healthScore: 100
undervaluedScore: 48
maintainers: ["fluxcdbot", "adityadwadasi", "RiteshHMCTS"]
openGraphImageUrl: "https://opengraph.githubassets.com/423e3a6594af520cc2d7a6c9a8299b6860e4b64cb65d180bddebcd2186b1264d/hmcts/cnp-flux-config"
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
