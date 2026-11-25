---
repo: "yontrack/yontrack"
name: "yontrack"
description: "Continuous delivery monitoring"
readmeQualityOk: true
url: "https://github.com/yontrack/yontrack"
homepage: "https://yontrack.com"
language: "Kotlin"
languages: ["Kotlin", "JavaScript"]
languagePcts: [71, 24]
topics: ["ontrack", "continuous-delivery", "monitoring", "traceability"]
stars: 102
forks: 26
openIssues: 46
closedIssues: 1988
watchers: 4
contributors: 9
recentReleases: 0
createdAt: "2014-05-01T17:08:33Z"
lastCommitAt: "2026-11-25T13:12:36Z"
lastReleaseAt: "2014-10-30T12:53:14Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 96
undervaluedScore: 51
maintainers: ["dcoraboeuf", "dependabot[bot]", "SansGuidon"]
openGraphImageUrl: "https://opengraph.githubassets.com/518c99a1366d32cfcf006ddf099d645d067c04a4e5af14e3c0859cbd215857c4/yontrack/yontrack"
discussionCount: 7
---

### Track. Trust. Deliver.

[Documentation](https://docs.yontrack.com) ·
[Quick start](#quick-start) ·
[Website](https://yontrack.com) ·
[Contributing](https://github.com/yontrack/yontrack/blob/HEAD/CONTRIBUTING.md)

---

Yontrack is a CI/CD orchestration platform. It records every build, validation and promotion across
your delivery pipelines — then turns that record into changelogs, automated version updates,
notifications and dashboards.

Point your pipelines at it with a single `.yontrack/ci.yaml` file, and Yontrack builds the picture
from there.

## How it works

Yontrack organises everything it collects around a small model.

```mermaid
flowchart TD
    P[Project] -->|has branches| B[Branch]
    B -->|has builds| BD[Build]
    BD -->|passes or fails| VR[Validation run]
    BD -->|is granted| PR[Promotion run]
    VR -->|of| VS[Validation stamp]
    PR -->|of| PL[Promotion level]
    BD -.->|depends on| BD
```
