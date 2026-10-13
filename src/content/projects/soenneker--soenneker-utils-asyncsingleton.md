---
repo: "soenneker/soenneker.utils.asyncsingleton"
name: "soenneker.utils.asyncsingleton"
description: "An externally initializing singleton that uses double-check asynchronous locking, with optional async and sync disposal"
readmeQualityOk: true
url: "https://github.com/soenneker/soenneker.utils.asyncsingleton"
homepage: "https://soenneker.com"
language: "C#"
languages: ["C#"]
languagePcts: [100]
topics: ["async", "csharp", "dotnet", "lock", "singleton", "sync"]
stars: 5
forks: 2
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2023-03-11T02:23:42Z"
lastCommitAt: "2026-10-13T10:57:24Z"
lastReleaseAt: "2025-08-11T15:53:06Z"
status: "thriving"
tags: ["hidden_gem", "funded"]
healthScore: 89
undervaluedScore: 80
maintainers: ["renovate[bot]", "soenneker"]
openGraphImageUrl: "https://opengraph.githubassets.com/3766644a573706c5b7709cf8514692819740eca23684984ef57b475f2cff6fd7/soenneker/soenneker.utils.asyncsingleton"
fundingLinks: ["GITHUB:https://github.com/soenneker"]
discussionCount: 0
---

# Soenneker.Utils.AsyncSingleton

Thread-safe, lazy initialization for a single shared value, with synchronous and asynchronous factories and retrieval.

## Installation

```bash
dotnet add package Soenneker.Utils.AsyncSingleton
```

## Usage

Create the singleton with a factory, then retain and dispose the wrapper for as long as the shared value should live:

```csharp
await using var client = new AsyncSingleton<HttpClient>(
    static () => new ValueTask<HttpClient>(new HttpClient()));

HttpClient first = await client.Get();
HttpClient sameInstance = await client.Get();
```

Concurrent callers share one successful factory result. If the factory throws or is cancelled, no value is cached and a later call can retry.

Use `AsyncSingleton<T, T1>` when initialization needs an argument:

```csharp
var client = new AsyncSingleton<HttpClient, Uri>(
    static baseAddress => new HttpClient { BaseAddress = baseAddress });

HttpClient value = await client.Get(new Uri("https://api.example.com"));
```

Only the argument supplied by the call that successfully initializes the value is used. Arguments from later calls are ignored because those calls receive the cached instance.

## Synchronous…
