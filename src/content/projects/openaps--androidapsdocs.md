---
repo: "openaps/AndroidAPSdocs"
name: "AndroidAPSdocs"
description: "Documentation for AndroidAPS"
readmeQualityOk: true
url: "https://github.com/openaps/AndroidAPSdocs"
language: "Python"
languages: ["Python"]
languagePcts: [97]
stars: 153
forks: 367
openIssues: 7
closedIssues: 102
watchers: 15
contributors: 150
recentReleases: 0
createdAt: "2018-06-10T20:28:48Z"
lastCommitAt: "2026-10-18T08:16:11Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "legacy_hero", "fork_magnet"]
healthScore: 99
undervaluedScore: 51
maintainers: ["MilosKozak", "psonnera"]
openGraphImageUrl: "https://opengraph.githubassets.com/a19642a4888260966b71638243974009e0013049c58f3673b3c0e3c0c7918ec1/openaps/AndroidAPSdocs"
---

# AAPS docs

Documentation for [AAPS](https://github.com/nightscout/AndroidAPS) (Android Artificial Pancreas System).

To view documentation, visit <https://androidaps.readthedocs.io>.

## Docs Status

### Build and Warnings

The current build logs of the documentation can be found in [Github Actions](https://github.com/openaps/AndroidAPSdocs/actions/workflows/deploy.yml).  

### Broken links

Detail of broken links in the doc can be found in the build logs. Select a build in Github Action "Deploy", then "Usage". Click on "build" and expand again the "Build line". Search for "WARNING".

## Building Documentation Locally

You can build the documentation locally on your computer to preview changes before committing them.

### Prerequisites

Ensure Python 3.8+ is installed on your system. Install the required dependencies from the root of the repository:

```console
pip install -r requirements.txt
```

### Building

Build the English documentation:

```console
cd docs/EN
sphinx-build -M html . _build
```

The built documentation will be in `docs/EN/_build/html/`. Open `index.html` in your browser to view it.

To build a different language (e.g., Czech):

```console
cd docs/CROWDIN/cs…
