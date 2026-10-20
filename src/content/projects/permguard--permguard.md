---
repo: "permguard/permguard"
name: "permguard"
description: "The security overlay for the agentic era."
readmeQualityOk: true
url: "https://github.com/permguard/permguard"
homepage: "https://www.permguard.com"
language: "Rust"
languages: ["Rust"]
languagePcts: [98]
topics: ["authorization", "authz", "cloudnative", "policy-as-code", "permissions", "security"]
stars: 71
forks: 8
openIssues: 0
closedIssues: 4
watchers: 2
contributors: 7
recentReleases: 0
createdAt: "2024-04-29T16:11:50Z"
lastCommitAt: "2026-10-20T08:49:54Z"
lastReleaseAt: "2026-03-11T10:02:47Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 53
maintainers: ["ngallo"]
openGraphImageUrl: "https://opengraph.githubassets.com/22d616c298340b042396c982dbeb79fd2a260e9e6118211b9cd3f63bba4ea2d1/permguard/permguard"
---

# Permguard

**Authorization policy, versioned like code and shipped like code.**

Permguard keeps your policies in a content-addressed, Git-like ledger, distributes signed
versions over a protocol built for it, and answers `can this subject do this to this?` —
either from its own data plane, or from **inside your process, at zero network cost**.

```text
       authors + CI                     ┌──────────────────┐
            │                           │  CONTROL  PLANE  │        the ledger
     permguard apply ────── NOTP ──────►│                  │   commits · trees · blobs
            │                           │  zones · ledgers │   signed heads · audit
            │                           └────────┬─────────┘
            │                                    │  NOTP: pull the objects,
            ▼                                    │  verify the signed head
    ┌───────────────┐                            │
    │   workspace   │                ┌───────────┴───────────┐
    │  manifest.yml │                ▼                       ▼
    │  cedar/ rego/ │       ┌─────────────────┐    ┌───────────────────────┐
    │  requests/    │       │   DATA  PLANE   │    │   YOUR…
