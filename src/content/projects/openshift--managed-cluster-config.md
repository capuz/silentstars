---
repo: "openshift/managed-cluster-config"
name: "managed-cluster-config"
description: "Static deployable artifacts for managed OSD clusters"
readmeQualityOk: true
url: "https://github.com/openshift/managed-cluster-config"
language: "Go Template"
languages: ["Go Template"]
languagePcts: [90]
topics: ["osdv4"]
stars: 58
forks: 255
openIssues: 0
closedIssues: 21
watchers: 33
contributors: 3001
recentReleases: 0
createdAt: "2019-02-26T21:44:58Z"
lastCommitAt: "2026-09-03T08:13:53Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 99
undervaluedScore: 57
maintainers: ["openshift-merge-bot[bot]", "TheUndeadKing", "charlesgong"]
openGraphImageUrl: "https://opengraph.githubassets.com/22a74040d14d5c9fd8352c0d2aca75d676af2c2bd46a91360653b18241eeb1f0/openshift/managed-cluster-config"
---

# managed-cluster-config repository

This repo contains static configuration specific to a "managed" OpenShift Dedicated (OSD) cluster.
## How to use this repo
https://issues.redhat.com/browse/SDE-2786 has change the repo slightly: /deploy holds the sources of truth, and /generated_deploy holds the configurations that will be applied by Hive.
To add a new SelectorSyncSet, add your yaml manifest to the `deploy` dir, then run the `make` command.

Alternatively you can enable GitHub Actions on your fork and `make` will be ran automatically. Additionally,
the action will create a new commit with the generated files.

To add an ACM (Governance) Policy
- If the manifest of the object you want to convert to policy already exists in `deploy` : in the object config.yaml, add a field `policy: `destination: "acm-policies"` (example: https://github.com/openshift/managed-cluster-config/blob/master/deploy/backplane/cee/config.yaml) 
- If the manifest of the object does not exist: add your manifests with a config.yaml file. If you only want this object to be deployed as Policy, see [this…
