---
repo: "gomlx/compute"
name: "compute"
description: "Package compute provides a modular API for defining and executing multidimensional computation graphs with pluggable backends."
readmeQualityOk: true
url: "https://github.com/gomlx/compute"
language: "Go"
languages: ["Go"]
languagePcts: [89]
stars: 11
forks: 5
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 5
recentReleases: 0
createdAt: "2026-04-17T15:31:42Z"
lastCommitAt: "2026-11-08T10:39:54Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 87
undervaluedScore: 50
maintainers: ["janpfeifer", "guygrigsby", "rsdoiel"]
openGraphImageUrl: "https://opengraph.githubassets.com/b060536b3e3e4ad25acaf6031978eccd0dcfa9e7605ce6c79536178174031c40/gomlx/compute"
---

# Compute Backend APIs

Package `compute` provides a modular API for defining and executing multidimensional computation graphs with pluggable backends.

It defines `shapes` (tensor shapes) and `dtypes` (data types) and the top-level `compute` package defines a `Backend` API (a series of interfaces), that
can be used to define a computation graph, JIT-compile it, transfer buffers (raw values) to/from the backend, and execute compiled computations.

It powers [GoMLX](https://github.com/gomlx/gomlx), the machine learning framework for Go, but can be used directly also. With the caveat that `compute.Backend` doesn't aim to be ergonomic, but instead "correct" and "minimal" (including minimal dependencies). 
For a more convenient API for complex computation and auto-differentiation, use GoMLX instead.

The default `compute.New()` function creates a backend object using any registered implementation, or inspects the `GOMLX_BACKEND` environment variable to select a specific backend and optional configuration. For example, to use the Go backend, set `GOMLX_BACKEND=go` (or `GOMLX_BACKEND="go:parallelism=4"` to configure it). If `GOMLX_BACKEND` is not set, `compute.New()` falls back to…
