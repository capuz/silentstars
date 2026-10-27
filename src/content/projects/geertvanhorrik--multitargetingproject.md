---
repo: "GeertvanHorrik/MultiTargetingProject"
name: "MultiTargetingProject"
description: "Example repository of a multi-targeting project build Cake build scripts to build and code-sign both assemblies *and* NuGet packages"
readmeQualityOk: true
url: "https://github.com/GeertvanHorrik/MultiTargetingProject"
language: "C#"
languages: ["C#"]
languagePcts: [100]
topics: ["cake-build", "multitarget", "msbuild-sdk-extras", "nuget"]
stars: 6
forks: 2
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2018-03-14T14:05:06Z"
lastCommitAt: "2026-10-27T09:16:56Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 85
undervaluedScore: 61
maintainers: ["GeertvanHorrik"]
openGraphImageUrl: "https://opengraph.githubassets.com/8a0f9f6a5d71d54f03648196a1e0e25f908e162dd46a3d28deb0e6881bc851b6/GeertvanHorrik/MultiTargetingProject"
---

# MultiTargetingProject

This is an example repository on how to target .NET 4.6, .NET 4.7 and UAP 10.0 using a single project.

This project has been written as an example for the [blog post about multi-targeting platforms with a single project](http://geertvanhorrik.com/2018/03/14/multi-targeting-net-4-6-net-4-7-uap-10-0-with-a-single-project/).

Along the way, this example has been expanded with the following new [Cake](https://www.cakebuild.net/) build scripts:

- Build multi-targeting class libraries (components)
- Build WPF apps
- Build UWP apps
- Build Chocolatey tools
- Build GitHub pages
- Build web apps (Octopus Deploy and Azure Web Apps)
- Build docker images

The scripts are set up in a way that allows a combination of these items as well (e.g. a WPF with an API library) can all be set up. For more information, see the [RepositoryTemplate repository](https://github.com/GeertvanHorrik/RepositoryTemplate).

# How to build this example

1. Open powershell with the repository as working directory
2. `.\build.ps1 -target package`

# How does it work?

The scripts are extremely generic. One only has to customize 1 file:

* `/build.cake`

Below is an example script to package…
