---
repo: "healthkey-ai/promop"
name: "promop"
description: "Django/PostgreSQL project with models for OMOP+oncology plus a flat denormalized table to support fast clinical trial matching, clinical decision support and other AI/ML uses (which will not work natively against the highly normalized OMOP schema)"
readmeQualityOk: true
url: "https://github.com/healthkey-ai/promop"
language: "Python"
languages: ["Python"]
languagePcts: [86]
stars: 5
forks: 1
openIssues: 70
closedIssues: 48
watchers: 2
contributors: 7
recentReleases: 1
createdAt: "2025-09-16T11:49:22Z"
lastCommitAt: "2026-07-22T06:10:12Z"
lastReleaseAt: "2026-07-04T15:01:40Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 88
undervaluedScore: 64
maintainers: ["adamblum", "LeonidMorozov"]
openGraphImageUrl: "https://opengraph.githubassets.com/cb41702379e9135273820402f64f2464dcce515916d0ae35cf3bc75baf9bc104/healthkey-ai/promop"
---

# PRomop

**PRomop** is an open-source longitudinal patient health record built on the [OMOP CDM v5.4](https://ohdsi.github.io/CommonDataModel/) with FHIR R4 ingestion. Its central feature is `PatientRecord` — a denormalized, 286-column projection derived automatically from OMOP tables that gives analytics, trial matching, and clinical decision support a single shared substrate, eliminating the repeated re-derivation of patient state across applications.

Deployed across approximately 17,500 real oncology patients, with trial matching against 6,000 actively recruiting trials. A 20-criterion eligibility search over raw OMOP requires 27–39 joins; against `PatientRecord` it requires zero — an estimated 30–200× speedup.

See [paper.md](https://github.com/healthkey-ai/promop/blob/HEAD/paper.md) for the full research description.

**New here?** → [**Load and query patient data in 10 minutes**](https://github.com/healthkey-ai/promop/blob/HEAD/docs/quickstart.md)

Not on a Mac? See the [Linux setup guide](https://github.com/healthkey-ai/promop/blob/HEAD/docs/linux-setup.md). Prefer Docker? See…
