---
repo: "thomhurst/Dekaf"
name: "Dekaf"
description: "Taking the Java out of Kafka"
readmeQualityOk: true
url: "https://github.com/thomhurst/Dekaf"
language: "C#"
languages: ["C#"]
languagePcts: [99]
stars: 47
forks: 3
openIssues: 5
closedIssues: 534
watchers: 1
contributors: 5
recentReleases: 1
createdAt: "2026-01-21T15:11:33Z"
lastCommitAt: "2026-07-11T05:56:25Z"
lastReleaseAt: "2026-07-07T00:26:45Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 39
maintainers: ["thomhurst", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/f35d8f48c0407e9e8ebc65bef336e945446661275c91a308b0053394bfc95259/thomhurst/Dekaf"
---

# Dekaf

**Taking the Java out of Kafka.**

Dekaf is a high-performance, pure C# Apache Kafka client for .NET 10+. No JVM, no interop, no native dependencies—just clean, modern C# all the way down.

**[Benchmarks vs Confluent](https://thomhurst.github.io/Dekaf/docs/stress-tests)**

**[View Full Documentation](https://thomhurst.github.io/Dekaf/)**

## Why Dekaf?

Unlike libraries that wrap librdkafka, Dekaf is a native .NET implementation with no external dependencies:

- **Pure C#** - No native dependencies, no interop overhead
- **Zero-allocation hot paths** - Uses `Span<T>`, `ref struct`, and object pooling for minimal GC pressure
- **Modern .NET** - Built for .NET 10+ with nullable reference types, `IAsyncEnumerable`, and all the good stuff
- **Native AOT compatible** - Trim-safe and Native AOT ready, verified by CI smoke tests on every build
- **Simple API** - Intuitive fluent builders that do what you'd expect

## Getting Started

```bash
dotnet add package Dekaf
```

### Producing Messages

The simplest way to send a message:

```csharp
using Dekaf;

await using var producer = await Kafka.CreateProducer<string, string>()
    .WithBootstrapServers("localhost:9092")…
