---
repo: "kojah/gohawk"
name: "gohawk"
description: "Watch for bugs like a hawk! gohawk is a set of static analyzers for Go, focused on concurrency and resource-lifetime bugs."
readmeQualityOk: true
url: "https://github.com/kojah/gohawk"
homepage: "https://gohawk.dev"
language: "Go"
languages: ["Go"]
languagePcts: [94]
topics: ["code-quality", "concurrency", "go", "go-vet", "golang", "golangci-lint", "linter", "static-analysis", "static-analyzer"]
stars: 8
forks: 1
openIssues: 32
closedIssues: 13
watchers: 0
contributors: 4
recentReleases: 10
createdAt: "2026-08-26T16:19:22Z"
lastCommitAt: "2026-10-21T20:00:31Z"
lastReleaseAt: "2026-09-21T02:27:09Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 85
undervaluedScore: 54
maintainers: ["kojah"]
openGraphImageUrl: "https://opengraph.githubassets.com/a86a63a687e7556b4126c8eef4a959b141777769b5856ada36cb771695d2fdd4/kojah/gohawk"
---

# gohawk

gohawk is an industrial-grade static analyzer that finds resource management
and concurrency issues in Go code. It has been used to find and fix bugs in
[Docker](https://github.com/moby/moby/pull/53517),
[Kubernetes](https://github.com/kubernetes/kubernetes/pull/142429), and
[Caddy](https://github.com/caddyserver/caddy/pull/7968).

gohawk is heavily inspired by Meta's [Infer](https://fbinfer.com/) and its
compositional summary model. It writes a summary of what each function does
with its arguments and results, such as closing a file or waiting for a
goroutine, and callers read that summary instead of analyzing the function
again. This lets gohawk follow a resource through helpers and across packages.

[Read the documentation](https://gohawk.dev/)

## Quick Start

Download a binary from [GitHub Releases](https://github.com/kojah/gohawk/releases)
and put it on your `PATH`. For source builds, see [installation](https://github.com/kojah/gohawk/blob/HEAD/docs/installation.md).

```sh
# Run the conservative default set.
gohawk ./...

# See every analyzer with its tier and group.
gohawk list

# Inspect an analyzer or one of its checks.
gohawk doc lockorder
gohawk doc…
