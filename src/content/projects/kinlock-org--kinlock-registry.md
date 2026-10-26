---
repo: "Kinlock-Org/kinlock-registry"
name: "kinlock-registry"
description: "Public registry of Kinlock-verified payees (schools, landlords) with schema and on-chain hash validation."
readmeQualityOk: true
url: "https://github.com/Kinlock-Org/kinlock-registry"
homepage: "https://kinlock-app.vercel.app"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
topics: ["json-schema", "stellar"]
stars: 14
forks: 8
openIssues: 3
closedIssues: 1
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2026-10-05T12:50:10Z"
lastCommitAt: "2026-10-26T18:06:21Z"
status: "newborn"
tags: ["needs_contributors", "hidden_gem", "fork_magnet"]
healthScore: 75
undervaluedScore: 46
maintainers: ["YazarAyobami", "abrcrmb"]
openGraphImageUrl: "https://opengraph.githubassets.com/625090adecce6126f23a4bac0032c0c6e14baa99188308c1a18aec0a183f8360/Kinlock-Org/kinlock-registry"
---

# kinlock-registry

The public payee and attester registry: one JSON file per verified payee, the schemas that bind them, and the hash and policy checks that tie them to the on-chain contract. Data only — no application code.

> **Status: tooling is live, data is not.** Validation, canonical hashing, the scheduled on-chain match check, and the attester readiness script all work. `supported-countries.json` is **empty** and `payees/` and `attesters/` hold no real records: the three countries you see (KE, NG, PH) live under `fixtures/` and exist to test the pipeline against the testnet contract. Real entries need the M0 supported-countries policy (`M0-17`) and a named attester's reviewed PR. See `ROADMAP.md` (`M1-24`..`M1-29`).

**Try it live (testnet):** [kinlock-app.vercel.app](https://kinlock-app.vercel.app) · **Docs:** [kinlock-org.github.io](https://kinlock-org.github.io)

## What's here

| Path | What it is |
|---|---|
| `supported-countries.json` | Countries Kinlock supports. Currently `[]`. Changing it needs a human **and** counsel's sign-off |
| `attesters/<handle>.json` | Each attester's public identity and the countries they may vouch for |
| `payees/<country>/<slug>.json`…
