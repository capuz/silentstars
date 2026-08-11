---
repo: "ewanc26/metalbear"
name: "metalbear"
description: "an AT Protocol Personal Data Server written primarily in C and C++"
readmeQualityOk: true
url: "https://github.com/ewanc26/metalbear"
homepage: "https://bear1.croft.click"
language: "C"
languages: ["C"]
languagePcts: [86]
topics: ["atproto", "atproto-pds", "atprotocol", "bluesky", "c", "clang", "pds"]
stars: 6
forks: 0
openIssues: 2
closedIssues: 23
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-07-20T16:39:15Z"
lastCommitAt: "2026-08-11T04:48:47Z"
lastReleaseAt: "2026-08-05T13:11:29Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "funded", "release_machine"]
healthScore: 98
undervaluedScore: 65
maintainers: ["ewanc26"]
openGraphImageUrl: "https://opengraph.githubassets.com/ae5e9d86da6d9869da4c6922436da731fb5c647624630a45e02736c07733c86c/ewanc26/metalbear"
fundingLinks: ["GITHUB:https://github.com/ewanc26"]
---

</p>

</p>

# MetalBear

MetalBear is an AT Protocol Personal Data Server written in C23 and built on
[Wolfram](https://github.com/ewanc26/wolfram). C is the default language;
C++ is used for complex or sensitive components where C is insufficient —
RAII-based resource management (e.g. sqlite3), performance-critical code,
and third-party library integrations. All C++ code exposes a C ABI via
`extern "C"` so the SDK never requires a C++ toolchain at runtime.
It hosts multiple accounts, mints `did:plc` identities, serves the firehose,
and federates: as of 0.4.1 a MetalBear instance is consumed by Bluesky's
relays and its posts are indexed by the Bluesky AppView.

## Core Features

- `com.atproto.server.describeServer`, `createSession`, `getSession`,
  `refreshSession`, and `deleteSession`
- restart-persistent, HS256-signed AT Protocol access/refresh JWTs with refresh
  rotation, a bounded reuse grace period, and revocation
- durable standard and privileged app passwords with one-time password display,
  scope-preserving sessions, listing, and revocation of associated refresh chains
- repository-key-signed `com.atproto.server.getServiceAuth` JWT issuance with
  audience, method,…
