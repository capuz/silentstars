---
repo: "neurodesk/neurocontainers"
name: "neurocontainers"
description: "The containers can be used in combination with our transparent singularity or neurocommand tool, that wrap the executables inside a container to make them easily available for pipelines"
readmeQualityOk: true
url: "https://github.com/neurodesk/neurocontainers"
homepage: "https://neurodesk.org/neurocontainers-ui"
language: "Python"
languages: ["Python"]
languagePcts: [92]
stars: 42
forks: 101
openIssues: 9
closedIssues: 1045
watchers: 8
contributors: 75
recentReleases: 0
createdAt: "2020-06-17T11:59:05Z"
lastCommitAt: "2026-11-01T10:43:58Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "funded", "fork_magnet"]
healthScore: 100
undervaluedScore: 67
maintainers: ["stebo85", "vnm-neurodesk", "neurocontainers-release[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/e061e6cf7c8357fba04ee44a4b587c4ec3ff50471b38bc7308d3a0a16aba24cc/neurodesk/neurocontainers"
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
