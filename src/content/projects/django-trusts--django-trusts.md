---
repo: "django-trusts/django-trusts"
name: "django-trusts"
description: "Django authorization add-on for multiple organizations and object-level permission settings"
readmeQualityOk: true
url: "https://github.com/django-trusts/django-trusts"
homepage: "https://www.djangopackages.com/packages/p/django-trusts/"
language: "Python"
languages: ["Python"]
languagePcts: [99]
stars: 12
forks: 2
openIssues: 1
closedIssues: 58
watchers: 3
contributors: 6
recentReleases: 1
createdAt: "2015-12-28T00:19:40Z"
lastCommitAt: "2026-09-12T08:04:32Z"
lastReleaseAt: "2026-09-06T23:28:12Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 99
undervaluedScore: 76
maintainers: ["cursoragent", "chatforthomas", "grokforthomas"]
openGraphImageUrl: "https://opengraph.githubassets.com/79303801f4f43b5b5758804f6c80aecf7ad7635609200a4e132040709af865dd/django-trusts/django-trusts"
---

# django-trusts

`django-trusts` is a **non-standalone Python dependency** for applications
and packages that define their own declarative Django authorization
implementation.

Core supplies no concrete permission schema, no Trust / Content / Group /
ACL / organization / role models, no generic grant editor, and no Django
`AppConfig`. Do **not** list `'trusts'` in `INSTALLED_APPS`. The consumer
implementation owns its `TrustsImplementationConfig`, backend path,
models, and persisted policy facts.

## Which package?

- Seeking or upgrading from django-trusts 0.x concrete Trust/Content
  behavior → [django-trusts-zero](https://github.com/django-trusts/django-trusts-zero)
- Studying persisted organization / team / repository relationships →
  [django-trusts-gh-permissions](https://github.com/django-trusts/django-trusts-gh-permissions)
- Building a new permission implementation → continue here

A forthcoming Windows ordered-policy example will show explicit
allow/deny rows. That reference implementation is not complete on the
final core API yet.

## Principles

- **Minimal** — ordinary Django models plus compact declarations
- **Declarative** — relationship paths name where user,…
