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
stars: 15
forks: 2
openIssues: 25
closedIssues: 438
watchers: 3
contributors: 19
recentReleases: 0
createdAt: "2024-06-21T12:28:38Z"
lastCommitAt: "2026-11-26T06:52:03Z"
lastReleaseAt: "2025-10-07T11:42:54Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 98
undervaluedScore: 70
maintainers: ["renovate[bot]", "knoppiks", "trobanga"]
openGraphImageUrl: "https://opengraph.githubassets.com/6e53e3f3ffa4f2b9b513b9622c77fbd77b5ad8649e3afe9734415fbee3057691/medizininformatik-initiative/fts-next"
discussionCount: 18
postedAt: "2026-08-10T05:09:50.501Z"
---

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
