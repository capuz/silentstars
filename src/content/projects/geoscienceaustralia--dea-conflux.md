---
repo: "GeoscienceAustralia/dea-conflux"
name: "dea-conflux"
description: "Bulk polygon drills on the Open Data Cube."
readmeQualityOk: true
url: "https://github.com/GeoscienceAustralia/dea-conflux"
language: "Python"
languages: ["Python", "Jupyter Notebook"]
languagePcts: [67, 31]
topics: ["python", "gis"]
stars: 8
forks: 6
openIssues: 6
closedIssues: 8
watchers: 6
contributors: 9
recentReleases: 0
createdAt: "2021-08-10T04:17:02Z"
lastCommitAt: "2026-07-16T06:04:13Z"
lastReleaseAt: "2021-11-08T03:12:03Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 83
undervaluedScore: 44
maintainers: ["colourmeamused"]
openGraphImageUrl: "https://opengraph.githubassets.com/93214d90854907c2f2acb97df8c94c6fc10f87ab1b7e6015086fa487000513b0/GeoscienceAustralia/dea-conflux"
---

# DEA Conflux

This is a prototype tool for processing bulk polygon drills.

- License: Apache 2.0
- Contact:
  bex.dunn@ga.gov.au
  abeer.mahendroo@ga.gov.au
  earth.observation@ga.gov.au (subject: Attn Inland Water)

## Installation

Install with `pip`:

```bash
pip install git+https://github.com/GeoscienceAustralia/dea-conflux.git
```

Or clone the repository and install from the local version.

```bash
git clone https://github.com/GeoscienceAustralia/dea-conflux.git
cd dea-conflux
pip install -e .
```

## Usage

Conflux provides a command-line tool `dea-conflux` for running each step of the polygon drill. Descriptions of the commands are available with `dea-conflux --help`. Conflux requires a Datacube configuration to work.

To run Conflux on a single scene, give it a scene UUID present in the Datacube, a plugin describing the polygon drill, a place to put output files, and a shapefile defining the polygons:

```bash
dea-conflux run-one --uuid SCENE_ID --plugin PLUGIN_PATH -o OUTPUT_PATH -s SHAPEFILE_PATH
```

Conflux can also read from an AWS SQS queue. Messages must be the UUID of a scene.

```bash
dea-conflux run-from-queue --queue QUEUE_NAME --plugin PLUGIN_PATH -o…
