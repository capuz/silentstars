---
repo: "zemerdon/switch-vision-installer"
name: "switch-vision-installer"
description: "Official Home Assistant installer for Switch Vision"
readmeQualityOk: true
url: "https://github.com/zemerdon/switch-vision-installer"
language: "Python"
languages: ["Python"]
languagePcts: [90]
topics: ["home-assistant", "home-assistant-app", "network-monitoring", "snmp", "switch-vision"]
stars: 6
forks: 2
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-08-01T02:33:14Z"
lastCommitAt: "2026-11-01T21:17:33Z"
lastReleaseAt: "2026-08-01T06:02:10Z"
status: "thriving"
tags: []
healthScore: 78
undervaluedScore: 43
maintainers: ["zemerdon", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/9cf603260aca7d940286f43ac3dc8287c00afe1869c29c8968cc72ab01d6b52d/zemerdon/switch-vision-installer"
---

# Switch Vision Installer Repository

This is the official Home Assistant App repository for the Switch Vision Installer.

## Install

1. In Home Assistant, open **Settings → Apps → App store**.
2. Open the three-dot menu and choose **Repositories**.
3. Add:

   `https://github.com/zemerdon/switch-vision-installer`

4. Install **Switch Vision Installer**.
5. Start the app and open its Web UI.
6. Run **Dry run**, then **Install Switch Vision**.

After the repository is added, the Installer is the only manual installation path required. It downloads the current Switch Vision release, verifies it, backs up the existing installation when required, installs or updates the managed components, and preserves supported user data.

## Checking for updates

**Check for updates** actively refreshes the Switch Vision component sources before reporting what is current. Installer v2.1.41 no longer treats a successful legacy add-on reload as proof that the Home Assistant App Store refresh also succeeded: App Store refresh failures are surfaced instead of being masked as **No updates**.

The Installer then resolves the managed component versions from their authoritative release/repository sources…
