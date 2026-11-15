---
repo: "credfeto/credfeto-enum-source-generation"
name: "credfeto-enum-source-generation"
description: "C# source generator for producing faster enum lookups"
readmeQualityOk: true
url: "https://github.com/credfeto/credfeto-enum-source-generation"
language: "C#"
languages: ["C#"]
languagePcts: [98]
topics: ["csharp-sourcegenerator", "code-generation", "code-generator", "generator", "code-analysis", "optimization", "performance", "dotnet"]
stars: 24
forks: 1
openIssues: 1
closedIssues: 11
watchers: 3
contributors: 4
recentReleases: 0
createdAt: "2022-11-06T00:36:26Z"
lastCommitAt: "2026-11-15T11:13:17Z"
lastReleaseAt: "2022-11-22T14:08:45Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 98
undervaluedScore: 60
maintainers: ["credfeto", "dnyw4l3n13"]
openGraphImageUrl: "https://opengraph.githubassets.com/363b7d3c1768e603770b0b56b687337d449c4f08b4410a4e33c96531448d579b/credfeto/credfeto-enum-source-generation"
fundingLinks: ["GITHUB:https://github.com/credfeto", "BUY_ME_A_COFFEE:https://buymeacoffee.com/mark.ridgwell"]
---

# credfeto-enum-source-generation

C# Source generator for enums

## Using

Add a reference to the ``Credfeto.Enumeration.Source.Generation`` package in each project you need the code generation to run.

```xml
<ItemGroup>
  <PackageReference
            Include="Credfeto.Enumeration.Source.Generation"
            Version="1.0.0.11"
            PrivateAssets="All" ExcludeAssets="runtime" />
</ItemGroup>
```

For each enum in the project, generates a class with the following extension methods:

* public static string GetName(this MyEnum value)
* public static string GetDescription(this MyEnum value)

Given an the example enum defined below:

```csharp
public enum ExampleEnumValues
{
    ZERO = 0,

    [Description("One \"1\"")]
    ONE = 1,

    SAME_AS_ONE = ONE,
}
```

To get the name and value of the enum values. In release mode this can be practically instant.

```csharp
ExampleEnumValues value = ExampleEnumValues.ONE;
 string name = value.GetName(); // ONE
 string description = value.GetDescription(); // One "1"
 bool isDefined = value.IsDefine(); // true
 bool isNotDefined = ((ExampleEnumValues)42).IsDefine(); // false
```

## Enums in other assemblies

Reference the…
