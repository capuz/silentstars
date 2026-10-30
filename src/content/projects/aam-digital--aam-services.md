---
repo: "Aam-Digital/aam-services"
name: "aam-services"
description: "Backend Modulith providing APIs for reports and integrations for the Aam Digital platform"
readmeQualityOk: true
url: "https://github.com/Aam-Digital/aam-services"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [95]
stars: 23
forks: 0
openIssues: 8
closedIssues: 71
watchers: 1
contributors: 5
recentReleases: 0
createdAt: "2024-03-11T12:45:16Z"
lastCommitAt: "2026-10-30T10:22:45Z"
lastReleaseAt: "2024-08-16T07:01:14Z"
status: "thriving"
tags: []
healthScore: 95
undervaluedScore: 61
maintainers: ["sleidig", "renovate[bot]", "aam-digital-ci"]
openGraphImageUrl: "https://opengraph.githubassets.com/100f3bb31e85a39382897e8959b116b5e20e962f088687799427a0786500632c/Aam-Digital/aam-services"
---

# Aam Digital Services (aam-backend-service)

Collection of aam-digital services and tools

A modularize Spring Boot application that contains API modules for [Aam Digital's case management platform](https://github.com/Aam-Digital/ndb-core).

## API Modules

- **[Reporting](https://github.com/Aam-Digital/aam-services/blob/HEAD/docs/modules/reporting.md)**: Calculate aggregated reports and run queries on all data, accessible for external services for API integrations of systems
- **[Export](https://github.com/Aam-Digital/aam-services/blob/HEAD/docs/modules/export.md)**: Template based file export API. Uses [carbone.io](https://carbone.io) as templating engine.
- **[Skill](https://github.com/Aam-Digital/aam-services/blob/HEAD/docs/modules/skill.md)**: Integration with external system (SkillLab) to link and pull data into Aam Digital.
- **[Notification](https://github.com/Aam-Digital/aam-services/blob/HEAD/docs/modules/notification.md)**: Push Notification system, triggering events based on custom rules for each user.
- **[Third-Party-Authentication](https://github.com/Aam-Digital/aam-services/blob/HEAD/docs/modules/third-party-authentication.md)**: "Single-Sign-On" integration with…
