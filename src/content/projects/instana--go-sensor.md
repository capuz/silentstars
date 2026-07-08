---
repo: "instana/go-sensor"
name: "go-sensor"
description: ":rocket: Go Distributed Tracing & Metrics Sensor for Instana"
readmeQualityOk: true
url: "https://github.com/instana/go-sensor"
homepage: "https://www.ibm.com/products/instana"
language: "Go"
languages: ["Go"]
languagePcts: [97]
topics: ["golang", "go", "opentracing", "performance", "gopher", "performance-monitoring", "instrumentation", "metrics", "metrics-gathering", "monitoring"]
stars: 129
forks: 39
openIssues: 1
closedIssues: 43
watchers: 39
contributors: 31
recentReleases: 0
createdAt: "2016-10-28T14:10:37Z"
lastCommitAt: "2026-07-08T05:42:44Z"
lastReleaseAt: "2017-07-03T11:34:13Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 99
undervaluedScore: 47
maintainers: ["github-actions[bot]", "sanojsubran", "nithinputhenveettil"]
openGraphImageUrl: "https://opengraph.githubassets.com/b02f7b75ba477c641b2d8999432df15c57455c3b087bf5a92906b83ee8f5b393/instana/go-sensor"
---

# IBM Instana Go Tracer

The IBM Instana Go Tracer is an SDK that collects traces, metrics, logs and provides profiling for Go applications. The tracer is part of the [IBM Instana Observability](https://www.ibm.com/products/instana) tool set.

## Compatibility

### Supported Runtimes
-----
- Go Collector **v1.73** or later supports Go **1.26** and **1.25**, and maintains compatibility with *Go 1.24 (EOL)* and *Go 1.23 (EOL)*.

> [!NOTE]
> Make sure to always use the latest version of the tracer, as it provides new features, improvements, security updates and fixes.

## Installation

To add the tracer to your project, run:

```bash
go get -u github.com/instana/go-sensor@latest
```

> [!NOTE]
> As a good practice, add this command to your CI pipeline or your automated tool before building the application to keep the tracer up to date.

## Usage

### Initial Setup

Once the tracer is added to the project, import the package into the entrypoint file of your application:

```go
import (
  ...
  instana "github.com/instana/go-sensor"
)
```

Create a reference to the collector and initialize it with a service name:

```go
var (
  ...
  col instana.TracerLogger
)

func init() {
  ...…
