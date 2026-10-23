---
repo: "obselate/goo"
name: "goo"
description: "A retained desktop UI framework for G#, rendered directly with Vulkan."
readmeQualityOk: true
url: "https://github.com/obselate/goo"
homepage: "https://www.nuget.org/packages/Goo/"
language: "C#"
languages: ["C#"]
languagePcts: [94]
topics: ["declarative-ui", "desktop-ui", "dotnet", "gsharp", "linux", "retained-mode", "ui-framework", "wayland", "yoga-layout", "vulkan"]
stars: 18
forks: 1
openIssues: 3
closedIssues: 29
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-07-25T22:06:36Z"
lastCommitAt: "2026-10-23T09:33:25Z"
lastReleaseAt: "2026-09-09T23:40:30Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 94
undervaluedScore: 55
maintainers: ["obselate", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1312334756/87414848-e561-4bfc-9d70-1fa09af99ac6"
discussionCount: 1
---

## Quick start

### Create a NuGet app

Install the [.NET 10 SDK](https://dotnet.microsoft.com/download/dotnet/10.0)
and meet the [platform requirements](#platforms), then:

```sh
dotnet new install Goo.Templates@0.8.0

mkdir hello-goo
cd hello-goo
dotnet new goo
```

Run the provided Goo template app with

```sh
dotnet run
```

### Build the source Gallery

The Gallery gives you a representative preview of Goo's capabilities. 
Install .NET 10 SDK 10.0.401 and Git. Then download both pinned [custom shader tools](#custom-shaders) 
for your platform and set their SDK environment variables. 

The Gallery compiles its shaders during the build.

### On Linux:

```sh
git clone https://github.com/obselate/goo.git
cd goo
./bootstrap.sh
dotnet run --project apps/Goo.Gallery/Goo.Gallery.gsproj -c Release
```

### On Windows:

```bat
git clone https://github.com/obselate/goo.git
cd goo
bootstrap.bat
dotnet run --project apps/Goo.Gallery/Goo.Gallery.gsproj -c Release
```

The bootstrap builds the pinned G# compiler and formatter, then downloads the
released Goo package for the Gallery's native runtime files. It does not install
software globally.

## Packages

`Goo` is the framework package…
