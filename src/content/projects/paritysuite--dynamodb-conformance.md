---
repo: "paritysuite/dynamodb-conformance"
name: "dynamodb-conformance"
description: "An independent DynamoDB conformance suite. 1,920 tests scored against live AWS DynamoDB, per region. The Parity Suite board."
readmeQualityOk: true
url: "https://github.com/paritysuite/dynamodb-conformance"
homepage: "https://paritysuite.org"
language: "TypeScript"
languages: ["TypeScript", "JavaScript"]
languagePcts: [55, 44]
topics: ["aws", "conformance", "dynamodb", "dynamodb-local", "localstack", "testing", "dynoxide", "typescript", "dynalite", "extenddb"]
stars: 23
forks: 7
openIssues: 34
closedIssues: 140
watchers: 0
contributors: 7
recentReleases: 8
createdAt: "2026-03-23T16:44:37Z"
lastCommitAt: "2026-11-14T21:59:04Z"
lastReleaseAt: "2026-10-27T20:24:41Z"
status: "thriving"
tags: ["hidden_gem", "release_machine"]
healthScore: 95
undervaluedScore: 59
maintainers: ["hicksy", "github-actions[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/95afb6e76bc12dc617608b5715a7d0b4fabbb43bda0139c4e52fafecf1a4165e/paritysuite/dynamodb-conformance"
---

# Parity Suite: the DynamoDB conformance suite

An independent test suite that validates any DynamoDB-compatible endpoint against real DynamoDB behaviour. It works against DynamoDB, DynamoDB Local, Dynoxide, Dynoxide (wasm), Dynalite, LocalStack, ExtendDB, Floci, Ministack, Kumo, AWS Emulator, Alternator, Phoenix-Adapters, or anything else that implements the DynamoDB HTTP API.

## Why this exists

There's no official AWS conformance suite for DynamoDB. The closest thing the community has is Dynalite's test suite, but over half of its tests are stale against current DynamoDB behaviour (verified March 2026). DynamoDB Local ships with no test suite at all. Every emulator author ends up guessing at behaviour and testing against their own assumptions.

This suite fixes that by running every test against real DynamoDB first, recording what passes, and using those results as the baseline. An emulator only passes if it gives the same answer DynamoDB does.

**Live results:** [the Parity Suite board](https://paritysuite.org) - the full table for every target, tracked run over run.

## Quick start

```bash
npm install

# Run against a local target
DYNAMODB_ENDPOINT=http://localhost:8000 npm…
