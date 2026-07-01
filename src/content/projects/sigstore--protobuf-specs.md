---
repo: "sigstore/protobuf-specs"
name: "protobuf-specs"
description: "Sigstore's Protocol Buffer specifications"
url: "https://github.com/sigstore/protobuf-specs"
language: "Makefile"
languages: ["Makefile"]
languagePcts: [80]
stars: 35
forks: 52
openIssues: 34
closedIssues: 80
watchers: 14
contributors: 52
recentReleases: 0
createdAt: "2022-10-21T11:08:52Z"
lastCommitAt: "2026-07-01T07:05:15Z"
lastReleaseAt: "2025-01-09T17:00:56Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 89
undervaluedScore: 56
maintainers: ["dependabot[bot]", "sigstore-bot", "Hayden-IO"]
openGraphImageUrl: "https://opengraph.githubassets.com/95ac22ab0620f154628325dba056b6bd32ff485b4ce50528a6f963d043c39977/sigstore/protobuf-specs"
discussionCount: 0
---

# protobuf-specs

This repository holds protobuf specifications for Sigstore messages.

## Protobuf

If you change protobuf definitions, you will need to regenerate the code by running the protocol buffer compiler on the changed `.proto` files.

You will need [Docker](https://docs.docker.com/get-docker/) installed and configured to [run as non-root user](https://docs.docker.com/engine/install/linux-postinstall/#manage-docker-as-a-non-root-user) to generate the protobuf stubs. Then run,

```
$ make all
```

to generate the Go and Python files under `gen/`.

## Adding New Algorithms

With the standardization of post-quantum cryptography signing algorithms by NIST,
ML-DSA (FIPS 204, Dilithium) and SLH-DSA (FIPS 205, SPHINCS+), and with ongoing
work to standardize [another set of algorithms](https://csrc.nist.gov/projects/pqc-dig-sig),
Sigstore will be accepting additional algorithms to sign artifacts and verification material.

To add a new algorithm, you must first get consensus with the community through
an update to the
[algorithm registry specification](https://github.com/sigstore/architecture-docs/blob/main/algorithm-registry.md).
Tag client maintainers to make sure that the new…
