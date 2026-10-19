---
repo: "omacom/omarchy-mac-installer"
name: "omarchy-mac-installer"
description: "Apple Silicon macOS installer development: standalone extraction, shared Omarchy integration, and validation."
readmeQualityOk: true
url: "https://github.com/omacom/omarchy-mac-installer"
language: "Swift"
languages: ["Swift", "Python"]
languagePcts: [50, 34]
stars: 18
forks: 5
openIssues: 1
closedIssues: 2
watchers: 0
contributors: 22
recentReleases: 9
createdAt: "2026-09-20T21:01:52Z"
lastCommitAt: "2026-10-19T09:15:05Z"
lastReleaseAt: "2026-10-19T07:16:51Z"
status: "newborn"
tags: ["hidden_gem", "release_machine"]
healthScore: 91
undervaluedScore: 51
maintainers: ["maralcbr", "DjDeveloperr", "emirb"]
openGraphImageUrl: "https://opengraph.githubassets.com/e98d5096a7b6bd19b6d2a32e519c0d7daa3ae08b4e58bb797f65f254c942c445/omacom/omarchy-mac-installer"
---

# Omarchy Mac Installer

Development source for the Apple Silicon macOS installer, extracted from [maralcbr/omarchy-mx-mac](https://github.com/maralcbr/omarchy-mx-mac) into [omacom/omarchy-mac-installer](https://github.com/omacom/omarchy-mac-installer).

This first extraction preserves the installer behavior and Git attribution. The app is named **Omarchy Installer** and uses Omarchy's `org.omarchy.installer` identifiers (`Packaging/identity.conf`); the package removes a copy left under the old name, Omarchy MX Mac Installer, only when it already carries these identifiers. Integration with the shared Omarchy packages and Linux installation image is the next, separate change. This candidate is not an installation release.

### Upgrading from a `com.omarchy.mx` preview

Earlier preview and lab builds used `com.omarchy.mx.installer`. The new app has the same name, so it replaces the old one in `/Applications`, but it installs its own helper and never touches the old helper, state or a copy still named Omarchy MX Mac Installer: the old helper stays registered (and listed under Login Items in System Settings), and an install or removal record the old app left is not seen by the new…
