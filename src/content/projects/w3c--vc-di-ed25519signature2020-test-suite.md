---
repo: "w3c/vc-di-ed25519signature2020-test-suite"
name: "vc-di-ed25519signature2020-test-suite"
description: "Ed25519Signature2020 Data Integrity test suite"
readmeQualityOk: true
url: "https://github.com/w3c/vc-di-ed25519signature2020-test-suite"
homepage: "https://w3c.github.io/vc-di-ed25519signature2020-test-suite/"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [99]
topics: ["standard", "vc-wg", "w3c"]
stars: 6
forks: 9
openIssues: 6
closedIssues: 4
watchers: 22
contributors: 89
recentReleases: 0
createdAt: "2022-01-13T20:12:37Z"
lastCommitAt: "2026-07-28T14:57:43Z"
status: "watched"
tags: ["community_watch", "fork_magnet"]
healthScore: 87
undervaluedScore: 42
maintainers: ["BigBlueHat"]
openGraphImageUrl: "https://opengraph.githubassets.com/cfc6d5994c84bc3a687fa4e3186ef76cf7e2af7142ac8231bda38d6d97efcb00/w3c/vc-di-ed25519signature2020-test-suite"
---

# [Ed25519Signature2020](https://www.w3.org/TR/vc-di-eddsa/#the-ed25519signature2020-suite) Cryptosuite Test Suite

## Table of Contents

- [Background](#background)
- [Install](#install)
- [Usage](#usage)
- [Implementation](#implementation)
- [Docker Integration (TODO)](#docker-integration-todo)
- [Contribute](#contribute)
- [License](#license)

## Background
Provides interoperability tests for verifiable credential processors
(issuers and verifiers) that support [Ed25519Signature2020](https://www.w3.org/TR/vc-di-eddsa/#the-ed25519signature2020-suite).

## Install

```sh
npm i
```

## Usage

```sh
npm test
```

## Implementation

You will need an issuer and verifier that are conformant to the
[VC API](https://w3c-ccg.github.io/vc-api/)
and are capable of handling issuance and verification of Verifiable Credentials
with the `Ed25519Signature2020` proof type.

To add your implementation to this test suite, you will need to add 2 endpoints
to your implementation manifest:
- A credential issuer endpoint (`/credentials/issue`) in the `issuers`
  property.
- A credential verifier endpoint (`/credentials/verify`) in the `verifiers`
  property.

All endpoints will need the tag…
