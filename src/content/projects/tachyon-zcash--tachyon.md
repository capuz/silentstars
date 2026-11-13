---
repo: "tachyon-zcash/tachyon"
name: "tachyon"
description: "zcash_tachyon Rust library for Tachyon"
readmeQualityOk: true
url: "https://github.com/tachyon-zcash/tachyon"
homepage: "https://tachyon.z.cash/"
language: "Rust"
languages: ["Rust"]
languagePcts: [99]
stars: 32
forks: 11
openIssues: 53
closedIssues: 39
watchers: 2
contributors: 8
recentReleases: 0
createdAt: "2026-02-17T01:43:45Z"
lastCommitAt: "2026-11-13T04:37:42Z"
status: "thriving"
tags: []
healthScore: 84
undervaluedScore: 47
maintainers: ["alxiong", "turbocrime", "LucidSamuel"]
openGraphImageUrl: "https://opengraph.githubassets.com/e468700aeb6b882b5a9cb71d848291a39a650c72f43ad54f03142f4bca82927b/tachyon-zcash/tachyon"
---

# Tachyon

The Tachyon shielded transaction protocol for Zcash.

## Architecture

### Transaction Structure

A **bundle** contains actions, a value balance, and a binding signature.
Each **action** carries a value commitment (`cv`), a randomized verification
key (`rk`), and a spend authorization signature (`sig`).

**Tachygrams** (nullifiers and note commitments) live in the **stamp**, not
in the action. This separation enables stamp stripping during proof
aggregation while actions retain their authorization.

```mermaid
classDiagram
    class Bundle["Bundle&lt;Stamp&gt;"] {
        actions: Action[]
        value_balance: i64
        binding_sig: BindingSignature
        stamp: Stamp
    }
    class Action {
        cv: value::Commitment
        rk: RandomizedVerificationKey
        sig: SpendAuthSignature
    }
    class Stamp {
        tachygrams: Tachygram[]
        anchor: Anchor
        proof: Proof
    }
    Bundle *-- Action
    Bundle *-- Stamp
```

## Status

Core cryptographic plumbing is implemented and tested:

- Key derivation (PRF^expand with sign normalization)
- Value commitments (Pedersen over Pallas, shared generators with Orchard)
- Spend authorization…
