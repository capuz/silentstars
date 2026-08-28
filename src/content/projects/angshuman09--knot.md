---
repo: "Angshuman09/knot"
name: "knot"
description: "a distributed event sourced ledger engine."
readmeQualityOk: true
url: "https://github.com/Angshuman09/knot"
language: "Rust"
languages: ["Rust"]
languagePcts: [98]
topics: ["rust", "tokio"]
stars: 15
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-08-03T16:36:56Z"
lastCommitAt: "2026-08-28T14:33:00Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 78
undervaluedScore: 20
maintainers: ["Angshuman09"]
openGraphImageUrl: "https://opengraph.githubassets.com/8db5468444385d3f2dfc3da1f2382b780f81d0b39c9fa65b6142dad036bde5c0/Angshuman09/knot"
---

# Knot

Knot is a distributed event-sourced ledger engine built in Rust.

The system includes a leader that accepts operations and followers that replicate the event log. Followers can catch up on missed events and receive new events in real time.

The ledger supports deposits, withdrawals, transfers, and balance queries, with the state machine keeping account balances in sync with the event log.

Single-leader replication, logical (row-based) log shipping:

- One leader accepts client writes (deposit, withdraw, transfer), assigns
  each one the next offset in an in-memory event log, and applies it to a
  local account-balance table.
- Any number of followers connect to the leader on a separate port, catch
  up on whatever they are missing, and then receive new entries as they are
  committed. Followers replay the same log independently to arrive at the
  same balances, no balance data is ever sent directly.
- Writes are only accepted by the leader.

Full wire protocol and message formats: see `SPEC.md`.

## Sequence Diagram

```mermaid
sequenceDiagram
    autonumber

    actor Client
    participant L as Leader :9000
    participant LL as Leader Ledger
    participant F as…
