---
repo: "projectbluefin/finpilot"
name: "finpilot"
description: "Build your own custom Bluefin"
readmeQualityOk: true
url: "https://github.com/projectbluefin/finpilot"
language: "Shell"
languages: ["Shell"]
languagePcts: [86]
stars: 129
forks: 26
openIssues: 3
closedIssues: 116
watchers: 1
contributors: 42
recentReleases: 1
createdAt: "2025-01-02T14:08:27Z"
lastCommitAt: "2026-10-27T09:15:39Z"
lastReleaseAt: "2026-10-26T11:14:45Z"
status: "thriving"
tags: []
healthScore: 99
undervaluedScore: 47
maintainers: ["mergeraptor[bot]", "castrojo", "Danathar"]
openGraphImageUrl: "https://opengraph.githubassets.com/e1b650606f7876a73d888d440fa53eba16658151668a5eb9a6d09c7d553607d5/projectbluefin/finpilot"
---

# finpilot

A template for building your own bootc operating system image, assembled the
same way Bluefin, Aurora, and Bluefin LTS are: from shared OCI layers rather
than by modifying an existing image. The desktop configuration comes from
[`projectbluefin/common`](https://github.com/projectbluefin/common), Homebrew
from [`ublue-os/brew`](https://github.com/ublue-os/brew), and the rest is yours.

It is built to be driven by hand or by an agent.

> Be the one who moves, not the one who is moved.

## What Makes this Raptor Different?

Here are the changes from [Base Image Name]. This image is based on
[Bluefin/Bazzite/Aurora/etc] and includes these customizations:

### Added Packages (Build-time)

- List the packages you install at build time

### Added Applications (Runtime)

- **CLI tools (Homebrew)**: list them
- **GUI apps (Flatpak)**: list them

### Removed or Disabled

- List anything removed from the base image

### Configuration Changes

- Systemd services enabled or disabled
- Desktop environment changes
- Other notable modifications

_Last updated: [date]_

> This section is what tells your users how your image differs from its base.
> Update it whenever you add or remove…
