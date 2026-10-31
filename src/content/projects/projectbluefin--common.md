---
repo: "projectbluefin/common"
name: "common"
description: "OCI layer for things that need to be on every bluefin"
readmeQualityOk: true
url: "https://github.com/projectbluefin/common"
language: "Shell"
languages: ["Shell", "Python"]
languagePcts: [69, 23]
stars: 32
forks: 63
openIssues: 12
closedIssues: 613
watchers: 2
contributors: 61
recentReleases: 0
createdAt: "2025-11-16T05:45:35Z"
lastCommitAt: "2026-10-31T19:01:08Z"
lastReleaseAt: "2026-08-01T00:41:51Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 99
undervaluedScore: 66
maintainers: ["mergeraptor[bot]", "castrojo", "kylerankin"]
openGraphImageUrl: "https://opengraph.githubassets.com/793a8c65b6e670d4a63371934c1879b99f0cc2fb5ec07ede72e2c746647c54de/projectbluefin/common"
---

# bluefin-common

Shared OCI layer containing common configuration files used across all Bluefin variants (bluefin, bluefin-dx, bluefin-lts).

## Directory Structure

This repository organizes configuration files into two main directories, these are important:

### `system_files/bluefin/` - Bluefin Specific Configuration
Files specific to Bluefin:

- GNOME desktop settings and theming.
- Bluefin wallpapers and branding.
- Desktop-specific environment variables.
- GNOME Initial Setup configuration.

### `system_files/shared/` - Shared Configuration
Files shared with [Aurora](https://getaurora.dev) — Aurora maintainers can cherry-pick commits touching this directory. Edit directly here; changes propagate to all Bluefin variants on next build.

This includes:
- `Just` recipes for system management.
- Brewfiles for application bundles.
- Setup hooks (privileged, system, user).
- Container policies and security settings.
- MOTD templates and CLI bling.
- Common shell configurations.

## Usage in Containerfile

Reference this layer as a build stage and copy the directories you need:

### Copy everything:
```dockerfile
FROM ghcr.io/projectbluefin/common:latest AS bluefin-common

# Copy…
