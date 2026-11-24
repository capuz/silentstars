---
repo: "mendersoftware/mender-helm"
name: "mender-helm"
description: "Mender Helm charts"
readmeQualityOk: true
url: "https://github.com/mendersoftware/mender-helm"
language: "Shell"
languages: ["Shell", "Mustache"]
languagePcts: [48, 36]
stars: 29
forks: 39
openIssues: 0
closedIssues: 0
watchers: 10
contributors: 36
recentReleases: 0
createdAt: "2019-12-05T10:44:17Z"
lastCommitAt: "2026-11-24T14:04:19Z"
lastReleaseAt: "2024-03-22T11:16:39Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 88
undervaluedScore: 62
maintainers: ["oldgiova", "mender-test-bot", "alfrunes"]
openGraphImageUrl: "https://opengraph.githubassets.com/f15facff899c444ff22caf75b66203030fd91fefcb5686a3c6c9507d8f04a76f/mendersoftware/mender-helm"
---

# Mender

[Mender](https://mender.io/) is a robust and secure way to update all your software and deploy your IoT devices at scale with support for customization.

## Installation

Please follow the [official documentation](https://docs.mender.io/server-installation/production-installation-with-kubernetes)
for comprehensive installation guidelines.

## Upgrading from Helm Chart 5.x and Mender Server 3.7.x

Please refer to [this document](https://github.com/mendersoftware/mender-helm/blob/HEAD/UPGRADE_from_v5_to_v6.md) for the upgrade
procedure details, or follow the [official documentation](https://docs.mender.io/server-installation/upgrading-from-previous-versions).

## Uninstalling the Chart

To uninstall/delete the `my-release` deployment:

```bash
helm delete my-release
```

The command removes all the Kubernetes components associated with the chart and deletes the release.

## Complete list of parameters

The following table lists the global, default, and other parameters supported by the chart and their default values.
