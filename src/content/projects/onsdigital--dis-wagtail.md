---
repo: "ONSdigital/dis-wagtail"
name: "dis-wagtail"
description: "Django Wagtail CMS for managing and publishing content for the Office for National Statistics (ONS)"
readmeQualityOk: true
url: "https://github.com/ONSdigital/dis-wagtail"
language: "Python"
languages: ["Python"]
languagePcts: [93]
stars: 13
forks: 4
openIssues: 0
closedIssues: 3
watchers: 4
contributors: 60
recentReleases: 0
createdAt: "2024-10-15T13:27:57Z"
lastCommitAt: "2026-09-02T13:07:59Z"
lastReleaseAt: "2026-02-23T11:32:31Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 98
undervaluedScore: 71
maintainers: ["BJacksonONS", "dependabot[bot]", "MaciekBaron"]
openGraphImageUrl: "https://opengraph.githubassets.com/3b895be1899bfcc3ad8b4e025ef2ace23e9f4a2a2292a554299f228573581384/ONSdigital/dis-wagtail"
postedAt: "2026-08-27T14:36:22.780Z"
---

# dis-wagtail

The Wagtail CMS for managing and publishing content for the Office for National Statistics (ONS)

---

## Getting Started

To get a local copy up and running, follow the steps below.

### Pre-requisites

Ensure you have the following installed:

1. **Python**: Version specified in `.python-version`. We recommend using [pyenv](https://github.com/pyenv/pyenv) for
   managing Python versions.
2. **[Poetry](https://python-poetry.org/)**: This is used to manage package dependencies and virtual
   environments.
3. **[Colima](https://github.com/ONSdigital/dp-compose/blob/main/setting-up-colima-locally.md)** for running the project
   in Docker containers.
4. **[PostgreSQL](https://www.postgresql.org/)** for the database. Provided as container via `docker-compose.yml` when
   using the Docker setup.
5. **[Node](https://nodejs.org/en)** and **[`nvm` (Node Version Manager)](https://github.com/nvm-sh/nvm)** for front-end
   tooling.
6. **[JQ](https://jqlang.github.io/jq/)** for the step in the build that installs the design system templates.
7. `texlive-latex-extra` and `texlive-fonts-recommended`: Required by `matplotlib` to render LaTeX equations. See…
