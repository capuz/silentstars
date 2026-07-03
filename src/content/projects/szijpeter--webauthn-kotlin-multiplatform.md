---
repo: "szijpeter/webauthn-kotlin-multiplatform"
name: "webauthn-kotlin-multiplatform"
description: "WebAuthn Kotlin Multiplatform"
url: "https://github.com/szijpeter/webauthn-kotlin-multiplatform"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [95]
stars: 20
forks: 0
openIssues: 1
closedIssues: 13
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-02-14T16:07:34Z"
lastCommitAt: "2026-07-03T06:23:15Z"
lastReleaseAt: "2026-03-30T23:06:25Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 96
undervaluedScore: 43
maintainers: ["renovate[bot]", "szijpeter"]
openGraphImageUrl: "https://opengraph.githubassets.com/9a93afb13b6c63be35f40f9348f4a742750cda87d2b1def757905797d6256065/szijpeter/webauthn-kotlin-multiplatform"
discussionCount: 1
---

</p>

# WebAuthn Kotlin Multiplatform

Standards-first Kotlin Multiplatform building blocks for WebAuthn and passkey integrations.

This project helps teams implement passwordless login without rebuilding the hardest parts from scratch. It gives you typed protocol models, strict validation, backend ceremony services, platform passkey clients, and optional transport/adaptation modules that stay close to the WebAuthn specification.

## Why This Project Exists

- WebAuthn is security-sensitive and protocol-heavy.
- Passkey products often need to share logic across backend, Android, and iOS.
- Kotlin teams usually want typed APIs, predictable validation, and flexible integration points instead of one monolithic SDK.

This repo focuses on those needs:

- Standards first: behavior is driven by WebAuthn L3 and related RFCs.
- Kotlin-first: KMP modules share the right logic instead of pushing everything into platform wrappers.
- Flexible integration: use only the modules you need, from pure model/validation all the way to Ktor routes and client transport helpers.
- Heavy lifting included: challenge/origin validation, authenticator-data parsing, signature verification boundaries,…
