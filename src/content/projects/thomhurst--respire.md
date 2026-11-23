---
repo: "thomhurst/Respire"
name: "Respire"
description: "A .NET RESP Client "
readmeQualityOk: true
url: "https://github.com/thomhurst/Respire"
homepage: "https://respire.tomlonghurst.dev/"
language: "C#"
languages: ["C#"]
languagePcts: [96]
topics: ["dotnet", "redis", "resp", "valkey"]
stars: 21
forks: 2
openIssues: 12
closedIssues: 1241
watchers: 2
contributors: 6
recentReleases: 4
createdAt: "2025-08-27T20:30:47Z"
lastCommitAt: "2026-11-23T10:19:30Z"
lastReleaseAt: "2026-10-12T23:39:48Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 100
undervaluedScore: 74
maintainers: ["thomhurst"]
openGraphImageUrl: "https://opengraph.githubassets.com/02c2dc2dc18474642cd3521ce9f013ca261eec928d2d68eef4105b8a0539dc93/thomhurst/Respire"
fundingLinks: ["GITHUB:https://github.com/thomhurst"]
---

# Respire

**Redis for .NET, without the ceremony.** Plain C# types in, plain C# types out, and the hard
parts of Redis (caching, locks, queues, rate limits) are one call each.

Works with Redis, Valkey, KeyDB, and other RESP-compatible servers, on .NET 10 and .NET 11.

[Documentation](https://respire.tomlonghurst.dev/) ·
[Quick start](https://respire.tomlonghurst.dev/docs/quick-start) ·
[Performance](https://respire.tomlonghurst.dev/docs/performance) ·
[Coming from StackExchange.Redis?](https://respire.tomlonghurst.dev/docs/stackexchange-redis)

## Quick start

```bash
dotnet add package Respire
```

```csharp
await using var redis = await RespireClient.ConnectAsync("redis://localhost");

await redis.SetAsync("user:1", new User("Ada", 36), expiry: TimeSpan.FromMinutes(5));
User? user = await redis.GetAsync<User>("user:1");
```

That's the whole setup. No multiplexer to configure, no `RedisValue` to unwrap. Create one
client at startup and share it. Concurrent calls are pipelined automatically, and the client
reconnects on its own. In ASP.NET Core, use `services.AddRespire(connectionString)` from
`Respire.DependencyInjection`.
