---
repo: "Water-Run/ClashSharp"
name: "ClashSharp"
description: "Clash #: A modern, Windows-native proxy client based on the mihomo core."
readmeQualityOk: true
url: "https://github.com/Water-Run/ClashSharp"
language: "C#"
languages: ["C#"]
languagePcts: [94]
topics: ["clash", "csharp", "mihomo", "proxy", "proxy-client", "sing-box", "windows", "windows-native", "winui3"]
stars: 6
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-04-08T02:37:03Z"
lastCommitAt: "2026-08-24T04:21:42Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 85
undervaluedScore: 46
maintainers: ["Water-Run"]
openGraphImageUrl: "https://opengraph.githubassets.com/e3bf1f7ba19f4e3325563d43521c8936f39e37b4e7d108540aff9f4ce6e5dbbc/Water-Run/ClashSharp"
---

# `Clash#`

*[中文](https://github.com/Water-Run/ClashSharp/blob/HEAD/README-zh.md)*

`Clash#` is a modern, Windows-native proxy client based on [mihomo](https://github.com/MetaCubeX/mihomo). It targets Windows 11 x64 and is distributed as an MSIX package through the native Clash# installer.

## Installation

Download the release package from [GitHub Releases](https://github.com/Water-Run/ClashSharp/releases), extract it, and run the Authenticode-signed `ClashSharp-Installer.exe` normally—not with “Run as administrator.” The certificate and MSIX stay in the current-user context; the installer requests UAC separately only for machine-service work. Confirm that UAC shows the expected verified publisher, not “Unknown publisher.” A release contains the installer and its sibling `payload` directory.

The installer checks Windows 11 x64 compatibility, installs the package certificate when needed, and deploys the MSIX package. If Clash# is already installed, the installer enters maintenance mode for check, in-place update/repair, or uninstall. Use this Installer for a complete uninstall; removing only the MSIX from Windows Settings can leave the machine-level service resources behind.…
