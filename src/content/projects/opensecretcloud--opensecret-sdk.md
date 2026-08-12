---
repo: "OpenSecretCloud/OpenSecret-SDK"
name: "OpenSecret-SDK"
description: "OpenSecret SDK"
readmeQualityOk: true
url: "https://github.com/OpenSecretCloud/OpenSecret-SDK"
homepage: "https://www.npmjs.com/package/@opensecret/react"
language: "TypeScript"
languages: ["TypeScript", "Rust"]
languagePcts: [54, 45]
stars: 21
forks: 9
openIssues: 1
closedIssues: 8
watchers: 2
contributors: 5
recentReleases: 1
createdAt: "2024-11-07T20:40:06Z"
lastCommitAt: "2026-08-12T05:13:29Z"
lastReleaseAt: "2026-06-13T06:58:35Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 93
undervaluedScore: 65
maintainers: ["AnthonyRonning"]
openGraphImageUrl: "https://opengraph.githubassets.com/e9de7db28877ed25169f333b22f2e4f961c9ab420d18bc38ef8af718d5b5a1e3/OpenSecretCloud/OpenSecret-SDK"
---

# OpenSecret SDKs

This repository contains the TypeScript/React and Rust clients used by Maple
and OpenSecret's internal applications. Both clients establish attested,
end-to-end encrypted sessions with an OpenSecret backend and expose the API
surface needed by those applications.

The developer/platform API remains part of the TypeScript SDK for internal
OpenSecret workflows. This repository does not maintain or deploy a separate
documentation website; keep behavior documentation close to the exported code
and tests.

## Repository layout

- `src/` — `@opensecret/react`, including the React providers, encrypted API
  client, attestation policy, model/conversation APIs, and internal developer
  platform client.
- `rust/` — the `opensecret` crate used by native clients.
- `docs/PLATFORM.md` — internal developer/platform API notes.
- `.github/workflows/` — TypeScript and Rust validation.

## Security model

For non-local endpoints, both SDKs require HTTPS, verify AWS Nitro attestation,
and enforce an environment-scoped PCR0 trust policy before completing key
exchange. Official PCR0 histories are signed and bundled with the SDKs.

Mock attestation is limited to exact loopback…
