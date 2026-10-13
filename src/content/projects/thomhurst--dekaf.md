---
repo: "thomhurst/Dekaf"
name: "Dekaf"
description: "A native .NET Kafka Client "
readmeQualityOk: true
url: "https://github.com/thomhurst/Dekaf"
homepage: "https://thomhurst.github.io/Dekaf/"
language: "C#"
languages: ["C#"]
languagePcts: [99]
topics: ["dotnet", "kafka"]
stars: 90
forks: 5
openIssues: 9
closedIssues: 1082
watchers: 2
contributors: 6
recentReleases: 7
createdAt: "2026-01-21T15:11:33Z"
lastCommitAt: "2026-10-13T10:57:23Z"
lastReleaseAt: "2026-07-24T13:16:29Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded", "release_machine"]
healthScore: 100
undervaluedScore: 46
maintainers: ["thomhurst"]
openGraphImageUrl: "https://opengraph.githubassets.com/3f7305fc8e738877cce3cf2995f70a1747628f8ca51291f1e35d5e9cb060f810/thomhurst/Dekaf"
fundingLinks: ["GITHUB:https://github.com/thomhurst"]
discussionCount: 2
---

# Dekaf - A .NET Kafka Client. Taking the Java out of Kafka.

**Kafka in pure C#, without librdkafka**

Dekaf is a high-performance, pure C# Apache Kafka client optimized for .NET 10, with compatible package assets for earlier runtimes. Unlike Confluent.Kafka, which wraps the native librdkafka library, Dekaf implements the Kafka wire protocol in C#: no librdkafka, no native interop, no native dependencies.

If you like, or use this library, a sponsor is appreciated.

**[Benchmarks vs Confluent](https://thomhurst.github.io/Dekaf/docs/stress-tests)**

**[View Full Documentation](https://thomhurst.github.io/Dekaf/)**

## Why Dekaf?

Unlike libraries that wrap librdkafka, Dekaf is a native .NET implementation with no delegation to other runtimes and unmanaged code:

- **Pure C#** - No native dependencies, no interop overhead
- **Zero-allocation hot paths** - Uses `Span<T>`, `ref struct`, and object pooling for minimal GC pressure
- **Modern .NET** - Optimized for .NET 10 with nullable reference types and `IAsyncEnumerable`; see package compatibility below
- **Native AOT coverage** - .NET 10 `linux-x64` smoke and Kafka integration tests in code-change CI; see coverage below
- **Simple…
