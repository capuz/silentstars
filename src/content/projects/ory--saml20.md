---
repo: "ory/saml20"
name: "saml20"
description: "SAML 2.0 parser for Node.js"
readmeQualityOk: true
url: "https://github.com/ory/saml20"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
topics: ["enterprise-software", "saml", "saml2"]
stars: 16
forks: 12
openIssues: 2
closedIssues: 10
watchers: 0
contributors: 17
recentReleases: 0
createdAt: "2021-08-18T13:40:11Z"
lastCommitAt: "2026-11-06T11:24:30Z"
lastReleaseAt: "2022-08-01T21:40:14Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 95
undervaluedScore: 75
maintainers: ["dependabot[bot]", "deepakprabhakara"]
openGraphImageUrl: "https://opengraph.githubassets.com/106f24ed3ef7232b485f3ee11c9f42ade2bac136f6441d0480cc0e0dc7f11787/ory/saml20"
discussionCount: 0
---

# SAML 2.0 parser and validator

A SAML 2.0 library for Node.js: it validates SAML Responses, and creates and parses AuthnRequests, logout messages and metadata. It started as a fork of [saml20](https://github.com/leandrob/saml20) and has since diverged from it. Ory maintains it, and it is published on npm as [`@boxyhq/saml20`](https://www.npmjs.com/package/@boxyhq/saml20).

## Installation

```bash
$ npm install @boxyhq/saml20
```

## Usage

`validate()` returns a promise.

### saml.validate(rawResponse, options)

Verifies a SAML Response (or a lone Assertion) and resolves with the user's profile. It rejects when anything fails: an unsuccessful `StatusCode`, a missing or invalid signature, an expired assertion, or a failed audience, `InResponseTo`, `Recipient` or replay check.

`rawResponse` is the XML as a string (decode the base64 `SAMLResponse` form field first).

`options` (TypeScript: `ValidateOptions`):

- `publicKey`: the trusted IdP signing certificate, as base64 DER or PEM. Several certificates (for key rotation) are separated by commas.
- `thumbprint`: the SHA-1 thumbprint(s) of a trusted certificate, comma-separated. The certificate itself is taken from the `KeyInfo`…
