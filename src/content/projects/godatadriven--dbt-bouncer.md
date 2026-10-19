---
repo: "godatadriven/dbt-bouncer"
name: "dbt-bouncer"
description: "Configure and enforce conventions for your dbt project."
readmeQualityOk: true
url: "https://github.com/godatadriven/dbt-bouncer"
homepage: "https://godatadriven.github.io/dbt-bouncer"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["ci", "dbt", "python"]
stars: 137
forks: 11
openIssues: 4
closedIssues: 99
watchers: 4
contributors: 16
recentReleases: 0
createdAt: "2024-06-25T15:32:28Z"
lastCommitAt: "2026-10-19T09:14:17Z"
lastReleaseAt: "2024-07-22T06:21:59Z"
status: "thriving"
tags: []
healthScore: 98
undervaluedScore: 46
maintainers: ["pgoslatara", "mattcristal", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/819995040/0e77b58c-3149-4c6a-8150-ed51fb4b3d0d"
discussionCount: 16
---

dbt-bouncer
  Configure and enforce conventions for your dbt project.

## Documentation

All documentation can be found on `dbt-bouncer` [documentation website](https://godatadriven.github.io/dbt-bouncer/).

## Aims

`dbt-bouncer` aims to:

- Provide a **100% configurable** way to enforce conventions in a dbt project.
- Be as **fast** as possible, running checks against dbt artifacts.
- Be as **easy** as possible to use, with a simple config file written in `YAML` or `TOML`.
- Be as **flexible** as possible, allowing checks to be written in Python.
- Provide **immediate feedback** when run as a **pre-commit** hook or as part of a CI pipeline.

### Features

- **Presets** — start with a bundled `minimal`, `standard` or `strict` config, with no config file to write. Run `dbt-bouncer run --preset strict`.
- **Baselines** — adopt strict checks on an existing project and fail only on *new* failures. Record today's failures with `dbt-bouncer baseline`, or compare against a previous set of artifacts with `dbt-bouncer run --state ./base-target`.
- **Discovery** — browse every check with `dbt-bouncer list`, read one check in detail with `dbt-bouncer explain check_model_names`, or open the…
