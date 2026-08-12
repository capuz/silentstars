---
repo: "OctopusDeploy/Calamari"
name: "Calamari"
description: "| Public |  The core deployment scripts and tools used by Octopus Deploy"
readmeQualityOk: true
url: "https://github.com/OctopusDeploy/Calamari"
language: "C#"
languages: ["C#"]
languagePcts: [96]
topics: ["public"]
stars: 24
forks: 116
openIssues: 0
closedIssues: 0
watchers: 11
contributors: 105
recentReleases: 0
createdAt: "2015-02-27T03:16:02Z"
lastCommitAt: "2026-08-12T05:14:47Z"
lastReleaseAt: "2016-03-18T23:29:02Z"
status: "thriving"
tags: ["legacy_hero", "fork_magnet"]
healthScore: 88
undervaluedScore: 64
maintainers: ["NickJosevski", "zentron", "liam-mackie"]
openGraphImageUrl: "https://opengraph.githubassets.com/e00090f6d89ebc21813ed79c2421f1d5e5500d5d3de3075a163518fed86712d9/OctopusDeploy/Calamari"
---

Calamari is the command-line tool invoked by Tentacle during a deployment. It knows how to extract and install NuGet packages, run the Deploy.ps1 etc. conventions, modify configuration files, and all the other things that happen during a deployment.

## Building

You will need the .NET SDK `8.0`, downloadable from https://dotnet.microsoft.com/download

Run `build-local.ps1` or `build-local.sh` to build the solution locally.

When the solution is built, several new Calamari nuget packages are created in the `artifacts` directory.

> **For Octopus Developers:**
> 
>The `Build-Local` scripts will also copy the nuget packages to the LocalPackages folder which can be
found in the same parent folder as the Calamari repo. If the Octopus Server repo exists in the same 
parent folder, `Build-Local` will also update the Octopus.Server.csproj to reference the Calamari 
version produced by the build. This means that you can simply rebuild Server locally to test the new
version of Calamari.
>
>folder structure example:
>```
>dev\
>    Calamari\
>    LocalPackages\ 
> OctopusDeploy\
>```

## Releasing

The build server will automatically tag successful builds within the main branch of GitHub.…
