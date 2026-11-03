---
repo: "NVIDIA/multi-storage-client"
name: "multi-storage-client"
description: "Unified high-performance Python client for object and file stores."
readmeQualityOk: true
url: "https://github.com/NVIDIA/multi-storage-client"
homepage: "https://nvidia.github.io/multi-storage-client/"
language: "Python"
languages: ["Python"]
languagePcts: [92]
stars: 89
forks: 29
openIssues: 1
closedIssues: 13
watchers: 5
contributors: 25
recentReleases: 0
createdAt: "2024-11-12T16:10:31Z"
lastCommitAt: "2026-11-03T18:40:09Z"
lastReleaseAt: "2025-04-12T01:29:07Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 97
undervaluedScore: 52
maintainers: ["joshuarobinson", "shunjiad", "commiterate"]
openGraphImageUrl: "https://opengraph.githubassets.com/f7c90a1eb1fb8608c4f16c2c64f2a18651d37b04d63cfec3614bfbfc62144544/NVIDIA/multi-storage-client"
discussionCount: 0
---

# Multi-Storage Client

The Multi-Storage Client (MSC) is a unified high-performance Python client for object and file stores such as AWS S3, Azure Blob Storage, Google Cloud Storage (GCS), NVIDIA AIStore, Oracle Cloud Infrastructure (OCI) Object Storage, POSIX file systems, and more.

It provides a generic interface to interact with objects and files across various storage services. This lets you spend less time learning each storage service's unique interface and lets you change where data is stored without having to change how your code accesses it.

## Getting Started

See the [documentation](https://nvidia.github.io/multi-storage-client/) to get started.

## Contribution Guidelines

- Start here: `CONTRIBUTING.md`
- Code of Conduct: `CODE_OF_CONDUCT.md`

### Layout

Important landmarks:

```text
Key:
🤖 = Generated

.
│   # Release notes.
├── .release_notes
│   └── ...
│
│   # Client Python package.
├── multi-storage-client
│   └── ...
│
│   # Client documentation.
├── multi-storage-client-docs
│   └── ...
│
│   # Internal helper scripts.
├── multi-storage-client-scripts
│   └── ...
│
│   # Client web UI.
├── multi-storage-explorer
│   └── ...
│
│   # Nix flake outputs.
├──…
