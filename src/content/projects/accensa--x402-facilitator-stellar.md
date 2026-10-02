---
repo: "accensa/x402-facilitator-stellar"
name: "x402-facilitator-stellar"
description: "Conformance spike: a minimal x402 facilitator for Stellar built on @x402/stellar"
readmeQualityOk: true
url: "https://github.com/accensa/x402-facilitator-stellar"
homepage: "https://accensa.github.io/accensa-app/docs/facilitator/overview"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [99]
topics: ["agentic-payments", "facilitator", "payments", "soroban", "stellar", "typescript", "x402"]
stars: 16
forks: 80
openIssues: 50
closedIssues: 277
watchers: 1
contributors: 63
recentReleases: 0
createdAt: "2026-08-11T10:30:28Z"
lastCommitAt: "2026-10-02T10:00:24Z"
status: "newborn"
tags: ["needs_contributors", "hidden_gem", "fork_magnet"]
healthScore: 94
undervaluedScore: 61
maintainers: ["wagmiiii", "classikdev", "mallison031"]
openGraphImageUrl: "https://opengraph.githubassets.com/a2eb6e5d145a8ce23e4eacf99722d458e2b18ec41388343c1d8287edf0beaea7/accensa/x402-facilitator-stellar"
---

<h1>x402-facilitator-stellar</h1>
  <p><strong>An x402 facilitator for Stellar — verify, settle, supported</strong></p>
  <p>
   </p>
  <p>
  </p>
</div>

> Developer infrastructure for x402 on Stellar, built on the Apache-2.0
> [`@x402/stellar`](https://www.npmjs.com/package/@x402/stellar) package. Independent of
> the merchant back-office in [`accensa-app`](https://github.com/accensa/accensa-app) and
> [`accensa-contracts`](https://github.com/accensa/accensa-contracts) — a seller can use
> those without this, and an agent can use this without those.

> [!WARNING]
> **This is a conformance spike, not a production facilitator.** It exists to answer one
> question: can an unmodified canonical x402 client complete a payment against a
> facilitator we operate on Stellar testnet? **As of 2026-08-26 the answer is yes across
> all five upstream server components** — 10 of 10 scenarios in the upstream e2e suite,
> with settled transactions anyone can verify. See [Conformance](#conformance). It makes
> no availability claim and is not deployed anywhere you can reach.

## The Problem

x402 turns HTTP 402 into a machine-native payment flow: a client requests a resource, the
server replies…
