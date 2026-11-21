---
repo: "EndurantDevs/healthcare-mrf-api"
name: "healthcare-mrf-api"
description: "API that combines the US Healthcare Machine Readable Files (CMS.gov, Insurance companies, NPI data, etc.)"
readmeQualityOk: true
url: "https://github.com/EndurantDevs/healthcare-mrf-api"
language: "Python"
languages: ["Python"]
languagePcts: [94]
stars: 11
forks: 2
openIssues: 1
closedIssues: 2
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2022-09-25T09:28:40Z"
lastCommitAt: "2026-11-21T11:32:25Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 93
undervaluedScore: 68
maintainers: ["dnikolayev"]
openGraphImageUrl: "https://opengraph.githubassets.com/bd0f7e8ecace550028dbcc0e034154c133db5e033744498e07d18952a454300b/EndurantDevs/healthcare-mrf-api"
fundingLinks: ["GITHUB:https://github.com/EndurantDevs"]
---

# healthcare-mrf-api

`healthcare-mrf-api` is an open data-ingestion and API platform for public U.S. healthcare pricing, provider, plan, pharmacy, and Medicare-derived benchmarking data.

It combines multiple public programs into one operational service so applications can query provider directories, plan data, procedure pricing, pharmacy activity, quality benchmarks, and enrollment-derived enrichment from a consistent API layer.

## Database read sessions

`HLTHPRT_API_READER_ENABLED=true` routes pinned NPI, pricing, code and coverage
statistics requests through a separate database login. Configure
`HLTHPRT_DB_READER_USER` and `HLTHPRT_DB_READER_PASSWORD` for that login; the user
must differ from `HLTHPRT_DB_USER`. Reader sessions never fall back to Writer
credentials. Canonical network-filtered requests and registry serving reads
require this Reader login independently of that flag, as do independent PTG
network reads and provider-profile snapshots. Control mutations, imports and
explicit background writes retain their Writer connection.
