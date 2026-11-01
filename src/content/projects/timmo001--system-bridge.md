---
repo: "timmo001/system-bridge"
name: "system-bridge"
description: "A bridge for your systems"
readmeQualityOk: true
url: "https://github.com/timmo001/system-bridge"
homepage: "https://system-bridge.timmo.dev"
language: "Go"
languages: ["Go", "TypeScript"]
languagePcts: [52, 30]
topics: ["typescript", "contributions-welcome", "go", "system-bridge", "automation", "api", "home-assistant", "websocket", "hacktoberfest"]
stars: 359
forks: 28
openIssues: 21
closedIssues: 378
watchers: 4
contributors: 16
recentReleases: 0
createdAt: "2021-02-08T10:49:51Z"
lastCommitAt: "2026-11-01T10:44:02Z"
lastReleaseAt: "2021-03-07T01:13:12Z"
status: "thriving"
tags: ["needs_contributors", "legacy_hero", "funded", "community_hub"]
healthScore: 99
undervaluedScore: 39
maintainers: ["timmo001", "renovate[bot]", "github-actions[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/337043865/78a0c56b-1aad-446f-be3e-2891850ed195"
fundingLinks: ["GITHUB:https://github.com/timmo001", "KO_FI:https://ko-fi.com/timmo001"]
discussionCount: 218
---

# System Bridge

A bridge for your systems.

> [!NOTE]
> Contributions welcome!
> Feel free to submit a PR if you have any changes, fixes or improvements.

## Features

- Supports Linux and Windows. MacOS is untested but can be compiled and tested by
  the community.
- Access your system information via data modules and the API/WebSocket server.
- Control your system via the API/WebSocket server.
- Integrated with [Home Assistant](https://www.home-assistant.io/integrations/system_bridge),
  with a [dashboard](https://system-bridge.timmo.dev/using/home-assistant/#dashboard)
  you can install from the Marketplace
- Optional [Omarchy bar plugin](https://system-bridge.timmo.dev/using/omarchy/)

## Installation

See [installation documentation](https://system-bridge.timmo.dev/docs/install).

### Optional dependencies

System Bridge reads most hardware metrics directly from the kernel, so these
tools are not required. Installing them improves detection on some systems:

- **Linux**
  - `lm_sensors`: helps expose the full set of temperature and fan sensors on
    some boards. Run `sudo sensors-detect` once to load the relevant modules.
  - `nvidia-utils` (`nvidia-smi`): required for…
