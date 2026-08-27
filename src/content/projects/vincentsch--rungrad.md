---
repo: "vincentsch/rungrad"
name: "rungrad"
description: "A Go framework and spec for CLIs used in terminals, scripts, and CI"
readmeQualityOk: true
url: "https://github.com/vincentsch/rungrad"
homepage: "https://www.rungrad.com"
language: "Go"
languages: ["Go"]
languagePcts: [96]
stars: 10
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 2
createdAt: "2026-08-18T13:28:17Z"
lastCommitAt: "2026-08-27T14:30:30Z"
lastReleaseAt: "2026-08-27T14:30:58Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 26
maintainers: ["vincentsch"]
openGraphImageUrl: "https://opengraph.githubassets.com/3711c15e1e7f3b0216d995b12fd020e8e1a9784ba442e5d836402b477d34ba7f/vincentsch/rungrad"
---

<p>
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="docs/assets/rungrad-logo-dark.svg">
    </picture>
  </a>
</p>

rungrad is a Go framework for CLIs used in terminals, scripts, and CI. Each
command has text output for people, stable `--json` for programs, `--dry-run`
before changes, confirmation before destructive actions, stable exit codes, and
help text with examples. rungrad handles the shared CLI behavior.

The repo contains three parts:

- a Cobra-based Go framework for CLIs
- a `rungrad` binary that creates starter projects and scores CLIs
- a spec in [`spec/`](https://github.com/vincentsch/rungrad/blob/HEAD/spec/README.md)

The spec stands on its own: a CLI written in any language can follow it and be
checked with `rungrad score`.

## CLIs Built on rungrad

- [asana-cli](https://github.com/vincentsch/asana-cli): an unofficial Asana CLI
  with stable output, dry-run previews, destructive confirmations, and rungrad
  conformance.

## Install

Requires Go 1.22.2 or newer.

```bash
go install github.com/vincentsch/rungrad/cmd/rungrad@v0.3.0
```

Add the framework to a Go module:

```bash
go get github.com/vincentsch/rungrad@v0.3.0
```

## Create a CLI…
