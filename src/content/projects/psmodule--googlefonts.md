---
repo: "PSModule/GoogleFonts"
name: "GoogleFonts"
description: "A PowerShell module to download and install fonts from GoogleFonts."
url: "https://github.com/PSModule/GoogleFonts"
homepage: "https://psmodule.io/GoogleFonts/"
language: "PowerShell"
languages: ["PowerShell"]
languagePcts: [100]
topics: ["google-fonts", "powershell", "powershell-module"]
stars: 9
forks: 0
openIssues: 4
closedIssues: 18
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2024-03-22T21:51:40Z"
lastCommitAt: "2026-06-30T06:51:04Z"
lastReleaseAt: "2024-11-01T23:19:20Z"
status: "thriving"
tags: ["hidden_gem", "funded"]
healthScore: 93
undervaluedScore: 69
maintainers: ["googlefonts-updater[bot]", "MariusStorhaug", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/328127c2e60b7789b1aeaa9ddf793f125b252e91bb90d750513bc703d0eeb0a3/PSModule/GoogleFonts"
fundingLinks: ["GITHUB:https://github.com/MariusStorhaug", "PATREON:https://patreon.com/MariusStorhaug", "CUSTOM:https://www.paypal.me/MariusStorhaug"]
---

# GoogleFonts

This is a PowerShell module for installing GoogleFonts on your system. This module and repository does not contain the fonts themselves,
but rather a way to install them on your system.

🎉 Kudos to the GoogleFonts community for keeping the library going! 🎉
For any issues with the fonts themselves, please refer to the [GoogleFonts](https://github.com/google/fonts) repository.

## Prerequisites

This module depends on the [Fonts](https://psmodule.io/Fonts) module to manage fonts on the system.

## Installation

To install the module simply run the following command in a PowerShell terminal.

```powershell
Install-PSResource -Name GoogleFonts
Import-Module -Name GoogleFonts
```

## Usage

### Install a GoogleFont

To install a GoogleFont on the system you can use the following command.

```powershell
Install-GoogleFont -Name 'Roboto' # Tab completion works on name
```

To download the font from the GoogleFonts repository and install it on the system, run the following command.

```powershell
Install-GoogleFont -Name 'Roboto' -Scope AllUsers #Tab completion works on Scope too
```

### Install all GoogleFonts

To install all GoogleFonts on the system you can use the…
