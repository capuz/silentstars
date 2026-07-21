---
repo: "TimKleindick/general_manager"
name: "general_manager"
description: "Opinionated framework for Django - batteries included"
readmeQualityOk: true
url: "https://github.com/TimKleindick/general_manager"
homepage: "https://timkleindick.github.io/general_manager/"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["crud", "django", "framework", "graphql", "python"]
stars: 5
forks: 0
openIssues: 1
closedIssues: 113
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2024-09-08T13:41:10Z"
lastCommitAt: "2026-07-21T06:10:42Z"
lastReleaseAt: "2025-05-28T14:02:40Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 83
maintainers: ["TimKleindick"]
openGraphImageUrl: "https://opengraph.githubassets.com/03fc1fdb0198d8bd2e5ece2bb5ef8918b7d1011f1f2c5f5ef10a20eed3619e01/TimKleindick/general_manager"
---

# GeneralManager

GeneralManager is a typed, declarative framework for building data-rich Django
applications. Define domain objects once, then use the same model through the
Django ORM, generated GraphQL, permission policies, validation, calculations,
search, and workflows.

GeneralManager is pre-1.0. The `main` branch and latest PyPI release can differ;
use the [release history](https://github.com/TimKleindick/general_manager/releases)
to distinguish published behavior from current development.

## What GeneralManager provides

### Domain models and interfaces

- Generate Django-backed models from typed manager definitions.
- Wrap [existing Django models](https://timkleindick.github.io/general_manager/concepts/interfaces/existing_model_interface/)
  or expose [calculated](https://timkleindick.github.io/general_manager/concepts/interfaces/computed_data_interfaces/),
  [request-backed](https://timkleindick.github.io/general_manager/concepts/interfaces/request_interface/),
  and remote data through the same manager API.

Start with the [architecture overview](https://timkleindick.github.io/general_manager/concepts/architecture/)
and [interface…
