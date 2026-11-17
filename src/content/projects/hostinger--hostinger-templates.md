---
repo: "hostinger/hostinger-templates"
name: "hostinger-templates"
description: "Hostinger repository of templates for github node.js app deployments"
readmeQualityOk: true
url: "https://github.com/hostinger/hostinger-templates"
language: "TypeScript"
languages: ["TypeScript", "CSS"]
languagePcts: [25, 25]
stars: 7
forks: 3
openIssues: 0
closedIssues: 2
watchers: 0
contributors: 10
recentReleases: 0
createdAt: "2026-09-01T09:51:13Z"
lastCommitAt: "2026-11-17T12:17:52Z"
status: "thriving"
tags: []
healthScore: 98
undervaluedScore: 60
maintainers: ["dependabot[bot]", "aurimas-arlauskas", "deividasma"]
openGraphImageUrl: "https://opengraph.githubassets.com/bd01e4fc322d6ada4b52ebcec87e738b2472721673f864d7950a1bd2bff316dc/hostinger/hostinger-templates"
---

# Node.js repositories

Collection of runnable Node.js projects. Every project lives under
`templates/`: the ones we build and maintain, and vendored templates, which
are copies of popular public repositories at a pinned commit (see
[Upstream templates](#upstream-templates)):

```text
hostinger-templates/
├── templates/
│   └── <repository-id>/
├── skills/
├── versions/catalog.json
└── templates.json
```

## Repository catalog

`templates.json` is the source of truth for projects in this collection. Its
`templates` array lists every finished project. Add one entry when a project
is created.

Each entry can contain these fields:

- `id` and `name`
- `summary` and `description`
- `bucket`, `categories`, and `whoItsFor`
- `demoUrl`
- `classification`: categories, use cases, and frameworks
- `features`: at most 4 verified feature IDs, names, and descriptions
- `technology`: languages, frameworks, styling, data strategy, and deployment
- `compatibility`: runtimes and supported versions
- `media`: thumbnail and preview metadata
- `searchTerms`
- `deploy` (when the build output differs from the hosting defaults) and
  `routes` (paths the smoke check requests, default `/`)
- `source`,…
