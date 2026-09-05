---
repo: "assura-lang/assura"
name: "assura"
description: "Contract-first AI-native language. Write what it should do. AI proves it does."
readmeQualityOk: true
url: "https://github.com/assura-lang/assura"
homepage: "https://assura-lang.github.io/assura/"
language: "Rust"
languages: ["Rust"]
languagePcts: [98]
topics: ["ai", "compiler", "contracts", "formal-verification", "programming-language", "rust", "smt", "verification", "z3"]
stars: 6
forks: 2
openIssues: 4
closedIssues: 649
watchers: 0
contributors: 2
recentReleases: 7
createdAt: "2026-06-11T00:15:32Z"
lastCommitAt: "2026-09-05T07:49:03Z"
lastReleaseAt: "2026-08-24T00:53:21Z"
status: "thriving"
tags: ["hidden_gem", "release_machine"]
healthScore: 99
undervaluedScore: 72
maintainers: ["SebTardif", "dependabot[bot]", "assura-auto-approve[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1265626039/7a3d2f30-dada-46ad-86dc-97862380932d"
discussionCount: 3
---

# Assura

**Write what it should do. AI proves it does.**

A contract-first language for the AI era. Humans write behavioral contracts.
AI writes verified implementations. The compiler proves correctness
mathematically. Ships as Rust.

*Regenerate: `vhs assets/demo/assura-check.tape` (requires [VHS](https://github.com/charmbracelet/vhs) and `assura` on `PATH`).*

```assura
contract HeartbeatResponse {
  input(record_length: Nat, payload_length: Nat, padding_length: Nat)

  requires { record_length >= 3 }              // TLS header: type + 2-byte length
  requires { payload_length >= 1 }
  requires { padding_length >= 16 }            // RFC 6520 minimum
  requires { 3 + payload_length + padding_length <= record_length }

  ensures  { payload_length + 16 <= record_length }   // response fits in buffer
  effects  { pure }
}
```

You write *what*. AI figures out *how*. Z3 proves it. `rustc` compiles the result.

## The Problem

AI writes most new code. Nobody trusts it. AI-generated tests mirror
implementation bugs: if `divide(10, 0)` returns `0` due to a bug, the
generated test asserts `== 0`. The test passes. The bug ships.

Assura replaces trust with proof. Contracts define *what*…
