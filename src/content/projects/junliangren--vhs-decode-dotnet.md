---
repo: "JunliangRen/vhs-decode-dotnet"
name: "vhs-decode-dotnet"
description: "A .NET 11 compatibility port of the decode-facing parts of oyvindln/vhs-decode."
readmeQualityOk: true
url: "https://github.com/JunliangRen/vhs-decode-dotnet"
language: "C#"
languages: ["C#"]
languagePcts: [90]
topics: ["dotnet", "dsp", "laserdisc", "vhs-decode", "video-decoding", "intel-ipp", "intel-ipp-library", "cuda"]
stars: 6
forks: 0
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2026-07-13T05:47:58Z"
lastCommitAt: "2026-11-05T14:05:34Z"
lastReleaseAt: "2026-07-25T21:54:35Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 97
undervaluedScore: 53
maintainers: ["JunliangRen"]
openGraphImageUrl: "https://opengraph.githubassets.com/afea0a7ab07f688c5daffd4fcce6d9ec52e2b9e1a26c3109d818eb4a06aff31e/JunliangRen/vhs-decode-dotnet"
---

# vhs-decode-dotnet

**[English](https://github.com/JunliangRen/vhs-decode-dotnet/blob/HEAD/README.md)** | [简体中文](https://github.com/JunliangRen/vhs-decode-dotnet/blob/HEAD/README.zh-CN.md) | [日本語](https://github.com/JunliangRen/vhs-decode-dotnet/blob/HEAD/README.ja.md)

A .NET 11 rewrite of the decode-facing parts of
[`oyvindln/vhs-decode`](https://github.com/oyvindln/vhs-decode), targeting
upstream release `v0.4.0` at commit
`43155200da87c0d49eb37d8ec09b1372075ee8e4`.

The current .NET port release is [`v0.4.0-2.18.0`](https://github.com/JunliangRen/vhs-decode-dotnet/releases/tag/v0.4.0-2.18.0) (application version `2.18.0`).

[LD EFM buffer reuse measurements and limits](https://github.com/JunliangRen/vhs-decode-dotnet/blob/HEAD/docs/LD_PERFORMANCE_V16.md).

> [!IMPORTANT]
> This remains a compatibility work in progress. The top-level decode paths are
> implemented and heavily tested, but every real capture and rare option
> combination has not yet been certified byte-for-byte.

**[Read the detailed English reference](https://github.com/JunliangRen/vhs-decode-dotnet/blob/HEAD/docs/README.detailed.md)** for the full
compatibility matrix, implementation notes, historical…
