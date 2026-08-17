---
repo: "nmorabowen/apeGmsh"
name: "apeGmsh"
description: "A python wrapper for GMSH API meant to work along side opensees"
readmeQualityOk: true
url: "https://github.com/nmorabowen/apeGmsh"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 6
forks: 6
openIssues: 1
closedIssues: 1
watchers: 0
contributors: 5
recentReleases: 1
createdAt: "2026-04-06T01:56:26Z"
lastCommitAt: "2026-08-17T04:18:09Z"
lastReleaseAt: "2026-08-05T23:59:51Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "fork_magnet"]
healthScore: 90
undervaluedScore: 65
maintainers: ["nmorabowen"]
openGraphImageUrl: "https://opengraph.githubassets.com/70ba240dde9931a440326a4a1e85d3421872d6466b28d76035bc4a2b74a2cde4/nmorabowen/apeGmsh"
---

# apeGmsh

Structural-FEM wrapper around [Gmsh](https://gmsh.info) with a composition-based API and a
snapshot FEM broker. Designed to make it cheap to describe a model
once (geometry + physical groups + loads + constraints) and feed it
to any solver. OpenSees has first-class support; other solvers can be
plugged in through the same `FEMData` contract.

*A double-couple seismic source radiating through a solid block — one of the
[animated showcase models](https://nmorabowen.github.io/apeGmsh/); the script
that solves and renders it is 165 lines.*

**New to the library?** Start with the
[**learning path**](https://nmorabowen.github.io/apeGmsh/tutorials/learning-path/) —
every tutorial and worked example in reading order, each checked against a
known answer — or jump straight into
[**your first model in 10 minutes**](https://nmorabowen.github.io/apeGmsh/tutorials/first-model/).

**Documentation:** <https://nmorabowen.github.io/apeGmsh/>

> [!NOTE]
> **Built on Gmsh.** apeGmsh is a wrapper built on top of the (awesome)
> [Gmsh](https://gmsh.info) Python API. It adds a set of abstractions over the
> main API to fit an intended structural-FEM workflow — parts, constraints,
> loads,…
