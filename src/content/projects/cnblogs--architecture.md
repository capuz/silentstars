---
repo: "cnblogs/Architecture"
name: "Architecture"
description: "Building blocks for creating DDD+CQRS microservice with ASP.NET Core"
originalDescription: "Building blocks for creating DDD+CQRS microservice with ASP.NET Core"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/cnblogs/Architecture"
homepage: "https://www.nuget.org/packages?q=Cnblogs.Architecture"
language: "C#"
languages: ["C#"]
languagePcts: [100]
stars: 44
forks: 4
openIssues: 26
closedIssues: 19
watchers: 4
contributors: 2
recentReleases: 0
createdAt: "2023-01-30T09:46:34Z"
lastCommitAt: "2026-10-26T03:02:25Z"
lastReleaseAt: "2023-03-13T07:43:52Z"
status: "thriving"
tags: ["hidden_gem", "under_pressure"]
healthScore: 86
undervaluedScore: 51
maintainers: ["ikesnowy", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/ab592bfa5084ea0ee150957a20f709ec91d2834f85d8ff26104a6ae331de1929/cnblogs/Architecture"
---

# Cnblogs.Architecture

`Cnblogs.Architecture` is a series of NuGet packages for quickly building DDD + CQRS microservices, based on .NET 10, [published on nuget.org](https://www.nuget.org/packages?q=Cnblogs.Architecture). It consolidates infrastructure such as entities and aggregates, domain events, command/query pipelines, HTTP endpoint mapping, and strongly typed inter-service calls into reusable components, so you can focus your effort on domain partitioning and business logic.

## Architecture Layers

The design divides services into four layers, from inside out: Domain, Infrastructure, Application, and API/Web/ServiceAgent. Outer layers depend on inner layers, and inner layers do not depend on outer layers:

- **Domain**: entities, domain events, and repository interfaces
- **Infrastructure**: repository implementations and various infrastructure adapters (EF Core, Dapper, MongoDB, Redis, distributed locks, object storage, etc.)
- **Application**: business logic (commands and queries), domain event handlers, and subscribed integration event handlers
- **API/Web/ServiceAgent**: provides web services and authentication, invokes the corresponding commands and queries of the…
