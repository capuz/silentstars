---
repo: "SDM-TIB/SHACLViewer"
name: "SHACLViewer"
description: "Web application for interactive visualizations of SHACL shape schemas"
readmeQualityOk: true
url: "https://github.com/SDM-TIB/SHACLViewer"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [94]
topics: ["knowledge-graph", "semantic-web", "shacl"]
stars: 11
forks: 1
openIssues: 0
closedIssues: 2
watchers: 3
contributors: 2
recentReleases: 0
createdAt: "2022-03-16T09:59:50Z"
lastCommitAt: "2026-07-16T05:58:57Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 84
undervaluedScore: 46
maintainers: ["prohde"]
openGraphImageUrl: "https://opengraph.githubassets.com/e3b6392e127c835807b922f277dedb4b6f94e23a0689fce29d3b490f2ccdfd58/SDM-TIB/SHACLViewer"
---

# SHACLViewer

SHACLViewer is a Web application for interactive visualizations of SHACL shape schemas.

## Example
Example data and SHACL shapes are provided in the `example` directory.
Docker is required for the example to run.
Assuming the current working directory is the root of this repository, the example can be started with

```bash
docker-compose -f example/docker-compose.yml up -d
```

The SHACLViewer is then served at [http://localhost:5001](http://localhost:5001).

> [!NOTE]
> If you receive a message from Docker saying `shaclviewer Warning pull access denied for sdmtib/shaclviewer, repository does not exist or may require 'docker login'`, this is caused by us not puhsing any image of the SHACLViewer yet.
> You can fix it by building the image yourself by running:
> ```bash
> docker-compose -f example/docker-compose.yml up -d --build
> ```

Alternatively, the example can be started or stopped with their respective commands as follows:

```bash
make example-run
make example-stop
```

## Publications
The underlying work is reported in:

1. Hany Alom. _A Library for Visualizing SHACL over Knowledge Graphs_. Master's Thesis, Leibniz Universität Hannover, March 2022. DOI:…
