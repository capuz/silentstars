---
repo: "inmzhang/bloq"
name: "bloq"
description: "Dynamic Clifford+T surface code compiler"
readmeQualityOk: true
url: "https://github.com/inmzhang/bloq"
homepage: "https://bloqec.com"
language: "Rust"
languages: ["Rust"]
languagePcts: [94]
topics: ["surface-code", "quantum-error-correction", "compiler"]
stars: 16
forks: 3
openIssues: 1
closedIssues: 1
watchers: 2
contributors: 1
recentReleases: 2
createdAt: "2026-10-08T13:44:01Z"
lastCommitAt: "2026-10-20T08:49:38Z"
lastReleaseAt: "2026-10-08T16:30:20Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 88
undervaluedScore: 37
maintainers: ["inmzhang"]
openGraphImageUrl: "https://opengraph.githubassets.com/5733393204e65863872559e2b03d42f5ebf0873fba5e3364744c2098575d9f2b/inmzhang/bloq"
---

# Bloq

Turning a logical algorithm into an executable surface code program requires
several compilation stages:

Bloq compiles surface code spacetime layouts into physical programs with the
circuit, decoding, and classical-control information needed for simulation and
hardware execution. It connects the logical layout to a physical instruction
stream that combines quantum operations with classical control.

The input is a `BlockGraph`: a 3D spacetime layout composed of primitive logical
blocks and actions such as measurement-controlled branches and logical Pauli
feedback. The same graph can own reusable definitions, placed instances, and
their quantum and classical interfaces. Loading and saving retain that
hierarchy; one compile API handles both local and composed graphs.
The output is **Bloq IR**, which records physical gates, detectors, logical
observables, classical control, and source provenance.

Bloq provides Rust and Python APIs, a CLI, and an interactive editor.

Start with the [documentation](https://bloqec.com/docs/dev/) or
[open the browser editor](https://bloqec.com/editor/).

## Feature highlights

- **Surface Code Building Blocks** Compose cubes for memory and…
