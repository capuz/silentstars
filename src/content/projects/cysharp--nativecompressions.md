---
repo: "Cysharp/NativeCompressions"
name: "NativeCompressions"
description: "NativeCompressions is the native binding and high-level API of ZStandard, LZ4 and OpenZL compression library for .NET and Unity."
readmeQualityOk: true
url: "https://github.com/Cysharp/NativeCompressions"
language: "C#"
languages: ["C#", "Rust"]
languagePcts: [68, 32]
stars: 298
forks: 11
openIssues: 1
closedIssues: 6
watchers: 4
contributors: 5
recentReleases: 0
createdAt: "2022-01-31T02:22:40Z"
lastCommitAt: "2026-09-18T08:26:17Z"
lastReleaseAt: "2025-10-01T09:44:16Z"
status: "thriving"
tags: ["solo_builder", "funded"]
healthScore: 88
undervaluedScore: 37
maintainers: ["guitarrapc", "github-actions[bot]", "neuecc"]
openGraphImageUrl: "https://opengraph.githubassets.com/3fc8629e64ce546eca57ea1183692f2af735904175d3a55b12b853b30f6f3f86/Cysharp/NativeCompressions"
fundingLinks: ["GITHUB:https://github.com/neuecc"]
---

NativeCompressions
===
<!-- [](https://github.com/Cysharp/NativeCompressions/actions/workflows/build-debug.yaml)

NativeCompressions provides native library bindings, streaming processing, and multi-threading support for [LZ4](https://github.com/lz4/lz4) with its excellent decompression speed, and [Zstandard](https://github.com/facebook/zstd) with its superior balance of compression ratio and performance, and new [OpenZL](https://github.com/facebook/openzl) novel data compression framework.

> Encode/Decode [silesia.tar](https://en.wikipedia.org/wiki/Silesia_corpus) corpus(202.13MB)

Compression is crucial for any application, but .NET has had limited options. NativeCompressions builds state-of-the-art algorithms (LZ4, Zstandard) with allocation-free, stream-less streaming APIs. Furthermore, by leveraging modern C# APIs (`Span<T>`, `RandomAccess`, `PipeReader/Writer`) to provide high-level multi-threading APIs, we achieve high-performance compression in any environment.

We chose native bindings over Pure C# implementation because compression library performance depends not only on algorithms but also on implementation. LZ4 and Zstandard are actively developed with performance…
