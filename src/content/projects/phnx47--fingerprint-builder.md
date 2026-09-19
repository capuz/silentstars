---
repo: "phnx47/fingerprint-builder"
name: "fingerprint-builder"
description: "Compute hash for specified .NET object"
readmeQualityOk: true
url: "https://github.com/phnx47/fingerprint-builder"
language: "C#"
languages: ["C#"]
languagePcts: [100]
topics: ["hash", "fingerprint", "dotnet"]
stars: 5
forks: 1
openIssues: 1
closedIssues: 4
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2019-11-30T13:42:22Z"
lastCommitAt: "2026-09-19T01:35:55Z"
lastReleaseAt: "2025-04-16T07:44:52Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "funded"]
healthScore: 91
undervaluedScore: 60
maintainers: ["renovate[bot]", "phnx47"]
openGraphImageUrl: "https://opengraph.githubassets.com/da1115947cbe6f3ba5fa1219105dc0d5d4995802208ba6f7cbab0f0c1f3a7af3/phnx47/fingerprint-builder"
fundingLinks: ["GITHUB:https://github.com/phnx47", "KO_FI:https://ko-fi.com/phnx47", "BUY_ME_A_COFFEE:https://buymeacoffee.com/phnx47"]
---

# fingerprint-builder

Inspired by [he-dev/reusable:FingerprintBuilder](https://github.com/he-dev/reusable/blob/dev/Reusable.Cryptography/src/FingerprintBuilder.cs)

## Installation

```sh
 dotnet add package FingerprintBuilder
```

## How to Use

Declare class:

```c#
class User
{
    public string FirstName { get; set; }
    public string LastName { get; set; }
}
```

Configure Func:

```c#
var sha256 = FingerprintBuilder<User>
    .Create(SHA256.Create())
    .For(p => p.FirstName)
    .For(p => p.LastName)
    .Build();
```

Get hash:

```c#
var user = new User { FirstName = "John", LastName = "Smith" };
var hash = sha256(user).ToLowerHexString();
Console.WriteLine(hash); // 62565a67bf16004038c502eb68907411fcf7871c66ee01a1aa274cc18d9fb541
```

## Benchmarks

```
BenchmarkDotNet v0.15.8, Linux Ubuntu 24.04.4 LTS (Noble Numbat)
AMD EPYC 7763 2.45GHz, 1 CPU, 4 logical and 2 physical cores
.NET SDK 10.0.302
  [Host]     : .NET 10.0.10 (10.0.10, 10.0.1026.32716), X64 RyuJIT x86-64-v3
  DefaultJob : .NET 10.0.10 (10.0.10, 10.0.1026.32716), X64 RyuJIT x86-64-v3
```
| Method              | Mean     | Error     | StdDev    | Median   | Gen0   | Allocated |
|--------------------…
