---
repo: "siderolabs/omni-infra-provider-bare-metal"
name: "omni-infra-provider-bare-metal"
description: "Bare Metal Infra Provider for Omni"
readmeQualityOk: true
url: "https://github.com/siderolabs/omni-infra-provider-bare-metal"
homepage: "https://docs.siderolabs.com/omni/omni-cluster-setup/setting-up-the-bare-metal-infrastructure-provider"
language: "Go"
languages: ["Go"]
languagePcts: [95]
topics: ["bare-metal", "ipmi", "omni", "pxe", "siderolabs", "talos"]
stars: 37
forks: 14
openIssues: 2
closedIssues: 26
watchers: 7
contributors: 25
recentReleases: 0
createdAt: "2024-10-14T09:24:29Z"
lastCommitAt: "2026-10-29T09:36:11Z"
lastReleaseAt: "2025-07-25T19:51:28Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 90
undervaluedScore: 48
maintainers: ["utkuozdemir", "oguzkilcan", "dklesev"]
openGraphImageUrl: "https://opengraph.githubassets.com/3e7dc34f955f60c48393ecaef824614051c5975746dfd557755eccd6faad9f57/siderolabs/omni-infra-provider-bare-metal"
discussionCount: 10
---

# omni-infra-provider-bare-metal

This repo contains the code for the Omni Bare Metal Infra Provider.
If you would like to deploy the provider in your environment please [see the official documentation](https://omni.siderolabs.com/tutorials/setting-up-the-bare-metal-infrastructure-provider).

## Requirements

To run the provider, you need:

- A running Omni instance
- An infra provider created in Omni, matching the ID you'll use with this provider (`bare-metal` by default).
  To create it, run:

  ```bash
  omnictl infraprovider create bare-metal
  ```

  Replace `bare-metal` with your desired provider ID.
- A DHCP server: This provider runs a DHCP proxy to provide DHCP responses for iPXE boot, so a DHCP server must be running in the same network as the provider.
- Access to an [Image Factory](https://docs.siderolabs.com/talos/latest/learn-more/image-factory).
  The provider uses whichever factory your Omni is configured with, including its credentials when that factory is authenticated.

## Development

For local development using Talos running on QEMU, follow these steps:

1. Set up a `buildx` builder instance with host network access, if you don't have one already:

   ```bash…
