---
repo: "CyberAgent/ChilmAI"
name: "ChilmAI"
description: "Admission selection engine for municipal nursery schools"
originalDescription: "自治体向け保育所入所選考エンジン"
descriptionLang: "ja"
readmeQualityOk: true
url: "https://github.com/CyberAgent/ChilmAI"
homepage: "https://chilmai.cyberagent.ai"
language: "Python"
languages: ["Python"]
languagePcts: [86]
topics: ["civictech", "constraint-programming", "govtech", "matching", "optimization", "or-tools", "python", "japanese", "cp-sat"]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 5
recentReleases: 10
createdAt: "2026-08-10T09:16:03Z"
lastCommitAt: "2026-10-26T03:03:09Z"
lastReleaseAt: "2026-09-28T00:39:49Z"
status: "thriving"
tags: ["hidden_gem", "release_machine"]
healthScore: 87
undervaluedScore: 58
maintainers: ["ciela", "dependabot[bot]", "github-actions[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1329637334/af3c91b7-0514-4e88-a424-ee51d49bb676"
---

# ChilmAI

ChilmAI is a Python application that supports the admission selection process in municipal nursery school placement coordination. It handles input data validation, column name mapping, matching including sibling conditions, and formatting of result data.

For usage and detailed specifications, see the [ChilmAI documentation](https://cyberagent.github.io/ChilmAI/).

## Main Structure

| Area | Path | Contents |
|---|---|---|
| Core library | `chilmai/generic` | File loading, column name mapping, validation, matching execution, result formatting |
| Solver | `chilmai/algorithm/cp_use_transfer` | Matching implementation using OR-Tools CP-SAT |
| Reference implementation | `apps` | HTTP API and Web UI using FastAPI |
| Sample data | `sample` | Synthetic data for verifying operation |
| Test code | `test` | Unit tests, API tests, browser tests |

> [!WARNING]
> The Web UI and HTTP API under `apps/` are reference implementations. Authentication, authorization, audit logging, operational monitoring, data protection, infrastructure configuration, and vulnerability management required for production use must be separately designed and implemented to suit the operating…
