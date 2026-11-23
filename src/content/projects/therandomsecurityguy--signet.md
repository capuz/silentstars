---
repo: "therandomsecurityguy/signet"
name: "signet"
description: "The seal of approval for agents and skills: a graph-first semantic governance registry with signed, transparency-logged publication trust."
readmeQualityOk: true
url: "https://github.com/therandomsecurityguy/signet"
homepage: "https://github.com/therandomsecurityguy/signet#readme"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [94]
topics: ["agent-registry", "ai-agents", "governance", "mcp", "provenance", "signet", "sigstore", "supply-chain-security", "transparency-log", "typescript"]
stars: 219
forks: 2
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 10
createdAt: "2026-11-14T03:08:20Z"
lastCommitAt: "2026-11-23T13:31:11Z"
lastReleaseAt: "2026-11-15T15:05:44Z"
status: "newborn"
tags: ["release_machine"]
healthScore: 87
undervaluedScore: 30
maintainers: ["therandomsecurityguy", "signet-release-bot[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/389174391060e357a7ea451e3b21822840d56d41ea9d44e5a78d46dc6a8848d3/therandomsecurityguy/signet"
---

# Signet

**The seal of approval for agents and skills.**

Signet is a graph-first **semantic governance system** for autonomous
agents and computational skills. Most registries are catalogs: metadata
in, search out. Signet governs *meaning, release state, and evidence* —
and stamps every trusted publication with the proof to back it up.

What makes it different:

- **Logical identity ≠ publication snapshot.** Durable `AGENT`/`SKILL`
  identities are separated from immutable `AGENT_VERSION`/`SKILL_VERSION`
  snapshots, with real lifecycle semantics: supersession, revocation,
  archival.
- **Five-layer validation, not single approval.** Every version passes
  W3C SHACL graph-shape and policy validation, ontology validation,
  advisory LLM semantic analysis, and human review before it can be
  certified — with machine-readable evidence stored at each layer.
- **Cryptographic trust, not vibes.** Publication envelopes are
  canonicalized twice — operational JSON (RFC 8785 JCS) and semantic RDF
  (RDFC-1.0) — digested, and signed with detached signatures verified
  against trusted keys. Tampering is detected, not hoped away.
