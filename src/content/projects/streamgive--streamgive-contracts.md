---
repo: "StreamGive/streamgive-contracts"
name: "streamgive-contracts"
description: "Soroban contracts for StreamGive: a verified NGO registry and a vault that streams donations per second on Stellar."
readmeQualityOk: true
url: "https://github.com/StreamGive/streamgive-contracts"
language: "Rust"
languages: ["Rust"]
languagePcts: [94]
stars: 9
forks: 46
openIssues: 14
closedIssues: 127
watchers: 0
contributors: 34
recentReleases: 0
createdAt: "2026-09-03T15:08:07Z"
lastCommitAt: "2026-10-03T22:03:58Z"
status: "newborn"
tags: ["needs_contributors", "hidden_gem", "fork_magnet"]
healthScore: 96
undervaluedScore: 65
maintainers: ["Ashborne267", "francisprecious061", "Ahbiz"]
openGraphImageUrl: "https://opengraph.githubassets.com/56078275564594f4649376917f11fea96a5f4cf80d8fda9411758b1a96f19dce/StreamGive/streamgive-contracts"
---

# StreamGive — Contracts

Soroban smart contracts powering StreamGive, a recurring/streaming donation
platform for verified NGOs on Stellar.

For how these contracts fit with the backend and frontend — and how a
donation flows end to end — see [docs/ARCHITECTURE.md](https://github.com/StreamGive/streamgive-contracts/blob/HEAD/docs/ARCHITECTURE.md).
For who these contracts defend against, what the admin can and cannot do, and
which risks are knowingly accepted, see
[docs/THREAT_MODEL.md](https://github.com/StreamGive/streamgive-contracts/blob/HEAD/docs/THREAT_MODEL.md).

## Contracts

- `ngo-registry` — on-chain NGO application, verification, and registry
- `donation-vault` — streaming donation vault (create / withdraw / cancel / modify streams)

## Release profile

The workspace `Cargo.toml`'s `[profile.release]` sets several non-default
flags. Soroban's resource-fee model charges per byte of the deployed wasm
and per CPU instruction executed, so a smaller, more predictable binary
isn't just nice-to-have — it directly lowers what every invocation of
these contracts costs:

| Setting             | Value       | Why…
