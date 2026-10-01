---
repo: "Mic92/niks3"
name: "niks3"
description: "S3-backed Nix binary cache with garbage collection"
readmeQualityOk: true
url: "https://github.com/Mic92/niks3"
language: "Go"
languages: ["Go"]
languagePcts: [86]
topics: ["build-with-buildbot"]
stars: 290
forks: 35
openIssues: 2
closedIssues: 30
watchers: 5
contributors: 23
recentReleases: 0
createdAt: "2024-10-02T23:35:36Z"
lastCommitAt: "2026-10-01T10:24:59Z"
lastReleaseAt: "2026-06-25T07:27:00Z"
status: "thriving"
tags: []
healthScore: 98
undervaluedScore: 39
maintainers: ["Mic92", "philiptaron", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/985a314040de09b9e0117d103f2080a5b14a3f1cbcb66330bba46c5332af0727/Mic92/niks3"
---

</p>

# S3-backed Nix binary cache with garbage collection

The idea is to have all reads be handled by the s3 cache (which itself can be high-available)
and have a gc server that tracks all uploads to the cache and runs periodic garbage collection on s3 cache.
Since writes to a binary cache are often not as critical as reads,
we can vastly simplify the operational complexity of the GC server, i.e. only
running one instance next to the CI infrastructure.

## Architecture

### Write path

```mermaid
flowchart LR
    niks3cli[niks3 CLI] -->|request upload| niks3[niks3 Server]
    niks3 -->|presigned S3 URLs| niks3cli
    niks3cli -->|PUT NAR + narinfo| s3[(S3 Bucket)]
    niks3 -->|track references| db[(PostgreSQL)]
```

The niks3 CLI requests an upload from the server, which returns pre-signed S3 URLs.
The client uploads NAR files and narinfo directly to S3.
The server tracks references in PostgreSQL for garbage collection.

### Read path

```mermaid
flowchart LR
    nix[Nix Client] -->|read NAR + narinfo| s3[(S3 Bucket)]
```

Nix clients read directly from S3 (or a CDN in front of it) without going through niks3.
This allows the read path to scale independently and remain highly…
