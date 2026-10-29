---
repo: "INTO-CPS-Association/unifmu"
name: "unifmu"
description: "A universal mechanism for implementing Functional Mock-up Units (FMUs) in various languages"
readmeQualityOk: true
url: "https://github.com/INTO-CPS-Association/unifmu"
language: "Rust"
languages: ["Rust", "Python"]
languagePcts: [40, 21]
topics: ["fmi2", "simulation", "cosim", "python"]
stars: 63
forks: 6
openIssues: 8
closedIssues: 50
watchers: 5
contributors: 10
recentReleases: 0
createdAt: "2020-11-02T19:54:27Z"
lastCommitAt: "2026-10-29T12:25:43Z"
lastReleaseAt: "2025-07-15T12:39:54Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 96
undervaluedScore: 32
maintainers: ["lausdahl"]
openGraphImageUrl: "https://opengraph.githubassets.com/5750b243bd9f34269535bafbaea347b76918d8bd00812ad4e4382b74cef0e8b4/INTO-CPS-Association/unifmu"
---

# UniFMU - Universal Functional Mock-Up Units

Create [Functional Mock-up Units (FMUs)](https://fmi-standard.org/) with models
written in Python, C#, or Java. UniFMU supplies the native FMI interface and
connects it to your model, so you do not need to implement the C interface yourself.

UniFMU supports **FMI2 and FMI3 Co-Simulation**. Model Exchange and Scheduled
Execution are not supported. See the [FMI function reference](https://github.com/INTO-CPS-Association/unifmu/blob/HEAD/docs/fmi-support.md)
for individual capabilities.

- [Install](#install)
- [Create your first FMU](#create-your-first-fmu)
- [Edit and pack a Python FMI2 model](#edit-and-pack-a-python-fmi2-model)
- [Use other languages or FMI3](#use-other-languages-or-fmi3)
- [Run a distributed model](#run-a-distributed-model)
- [Configure the runtime](#configure-the-runtime)
- [How it works](#how-it-works)
- [Help and further reading](#help-and-further-reading)
- [Citing UniFMU](#citing-unifmu)

Building UniFMU itself, testing changes, and publishing releases are covered in
the [development guide](https://github.com/INTO-CPS-Association/unifmu/blob/HEAD/development/README.md).

## Install

Download and extract the…
