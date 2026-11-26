---
repo: "rustfs/gateway"
name: "gateway"
description: "A protocol-exact, security-first S3 server framework for Rust — and the home of the RustFS HTTP gateway"
readmeQualityOk: true
url: "https://github.com/rustfs/gateway"
language: "Rust"
languages: ["Rust"]
languagePcts: [90]
stars: 5
forks: 0
openIssues: 44
closedIssues: 477
watchers: 0
contributors: 8
recentReleases: 0
createdAt: "2026-08-05T09:23:20Z"
lastCommitAt: "2026-11-26T23:39:46Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 98
undervaluedScore: 54
maintainers: ["overtrue", "GatewayJ", "houseme"]
openGraphImageUrl: "https://opengraph.githubassets.com/0056f8689cc063c123c2dbbdd32b840d1050f7b5aff485c7c0540478118979c6/rustfs/gateway"
---

# RustFS Gateway

> **Important**
>
> **For internal RustFS use only.** We do not recommend using this project directly as a dependency
> in other projects, and we do not provide external support.
>
> If you need an S3 integration layer, we recommend [s3s](https://github.com/s3s-project/s3s):
> **it is the best choice for your project.**

**The HTTP layer of [RustFS](https://github.com/rustfs/rustfs).** It turns S3 traffic on the wire into typed operations
and back, and leaves storage semantics to RustFS itself.

This is where request routing, header and query typing, `aws-chunked` framing, XML codecs, SigV2/SigV4 and presigned-URL
verification, POST-policy handling, and the error shapes AWS actually returns all live.

**Scope, stated plainly:** this is built for RustFS. It is not a general-purpose library, we do not encourage outside
adoption, and nothing here is published to crates.io — RustFS consumes the repository as a git dependency. The API will
change whenever it suits RustFS.
