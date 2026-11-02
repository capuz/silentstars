---
repo: "credfeto/credfeto-version-constants-generator"
name: "credfeto-version-constants-generator"
description: "Simple version information constants generator"
readmeQualityOk: true
url: "https://github.com/credfeto/credfeto-version-constants-generator"
language: "C#"
languages: ["C#"]
languagePcts: [100]
topics: ["code-generation", "code-generator", "dotnet", "generator", "optimization", "performance"]
stars: 6
forks: 0
openIssues: 3
closedIssues: 12
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2024-10-16T12:23:46Z"
lastCommitAt: "2026-11-02T17:56:11Z"
lastReleaseAt: "2024-11-01T02:11:39Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 96
undervaluedScore: 74
maintainers: ["credfeto", "dnyw4l3n13"]
openGraphImageUrl: "https://opengraph.githubassets.com/29dc0f7b65fff8f56a040306a3071886d4f4c268cf1a7e3eeb8181e92df33546/credfeto/credfeto-version-constants-generator"
fundingLinks: ["GITHUB:https://github.com/credfeto", "BUY_ME_A_COFFEE:https://buymeacoffee.com/mark.ridgwell"]
---

# credfeto-version-constants-generator

Source generator for embedding build information as compile time constants in C# projects.

## Usage

Add the following to your project file:

```xml

<ItemGroup>
    <PackageReference Include="Credfeto.Version.Information.Generator" Version="1.0.2.16" PrivateAssets="All"
                      ExcludeAssets="runtime"/>
</ItemGroup>
```

This generates a class called `VersionInformation` in the root namespace of the project with the following properties
taken from properties in the project file:

```csharp
internal static class VersionInformation
{
    public const string Version = "0.0.0.1-test";
    public const string Product = "Credfeto.Version.Information.Example.Tests";
    public const string Company = "Example Company";
    public const string Copyright = "Copyright © Example Company 2024";
}
```

Controlled by the following properties:

```xml
<PropertyGroup>
    <Company>Example Company</Company>
    <Copyright>Copyright © Example Company 2024</Copyright>
</PropertyGroup>
```

* Version comes from the ``AssemblyInformationalVersion`` that can be set using the ``/p:Version=0.0.1-test`` command
  line argument to MSBuild. or a…
