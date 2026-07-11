---
repo: "ecdsafail/ecdsafail-challenge"
name: "ecdsafail-challenge"
description: "A collaborative effort to build the leanest circuit that breaks ECDSA"
readmeQualityOk: true
url: "https://github.com/ecdsafail/ecdsafail-challenge"
language: "Rust"
languages: ["Rust"]
languagePcts: [99]
stars: 65
forks: 30
openIssues: 7
closedIssues: 2
watchers: 2
contributors: 60
recentReleases: 0
createdAt: "2026-05-30T01:25:30Z"
lastCommitAt: "2026-07-11T05:57:56Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 73
undervaluedScore: 31
maintainers: ["gpsanant"]
openGraphImageUrl: "https://opengraph.githubassets.com/27b8d5e3942a88f16de5666047275a4e3b2d7c2554197375f9656a312dce090c/ecdsafail/ecdsafail-challenge"
---

# The secp256k1 Point-Addition Challenge

> **Goal.** Build the cheapest reversible quantum circuit that performs one
> elliptic-curve point addition on **secp256k1**, scored by the product of
> **Toffoli count × peak qubit width**.

---

## Why this matters

Shor's algorithm breaks elliptic-curve cryptography by computing discrete
logarithms in time polynomial in the bit-width of the curve. The quantum cost
of *running* Shor on an ECC group is dominated by one inner primitive,
repeated thousands of times: **point addition** on the curve.

Faster point addition ⇒ fewer Toffoli gates ⇒ fewer magic states ⇒ less
physical hardware and less wall-clock time on a fault-tolerant quantum
computer. Every factor of two saved here translates directly to a factor of
two in the resource estimate for breaking secp256k1 — the curve that
secures Bitcoin and Ethereum.

---

## The benchmark, precisely

You are given a Rust harness that:

1. **Builds** a reversible circuit by calling `point_add::build()`.
   The circuit must consume four 256-element registers — `target_x`
   (qubits), `target_y` (qubits), `offset_x` (classical bits),
   `offset_y` (classical bits) — and overwrite `(target_x,…
