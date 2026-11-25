---
repo: "Tallybook-Org/tallybook"
name: "tallybook"
description: "Tallybook is settlement bookkeeping for services that charge per HTTP request - APIs paid by AI agents and other machines over Stellar, using the x402 protocol, MPP charge mode, or MPP payment channels."
readmeQualityOk: true
url: "https://github.com/Tallybook-Org/tallybook"
language: "Go"
languages: ["Go"]
languagePcts: [95]
topics: ["blockchain", "go", "payments", "settlement", "soroban", "stellar", "web3", "x402"]
stars: 6
forks: 48
openIssues: 70
closedIssues: 231
watchers: 0
contributors: 43
recentReleases: 0
createdAt: "2026-09-08T22:42:22Z"
lastCommitAt: "2026-11-25T13:19:34Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem", "fork_magnet"]
healthScore: 95
undervaluedScore: 67
maintainers: ["ciscokwiz", "adelekevictor12", "Temmy2026"]
openGraphImageUrl: "https://opengraph.githubassets.com/ac5a73c1de8eeef381bf3fc08ad5cc5e6063fa24e871c72b35588aa99a48991f/Tallybook-Org/tallybook"
---

# Tallybook

Tallybook is settlement bookkeeping for services that charge per HTTP
request — APIs paid by AI agents and other machines over Stellar, using
the [x402](https://www.x402.org/) protocol, MPP charge mode, or MPP
payment channels.
## Relationship to tallybook-contracts

The Soroban contracts Tallybook settles against — `price_book`,
`statement_registry` — are built, deployed, and owned by a separate
repository, `tallybook-contracts`. This repository consumes their
deployed, immutable interfaces (contract IDs supplied via
`TB_PRICE_BOOK_ID` / `TB_STATEMENT_REGISTRY_ID`) and restates none of
their logic: no contract code is vendored or forked here, and if an
interface here looks wrong, the fix belongs in that repository, not this
one. Tallybook also consumes a third, external contract it does not own
at all — see below.

This repository is everything off-chain: a metering collector, a
settlement daemon, and a chain indexer, all backed by Postgres.
