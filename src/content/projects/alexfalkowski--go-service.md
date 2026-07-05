---
repo: "alexfalkowski/go-service"
name: "go-service"
description: "A framework to build services in Go."
readmeQualityOk: true
url: "https://github.com/alexfalkowski/go-service"
homepage: "https://alexfalkowski.github.io/go-service"
language: "Go"
languages: ["Go"]
languagePcts: [100]
topics: ["cache", "cloudevents", "golang", "grpc", "http", "mvc", "postgres", "redis", "rpc"]
stars: 34
forks: 3
openIssues: 0
closedIssues: 8
watchers: 2
contributors: 3
recentReleases: 0
createdAt: "2021-05-02T14:28:46Z"
lastCommitAt: "2026-07-05T20:17:26Z"
lastReleaseAt: "2026-03-28T09:22:32Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 100
undervaluedScore: 61
maintainers: ["alexfalkowski", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/2f731b7fc31973ba8caf983a10e735543925dfc53cd9da965911e6d8ae9996be/alexfalkowski/go-service"
---

# 🧰 Go Service

`github.com/alexfalkowski/go-service/v2` is an opinionated framework/library for building Go services with consistent wiring for configuration, DI, transports, telemetry, crypto, etc.

This repo is primarily a **library of packages** (no top-level `cmd/` binary). Services built on top typically define their own `main` package elsewhere and import this module.

Most services are expected to be bootstrapped from [`go-service-template`](https://github.com/alexfalkowski/go-service-template) and to compose the high-level module bundles from this repository. That is the primary supported path. Lower-level package-by-package composition is still available, but it is an advanced mode and may require extra manual registration.

---

## 🚀 Install

For a new service, start from `go-service-template` so the application `main`, command wiring, configuration fixtures, and standard module composition are generated together.

For direct package use in an existing module, add the library dependency with the versioned module path:

```sh
go get github.com/alexfalkowski/go-service/v2
```

Use the Go version declared in `go.mod` or newer when installing or building this module.

---…
