---
repo: "smdn/Smdn.Reflection.ReverseGenerating"
name: "Smdn.Reflection.ReverseGenerating"
description: ".NET libraries and tools to reverse-generate C# code from type and member information using reflection"
readmeQualityOk: true
url: "https://github.com/smdn/Smdn.Reflection.ReverseGenerating"
homepage: "https://smdn.jp/works/libs/Smdn.Reflection.ReverseGenerating/"
language: "C#"
languages: ["C#"]
languagePcts: [100]
topics: ["dotnet", "csharp", "msbuild-task", "nuget-package", "dotnet-library", "reflection", "api-list", "reverse-generating", "api-documentation-tool", "api-outliner"]
stars: 6
forks: 0
openIssues: 1
closedIssues: 2
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2021-10-28T17:25:39Z"
lastCommitAt: "2026-11-17T12:19:44Z"
lastReleaseAt: "2022-07-19T12:03:20Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "funded"]
healthScore: 86
undervaluedScore: 76
maintainers: ["smdn", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/422295574/c8705a33-3986-4028-a9b9-b369997e0a7b"
fundingLinks: ["GITHUB:https://github.com/smdn", "CUSTOM:https://www.amazon.jp/hz/wishlist/ls/1K0WOH22FCL6W?ref_=wl_share&filter=all&sort=priority"]
discussionCount: 0
---

This repository provides the libraries and tools to reverse-generate C# code that describes the type and member information, from the .NET assemblies.

By generating an API list from the library, the types and members provided by the library can be presented in C# code format. This allows you to present an outline of the library API to users in addition to explaining the API through text or sample code.

# Smdn.Reflection.ReverseGenerating.ListApi.MSBuild.Tasks

This package provides `GenerateApiList` MSBuild task.

## Usage
See [examples](https://github.com/smdn/Smdn.Reflection.ReverseGenerating/blob/HEAD/examples/Smdn.Reflection.ReverseGenerating.ListApi.MSBuild.Tasks/) for details and more usage examples.

```xml
  <ItemGroup>
    
    <PackageReference
      Include="Smdn.Reflection.ReverseGenerating.ListApi.MSBuild.Tasks"
      Version="*"
      PrivateAssets="all"
      IncludeAssets="build"
    />
  </ItemGroup>

  <ItemGroup>
    
    <GenerateApiListTargetAssemblies Include="..." />
  </ItemGroup>

  <PropertyGroup>
    
    <ExcludeRestorePackageImports>false</ExcludeRestorePackageImports>
  </PropertyGroup>

  <Target Name="GenerateApiListFromAssemblies"…
