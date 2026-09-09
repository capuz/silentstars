---
repo: "buildbarn/go-cdc"
name: "go-cdc"
description: "Content Defined Chunking playground"
readmeQualityOk: true
url: "https://github.com/buildbarn/go-cdc"
language: "Go"
languages: ["Go"]
languagePcts: [97]
stars: 53
forks: 7
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 4
recentReleases: 1
createdAt: "2024-03-22T12:31:15Z"
lastCommitAt: "2026-09-09T08:19:34Z"
lastReleaseAt: "2026-08-10T21:00:33Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 74
undervaluedScore: 40
maintainers: ["EdSchouten", "ifutivic"]
openGraphImageUrl: "https://opengraph.githubassets.com/c086bfb9c69061ae3718a79addb7d1becdff8070201327dcd36ab20511f1cf0f/buildbarn/go-cdc"
---

# Content Defined Chunking playground

This repository provides reference implementations of the
RepMaxCDC "Repeated Maximum" [Content-Defined
Chunking](https://en.wikipedia.org/wiki/Rolling_hash) function, which is
written in the Go programming language. RepMaxCDC is
[one of the standard CDC functions of Bazel's remote execution protocol](https://github.com/bazelbuild/remote-apis/pull/282).
An implementation written in Java
[is part of Bazel](https://github.com/bazelbuild/bazel/pull/30131).

RepMaxCDC provides:

- **Tight chunk size bounds:** Most CDC functions generate chunks
  whose minimum and maximum size are still a factor of 16 or 32 apart.
  RepMaxCDC is capable of generating chunks with sizes in range
  $[n, 2n)$, while offering excellent deduplication rates.

- **Excellent parallelism:** RepMaxCDC allows performing targeted
  searches for cutting points. This makes it possible to partition a
  large file into roughly equally sized pieces. These can be chunked in
  parallel.

- **Size-based checking:** With chunks always falling in range $[n, 2n)$,
  it is trivial to check whether a file can be split into multiple
  chunks, purely looking at its size. This property, which…
