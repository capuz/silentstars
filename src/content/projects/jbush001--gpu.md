---
repo: "jbush001/GPU"
name: "GPU"
description: "Experiments with fixed function renderers and ChiselHDL"
readmeQualityOk: true
url: "https://github.com/jbush001/GPU"
language: "Scala"
languages: ["Scala"]
languagePcts: [100]
stars: 60
forks: 9
openIssues: 0
closedIssues: 0
watchers: 8
contributors: 2
recentReleases: 0
createdAt: "2015-07-01T15:02:22Z"
lastCommitAt: "2026-07-18T05:48:23Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 89
undervaluedScore: 42
maintainers: ["jbush001"]
openGraphImageUrl: "https://opengraph.githubassets.com/c92a233cfd90a32f71f664bf5f35d10090edceffe3e410452941b052117de3c3/jbush001/GPU"
---

## Setup

This uses the Chisel Hardware Description Language

https://www.chisel-lang.org/docs/installation

## Building and Running

**To run all automated tests:**

    ./run test

**To run a specific test:**

    ./run test "my test name"

**To run a test and dumping waveform files:**

    ./run test-wave "my test name"

The output waveform will be written to build/chiselsim/.../workdir-verilator/trace.vcd

**To run the full design in simulation**

    ./run sim

This will write the rendered framebuffer into "output.png"

**To generate synthesizable design**

    ./run syn

(currently not implemented)

**Generating API documentation**

    ./run doc
