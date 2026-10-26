---
repo: "SanteonNL/orca"
name: "orca"
description: "Open source Refentie-implementatie CAreplanning"
readmeQualityOk: true
url: "https://github.com/SanteonNL/orca"
language: "Go"
languages: ["Go", "TypeScript"]
languagePcts: [73, 26]
stars: 11
forks: 6
openIssues: 2
closedIssues: 1
watchers: 0
contributors: 21
recentReleases: 0
createdAt: "2024-04-24T08:09:29Z"
lastCommitAt: "2026-10-26T09:18:42Z"
lastReleaseAt: "2025-06-20T11:46:56Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 80
undervaluedScore: 70
maintainers: ["dependabot[bot]", "meelisd", "JTeeuwissen"]
openGraphImageUrl: "https://opengraph.githubassets.com/374e734aa178331b955d87800351fdbc9f9da30eff47d644dc7585c2a1e136c4/SanteonNL/orca"
---

# Orca
ORCA (**O**pen source **R**eference-implementation shared **CA**replanning) implements the [Shared Care Planning specification](https://santeonnl.github.io/shared-care-planning/).

## Features
ORCA implements the following features:

- Initiating a FHIR workflow (Task placer) and handling incoming workflow Tasks (Task filler), with/from other care organizations through Shared Care Planning.
- User interface for care professionals to fill in questionnaires required for a FHIR workflow.
- Proxy for the care organization's EHR to access the Care Plan Service's FHIR API, that handles authentication.
- Proxy for the care organization's EHR to access the other Shared Care Planning participants' FHIR API, that handles localization, authentication and data aggregation for participants that use the ChipSoft Zorgplatform FHIR API.

The following features are planned:
- Lightweight decision engine for accepting FHIR workflow Tasks (Task filler).
- Proxy for the care organization's EHR to access the other Shared Care Planning participants' FHIR API, that handles localization, authentication and data aggregation for participants that use the FHIR API of Azure Health Data Services.…
