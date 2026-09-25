---
repo: "rustls/upki"
name: "upki"
description: "upki implements platform-independent browser-grade certificate infrastructure"
readmeQualityOk: true
url: "https://github.com/rustls/upki"
language: "Rust"
languages: ["Rust"]
languagePcts: [89]
stars: 45
forks: 12
openIssues: 9
closedIssues: 4
watchers: 6
contributors: 6
recentReleases: 2
createdAt: "2025-11-28T17:32:42Z"
lastCommitAt: "2026-09-25T08:54:17Z"
lastReleaseAt: "2026-07-24T09:02:53Z"
status: "thriving"
tags: []
healthScore: 84
undervaluedScore: 45
maintainers: ["dependabot[bot]", "djc", "ctz"]
openGraphImageUrl: "https://opengraph.githubassets.com/1c14a93c823166b574d5f153604c2d3a054de230d211659e6fd55789a965f29f/rustls/upki"
---

</p>

**upki** implements platform-independent browser-grade certificate infrastructure.

The first goal of this project is to provide reliable, privacy-preserving
and efficient certificate revocation building on foundational work by Mozilla.

Later goals include intermediate preloading, certificate transparency enforcement,
replicating common root distrust processes, and supporting deployment of
Merkle Tree Certificates.

## Revocation

This is for checking revocation status for certificates issued by publicly-trusted
authorities.  It uses [crlite-clubcard](https://eprint.iacr.org/2025/610).  This requires
a data set that updates several times per day.  `upki` therefore includes a synchronization
component, which fetches updated data.  You can run `upki fetch` to do this at any time,
but ideally it is run system-wide as [arranged by packagers](https://github.com/rustls/upki/blob/HEAD/PACKAGING.md).

There are a number of interfaces available:

### Command-line interface

This is useful for monitoring, testing and alerting purposes.

```shell
$ curl -w '%{certs}' https://google.com | upki revocation check
(...)
NotRevoked
```

### C-FFI interface

This is a simple C interface to…
