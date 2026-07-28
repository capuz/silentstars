---
repo: "dynamical-org/reformatters"
name: "reformatters"
description: "Reformat weather datasets into Zarr"
readmeQualityOk: true
url: "https://github.com/dynamical-org/reformatters"
homepage: "https://dynamical.org/catalog"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 37
forks: 9
openIssues: 17
closedIssues: 69
watchers: 3
contributors: 11
recentReleases: 0
createdAt: "2024-09-18T01:28:17Z"
lastCommitAt: "2026-07-28T14:57:06Z"
lastReleaseAt: "2026-02-25T21:42:43Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 95
undervaluedScore: 59
maintainers: ["aldenks", "mrshll", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/4f95f4b9f0d5dd306ab5097400bc75f30e30748edff89b01fd3990399d541b2f/dynamical-org/reformatters"
---

# dynamical.org reformatters

Reformat weather datasets into zarr.

Browse the datasets produced by this repo at https://dynamical.org/catalog/.

* See [AGENTS.md](https://github.com/dynamical-org/reformatters/blob/HEAD/AGENTS.md) for an overview of the approach and this repository.
* [Develop a new dataset](https://github.com/dynamical-org/reformatters/blob/HEAD/docs/dataset_development_guide.md) end to end, or dive into just the [implementation](https://github.com/dynamical-org/reformatters/blob/HEAD/docs/implementation_guide.md).
* [Add a new variable](https://github.com/dynamical-org/reformatters/blob/HEAD/docs/add_new_variable.md) to an existing dataset.

## Local development

We use
* `uv` to manage dependencies and python environments
* `ruff` for linting and formatting
* `ty` for type checking
* `pytest` for testing
* `prek` to automatically lint and format as you git commit

### Setup
1. [Install uv](https://docs.astral.sh/uv/getting-started/installation/)
1. Run `uv run prek install` to setup the git hooks
1. If you use VSCode, you may want to install the extensions (ruff) it will recommend when you open this folder

### Running locally

* `uv run main --help` - list all…
