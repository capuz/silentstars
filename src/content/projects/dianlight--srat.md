---
repo: "dianlight/srat"
name: "srat"
description: "SRAT (SambaNAS REST Administration Tool) is a new system designed to provide a simplified user interface for configuring SAMBA. It has been developed to work within Home Assistant."
readmeQualityOk: true
url: "https://github.com/dianlight/srat"
homepage: "https://deepwiki.com/dianlight/srat/"
language: "Go"
languages: ["Go", "TypeScript"]
languagePcts: [59, 36]
topics: ["addons", "app", "custom-component", "home-assistant", "homeassistant"]
stars: 10
forks: 2
openIssues: 8
closedIssues: 292
watchers: 1
contributors: 5
recentReleases: 0
createdAt: "2024-12-09T07:25:50Z"
lastCommitAt: "2026-10-23T02:47:46Z"
lastReleaseAt: "2026-05-27T16:50:52Z"
status: "thriving"
tags: ["hidden_gem", "funded"]
healthScore: 99
undervaluedScore: 78
maintainers: ["renovate[bot]", "github-actions[bot]", "dianlight"]
openGraphImageUrl: "https://opengraph.githubassets.com/d013b01a5b7ad1f56337935582ea692b819db384046b887a3d49e3b89c56162b/dianlight/srat"
fundingLinks: ["GITHUB:https://github.com/dianlight", "BUY_ME_A_COFFEE:https://buymeacoffee.com/ypKZ2I0"]
discussionCount: 11
postedAt: "2026-09-27T09:35:29.945Z"
---

# SambaNAS Rest Administration Tool 

SRAT (SambaNAS Rest Administration Tool) is a system designed to provide a simplified user interface for configuring SAMBA. It has been developed to work within Home Assistant, specifically for this addon, and provides Samba share, user, and configuration management via a modern web UI and REST API.

2026.10.1 is the first stable release of SRAT. The generally available surface covers disks and partitionless volumes, mounts, Samba shares and users, the dashboard, Home Assistant integration, and SMART/health monitoring. Some features remain behind the `experimental_lab_mode` setting on a per-tier basis:

- **Beta** — visible when `experimental_lab_mode` is enabled: HDIdle per-disk control, the smb.conf view, Use NFS for Home Assistant, SMB over QUIC, and addon-side mDNS registration.
- **Alpha** — Home Assistant custom-component tools (install/upgrade/uninstall of the SRAT custom component); excluded from release builds entirely, so not part of 2026.10.1.

Legacy SambaNAS YAML configuration is retired progressively — SRAT is set to become the preferred way to configure and use this addon, eventually "retiring" the YAML configuration.

-…
