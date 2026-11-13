---
repo: "Milvasoft/milvaion"
name: "milvaion"
description: "One dashboard for every background job in your .NET environment. Distributed scheduler with decoupled workers and drop-in monitoring for Hangfire & Quartz.NET."
readmeQualityOk: true
url: "https://github.com/Milvasoft/milvaion"
homepage: "https://portal.milvasoft.com/docs/1.0.1/open-source-libs/milvaion/milvaion-doc-guide"
language: "C#"
languages: ["C#"]
languagePcts: [74]
topics: ["dotnet", "job-scheduler", "microservices", "job-scheduling", "open-source", "real-time-monitoring", "milvaion", "background-jobs", "cron", "distributed-systems"]
stars: 81
forks: 8
openIssues: 1
closedIssues: 1
watchers: 6
contributors: 4
recentReleases: 3
createdAt: "2026-01-20T14:45:32Z"
lastCommitAt: "2026-11-13T18:32:39Z"
lastReleaseAt: "2026-11-12T17:48:33Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 44
maintainers: ["bugrakosen"]
openGraphImageUrl: "https://opengraph.githubassets.com/e59068f89499624a9595b76e8b368db0c1193986e1ef8763ec2dc4d131dcec26/Milvasoft/milvaion"
discussionCount: 1
---

A distributed job scheduling system built on .NET 11

[🌐 Website](https://www.milvaion.com/) |
[📚 Documentation](https://portal.milvasoft.com/docs/1.0.1/open-source-libs/milvaion/milvaion-doc-guide) |
[🚀 Getting Started](https://portal.milvasoft.com/docs/1.0.1/open-source-libs/milvaion/quick-start) |
[📦 Packages](https://www.nuget.org/packages?q=Milvaion&includeComputedFrameworks=true&prerel=true) |
[🐳 Docker](https://hub.docker.com/r/milvasoft/milvaion-api)

## What is Milvaion?

Milvaion is a **distributed job scheduling system** that separates the *scheduler* (API that decides when jobs run) from the *workers* (processes that execute jobs), connected via Redis and RabbitMQ.

```
┌─────────────────┐        ┌─────────────────┐       ┌─────────────────┐
│  Milvaion API   │        │    RabbitMQ     │       │    Workers      │
│  (Scheduler)    │───────>│  (Job Queue)    │──────>│  (Executors)    │
│                 │        │                 │       │                 │
│ • REST API      │        │ • Job messages  │       │ • IJob classes  │
│ • Dashboard     │        │ • Status queues │       │ • Retry logic   │
│ • Cron parsing  │<───────│ • Log streams   │<──────│ • DI…
