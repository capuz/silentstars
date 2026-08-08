---
repo: "zailic/nanvc"
name: "nanvc"
description: "A node client for HashiCorp's Vault written in typescript"
readmeQualityOk: true
url: "https://github.com/zailic/nanvc"
homepage: "https://zailic.github.io/nanvc/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [89]
topics: ["vault", "vault-api", "typescript", "hashicorp"]
stars: 5
forks: 2
openIssues: 1
closedIssues: 0
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2018-03-04T20:31:05Z"
lastCommitAt: "2026-08-08T04:35:26Z"
lastReleaseAt: "2026-04-12T20:56:28Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 78
undervaluedScore: 72
maintainers: ["renovate[bot]", "zailic", "Copilot"]
openGraphImageUrl: "https://opengraph.githubassets.com/e6f48e542103b70137868eaaf19bdc805e678e2ed3ee6f75f7ea75c1f17a1512/zailic/nanvc"
---

# nanvc

`nanvc` is a lightweight TypeScript client for the HashiCorp Vault HTTP API.
It is built for Node.js applications that need typed Vault access without a large framework around secrets, auth, or infrastructure automation.

Use it for typed KV v1/KV v2 secret workflows, AppRole authentication, response wrapping, system policy helpers, database secrets, optional request logging, and raw Vault API calls when you need an escape hatch.

Full documentation: [zailic.github.io/nanvc](https://zailic.github.io/nanvc/)

## Why nanvc

- **Typed Vault client for TypeScript**: exported request and response types for the v2 client surface.
- **KV shortcuts that feel like the Vault CLI**: `read`, `write`, `delete`, and `list` support KV v1 by default and KV v2 with `{ engineVersion: 2 }`.
- **Focused high-level APIs**: helpers for AppRole, KV v1, KV v2, system policies, response wrapping, and database secrets.
- **Raw API escape hatch**: `RawVaultClient` lets you call unsupported Vault endpoints without leaving the same client setup.
- **Result-based error handling**: use tuple-style results or `.unwrap()`, `.unwrapOr()`, and related helpers.
- **Production-friendly basics**: ESM, Node.js…
