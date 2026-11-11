---
repo: "soenneker/soenneker.reflection.cache"
name: "soenneker.reflection.cache"
description: "The fastest .NET Reflection cache"
readmeQualityOk: true
url: "https://github.com/soenneker/soenneker.reflection.cache"
homepage: "https://soenneker.com"
language: "C#"
languages: ["C#"]
languagePcts: [100]
topics: ["cache", "csharp", "dotnet", "fast", "reflection", "util", "reflectioncache"]
stars: 20
forks: 2
openIssues: 0
closedIssues: 1
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2024-01-17T01:38:09Z"
lastCommitAt: "2026-11-11T19:43:17Z"
lastReleaseAt: "2025-05-23T02:55:19Z"
status: "thriving"
tags: ["hidden_gem", "funded"]
healthScore: 99
undervaluedScore: 68
maintainers: ["renovate[bot]", "soenneker"]
openGraphImageUrl: "https://opengraph.githubassets.com/f52f289011909a8ab75160f4f532ca31ec4c75c5c923c5f6d12e6c4e8b503ed8/soenneker/soenneker.reflection.cache"
fundingLinks: ["GITHUB:https://github.com/soenneker"]
discussionCount: 0
---

# Soenneker.Reflection.Cache

Caches reflection metadata, lookups, constructed generics, custom attributes, and compiled member accessors for repeated use.

## Installation

```bash
dotnet add package Soenneker.Reflection.Cache
```

## Registration

```csharp
using Soenneker.Reflection.Cache.Registrars;

services.AddReflectionCacheAsSingleton();
```

A singleton gives the application one shared metadata graph and the highest cache reuse. Use `AddReflectionCacheAsScoped()` when metadata must stop being retained with a scope. The cache has no eviction API; its cached `Type`, member, attribute, and delegate references live as long as the cache does. Avoid a long-lived cache for types loaded into collectible `AssemblyLoadContext` instances.

For manual construction:

```csharp
var cache = new ReflectionCache();
```

Thread safety is enabled by default. `new ReflectionCache(threadSafe: false)` removes concurrency protection and is suitable only when the cache instance is confined to one thread.

## Follow the cached chain

```csharp
CachedType cachedType = cache.GetCachedType(typeof(OrderHandler));

CachedMethod? method = cachedType.GetCachedMethod(
    nameof(OrderHandler.Handle),…
