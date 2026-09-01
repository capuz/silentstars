---
repo: "medizininformatik-initiative/fts-next"
name: "fts-next"
description: "SMITH FHIR Transfer Services"
readmeQualityOk: true
url: "https://github.com/medizininformatik-initiative/fts-next"
homepage: "https://medizininformatik-initiative.github.io/fts-next/"
language: "Java"
languages: ["Java"]
languagePcts: [99]
topics: ["deidentification", "fhir", "transfer"]
stars: 14
forks: 2
openIssues: 17
closedIssues: 396
watchers: 3
contributors: 18
recentReleases: 0
createdAt: "2024-06-21T12:28:38Z"
lastCommitAt: "2026-08-31T21:55:47Z"
lastReleaseAt: "2025-10-07T11:42:54Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 71
maintainers: ["renovate[bot]", "trobanga"]
openGraphImageUrl: "https://opengraph.githubassets.com/c2b5cb333ecf35c2f3c531386bae831eac2d9d3dbef202f7074a501895a44e97/medizininformatik-initiative/fts-next"
discussionCount: 18
postedAt: "2026-08-10T05:09:50.501Z"
---

<picture>
    <source media="(prefers-color-scheme: dark)" srcset="docs/public/logo-dark.svg">
  </picture>
</p>

# SMITH FHIR Transfer Services (FTSnext)

FTSnext (FHIR Transfer Services) is a software system that securely transfers
healthcare data between clinical and research domains using FHIR
([Fast Healthcare Interoperability Resources][fhir]) standards. While initially
designed for the [SMITH][smith] architecture, its framework is adaptable for broader
applications in any healthcare data sharing scenario.

## Overview

At its core are three components — Clinical Domain Agent, Research Domain Agent, and
Trust Center Agent — working together to maintain privacy by ensuring the Trust Center
manages IDs without accessing medical content, while researchers receive only the data
they need without the ability to link it back to clinical sources. This elegant design
enables valuable research while robustly protecting patient privacy.

### Clinical Domain Agent (CDA)

The CDA is designed to handle the secure deidentification, pseudonymization and transfer of clinical
FHIR resources. It ensures that sensitive patient information is appropriately anonymized before
being transferred…
