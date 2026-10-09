---
repo: "kirbyju/tcia-query-skill"
name: "tcia-query-skill"
description: "An agentic skill for querying TCIA datasets."
readmeQualityOk: true
url: "https://github.com/kirbyju/tcia-query-skill"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 5
forks: 3
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-04-28T19:30:16Z"
lastCommitAt: "2026-10-09T18:56:53Z"
lastReleaseAt: "2026-09-20T03:07:32Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 89
undervaluedScore: 65
maintainers: ["kirbyju"]
openGraphImageUrl: "https://opengraph.githubassets.com/dba1828ead7518d54d39928ac699f5b88730962624a8550ecb3e8e802bc2ee7f/kirbyju/tcia-query-skill"
---

# TCIA Query Skill

`tcia-query-skill` helps AI agents find, verify, cite, and access datasets
published by [The Cancer Imaging Archive
(TCIA)](https://www.cancerimagingarchive.net/about-the-cancer-imaging-archive-tcia/).

It uses TCIA's WordPress Collection Manager as the publication authority,
TCIA's Publications EndNote XML as the verified record of papers that analyzed
TCIA data, and a release-backed SQLite snapshot as its normal discovery layer.
It then routes users to the appropriate data system, such as IDC, CTDC,
General Commons, PathDB, DataCite, TCIA Data Retriever, or Aspera.

The skill brings metadata and provenance from authoritative source systems into
a verified release bundle, then supports different use cases through skill
guidance, MCP, REST, or local artifacts. The underlying imaging and supporting
data remain with the systems responsible for them.

## What It Can Do

- Find TCIA Collections and Analysis Results by disease, body site, modality,
  data type, program, access level, license, DOI, or supporting data.
- Distinguish newly published datasets from datasets updated recently.
- Find current downloads, clinical metadata, annotations, segmentations,…
