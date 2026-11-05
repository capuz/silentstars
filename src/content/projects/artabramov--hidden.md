---
repo: "artabramov/hidden"
name: "hidden"
description: "Encrypted self-hosted S3 storage."
readmeQualityOk: true
url: "https://github.com/artabramov/hidden"
homepage: "https://artabramov.github.io/hidden/"
language: "Python"
languages: ["Python"]
languagePcts: [98]
topics: ["encryption", "fastapi", "gocryptfs", "self-hosted", "versitygw", "s3"]
stars: 50
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 3
createdAt: "2026-06-07T05:35:30Z"
lastCommitAt: "2026-11-04T17:28:33Z"
lastReleaseAt: "2026-10-31T08:53:52Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 71
undervaluedScore: 34
maintainers: ["artabramov"]
openGraphImageUrl: "https://opengraph.githubassets.com/dc8fc577554af3dae70b4a5679a4a6a10271bff44ef750bfa541c712c0d940d3/artabramov/hidden"
promoted: true
postedAt: "2026-10-29T05:58:03.283Z"
---

# Hidden S3 — encrypted self-hosted S3 storage

This is S3-compatible object storage for sensitive data on privately
managed infrastructure. It provides filesystem-level encryption
independently of the S3 layer while maintaining full S3 compatibility.

Built on `gocryptfs` and `VersityGW`, the system combines encrypted
storage with an S3-compatible gateway. `VersityGW` provides the S3 API,
IAM, and WebGUI, while `FastAPI` manages the storage lifecycle through
an OpenAPI interface.

It runs as a `Docker` container with persistent state stored in two
volumes: `cipherdir` for encrypted data and a bind-mounted `secrets`
volume for internal secrets. The `secrets` volume can reside on
removable media or a separate remote host.

The `cipherdir` is mounted through `gocryptfs` using an encrypted
passphrase stored in `secrets` and unlocked with a `master password`.
When unmounted, the data remains encrypted and inaccessible.

The encrypted filesystem uses a `POSIX` layout, storing S3 objects as
regular files and directories together with IAM data. This allows files
and directories to be transferred directly into or out of the storage
without conversion.

For emergency recovery, the…
