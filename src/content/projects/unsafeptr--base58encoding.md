---
repo: "unsafePtr/Base58Encoding"
name: "Base58Encoding"
description: "C#/.NET library for encoding and decoding Base58. Supports Bitcoin/Ripple/Flikr alphabets"
readmeQualityOk: true
url: "https://github.com/unsafePtr/Base58Encoding"
language: "C#"
languages: ["C#"]
languagePcts: [100]
topics: ["base58", "csharp", "dotnet", "encoding"]
stars: 5
forks: 0
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2025-08-26T18:23:48Z"
lastCommitAt: "2026-11-27T12:57:09Z"
lastReleaseAt: "2026-08-19T10:24:41Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 71
undervaluedScore: 32
maintainers: ["unsafePtr"]
openGraphImageUrl: "https://opengraph.githubassets.com/313275bb56cd58902b08211d4678a7972575dd1ecb64138b227618932849d537/unsafePtr/Base58Encoding"
---

# Base58 Encoding Library

A Base58 encoding and decoding library for .NET 10 and .NET 11 with support for multiple alphabet variants.

## Features

- **Multiple Alphabets**: Built-in support for Bitcoin(IFPS/Sui/Solana), Ripple, and Flickr alphabets
- **Memory Efficient**: Uses stackalloc operations when possible to minimize allocations
- **Type Safe**: Leverages ReadOnlySpan and ReadOnlyMemory for safe memory operations
- **Intrinsics**: Uses SIMD `Vector256` and unrolled loop for counting leading zeros
- **Optimized Hot Paths**: Fast fixed-length encode/decode for 32-byte and 64-byte inputs using Firedancer-like optimizations
- **Native AOT**: reflection-free and trim-clean; the suite itself runs as an AOT binary in CI

## Native AOT

The library is reflection-free and marked `IsAotCompatible`, so `PublishAot` and `PublishTrimmed` need no configuration and produce no warnings.
