---
repo: "linkdotnet/StringBuilder"
name: "StringBuilder"
description: "A fast and low allocation StringBuilder for .NET."
readmeQualityOk: true
url: "https://github.com/linkdotnet/StringBuilder"
homepage: "https://linkdotnet.github.io/StringBuilder/"
language: "C#"
languages: ["C#"]
languagePcts: [100]
topics: ["csharp", "dotnet", "performance", "string", "stringbuilder", "string-builder", "valuestringbuilder", "rune"]
stars: 114
forks: 13
openIssues: 0
closedIssues: 17
watchers: 3
contributors: 6
recentReleases: 0
createdAt: "2022-04-03T15:24:50Z"
lastCommitAt: "2026-11-07T10:37:09Z"
lastReleaseAt: "2022-07-25T16:27:04Z"
status: "thriving"
tags: []
healthScore: 94
undervaluedScore: 49
maintainers: ["linkdotnet", "dependabot[bot]", "Copilot"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/477381728/ab9ede09-40e4-4151-89da-9b1601dd0fdf"
discussionCount: 1
---

# StringBuilder

A fast and low allocation StringBuilder for .NET.

The package exposes two builders:

- `ValueStringBuilder`: the general-purpose choice for almost every user of this library
- `FixedSizeValueStringBuilder`: a specialized builder for hard capacity limits where the buffer must never grow

## Getting Started
Install the package:
> PM> Install-Package LinkDotNet.StringBuilder

Afterward, use the package as follows:
```csharp
using LinkDotNet.StringBuilder; // Namespace of the package

using ValueStringBuilder stringBuilder = new();
stringBuilder.AppendLine("Hello World");

string result = stringBuilder.ToString();
```

There are also smaller helper functions, which enable you to use `ValueStringBuilder` without any instance:
```csharp
string result1 = ValueStringBuilder.Concat("Hello ", "World"); // "Hello World"
string result2 = ValueStringBuilder.Concat("Hello", 1, 2, 3, "!"); // "Hello123!"
```

By default, `ValueStringBuilder` uses a rented buffer from `ArrayPool<char>.Shared`.
You can avoid renting overhead with an initially stack-allocated buffer:
```csharp
using ValueStringBuilder stringBuilder = new(stackalloc char[128]);
```
Note that this will prevent you…
