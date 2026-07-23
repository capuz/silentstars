---
repo: "affinidi/affinidi-tdk-rs"
name: "affinidi-tdk-rs"
description: "Affinidi Trust Development Kit - Rust"
readmeQualityOk: true
url: "https://github.com/affinidi/affinidi-tdk-rs"
language: "Rust"
languages: ["Rust"]
languagePcts: [99]
topics: ["affinidi"]
stars: 13
forks: 12
openIssues: 3
closedIssues: 39
watchers: 3
contributors: 17
recentReleases: 0
createdAt: "2025-03-02T05:39:50Z"
lastCommitAt: "2026-07-23T06:14:58Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "fork_magnet"]
healthScore: 98
undervaluedScore: 79
maintainers: ["stormer78", "marat-affinidi", "ivan-branets-affinidi"]
openGraphImageUrl: "https://opengraph.githubassets.com/1c88b6ac1ba6574341b88ba74055796bb23ad053a828f419473c133344e9f348/affinidi/affinidi-tdk-rs"
---

# Affinidi Trust Development Kit (TDK) for Rust

A Rust workspace for building secure, privacy-preserving applications using
decentralised identity technologies. The TDK provides libraries and tools for
DID resolution, DIDComm messaging, data integrity proofs, cryptographic
primitives, and more.

> **Disclaimer:** This project is provided "as is" without warranties or
> guarantees. By using this framework, users agree to assume all risks
> associated with its deployment and use, including implementing security and
> privacy measures in their applications. Affinidi assumes no liability for any
> issues arising from the use or modification of the project.

## Workspace Overview

```mermaid
graph TD
    TDK["affinidi-tdk<br/><i>Unified entry point</i>"]

    subgraph Messaging["Affinidi Messaging"]
        SDK["messaging-sdk"]
        DIDCOMM["messaging-didcomm"]
        CORE["messaging-core"]
        TSP["affinidi-tsp"]
        MEDIATOR["messaging-mediator"]
        HELPERS["messaging-helpers"]
        TEXTCLIENT["messaging-text-client"]
    end

    subgraph Resolver["Affinidi DID Resolver"]
        CACHESDK["resolver-cache-sdk"]
        CACHESERVER["resolver-cache-server"]…
