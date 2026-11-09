---
repo: "permguard/permguard"
name: "permguard"
description: "The security overlay for the agentic era."
readmeQualityOk: true
url: "https://github.com/permguard/permguard"
homepage: "https://permguard.com"
language: "Rust"
languages: ["Rust"]
languagePcts: [97]
topics: ["authorization", "authz", "cloudnative", "policy-as-code", "permissions", "security"]
stars: 72
forks: 8
openIssues: 0
closedIssues: 5
watchers: 2
contributors: 8
recentReleases: 0
createdAt: "2024-04-29T16:11:50Z"
lastCommitAt: "2026-11-09T00:54:11Z"
lastReleaseAt: "2026-03-11T10:02:47Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 53
maintainers: ["ngallo", "os-permguard"]
openGraphImageUrl: "https://opengraph.githubassets.com/0751cfafd2967bf51e2f4c8e2c5845ea9b8a181adb98d21ccddc6dbda4a613c4/permguard/permguard"
---

# Permguard

**Authorization policy, versioned like code and shipped like code.**

Permguard keeps your policies in a content-addressed, Git-like ledger.
It distributes signed versions over a protocol built for it, and answers *can this subject do this to this?* either from its own Data Plane, or from **inside your process, at zero network cost**.
Every answer names the exact policies and commit that decided it, and can be kept as signed evidence.

## How it works

You write policy in a workspace, test it offline, and `apply` it like code.
The Control Plane keeps it as an immutable commit under a signed head.
Every Data Plane mirrors it, verifies the head before using it, and decides next to the workload.
When nothing permits, the answer is deny, and every answer leaves evidence you can verify later.

## One Server, independent planes

A **Permguard Server** is one process with exactly one **Host** and zero or more **planes**.
The Host owns trust and operations: identity, authentication and authorization, keys and secrets, audit, membership, streams, storage and lifecycle.
A plane owns one business domain, and receives typed, least-privilege handles from the Host instead of…
