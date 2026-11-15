---
repo: "credfeto/credfeto-database-source-generator"
name: "credfeto-database-source-generator"
description: "Source generation for databases, influenced by Dapper"
readmeQualityOk: true
url: "https://github.com/credfeto/credfeto-database-source-generator"
language: "C#"
languages: ["C#"]
languagePcts: [100]
stars: 5
forks: 0
openIssues: 0
closedIssues: 25
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2023-02-11T22:54:42Z"
lastCommitAt: "2026-11-15T11:11:17Z"
lastReleaseAt: "2024-03-13T18:14:20Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 100
undervaluedScore: 79
maintainers: ["credfeto", "dnyw4l3n13"]
openGraphImageUrl: "https://opengraph.githubassets.com/2c68b146ef4b63ab81188847757d865a1f03bb83acca2dcfdb26be486201d688/credfeto/credfeto-database-source-generator"
fundingLinks: ["GITHUB:https://github.com/credfeto", "BUY_ME_A_COFFEE:https://buymeacoffee.com/mark.ridgwell"]
---

# credfeto-database-source-generator

Database source generator

## Using

Add a reference to the ``Credfeto.Enumeration.Source.Generation`` package in each project you need the code generation
to run.

```xml
<ItemGroup>
  <PackageReference
            Include="Credfeto.Database.Source.Generation"
            Version="1.1.1.1"
            PrivateAssets="All"
            ExcludeAssets="runtime" />
</ItemGroup>
```

Reference the following package in the project that contains the attributes and interfaces that are used by the
generator.

```xml
<ItemGroup>
    <PackageReference
            Include="Credfeto.Database.Interfaces"
            Version="1.1.1.1"
            PrivateAssets="All"
            ExcludeAssets="runtime" />
</ItemGroup>
```

## Usage

### 1. Define a result model

Create a record (or class) whose property names match the database column names. Use `[SqlFieldMap<TMapper, TType>]`
on any property that requires custom type conversion:

```csharp
using Credfeto.Database.Interfaces;

public sealed record Accounts(
    int Id,
    string Name,
    [SqlFieldMap<AccountAddressMapper, AccountAddress>] AccountAddress Address,
    DateTime LastModified
);
```

### 2.…
