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
lastCommitAt: "2026-08-08T04:35:49Z"
lastReleaseAt: "2025-05-13T22:58:32Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 89
undervaluedScore: 66
maintainers: ["renovate[bot]", "soenneker"]
openGraphImageUrl: "https://opengraph.githubassets.com/20548f1ee96b8832d72763ec3287b072156e56049ab93e878c83e4cd141c99b9/soenneker/soenneker.utils.backgroundqueue"
fundingLinks: ["GITHUB:https://github.com/soenneker"]
discussionCount: 0
---

#  Soenneker.Utils.BackgroundQueue

### A high-performance background Task / ValueTask queue

---

## Overview

`BackgroundQueue` provides a fast, controlled way to execute background work in .NET applications.
It prevents overload by queueing and processing work asynchronously with configurable limits and built-in tracking.

---

## Features

* Supports both `Task` and `ValueTask`
* Configurable queue size
* Tracks running and pending work
* Simple DI registration
* Hosted service for automatic background processing

---

## Installation

```sh
dotnet add package Soenneker.Utils.BackgroundQueue
```

Register the queue:

```csharp
void ConfigureServices(IServiceCollection services)
{
    services.AddBackgroundQueueAsSingleton();
}
```

---

## Starting & Stopping

### Start

```csharp
await serviceProvider.WarmupAndStartBackgroundQueue(cancellationToken);
```

Synchronous start:

```csharp
serviceProvider.WarmupAndStartBackgroundQueueSync(cancellationToken);
```

### Stop

```csharp
await serviceProvider.StopBackgroundQueue(cancellationToken);
```

Synchronous stop:

```csharp
serviceProvider.StopBackgroundQueueSync(cancellationToken);
```

---

## Configuration

```json
{…
