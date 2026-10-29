---
repo: "MDA2AV/ioxide"
name: "ioxide"
description: "The shared-nothing io_uring runtime for .NET"
readmeQualityOk: true
url: "https://github.com/MDA2AV/ioxide"
homepage: "https://mda2av.github.io/ioxide/"
language: "C#"
languages: ["C#"]
languagePcts: [90]
stars: 71
forks: 7
openIssues: 18
closedIssues: 90
watchers: 4
contributors: 4
recentReleases: 0
createdAt: "2025-12-09T18:59:19Z"
lastCommitAt: "2026-10-29T21:25:20Z"
lastReleaseAt: "2026-06-11T00:57:43Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 96
undervaluedScore: 46
maintainers: ["MDA2AV"]
openGraphImageUrl: "https://opengraph.githubassets.com/6da171e29c1fd45b5b35655b78a8eba5a1528cee3bb243a2328f38b8c7d4f606/MDA2AV/ioxide"
discussionCount: 1
---

# ioxide

**A shared-nothing io_uring runtime for .NET.** One reactor per core, each with its own ring, and
handlers are plain `async` code that always resumes on its reactor.

> Linux 6.1+ · .NET 10 / .NET 11 · experimental

```bash
dotnet add package ioxide
```

HTTP/2, HTTP/3, QUIC, the clients and the ASP.NET Core transport are separate `ioxide.*` packages.

- **[Documentation](https://mda2av.github.io/ioxide/)**: guides and runnable examples.
- **[Playground](https://github.com/MDA2AV/ioxide/blob/HEAD/Playground/)**: one complete server per workload, ready to copy and run.

Each reactor locks about 1 MB of memory, so raise `ulimit -l` if a server with many reactors won't start.
