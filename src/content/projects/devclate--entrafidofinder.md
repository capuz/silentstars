---
repo: "DevClate/EntraFIDOFinder"
name: "EntraFIDOFinder"
description: "PowerShell Module to find compatible FIDO2 keys for Entra"
readmeQualityOk: true
url: "https://github.com/DevClate/EntraFIDOFinder"
language: "PowerShell"
languages: ["PowerShell"]
languagePcts: [83]
stars: 20
forks: 1
openIssues: 2
closedIssues: 757
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2024-09-30T09:59:35Z"
lastCommitAt: "2026-11-05T00:21:52Z"
lastReleaseAt: "2025-05-05T09:18:12Z"
status: "thriving"
tags: ["solo_builder", "community_hub"]
healthScore: 100
undervaluedScore: 64
maintainers: ["clatent", "DevClate"]
openGraphImageUrl: "https://opengraph.githubassets.com/f0e56b04baf05909b087a00522a67c284c134a35d652b92b3d3a299b720bd884/DevClate/EntraFIDOFinder"
discussionCount: 21
---

# EntraFIDOFinder  [](https://github.com/DevClate/EntraFIDOFinder) [](https://github.com/DevClate/EntraFIDOFinder)

PowerShell Module to find compatible attestation FIDO2 keys for Entra.

**Database Last Updated:** 2026-05-24

## Features

* View and filter standard properties
* See all properties in nicely formatted JSON
* Import AAGUIDs from .TXT, .CSV, and .XLSX file
* Accepts pipeline input for AAGUIDs
* See all standard properties then pick out which properties you want to see - For some of the properties you will have to format because of nesting
* Merge FIDO Alliance and Microsoft Data together through GitHub Action
* Web Version to see and filter all AAGUIDs

## Getting Started

```PowerShell
# Run first if you need to set Execution Policy
Set-ExecutionPolicy RemoteSigned -Scope CurrentUser

# Install EntraFIDOFinder
Install-PSResource -Name EntraFIDOFinder -Scope CurrentUser
```

## Starter Cmdlets

```powershell
# Find all compatible keys
Find-FIDOKey

# Find all Yubico keys
Find-FIDOKey -Brand Yubico

# Find all Yubico and OneSpan
Find-FIDOKey -Brand Yubico,Onespan

# Find keys that have both USB and NFC
Find-FIDOKey -Type USB,NFC -TypeFilterMode AtLeastTwo

# Find keys…
