---
repo: "tmorin/archicode"
name: "archicode"
description: "Streamline architectural design and visualization with an as-code approach. Integrates C4 Model and ArchiMate for efficient workflow."
readmeQualityOk: true
url: "https://github.com/tmorin/archicode"
homepage: "https://tmorin.github.io/archicode/"
language: "JavaScript"
languages: ["JavaScript", "HTML", "Java"]
languagePcts: [37, 33, 23]
topics: ["archimate", "architecture", "c4-model", "cli"]
stars: 11
forks: 0
openIssues: 11
closedIssues: 127
watchers: 1
contributors: 2
recentReleases: 1
createdAt: "2023-08-13T16:55:16Z"
lastCommitAt: "2026-10-25T22:11:51Z"
lastReleaseAt: "2026-10-23T14:32:24Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "under_pressure"]
healthScore: 98
undervaluedScore: 76
maintainers: ["tmorin"]
openGraphImageUrl: "https://opengraph.githubassets.com/e226aa403e9a1ec496def63cbc662f463880411c7fb28a443d20dd5fe4543cc5/tmorin/archicode"
---

# ArchiCode

> Streamline architectural design and visualization with an as-code approach. Integrates C4 Model and ArchiMate for efficient workflow.

## Run

The following commands assume the ArchiCode workspace is located in the current directory.
The workspace file is `.archicode.yaml`, a hidden file (`ls -a` lists it). It was called `workspace.yaml` before
0.18: rename it with `git mv workspace.yaml .archicode.yaml`, or pass `-w workspace.yaml`. The commands print this
advice when they find `workspace.yaml` and no `.archicode.yaml`; the manual says more (section _Upgrading_).

**Show the help information**

```shell
docker run \
  -u "$(id -u):$(id -g)" \
  -v "$(pwd):/workdir" -w "/workdir" \
  --rm ghcr.io/tmorin/archicode --help
```

**Generate all views**

```shell
docker run \
  -u "$(id -u):$(id -g)" \
  -v "$(pwd):/workdir" -w "/workdir" \
  --rm ghcr.io/tmorin/archicode views generate
```

**Compare two plateaus**

A workspace can have states, the plateaus, each a layer over another one: the manifests that say `plateau: <id>`
in their header, and a manifest of kind `archicode.morin.io/plateau` that lists what the layer changes.
`diff` tells what is new, changed and…
