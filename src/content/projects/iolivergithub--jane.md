---
repo: "iolivergithub/jane"
name: "jane"
description: "Jane Attestation Server"
readmeQualityOk: true
url: "https://github.com/iolivergithub/jane"
language: "Go"
languages: ["Go"]
languagePcts: [52]
topics: ["arm", "attestation", "cca", "ccc", "confidential-computing", "forensics", "mars", "security", "sgx", "sgx-enclaves"]
stars: 7
forks: 2
openIssues: 1
closedIssues: 8
watchers: 2
contributors: 3
recentReleases: 0
createdAt: "2024-06-30T15:34:18Z"
lastCommitAt: "2026-10-09T18:55:38Z"
lastReleaseAt: "2026-02-05T09:49:07Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 97
undervaluedScore: 70
maintainers: ["iolivergithub"]
openGraphImageUrl: "https://opengraph.githubassets.com/d6696b82d5a4374a27305d9f58bcf819bb7db3ae2e07b868df344109ac1a9750/iolivergithub/jane"
---

# JANE - Attestation Engine

This is the source for the Jane Attestation Engine, a fork and major rewrite of the former A10 Nokia Attestation Engine.

This software is used as the remote attestation engine as part of a trusted and/or confidential computing environment. This is the system that holds the known good values about devices and other elements, and provides the attestation and validation mechanisms.

The software here is provided as-is - there is no security (http for the win!) and the error checking in places is completely missing. The point of this was to explore more interesting mechanisms for remote attestation and to implement ideas from the IEFT RATS specification. *READ* the security section!!!

Refer to the [contents](https://github.com/iolivergithub/jane/blob/HEAD/docs/contents.md) in the `docs` directory.
