---
repo: "sini/nix-config"
name: "nix-config"
description: "NixOS Configuration"
readmeQualityOk: true
url: "https://github.com/sini/nix-config"
language: "Nix"
languages: ["Nix"]
languagePcts: [89]
stars: 45
forks: 2
openIssues: 1
closedIssues: 0
watchers: 2
contributors: 3
recentReleases: 0
createdAt: "2024-12-17T23:08:32Z"
lastCommitAt: "2026-10-29T10:36:00Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 79
undervaluedScore: 43
maintainers: ["sini"]
openGraphImageUrl: "https://opengraph.githubassets.com/45af37976e02ffce22c38bd0257c38be92126a08d99b0e6940ea2c719391fc94/sini/nix-config"
---

# Fleet Topology

Auto-generated visualizations of the nix-config fleet's
aspect-resolution pipeline, scope tree, and data flow.

## Scope Topology

```mermaid
graph TD
  accessGroups__list_accessGroups__environment_dev_fleet_fleet_host_bitstream_secretsConfig__set_secretsConfig_["host: bitstream"]
  accessGroups__list_accessGroups__environment_dev_fleet_fleet_host_bitstream_secretsConfig__set_secretsConfig__user_dvicory(["user: dvicory"])
  accessGroups__list_accessGroups__environment_dev_fleet_fleet_host_bitstream_secretsConfig__set_secretsConfig__user_pol(["user: pol"])
  accessGroups__list_accessGroups__environment_dev_fleet_fleet_host_bitstream_secretsConfig__set_secretsConfig__user_sini(["user: sini"])
  accessGroups__list_accessGroups__environment_dev_fleet_fleet_host_bitstream_secretsConfig__set_secretsConfig__user_theutz(["user: theutz"])
  accessGroups__list_accessGroups__environment_dev_fleet_fleet_host_bitstream_secretsConfig__set_secretsConfig__user_vic(["user: vic"])
  accessGroups__list_accessGroups__environment_dev_fleet_fleet_host_blade_secretsConfig__set_secretsConfig_["host: blade"]…
