---
repo: "PraneelBhatia/redactable"
name: "redactable"
description: "Deterministic-first PII/PHI de-identification you can prove: benchmarked recall, jurisdiction policy packs, reversible tokenization, audit trail. CLI + library + GitHub Action; optional GLiNER / Gemma contextual tier."
readmeQualityOk: true
url: "https://github.com/PraneelBhatia/redactable"
language: "Python"
languages: ["Python"]
languagePcts: [77]
topics: ["de-identification", "gdpr", "gliner", "hipaa", "ner", "phi", "pii", "privacy", "redaction", "webgpu"]
stars: 9
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-06-04T08:19:52Z"
lastCommitAt: "2026-11-01T22:59:22Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 65
undervaluedScore: 9
maintainers: ["PraneelBhatia"]
openGraphImageUrl: "https://opengraph.githubassets.com/b30843fd948782388d69149e69c16d84a1dec2f80276e7c540a6f33b97f55cf0/PraneelBhatia/redactable"
---

Benchmarked recall · versioned jurisdiction policies · reversible tokenization · reproducible audit trail.

---

> **De-identification is a *proof* problem, not a model problem.**
> A team that ships data across a trust boundary — to a vendor, a cloud LLM, or a shared
> training corpus — cannot adopt a redactor they can't **measure, version, or audit**.
> Redactable makes accuracy a number you can put in CI.

## Why another redaction tool?

Most PII tools are a pile of regexes or a thin wrapper around an LLM, and neither tells you
*how much they miss*. Redactable is built around three convictions the alternatives get wrong:

1. **Deterministic-first.** Structured identifiers (credit cards, IBANs, SSNs) are caught by
   **regex + checksum** — a Luhn or MOD-97 check is provably correct, reproducible, and
   auditable. A probabilistic LLM can't beat a checksum and only adds non-determinism and
   hallucination risk to the one category where a miss is a breach.
2. **The model is a commodity; the *eval* is the product.** Contextual PII (names, locations)
   is handled by an **encoder NER** (GLiNER) — non-autoregressive, so it can't hallucinate or
   regurgitate — and *every* engine…
