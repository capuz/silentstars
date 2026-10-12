---
repo: "thomhurst/Respire"
name: "Respire"
description: "A .NET RESP Client "
readmeQualityOk: true
url: "https://github.com/thomhurst/Respire"
homepage: "https://thomhurst.github.io/Respire/"
language: "C#"
languages: ["C#"]
languagePcts: [96]
topics: ["dotnet", "redis", "resp", "valkey"]
stars: 20
forks: 1
openIssues: 19
closedIssues: 606
watchers: 2
contributors: 4
recentReleases: 9
createdAt: "2025-08-27T20:30:47Z"
lastCommitAt: "2026-10-12T11:15:22Z"
lastReleaseAt: "2026-10-05T12:33:36Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded", "release_machine"]
healthScore: 99
undervaluedScore: 73
maintainers: ["thomhurst", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/5a788b3c9a2e8a5b29b962a93975868a685b60a4a1131dbb974bc8a7c3dfd264/thomhurst/Respire"
fundingLinks: ["GITHUB:https://github.com/thomhurst"]
---

# Respire

**A fast, modern Redis client for .NET, with distributed locks, rate limiters, and even server assisted client cache.**

Works with Redis, Valkey, KeyDB, and other RESP-compatible servers.

[Documentation](https://thomhurst.github.io/Respire/) ·
[Getting started](https://thomhurst.github.io/Respire/docs/getting-started) ·
[Benchmarks](https://thomhurst.github.io/Respire/docs/benchmarks) ·
[Coming from StackExchange.Redis?](https://thomhurst.github.io/Respire/docs/stackexchange-redis)

```bash
dotnet add package Respire
```

```csharp
await using var redis = await RespireClient.ConnectAsync("redis://localhost");

await redis.SetAsync("user:1", new User("Ada", 36), expiry: TimeSpan.FromMinutes(5));
User? user = await redis.GetAsync<User>("user:1");
```

> **Status:** Respire is pre-release, so its API may still change. See the
> [roadmap](https://thomhurst.github.io/Respire/docs/roadmap).

## Why Respire?

- **Plain .NET types.** Get `string?`, `long`, `bool`, or your own `T?`, not protocol wrappers.
- **Fast by default.** Concurrent calls are pipelined automatically. Blocking commands get their
  own connection, so they never stall other calls.
- **Hot reads from…
