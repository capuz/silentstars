---
repo: "Devolutions/pwsh-distro"
name: "pwsh-distro"
description: "Devolutions PowerShell distribution"
readmeQualityOk: true
url: "https://github.com/Devolutions/pwsh-distro"
language: "PowerShell"
languages: ["PowerShell"]
languagePcts: [100]
topics: ["architecture"]
stars: 18
forks: 3
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 6
recentReleases: 4
createdAt: "2026-06-30T13:35:04Z"
lastCommitAt: "2026-11-08T14:14:38Z"
lastReleaseAt: "2026-09-19T12:07:13Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 85
undervaluedScore: 27
maintainers: ["mamoreau-devolutions", "thenextman", "adamdriscoll"]
openGraphImageUrl: "https://opengraph.githubassets.com/03cde39e21c650519bcfcdcd66358e0bdc915ecc4c15c6b4bfef61aaf6358a2d/Devolutions/pwsh-distro"
---

# pwsh-distro

GitHub Actions workflows for building redistributable PowerShell artifacts from upstream or downstream-patched source. The primary target is a single vendored `Devolutions.PowerShell.SDK` package, and the secondary target is a self-contained PowerShell distribution archive repackaged from that SDK package.

## Quick start

This repository builds PowerShell from source. The full PowerShell source tree is pulled in as a git submodule at `pwsh-src/`, so the checkout must initialize submodules, and on Windows it requires long-path support enabled in git.

```powershell
git clone https://github.com/Devolutions/pwsh-distro.git
cd pwsh-distro
.\scripts\Initialize-Repository.ps1
```

All workflows are manual and start from the GitHub Actions **Run workflow** button (see the Workflows table below). The workflows are the authoritative release builds, and the SDK workflow can publish the validated NuGet package to NuGet.org and GitHub Releases.

> On Linux/macOS no long-path configuration is needed. On Windows, if `core.longpaths` is not enabled, the `pwsh-src` submodule checkout will fail with `Filename too long`. `scripts\Initialize-Repository.ps1` enables it before…
