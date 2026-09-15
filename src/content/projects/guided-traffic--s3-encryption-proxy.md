---
repo: "guided-traffic/s3-encryption-proxy"
name: "s3-encryption-proxy"
description: "A Go-based proxy that provides transparent encryption/decryption for S3 objects with envelope encryption."
readmeQualityOk: true
url: "https://github.com/guided-traffic/s3-encryption-proxy"
homepage: "https://s3ep.com"
language: "HTML"
languages: ["HTML", "Go"]
languagePcts: [59, 39]
topics: ["encryption", "envelope-encryption", "proxy", "s3", "security"]
stars: 5
forks: 1
openIssues: 1
closedIssues: 2
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2025-08-30T07:19:03Z"
lastCommitAt: "2026-09-15T08:54:07Z"
lastReleaseAt: "2025-09-01T05:14:08Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 93
undervaluedScore: 81
maintainers: ["hans-fischer", "guided-traffic-bot", "semantic-release-bot"]
openGraphImageUrl: "https://opengraph.githubassets.com/de88b460f97da8dd86993dcc16640cfd85805153a176bd2aa59a0e12e7d004f4/guided-traffic/s3-encryption-proxy"
---

# S3 Encryption Proxy

A Go-based proxy that provides transparent encryption/decryption for S3 objects with envelope encryption, streaming multipart uploads, and an authenticated storage format that refuses a modified object rather than reporting it.

## Overview

The S3 Encryption Proxy intercepts S3 API calls and automatically:
- **Encrypts** objects before storing them in S3 using envelope encryption (unique DEK per object)
- **Decrypts** objects when retrieving them from S3 with automatic provider detection
- **Refuses** a modified object: every 64 KiB segment carries its own AES-256-GCM tag, bound to its index and to the object key ([storage format](#storage-format-s3ep-gcm-seg-v2))
- **Maintains** S3 API compatibility with streaming support for large files, with the
  exceptions listed under [S3 API behaviour worth knowing](#s3-api-behaviour-worth-knowing)

**Key Features:**
- 🔒 **Transparent Encryption**: No client-side changes required
- 🔑 **Envelope Encryption**: one local AES-256 key encryption key, a unique AES data encryption key per object, and an authenticated wrap
- 🚀 **S3 API Compatible**: Works with existing S3 clients and tools
- 📤 **Streaming Uploads**: an…
