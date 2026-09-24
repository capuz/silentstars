---
repo: "linkdotnet/IfItQuacks"
name: "IfItQuacks"
description: "Compile-time checked structural (duck) typing for C#: \"If it walks like a duck and quacks like a duck, it's a duck.\""
readmeQualityOk: true
url: "https://github.com/linkdotnet/IfItQuacks"
homepage: "https://linkdotnet.github.io/IfItQuacks/"
language: "C#"
languages: ["C#"]
languagePcts: [100]
topics: ["csharp", "ducktype", "ducktyping", "types"]
stars: 7
forks: 0
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 9
createdAt: "2026-09-17T13:53:35Z"
lastCommitAt: "2026-09-24T08:41:23Z"
lastReleaseAt: "2026-09-24T08:41:26Z"
status: "newborn"
tags: ["hidden_gem", "release_machine"]
healthScore: 70
undervaluedScore: 44
maintainers: ["linkdotnet"]
openGraphImageUrl: "https://opengraph.githubassets.com/094ad2ec1f17f239e1678a93bac131432f3e8f0ca3fe8aac0d7008e1f902db01/linkdotnet/IfItQuacks"
---

</p>

# IfItQuacks

Compile-time checked structural (duck) typing for C#: "If it walks like a duck and quacks like a duck, it's a duck."

## Getting Started

> dotnet add package IfItQuacks

Requires Visual Studio 2022 17.13 or the .NET SDK 9.0.200 or later.

Declare an interface, mark a method as duck-typed and pass in anything that fits - no attributes on the interface or the types:

```csharp
using IfItQuacks;

public interface INamed
{
    string Name { get; }
}

public class Person { public string Name => "Steven"; }
public class Mallard { public string Name => "Donald"; }

public partial class Greeter
{
    [DuckTyped]
    public string Greet(INamed first, INamed second, string greeting = "Hello") =>
        $"{greeting}, {first.Name} and {second.Name}!";
}

new Greeter().Greet(new Person(), new Mallard()); // Hello, Steven and Donald!
```

Neither `Person` nor `Mallard` implements `INamed`. The generator verifies at compile time that both have a matching `Name` and redirects the call through small generated adapters - no reflection, no `dynamic`. A type that doesn't fit is a build error.

To keep a duck-typed value around, convert it explicitly:

```csharp
List<INamed>…
