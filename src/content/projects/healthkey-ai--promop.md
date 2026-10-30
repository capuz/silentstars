---
repo: "healthkey-ai/promop"
name: "promop"
description: "Django/PostgreSQL project with models for OMOP+oncology plus a flat denormalized table to support fast clinical trial matching, clinical decision support and other AI/ML uses (which will not work natively against the highly normalized OMOP schema)"
readmeQualityOk: true
url: "https://github.com/healthkey-ai/promop"
language: "Python"
languages: ["Python"]
languagePcts: [82]
stars: 11
forks: 3
openIssues: 287
closedIssues: 714
watchers: 1
contributors: 9
recentReleases: 1
createdAt: "2025-09-16T11:49:22Z"
lastCommitAt: "2026-10-30T11:03:31Z"
lastReleaseAt: "2026-08-20T13:35:49Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 94
undervaluedScore: 73
maintainers: ["adamblum", "LeoMo42", "shpilevoy"]
openGraphImageUrl: "https://opengraph.githubassets.com/63bf6f6eb8642de06b6e9d1cec0530bf5017bca9977893c8d87f86127f13f536/healthkey-ai/promop"
---

# PRomop

**PRomop** is an open-source longitudinal patient health record built on the [OMOP CDM v5.4](https://ohdsi.github.io/CommonDataModel/) with FHIR R4 ingestion. Its central feature is `PatientRecord` — a wide denormalized projection (300+ columns) derived automatically from OMOP tables that gives analytics, trial matching, and clinical decision support a single shared substrate, eliminating the repeated re-derivation of patient state across applications.

Deployed across approximately 17,500 real oncology patients, with trial matching against 19,000 actively recruiting trials. Benchmarks show a [~37× speedup](https://arxiv.org/abs/2607.13947) for eligibility screening compared to querying raw OMOP tables directly.

See [paper.md](https://github.com/healthkey-ai/promop/blob/HEAD/paper.md) for the full research description.

**Architecture and documentation:** [Read the overview](https://github.com/healthkey-ai/promop/blob/HEAD/docs/README.md) for the data flow, current contracts, and a guided route through the documentation.

Field concept mapping: [implemented architecture](https://github.com/healthkey-ai/promop/blob/HEAD/docs/field_concept_mapping_architecture.md)
and…
