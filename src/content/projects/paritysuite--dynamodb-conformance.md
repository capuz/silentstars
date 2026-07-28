---
repo: "paritysuite/dynamodb-conformance"
name: "dynamodb-conformance"
description: "An independent DynamoDB conformance suite. 998 tests scored against live AWS DynamoDB, per region. The Parity Suite board."
readmeQualityOk: true
url: "https://github.com/paritysuite/dynamodb-conformance"
homepage: "https://paritysuite.org"
language: "TypeScript"
languages: ["TypeScript", "JavaScript"]
languagePcts: [62, 37]
topics: ["aws", "conformance", "dynamodb", "dynamodb-local", "localstack", "testing", "dynoxide", "typescript", "dynalite", "extenddb"]
stars: 16
forks: 4
openIssues: 5
closedIssues: 31
watchers: 0
contributors: 5
recentReleases: 0
createdAt: "2026-03-23T16:44:37Z"
lastCommitAt: "2026-07-28T14:59:18Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 97
undervaluedScore: 51
maintainers: ["hicksy", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/9c4e4b177770d0333253a86470337605d0d607269d08efcc1d896ac7426d82d5/paritysuite/dynamodb-conformance"
---

# Parity Suite: the DynamoDB conformance suite

An independent test suite that validates any DynamoDB-compatible endpoint against real DynamoDB behaviour. It works against DynamoDB, DynamoDB Local, Dynoxide, Dynoxide (wasm), Dynalite, LocalStack, ExtendDB, Floci, Ministack, or anything else that implements the DynamoDB HTTP API.

## Why this exists

There's no official AWS conformance suite for DynamoDB. The closest thing the community has is Dynalite's test suite, but over half of its tests are stale against current DynamoDB behaviour (verified March 2026). DynamoDB Local ships with no test suite at all. Every emulator author ends up guessing at behaviour and testing against their own assumptions.

This suite fixes that by running every test against real DynamoDB first, recording what passes, and using those results as the baseline. An emulator only passes if it gives the same answer DynamoDB does.

## Quick start

```bash
npm install

# Run against a local target
DYNAMODB_ENDPOINT=http://localhost:8000 npm test

# Quicker run, excludes GSI lifecycle tests (see runtime notes below)
DYNAMODB_ENDPOINT=http://localhost:8000 npm run test:quick

# Run a specific tier…
