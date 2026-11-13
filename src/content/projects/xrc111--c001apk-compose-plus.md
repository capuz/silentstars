---
repo: "XRC111/c001apk-compose-plus"
name: "c001apk-compose-plus"
description: "MIUIX full UI migration of c001apk-compose (YuKongA/Miuix 0.9.4 + Kotlin 2.4.20 + Compose 1.12.1 + AGP 9.4.1)"
originalDescription: "c001apk-compose 的 MIUIX 全量 UI 迁移 (YuKongA/Miuix 0.9.4 + Kotlin 2.4.20 + Compose 1.12.1 + AGP 9.4.1)"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/XRC111/c001apk-compose-plus"
language: "Kotlin"
languages: ["Kotlin", "Java"]
languagePcts: [59, 41]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 6
recentReleases: 7
createdAt: "2026-10-10T13:47:28Z"
lastCommitAt: "2026-11-13T05:43:55Z"
lastReleaseAt: "2026-11-12T13:17:17Z"
status: "newborn"
tags: ["hidden_gem", "release_machine"]
healthScore: 74
undervaluedScore: 55
maintainers: ["XRC111", "frisk1127", "XRC111-code"]
openGraphImageUrl: "https://opengraph.githubassets.com/6e51d98aebcc204111f686cd8e2b71b87c9330f3142a21383cb2a9f8b269af7d/XRC111/c001apk-compose-plus"
---

# c001apk-compose-plus

MIUIX UI migration branch of c001apk-compose, for personal study.

## Notes

- Unofficial client, with no affiliation with the official Coolapk.
- The main work is UI migration: replacing Material components with [MIUIX](https://github.com/YuKongA/Miuix). Upstream has been unmaintained since 2024-09, so the network layer also received a few necessary adaptations (v3 signing, closed-loop handling for the new risk-control captcha). See the section below for details.
- The main containers have been replaced with liquid glass from [Haze 2](https://github.com/chrisbanes/haze) (refraction / dispersion / Fresnel highlights). See the section below for details.
- A personal practice project. **No guarantee of usability, and no commitment to ongoing maintenance.** Upstream API changes may break some pages.
- Code, icons and content copyright belong to the original authors. Use is subject to AGPL-3.0.
- Version issues encountered during the migration are recorded in [BUILD_NOTES.md](https://github.com/XRC111/c001apk-compose-plus/blob/HEAD/BUILD_NOTES.md), [MIUIX_MIGRATION.md](https://github.com/XRC111/c001apk-compose-plus/blob/HEAD/MIUIX_MIGRATION.md), and two…
