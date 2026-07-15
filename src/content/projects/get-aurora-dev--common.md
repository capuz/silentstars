---
repo: "get-aurora-dev/common"
name: "common"
description: "OCI layer for things that need to be on every Aurora"
readmeQualityOk: true
url: "https://github.com/get-aurora-dev/common"
language: "Shell"
languages: ["Shell", "Just"]
languagePcts: [41, 20]
topics: ["aurora", "bootc", "oci", "linux", "kde"]
stars: 9
forks: 9
openIssues: 3
closedIssues: 14
watchers: 0
contributors: 7
recentReleases: 3
createdAt: "2025-11-25T06:30:31Z"
lastCommitAt: "2026-07-15T05:51:45Z"
lastReleaseAt: "2026-07-01T05:21:04Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 94
undervaluedScore: 77
maintainers: ["renner0e", "renovate[bot]", "inffy"]
openGraphImageUrl: "https://opengraph.githubassets.com/f69b5933cbd69498042d923d40314468b2ed298021f23acf80513386817450c5/get-aurora-dev/common"
---

# aurora-common

Shared OCI layer containing configuration files for https://github.com/ublue-os/aurora.

This repo builds on top of:
- https://github.com/ublue-os/aurorafin-shared
- https://github.com/get-aurora-dev/branding
- https://github.com/ublue-os/artwork

- `system_files/shared/` - Configuration shared between Aurora and Aurora-DX
- `system_files/dx/` - Aurora-DX specific configuration
- `wallpapers/` - Aurora wallpapers from [artwork repo](https://github.com/ublue-os/artwork)
- `system_files/shared/usr/share/ublue-os/homebrew/` - Flatpak definitions used for including flatpaks for the ISOs and `ujust install-system-flatpaks` - [Yes, homebrew supports the installation of Flatpaks](https://github.com/Homebrew/brew/pull/21097)
- `logos/` - Aurora Logos used in PLM/Plasma Kickoff etc.

Related work is on the [Fedora KDE-SIG](https://forge.fedoraproject.org/kde)

- [kde-settings](https://forge.fedoraproject.org/kde/kde-settings)

## Usage in Downstream Projects

Aurora images reference this layer in their Containerfiles:

```dockerfile
FROM ghcr.io/get-aurora-dev/aurora-common:latest AS aurora-common

# Copy shared configuration
COPY --from=aurora-common /system_files/shared…
