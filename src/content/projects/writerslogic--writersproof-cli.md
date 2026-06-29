---
repo: "writerslogic/writersproof-cli"
name: "writersproof-cli"
description: "Cryptographic authorship witnessing for writers and creators"
url: "https://github.com/writerslogic/writersproof-cli"
homepage: "https://writerslogic.com"
language: "Rust"
languages: ["Rust"]
languagePcts: [90]
topics: ["chain-of-custody", "cli-app", "desktop-app", "evidence-accumulation", "proof-of-process", "verifiable-delay-function"]
stars: 7
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 1
createdAt: "2026-02-04T11:36:30Z"
lastCommitAt: "2026-06-29T07:23:27Z"
lastReleaseAt: "2026-06-01T23:52:35Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 74
undervaluedScore: 51
maintainers: ["dcondrey", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/795d391dd91f9847d7b679589f6499ba3ed4da710da3e4a6fe79862e13c7e6e2/writerslogic/writersproof-cli"
---

<strong>CPoE</strong><br>
  Cryptographic authorship witnessing for writers and creators
</p>

</p>

</p>

---

> [!NOTE]
> **Patent Pending:** USPTO Application No. 19/460,364 — *"Falsifiable Process Evidence via Cryptographic Causality Locks and Behavioral Attestation"*

---

## Overview

**CPoE** is a cryptographic engine and CLI that produces independently verifiable, tamper-evident process evidence constraining when and how a document could have been created. It implements the [draft-condrey-rats-pop](https://datatracker.ietf.org/doc/draft-condrey-rats-pop/) IETF protocol specification.

This monorepo contains the full CPoE ecosystem:

| Component | Path | Target | Description | License |
|:----------|:-----|:-------|:------------|:--------|
| **cpoe** (lib: `cpoe_engine`) | [`crates/cpoe`](crates/cpoe) | Native | Cryptographic engine, FFI, platform captures, storage | SSPL-1.0 |
| **authorproof-protocol** | [`crates/authorproof-protocol`](crates/authorproof-protocol) | Native + **WASM** | Wire format (CBOR/COSE), forensic models, RFC types | Apache-2.0 |
| **cpoe-jitter** | [`crates/cpoe-jitter`](crates/cpoe-jitter) | Native + **no_std** | Timing entropy primitive for…
