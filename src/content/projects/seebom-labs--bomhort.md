---
repo: "seebom-labs/BOMHort"
name: "BOMHort"
description: "About standalone, Kubernetes-native Software Bill of Materials (SBOM) visualization and governance platform"
readmeQualityOk: true
url: "https://github.com/seebom-labs/BOMHort"
homepage: "http://docs.bomhort.dev/"
language: "Go"
languages: ["Go", "TypeScript"]
languagePcts: [68, 25]
topics: ["sbom", "sbom-quality", "security", "suite", "supply-chain", "supply-chain-security"]
stars: 60
forks: 12
openIssues: 81
closedIssues: 47
watchers: 0
contributors: 5
recentReleases: 0
createdAt: "2026-03-06T16:29:38Z"
lastCommitAt: "2026-11-02T15:17:50Z"
lastReleaseAt: "2026-05-14T06:50:11Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem"]
healthScore: 86
undervaluedScore: 38
maintainers: ["mfahlandt", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/402f1646cb6cb357150320aca3b35fe6b0fa5d2771ba9d62807c834f98c1cf16/seebom-labs/BOMHort"
discussionCount: 1
---

Ingest 1000+ SPDX and CycloneDX SBOMs, scan for vulnerabilities via OSV, enforce license compliance, and apply VEX statements — all visualized in a fast Angular dashboard backed by ClickHouse analytics.

**BOMHort** (formerly known as SeeBOM) is the same project with a new name. Read more: [Why we renamed SeeBOM to BOMHort](https://github.com/seebom-labs/BOMHort/blob/HEAD/docs/content/docs/getting-started/rename.md).

---

## What it does

- **Ingests at scale** — SPDX 2.x JSON, SPDX 3 JSON-LD, CycloneDX 1.0–1.7 and in-toto attestation envelopes, auto-detected, from S3-compatible buckets, a directory, or `POST /api/v1/sboms/upload`. Deduplicated by SHA-256, retained forever.
- **Finds vulnerabilities** — OSV batch lookups at ingest, plus a daily refresher that checks every known package URL for newly disclosed CVEs without re-scanning a single SBOM. Findings carry their CVE id and all aliases.
- **Applies VEX** — OpenVEX statements scoped to the SBOM whose product they describe, with provenance; order of arrival does not matter.
- **Enforces license policy** — an externalized permissive/copyleft policy, SPDX expression evaluation, and reviewed exceptions that reload live and apply…
