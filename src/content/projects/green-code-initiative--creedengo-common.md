---
repo: "green-code-initiative/creedengo-common"
name: "creedengo-common"
description: "Repository for common documentation and common tools"
readmeQualityOk: true
url: "https://github.com/green-code-initiative/creedengo-common"
language: "Shell"
languages: ["Shell"]
languagePcts: [93]
stars: 6
forks: 34
openIssues: 24
closedIssues: 9
watchers: 9
contributors: 57
recentReleases: 0
createdAt: "2023-01-20T14:39:31Z"
lastCommitAt: "2026-07-04T22:18:56Z"
status: "thriving"
tags: ["solo_builder", "funded", "fork_magnet"]
healthScore: 76
undervaluedScore: 72
maintainers: ["dedece35", "utarwyn", "harag7810"]
openGraphImageUrl: "https://opengraph.githubassets.com/b84eda4f135e26ee7d11e8ccc2868fe089e1e808d5dac6b300522f4d93d28f01/green-code-initiative/creedengo-common"
fundingLinks: ["GITHUB:https://github.com/green-code-initiative"]
discussionCount: 3
---

# creedengo-common

This repository is the shared source of truth for:

- common documentation (`doc/`)
- shared utility scripts (`tools/`)
- BMad templates, catalogs and workflows (`.bmad/`)

## BMad hub

The `.bmad/` directory is the bootstrap and process hub for the Creedengo organization.

BMAD (Build More Architect Dreams) is an AI-assisted agile framework: it structures work with reusable artifacts (epics, stories, DoD, workflows) to coordinate delivery across repositories.
Official documentation: https://github.com/bmad-code-org/BMAD-METHOD

`creedengo-common` is process-only in this model: it does not provide shared runtime libraries or direct Maven dependencies for other repositories.
Technical sharing stays in:
- `creedengo-rules-specifications` (rules/spec artifacts)
- `creedengo-integration-test` (integration test artifacts)

Target future norm for SonarQube plugin repositories: all plugins should depend on both `creedengo-rules-specifications` and `creedengo-integration-test`.
Current real state is also tracked in `.bmad/catalog/dependencies.yaml` under:
- `plugins.maven_dependencies_observed_locally_from_pom_xml`
-…
