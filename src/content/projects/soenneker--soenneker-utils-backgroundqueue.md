---
repo: "soenneker/soenneker.utils.backgroundqueue"
name: "soenneker.utils.backgroundqueue"
description: "A high-performance background Task/ValueTask queue"
readmeQualityOk: true
url: "https://github.com/soenneker/soenneker.utils.backgroundqueue"
homepage: "https://soenneker.com"
language: "C#"
languages: ["C#"]
languagePcts: [100]
topics: ["background", "csharp", "dotnet", "queue", "task", "valuetask"]
stars: 12
forks: 2
openIssues: 0
closedIssues: 0
watchers: 4
contributors: 1
recentReleases: 0
createdAt: "2023-03-19T22:17:28Z"
lastCommitAt: "2026-10-11T10:15:46Z"
lastReleaseAt: "2025-05-13T22:58:32Z"
status: "thriving"
tags: ["hidden_gem", "funded"]
healthScore: 90
undervaluedScore: 66
maintainers: ["renovate[bot]", "soenneker"]
openGraphImageUrl: "https://opengraph.githubassets.com/e89573220eadca828f12269e9a797188e7b274c8b09e26c443ded8c32c2e4e34/soenneker/soenneker.utils.backgroundqueue"
fundingLinks: ["GITHUB:https://github.com/soenneker"]
discussionCount: 0
---

# Soenneker.Utils.BackgroundQueue

A bounded, single-consumer background queue for `Task` and `ValueTask` work items in hosted .NET applications.

## Installation

```bash
dotnet add package Soenneker.Utils.BackgroundQueue
```

## Registration

```csharp
builder.Services.AddBackgroundQueueAsSingleton();
```

Registration adds the queue, its counters, and its processor as singletons, and also registers the processor as a hosted service. A normal application host starts and stops it automatically; the manual start helpers are intended for test service providers that do not run hosted services.

Optional configuration:

```json
{
  "Background": {
    "QueueLength": 5000,
    "LockCounts": true,
    "Log": false
  }
}
```

- `QueueLength` is the bounded channel capacity. Values below `2` use the default of `5000`.
- `LockCounts` enables per-kind counts returned by `GetCountsOfProcessing()`. Overall processing state and `WaitUntilEmpty()` remain available either way.
- `Log` enables per-item debug logging.

## Queue work

```csharp
public sealed class ImportScheduler(IBackgroundQueue queue)
{
    public ValueTask QueueImport(string path, CancellationToken cancellationToken = default)…
