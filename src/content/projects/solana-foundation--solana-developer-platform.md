---
repo: "solana-foundation/solana-developer-platform"
name: "solana-developer-platform"
description: "Solana Developer Platform API and Dashboard"
readmeQualityOk: true
url: "https://github.com/solana-foundation/solana-developer-platform"
homepage: "https://platform.solana.com"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [96]
stars: 56
forks: 27
openIssues: 0
closedIssues: 65
watchers: 0
contributors: 30
recentReleases: 0
createdAt: "2026-01-28T14:03:56Z"
lastCommitAt: "2026-10-09T18:56:13Z"
lastReleaseAt: "2026-06-16T04:25:10Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 99
undervaluedScore: 49
maintainers: ["multipletwigs", "keeganthomp", "Windscar"]
openGraphImageUrl: "https://opengraph.githubassets.com/3d30ca4bbe56716e8237c6e767dacbe49f76a018d0822166041af6eb947c149c/solana-foundation/solana-developer-platform"
---

# Solana Developer Platform

Solana Developer Platform (SDP) is an enterprise development platform for building Solana applications with wallets, token issuance, payments, compliance checks, and a hosted dashboard.

## Status

SDP is pre-mainnet software. The public repository and APIs are intended for enterprise development, evaluation, and devnet integrations.

This codebase has not been audited. Do not use it to custody production funds, run mainnet financial workflows, or protect regulated production activity without your own review, testing, and security assessment.

Full self-hosting is a work in progress. The repository includes local development and infrastructure helpers, but the primary supported path today is the hosted platform and devnet-oriented development.

The hosted platform is available at https://platform.solana.com and the public docs are at https://platform.solana.com/docs.

## What is in this repo?

- `apps/sdp-api`: Node.js API deployed to Cloud Run, OpenAPI source, route handlers, Postgres/Redis integrations
- `apps/sdp-web`: dashboard application
- `apps/sdp-docs`: public documentation site and generated API reference
- `packages/sdp-types`: shared…
