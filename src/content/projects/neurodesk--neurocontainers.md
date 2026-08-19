---
repo: "neurodesk/neurocontainers"
name: "neurocontainers"
description: "The containers can be used in combination with our transparent singularity or neurocommand tool, that wrap the executables inside a container to make them easily available for pipelines"
readmeQualityOk: true
url: "https://github.com/neurodesk/neurocontainers"
homepage: "https://neurodesk.org/neurocontainers-ui"
language: "Python"
languages: ["Python"]
languagePcts: [85]
stars: 39
forks: 97
openIssues: 27
closedIssues: 1001
watchers: 6
contributors: 72
recentReleases: 0
createdAt: "2020-06-17T11:59:05Z"
lastCommitAt: "2026-08-19T04:08:22Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "legacy_hero", "funded", "fork_magnet"]
healthScore: 99
undervaluedScore: 69
maintainers: ["micmas", "neurocontainers-release[bot]", "kylemaps"]
openGraphImageUrl: "https://opengraph.githubassets.com/5f2dab7972e59a060b7a5c995c918208f4b5db581186405ad30ffd753837e52d/neurodesk/neurocontainers"
fundingLinks: ["CUSTOM:https://donations.uq.edu.au/EAINNEUR"]
---

Neurocontainers repository is used for automatic building and testing of containers available in Neurodesktop

_A Tutorial on how to add new applications to NeuroDesk is here: [How to Add new tools](https://www.neurodesk.org/developers/new_tools/)_

_Information on the **Neurodesk** project is available at [neurodesk.org](https://neurodesk.org)_

_Information on **Neurocontainers** is available at [neurodesk.org/docs/neurocontainers](https://www.neurodesk.org/docs/getting-started/neurocontainers/)_

## Working in this repository

```bash
python3.13 -m venv env && source env/bin/activate
pip install -r requirements.txt && pip install -e .

sf-init <name> <version>    # Scaffold a new recipe in recipes/<name>/
sf-build <name>             # Generate the Dockerfile and build the image
sf-test <name>              # Run the recipe's fulltest.yaml

pytest builder/tests        # Builder and workflow unit tests
./workflows/test_all.sh     # Validate and generate every recipe
```

- [CONTRIBUTING.md](https://github.com/neurodesk/neurocontainers/blob/HEAD/CONTRIBUTING.md) — how to propose a change
- [AGENTS.md](https://github.com/neurodesk/neurocontainers/blob/HEAD/AGENTS.md) — recipe…
