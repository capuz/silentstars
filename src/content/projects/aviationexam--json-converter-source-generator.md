---
repo: "aviationexam/json-converter-source-generator"
name: "json-converter-source-generator"
description: "Source generated polymorphic JSON converters"
readmeQualityOk: true
url: "https://github.com/aviationexam/json-converter-source-generator"
language: "C#"
languages: ["C#"]
languagePcts: [100]
topics: ["dotnet", "json", "polymorphic-types", "system-text-json", "csharp-sourcegenerator", "enum-serialization"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2023-09-25T19:44:29Z"
lastCommitAt: "2026-11-04T08:02:23Z"
lastReleaseAt: "2023-11-15T16:00:12Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 98
undervaluedScore: 79
maintainers: ["automated-dependency-updater[bot]", "trejjam", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/c597d3282432edd5d37145eb1741a5da46ee3f3b36cc4a7865b01add9a486d06/aviationexam/json-converter-source-generator"
---

# Aviationexam.GeneratedJsonConverters.SourceGenerator

Motivation for this library are polymorphic contracts with discriminator property not present as first property.

i.e. this JSON
```json
{
    "baseProperty": 1,
    "$type": 2,
    "anotherLeafProperty": 2
}
```
is deserialized correctly into `AnotherLeafContract` using this library.

And string based enum serialization.

## Install
```xml
<ItemGroup>
    <PackageReference Include="Aviationexam.GeneratedJsonConverters.SourceGenerator" Version="0.1.0" />
</ItemGroup>
```

The generated converters derive from public types in `Aviationexam.GeneratedJsonConverters.Abstractions`, which the generator package brings in as a dependency. netstandard2.0 projects get `Aviationexam.GeneratedJsonConverters.Abstractions.NetStandard` instead, built from the same sources under a different assembly name. Do not mark the reference `PrivateAssets="all"`: projects referencing yours need the abstractions assembly at runtime. The analyzer and its build properties stay private by default.

A netstandard2.0-only library used by net8.0+ applications must reference the netstandard2.0 abstractions itself, because those applications restore the…
