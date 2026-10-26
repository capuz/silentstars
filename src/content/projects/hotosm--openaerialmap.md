---
repo: "hotosm/openaerialmap"
name: "openaerialmap"
description: "OpenAerialMap is an open service to provide access to a commons of openly licensed imagery and map layer services."
readmeQualityOk: true
url: "https://github.com/hotosm/openaerialmap"
homepage: "https://openaerialmap.org/"
language: "Python"
languages: ["Python", "Jupyter Notebook"]
languagePcts: [49, 24]
stars: 307
forks: 45
openIssues: 48
closedIssues: 182
watchers: 42
contributors: 35
recentReleases: 0
createdAt: "2014-06-26T13:58:44Z"
lastCommitAt: "2026-10-26T18:06:33Z"
status: "thriving"
tags: ["needs_contributors", "legacy_hero", "funded"]
healthScore: 93
undervaluedScore: 39
maintainers: ["spwoodcock", "cgiovando", "pre-commit-ci[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/e386d4b5b35741003054ae6a7a9e6b93dd92b5db07cc1201fff9a8ced2fee4b3/hotosm/openaerialmap"
fundingLinks: ["GITHUB:https://github.com/hotosm"]
discussionCount: 5
---

| **CI/CD** | | [](https://github.com/hotosm/openaerialmap/actions/workflows/deploy.yml?query=branch%3Amain) |
| :--- | :--- | :--- |
| **Tech Stack** | |     |
| **Code Style** | | [](https://github.com/astral-sh/ruff) [](https://github.com/prettier/prettier) [](https://results.pre-commit.ci/latest/github/hotosm/openaerialmap/main) |
| **Community** | | [](https://slack.hotosm.org) [](#contributors-) |
| **Other Info** | | [](https://docs.imagery.hotosm.org/) [](https://github.com/hotosm/openaerialmap/blob/main/LICENSE.md) |

---

A revamp of OpenAerialMap, originally developed back in the 2010s.

## Components

- Backend
  - [STAC API][4] deployment of eoAPI.
  - [STAC creation and extension][3] for OAM metadata requirements, data
    ingestion.
- Main frontend: the OAM Browser in `frontend/`.
- Uploader: a separate application in `backend/uploader-api/`.
- Additional catalogue viewers: STAC Browser and STAC Map.
- Legacy frontend: <https://github.com/hotosm/oam-browser>.
- Legacy API: <https://github.com/hotosm/oam-api>.

### Frontend Parts

The main OAM Browser is built specifically for OpenAerialMap.
STAC Map was evaluated as a replacement, but the team chose a dedicated…
