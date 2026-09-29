---
repo: "NextGenContributions/django2pydantic"
name: "django2pydantic"
description: "Django2pydantic is the most complete library for converting Django ORM models to Pydantic models"
readmeQualityOk: true
url: "https://github.com/NextGenContributions/django2pydantic"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["api", "api-rest", "converter", "django", "inference", "models", "pydantic", "pydantic-v2", "rest-api", "restapi"]
stars: 9
forks: 1
openIssues: 11
closedIssues: 5
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2024-10-27T15:36:09Z"
lastCommitAt: "2026-09-29T10:04:02Z"
lastReleaseAt: "2024-12-13T17:31:17Z"
status: "thriving"
tags: ["funded", "under_pressure"]
healthScore: 86
undervaluedScore: 63
maintainers: ["dependabot[bot]", "botpr-nextgencontributions[bot]", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/00f11f335297f47bc6bad566b2a89d2062e185238001e60f39f28211ac3761ef/NextGenContributions/django2pydantic"
fundingLinks: ["GITHUB:https://github.com/NextGenContributions"]
---

# Why

django2pydantic is the most complete Pydantic schemas based on Django models.

# What

django2pydantic is a library that allows to define Pydantic schemas based on Django database models.

Similar libraries:

- [Djantic](https://jordaneremieff.github.io/djantic/)
- [Django Ninja Schema](https://django-ninja.dev/guides/response/django-pydantic/)
- [Ninja Schema](https://github.com/eadwinCode/ninja-schema)

# Key features

- Supports all Django model field types
- Supports @property decorated Django model methods
- Supports all Django model relation fields:
  - ForeignKey, OneToOneField, ManyToManyField
  - The reverse relations of the above (ManyToOneRel, OneToOneRel, ManyToManyRel)
- Supports defining nested relations
- Provides as complete OpenAPI schema details as possible
- Support for [SchemaField](https://pypi.org/project/django-pydantic-field/)

# How to use

See the following usage examples:

- [Basic usage example](https://github.com/NextGenContributions/django2pydantic/blob/HEAD/examples/example.ipynb)
- [Overriding Django field properties by using…
