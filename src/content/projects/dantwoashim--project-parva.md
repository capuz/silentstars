---
repo: "dantwoashim/Project_Parva"
name: "Project_Parva"
description: "Open-source Nepali temporal infrastructure for BS/AD conversion, fiscal-year logic, panchanga computation, festivals, and source-aware calendar validation."
readmeQualityOk: true
url: "https://github.com/dantwoashim/Project_Parva"
language: "Python"
languages: ["Python"]
languagePcts: [81]
topics: ["api", "calendar", "fastapi", "nepal", "nepali-calendar", "panchanga", "python", "redis", "sdk", "bikram-sambat"]
stars: 26
forks: 5
openIssues: 0
closedIssues: 2
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2026-02-13T01:33:41Z"
lastCommitAt: "2026-08-04T06:11:22Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 44
maintainers: ["dantwoashim"]
openGraphImageUrl: "https://opengraph.githubassets.com/85c580d915d7cd3762ba6572f2f3df20943fb4f8c67cdf67c85b2c12624fe58f/dantwoashim/Project_Parva"
---

# Project Parva

Project Parva is an open-source Nepali date/time API and conformance project.

It covers BS to AD, AD to BS, Nepali date validation, holidays, working days,
Nepal fiscal year logic, BS month metadata, Panchanga computation, proof
receipts, local verification, SDKs, MCP tools, and public regression fixtures.

The project exists because Nepali date bugs often hide until a boundary is hit:
a frontend calendar table disagrees with backend data, a payroll month has the
wrong number of days, a datepicker accepts an invalid BS date, or a future BS
date changes after someone already used it in a workflow.

Parva treats those cases as conformance problems, not just conversion problems.
It records source and method provenance, separates exact evidence from
review-needed evidence, and gives developers a way to test what their Nepali
calendar API or Nepali date converter is actually doing.

## Start Here

- Quickstart: [docs/QUICKSTART.md](https://github.com/dantwoashim/Project_Parva/blob/HEAD/docs/QUICKSTART.md)
- OpenAPI snapshot: [docs/api-docs/openapi.json](https://github.com/dantwoashim/Project_Parva/blob/HEAD/docs/api-docs/openapi.json)
- API versioning:…
