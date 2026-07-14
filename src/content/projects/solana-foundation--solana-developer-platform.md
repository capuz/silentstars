---
repo: "solana-foundation/solana-developer-platform"
name: "solana-developer-platform"
description: "Solana Developer Platform API and Dashboard"
readmeQualityOk: true
url: "https://github.com/solana-foundation/solana-developer-platform"
homepage: "https://platform.solana.com"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [92]
stars: 42
forks: 13
openIssues: 22
closedIssues: 21
watchers: 0
contributors: 46
recentReleases: 10
createdAt: "2026-01-28T14:03:56Z"
lastCommitAt: "2026-07-14T05:53:36Z"
lastReleaseAt: "2026-06-16T04:25:10Z"
status: "thriving"
tags: ["hidden_gem", "release_machine"]
healthScore: 89
undervaluedScore: 44
maintainers: ["GuiBibeau", "multipletwigs", "arseniy-nikitochkin"]
openGraphImageUrl: "https://opengraph.githubassets.com/abf1d1ebbe16f27f24bc2f24bd0bb826de67bcf5b5a0cd46c03c683f0a5d744e/solana-foundation/solana-developer-platform"
---

# Solana Developer Platform

Solana Developer Platform (SDP) is an enterprise development platform for building Solana applications with wallets, token issuance, payments, compliance checks, and a hosted dashboard.

## Status

SDP is pre-mainnet software. The public repository and APIs are intended for enterprise development, evaluation, and devnet integrations.

This codebase has not been audited. Do not use it to custody production funds, run mainnet financial workflows, or protect regulated production activity without your own review, testing, and security assessment.

Full self-hosting is a work in progress. The repository includes local development and infrastructure helpers, but the primary supported path today is the hosted platform and devnet-oriented development.

The hosted platform is available at https://platform.solana.com and the public docs are at https://platform.solana.com/docs.

## What is in this repo?

- `apps/sdp-api`: Cloudflare Workers API, OpenAPI source, route handlers, Postgres/KV integrations
- `apps/sdp-web`: dashboard application
- `apps/sdp-docs`: public documentation site and generated API reference
- `packages/sdp-types`: shared runtime types and…
