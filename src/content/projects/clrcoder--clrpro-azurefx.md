---
repo: "ClrCoder/ClrPro.AzureFX"
name: "ClrPro.AzureFX"
description: "The useful extensions that helps to work with Azure."
readmeQualityOk: true
url: "https://github.com/ClrCoder/ClrPro.AzureFX"
language: "C#"
languages: ["C#"]
languagePcts: [78]
stars: 9
forks: 6
openIssues: 0
closedIssues: 2
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2022-05-14T23:38:00Z"
lastCommitAt: "2026-11-09T00:53:14Z"
lastReleaseAt: "2023-01-07T00:05:23Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 100
undervaluedScore: 52
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/33ee3c4b4ee604f5c353c00ee016e65988ff7a2882d4629915f30fc78febf977/ClrCoder/ClrPro.AzureFX"
---

# ClrPro.AzureFX Local Credential Bridge

The Local Credential Bridge is a developer-sidecar for Docker Compose projects. It lets an application container use the Azure identity of a developer who signed in with Azure PowerShell, through the Azure Arc Managed Identity protocol.

The repository is the distribution: clone it and build the container locally. No prebuilt bridge image or binary distribution is required.

## Requirements

- Docker Engine or Docker Desktop, with Docker Compose v2
- PowerShell 7 on the host to run `start-container.ps1`
- An interactive Azure account with permission to access the Azure resources your application needs

The bridge image includes .NET 10, PowerShell, and the Az PowerShell module. Its Azure profile is kept in a Docker volume, so it remains available when the bridge container is recreated.

## Start the sidecar

From the repository root, run:

```powershell
./start-container.ps1
```

By default this builds `clrpro/azurefx-local-credential-bridge:local`, creates (if needed) the `clrpro-azurefx` network and the `clrpro-azurefx-az-profile` and `clrpro-azurefx-token-files` volumes, and starts `clrpro-azurefx-bridge`. The bridge does not publish…
