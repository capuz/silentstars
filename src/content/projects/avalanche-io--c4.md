---
repo: "Avalanche-io/c4"
name: "c4"
description: "Go package implementation of C4 Asset ID"
readmeQualityOk: true
url: "https://github.com/Avalanche-io/c4"
homepage: "http://www.cccc.io/"
language: "Go"
languages: ["Go"]
languagePcts: [100]
topics: ["cinema", "cloud", "media", "asset", "identification"]
stars: 44
forks: 4
openIssues: 4
closedIssues: 29
watchers: 7
contributors: 5
recentReleases: 0
createdAt: "2015-07-29T00:34:49Z"
lastCommitAt: "2026-11-17T12:06:26Z"
lastReleaseAt: "2017-08-25T17:48:19Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 96
undervaluedScore: 56
maintainers: ["mrjoshuak"]
openGraphImageUrl: "https://opengraph.githubassets.com/081571768b39e04636abe14ddc02b643992b2a8c21d6791c0f3220c7b602952b/Avalanche-io/c4"
---

# C4 — Universal Content Identification

This branch is the 1.1 development line, unreleased; the released 1.0.x docs are at [release/1.0.x](https://github.com/Avalanche-io/c4/blob/release/1.0.x/README.md).

*Everything in Unix is a file, except for the filesystem itself. Until now.*

C4 is a file management system designed to simplify distributed
systems. It decouples file storage and transport from organization
and metadata by providing a standardized content-derived identifier,
and using these identifiers in place of file content in a simple,
readable, text-based filesystem format.

```bash
$ echo "hello" | c4
c45dkQrAqUiR8WzPGgn6fAGji3VAVeAE7cKVG4G53ou9dTk4Nzb9vFYEwzy9jq5ZKQKM64DMpPpVbYe2bMsZP2yYKi
```

That 90-character string is a [SMPTE ST 2114:2017](https://ieeexplore.ieee.org/document/7971777)
identifier — an international standard built on SHA-512. Run it on
any machine, in any language, ten years from now. Same input, same ID.
Unlike a UUID, which is assigned arbitrarily and requires coordination
to be meaningful, a C4 ID is discovered from the data itself. If two
people have a file with the same ID, they have identical copies of the
same file.

C4 extends this idea to…
