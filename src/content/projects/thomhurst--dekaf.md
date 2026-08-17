---
repo: "thomhurst/Dekaf"
name: "Dekaf"
description: "Taking the Java out of Kafka"
readmeQualityOk: true
url: "https://github.com/thomhurst/Dekaf"
homepage: "https://thomhurst.github.io/Dekaf/"
language: "C#"
languages: ["C#"]
languagePcts: [99]
topics: ["dotnet", "kafka"]
stars: 54
forks: 3
openIssues: 29
closedIssues: 837
watchers: 1
contributors: 5
recentReleases: 10
createdAt: "2026-01-21T15:11:33Z"
lastCommitAt: "2026-08-17T04:19:32Z"
lastReleaseAt: "2026-07-24T13:16:29Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded", "release_machine"]
healthScore: 99
undervaluedScore: 46
maintainers: ["thomhurst", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/1c540d97d41c8cd17bde0d639c729bcc0b90ab734132085424cf2d403e37e58b/thomhurst/Dekaf"
fundingLinks: ["GITHUB:https://github.com/thomhurst"]
discussionCount: 1
---

# Dekaf - A .NET Kafka Client

**Taking the Java out of Kafka**

Dekaf is a high-performance, pure C# Apache Kafka client for .NET 10+. No JVM, no interop, no native dependencies - just clean, modern C# all the way down.

If you like, or use this library, a sponsor is appreciated!

**[Benchmarks vs Confluent](https://thomhurst.github.io/Dekaf/docs/stress-tests)**

**[View Full Documentation](https://thomhurst.github.io/Dekaf/)**

## Why Dekaf?

Unlike libraries that wrap librdkafka, Dekaf is a native .NET implementation with no delegation to other runtimes and unmanaged code:

- **Pure C#** - No native dependencies, no interop overhead
- **Zero-allocation hot paths** - Uses `Span<T>`, `ref struct`, and object pooling for minimal GC pressure
- **Modern .NET** - Built for .NET 10+ with nullable reference types, `IAsyncEnumerable`, and all the good stuff
- **Native AOT compatible** - Trim-safe and Native AOT ready, verified by CI smoke tests on every build
- **Simple API** - Intuitive fluent builders that do what you'd expect
- **Batteries included for services** - Hosted consumer base class with graceful shutdown, retries, retry topics, and dead letter queues built in

## Getting…
