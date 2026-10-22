---
repo: "context-and-oss/XrmBedrock"
name: "XrmBedrock"
description: "XrmBedrock replaces XrmFramework as a starting ground for our Dataverse projects"
readmeQualityOk: true
url: "https://github.com/context-and-oss/XrmBedrock"
language: "C#"
languages: ["C#"]
languagePcts: [94]
topics: ["csharp", "dataverse", "dotnet", "dynamics-365", "framework", "template", "xrm", "bl-ai-business-solutions", "o-abs-tooling-group"]
stars: 66
forks: 16
openIssues: 2
closedIssues: 0
watchers: 18
contributors: 15
recentReleases: 3
createdAt: "2024-11-27T11:47:16Z"
lastCommitAt: "2026-10-22T08:51:41Z"
lastReleaseAt: "2026-10-14T21:31:10Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 74
undervaluedScore: 46
maintainers: ["magesoe", "jacobblom", "contextduck"]
openGraphImageUrl: "https://opengraph.githubassets.com/ac8bfdc241074432451df0cc5e125e95b13e741c15da5f2f28f1aba222439c66/context-and-oss/XrmBedrock"
---

# XrmBedrock

A dotnet-new template for Dataverse plugins, Custom APIs, TypeScript webresources,
XrmMockup tests and optional Azure services. Requires .NET 10 SDK and Node.js 24 LTS.
Run `nvm install && nvm use` from the solution root (`.nvmrc` selects Node.js 24).
GitHub Actions and Azure DevOps also resolve the latest available 24.x release.

## Create a project

```bash
dotnet new install XrmBedrock
dotnet new xrmbedrock -n MyProject --company-name Acme --solution MySolution --publisher-prefix ctx --dev-url https://yourorg.crm4.dynamics.com
```

Post-setup generates signing keys, restores local dotnet tools, installs npm dependencies,
generates contexts/test metadata and builds the solution. It stops on failure and prints
all tool output, including device-code prompts, to the console and `PostSetup.log`.
The post-setup Release build keeps NuGet vulnerability warnings (`NU1901`–`NU1904`)
visible without treating them as errors, so setup can complete before packages are fixed.
All other build checks and normal Release/CI warning policies remain unchanged.
Fix vulnerable packages before running a normal Release build.
It preserves existing signing keys when rerun and never creates…
