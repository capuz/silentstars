---
repo: "synaptent/aragora"
name: "aragora"
description: "Omnivorous Multi Agent Decision Making Engine - Ingest from any source, query from any channel, get multi-agent consensus"
readmeQualityOk: true
url: "https://github.com/synaptent/aragora"
homepage: "https://aragora.vercel.app"
language: "Python"
languages: ["Python"]
languagePcts: [87]
stars: 11
forks: 2
openIssues: 1231
closedIssues: 2028
watchers: 0
contributors: 6
recentReleases: 0
createdAt: "2026-01-01T05:08:26Z"
lastCommitAt: "2026-08-30T00:45:02Z"
lastReleaseAt: "2026-02-16T18:52:36Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 92
undervaluedScore: 56
maintainers: ["scarmani", "an0mium", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/9feba39a7ee5582a123ff29d7444b11bca5faf7a14e746cb0522ad6d5afda22c/synaptent/aragora"
---

# Aragora

**Aragora is an auditable execution control plane for AI-assisted decisions:
multi-model review in, a verifiable Decision Receipt out.**

It coordinates heterogeneous models to adversarially review a change or a
decision, preserves the dissent and provenance, stops truthfully when evidence
is thin, and emits a portable receipt anyone can verify offline with the
standalone verifier ([`pip install -U 'aragora-verify>=0.1.1'`](https://pypi.org/project/aragora-verify/)).

> **New here?** The [Quickstart](https://github.com/synaptent/aragora/blob/HEAD/docs/quickstart.md) gets you a working debate in
> under a minute. Auditors should start with the [Cold Reviewer Guide](https://github.com/synaptent/aragora/blob/HEAD/docs/COLD_REVIEWER_GUIDE.md).

| I want to… | Command |
|------------|---------|
| Run the standalone debate engine | `pip install aragora-debate` |
| Verify an Open Decision Receipt with the standalone verifier | `pip install -U 'aragora-verify>=0.1.1' && aragora-verify receipt.odr.json` |
| Run the current PyPI zero-key receipt demo | `pip install -U 'aragora>=2.9.0' && aragora demo --offline --receipt aragora-demo-receipt.json && aragora receipt verify…
