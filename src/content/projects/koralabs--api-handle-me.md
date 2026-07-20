---
repo: "koralabs/api.handle.me"
name: "api.handle.me"
description: "A downloadable and containerized decentralized API for Handles"
readmeQualityOk: true
url: "https://github.com/koralabs/api.handle.me"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [97]
stars: 14
forks: 1
openIssues: 3
closedIssues: 72
watchers: 2
contributors: 3
recentReleases: 0
createdAt: "2022-10-06T20:26:09Z"
lastCommitAt: "2026-07-20T06:32:41Z"
lastReleaseAt: "2023-03-28T21:48:58Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 98
undervaluedScore: 68
maintainers: ["papag00se"]
openGraphImageUrl: "https://opengraph.githubassets.com/420e8e76c80e20264301435f64348990d9d4f4359d003a4856e7244f602c0bf9/koralabs/api.handle.me"
---

# Decentralized Public API for Handles

</p>

This API uses Ogmios to scan Cardano chain data for Handle-related transactions and stores the indexed state in Valkey for fast reads. Snapshot artifacts are generated from that index and can be loaded at startup to reduce catch-up time.

Snapshot uploads are chain-verified before they are written to S3, startup ignores snapshots that do not carry that verification metadata, and the snapshot lambda keeps the latest fixed snapshot plus up to 5 days of archived snapshots in S3.

&nbsp;

# Documentation
- Index: `docs/index.md`
- Product docs: `docs/product/index.md`
- Technical spec: `docs/spec/index.md`
- Runtime entrypoints: `docs/spec/runtime-entrypoints.md`
- OpenAPI contract: `docs/swagger.yml`

## Deployment Ownership

- This repo contains the application source, local runtime scripts, and Lambda entrypoints for `api.handle.me`.
- Deployment orchestration is handled by the sibling repo `../adahandle-deployments`.
- Per the local ecosystem docs, `api.handle.me` deploys directly from `adahandle-deployments`, including the complementary Docker Hub deployment `handles-public-api`.
- Changes in this repo may still require corresponding…
