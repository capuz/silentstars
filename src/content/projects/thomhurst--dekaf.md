---
repo: "thomhurst/Dekaf"
name: "Dekaf"
description: "A native .NET Kafka Client "
readmeQualityOk: true
url: "https://github.com/thomhurst/Dekaf"
homepage: "https://dekaf.tomlonghurst.dev/"
language: "C#"
languages: ["C#"]
languagePcts: [99]
topics: ["dotnet", "kafka"]
stars: 93
forks: 6
openIssues: 13
closedIssues: 1295
watchers: 2
contributors: 6
recentReleases: 0
createdAt: "2026-01-21T15:11:33Z"
lastCommitAt: "2026-10-31T15:58:55Z"
lastReleaseAt: "2026-07-24T13:16:29Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 100
undervaluedScore: 42
maintainers: ["thomhurst"]
openGraphImageUrl: "https://opengraph.githubassets.com/1e6214d8978606418eec3adfccd02a5fdfb72f3442c6127775d100f801371d69/thomhurst/Dekaf"
fundingLinks: ["GITHUB:https://github.com/thomhurst"]
discussionCount: 2
---

# Dekaf - A .NET Kafka Client. Taking the Java out of Kafka.

**Kafka in pure C#, without librdkafka.**

Dekaf is a high-performance, pure C# Apache Kafka client optimized for .NET 10, with compatible package assets for earlier runtimes. Unlike Confluent.Kafka, which wraps the native librdkafka library, Dekaf implements the Kafka wire protocol in C#: no librdkafka, no native interop, no native dependencies.

If you like, or use this library, a sponsor is appreciated.

**[Benchmarks vs Confluent](https://dekaf.tomlonghurst.dev/docs/stress-tests)**

**[View Full Documentation](https://dekaf.tomlonghurst.dev/)**

## Why Dekaf?

Unlike libraries that wrap librdkafka, Dekaf is a native .NET implementation with no delegation to other runtimes and unmanaged code:

- **Pure C#** - No native dependencies, no interop overhead
- **Zero-allocation hot paths** - Uses `Span<T>`, `ref struct`, and object pooling for minimal GC pressure
- **Modern .NET** - Optimized for .NET 10 with nullable reference types and `IAsyncEnumerable`; see package compatibility below
- **Native AOT coverage** - .NET 10 `linux-x64` smoke and Kafka integration tests in code-change CI; see coverage below
- **Simple API**…
