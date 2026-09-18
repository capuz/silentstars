---
repo: "healthkey-ai/promop"
name: "promop"
description: "Django/PostgreSQL project with models for OMOP+oncology plus a flat denormalized table to support fast clinical trial matching, clinical decision support and other AI/ML uses (which will not work natively against the highly normalized OMOP schema)"
readmeQualityOk: true
url: "https://github.com/healthkey-ai/promop"
language: "Python"
languages: ["Python"]
languagePcts: [83]
stars: 9
forks: 3
openIssues: 192
closedIssues: 507
watchers: 1
contributors: 8
recentReleases: 2
createdAt: "2025-09-16T11:49:22Z"
lastCommitAt: "2026-09-18T14:03:22Z"
lastReleaseAt: "2026-08-20T13:35:49Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 94
undervaluedScore: 76
maintainers: ["adamblum", "LeoMo42", "vtrv101"]
openGraphImageUrl: "https://opengraph.githubassets.com/dd0168fd379f877503e73976ae5e877493a0aea15c51b45553e66ce538415fb4/healthkey-ai/promop"
---

# PRomop

**PRomop** is an open-source longitudinal patient health record built on the [OMOP CDM v5.4](https://ohdsi.github.io/CommonDataModel/) with FHIR R4 ingestion. Its central feature is `PatientRecord` — a wide denormalized projection (300+ columns) derived automatically from OMOP tables that gives analytics, trial matching, and clinical decision support a single shared substrate, eliminating the repeated re-derivation of patient state across applications.

Deployed across approximately 17,500 real oncology patients, with trial matching against 6,000 actively recruiting trials. Benchmarks show a [~37× speedup](https://arxiv.org/abs/2607.13947) for eligibility screening compared to querying raw OMOP tables directly.

See [paper.md](https://github.com/healthkey-ai/promop/blob/HEAD/paper.md) for the full research description.

**Architecture and documentation:** [Read the overview](https://github.com/healthkey-ai/promop/blob/HEAD/docs/README.md) for the data flow, current contracts, and a guided route through the documentation.

Field concept mapping: [implemented architecture](https://github.com/healthkey-ai/promop/blob/HEAD/docs/field_concept_mapping_architecture.md)
and…
