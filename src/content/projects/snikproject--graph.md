---
repo: "snikproject/graph"
name: "graph"
description: "Visualization of the snik-ontology."
readmeQualityOk: true
url: "https://github.com/snikproject/graph"
homepage: "http://www.snik.eu/graph"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [88]
stars: 14
forks: 3
openIssues: 33
closedIssues: 420
watchers: 0
contributors: 5
recentReleases: 0
createdAt: "2016-08-16T14:34:58Z"
lastCommitAt: "2026-10-29T10:36:10Z"
lastReleaseAt: "2019-04-05T13:45:38Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 99
undervaluedScore: 60
maintainers: ["KonradHoeffner", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/65827507/d7b0d100-b72e-11eb-9715-5251d71e7ea2"
---

# SNIK Graph

Visualization of the SNIK ontology using the Cytoscape.js graph library.
Live at <https://www.snik.eu/graph> (stable) and <https://snikproject.github.io/graph/index.html> (master branch).
Browse the code documentation [here](https://snikproject.github.io/graph/doc/).

## Installation and Preview

### Node

    git clone https://github.com/snikproject/graph.git
    cd graph
    npm install
    cp js/config/config.dist.ts js/config/config.ts
    npm run dev 

Open the displayed local link in a browser.

### Developing On Windows

Developing on Windows is not recommended but possible with the following adaptions:

* Instead of `cp js/config/config.dist.ts js/config/config.ts`, do `copy js\config\config.dist.ts js\config\config.ts` or use the Explorer to copy the file.
* lint-staged fails on Windows with "Current directory is not a git directory!". Skip the Husky commit hook with `git commit --no-verify`.

### Docker

    git clone https://github.com/snikproject/graph.git
    cd graph
    docker build . -t snik-graph
    docker run --network="host" snik-graph

Open <http://localhost:8043/> in a browser.

When using SNIK Graph as a Git submodule, use `docker build -f…
