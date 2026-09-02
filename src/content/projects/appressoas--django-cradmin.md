---
repo: "appressoas/django_cradmin"
name: "django_cradmin"
description: "An admin UI for Django that is tailored for UIs where a user plays a single role at any time."
readmeQualityOk: true
url: "https://github.com/appressoas/django_cradmin"
language: "Python"
languages: ["Python", "SCSS", "JavaScript"]
languagePcts: [34, 31, 27]
stars: 14
forks: 1
openIssues: 44
closedIssues: 48
watchers: 9
contributors: 11
recentReleases: 0
createdAt: "2014-06-12T09:45:04Z"
lastCommitAt: "2026-09-02T08:04:23Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 47
undervaluedScore: 30
maintainers: ["espenak"]
openGraphImageUrl: "https://opengraph.githubassets.com/cd908c6d19f5cbbdc88293c999e0a81960c45a749f2a01dceb9ef3e5a90b1ae5/appressoas/django_cradmin"
---

# Django cradmin

Django custom role based admin UI.

Django cradmin is in BETA. The system is fairly stable, but:

- We do not have getting started guides.
- We should have better tests before release. Some parts have been prototyped
  a lot while we tested out different concepts, and they need a complexity
  review and better tests.
- Works with Django 4 and python >=3.8,<3.11

## Develop
Requires:

- https://docs.astral.sh/uv/ or (deprecated) https://github.com/pyenv/pyenv

### Use conventional commits for GIT commit messages
See https://www.conventionalcommits.org/en/v1.0.0/.
You can use this git commit message format in many different ways, but the easiest is:

- Use commitizen: https://commitizen-tools.github.io/commitizen/commit/
- Use an editor extension, like https://marketplace.visualstudio.com/items?itemName=vivaxy.vscode-conventional-commits for VScode.
- Just learn to write the format by hand (can be error prone to begin with, but it is fairly easy to learn).

### Install hatch and commitizen
NOTE: You only need hatch if you need to build releases, and you
only need commitizen for releases OR to make it easy to follow
conventional commits for your commit messages
(see…
