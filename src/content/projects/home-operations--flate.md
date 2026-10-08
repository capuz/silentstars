---
repo: "home-operations/flate"
name: "flate"
description: "A Flux resource validator and inflator ⇄"
readmeQualityOk: true
url: "https://github.com/home-operations/flate"
language: "Go"
languages: ["Go"]
languagePcts: [98]
topics: ["fluxcd", "helmrelease", "kustomize"]
stars: 116
forks: 20
openIssues: 14
closedIssues: 66
watchers: 0
contributors: 11
recentReleases: 0
createdAt: "2026-05-21T20:25:49Z"
lastCommitAt: "2026-10-08T10:42:53Z"
lastReleaseAt: "2026-05-23T23:55:31Z"
status: "thriving"
tags: []
healthScore: 95
undervaluedScore: 31
maintainers: ["sticky-gecko[bot]", "onedr0p", "buroa"]
openGraphImageUrl: "https://opengraph.githubassets.com/36e4939763ff0dd98bc531e0d7cc98540ff09b79c9480fecb6e7a955ff186b87/home-operations/flate"
---

# flate

> Render and diff Flux GitOps repositories fully offline — one static binary, no cluster, no `kubectl`, no shellouts.

flate is a Go rewrite of [flux-local](https://github.com/allenporter/flux-local). Helm, kustomize, go-git, and oras-go are linked as native libraries, so a `kind` cluster plus a stack of CLIs (`helm`, `kustomize`, `flux`, `kubectl`) collapse into one binary that runs in CI in seconds, not minutes. Changed-only mode reconciles just the subtree a PR touches, dropping single-file diffs to tens of milliseconds on real home-ops repos.

At a glance:

- **Offline** — one static binary; no cluster, `kubectl`, `helm`/`kustomize`/`flux` CLIs, or shellouts.
- **Fast** — changed-only mode reconciles just the subtree a PR touches.
- **CI-native** — seconds not minutes; a GitHub Action ships in the repo.
- **Embeddable** — `pkg/orchestrator` is a library entry point.

## Contents

- [Install](#install)
- [Use](#use)
- [Changed-only mode](#changed-only-mode)
- [Source kinds and auth](#source-kinds-and-auth)
- [Behaviors](#behaviors)
- [Limits](#limits)
- [Architecture](#architecture)
- [Library use](#library-use)
- [Development](#development)
- [License](#license)

##…
