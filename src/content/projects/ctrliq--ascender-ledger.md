---
repo: "ctrliq/ascender-ledger"
name: "ascender-ledger"
description: "Ascender Ledger is an application that accepts the log stream from Ascender and allows you to easily create reports based upon host fact data and view changes that have occurred during playbook runs."
readmeQualityOk: true
url: "https://github.com/ctrliq/ascender-ledger"
homepage: "https://ciq.com/products/ascender-automation/"
language: "CSS"
languages: ["CSS"]
languagePcts: [64]
stars: 6
forks: 3
openIssues: 2
closedIssues: 6
watchers: 6
contributors: 9
recentReleases: 0
createdAt: "2023-07-21T19:52:36Z"
lastCommitAt: "2026-08-23T04:10:29Z"
status: "thriving"
tags: []
healthScore: 83
undervaluedScore: 49
maintainers: ["TheWitness", "blaipr", "tylergohl"]
openGraphImageUrl: "https://opengraph.githubassets.com/72d1fb18ed13042982509688ca6b1b61a1f3bd7734d6dab0ccf866924dd57f98/ctrliq/ascender-ledger"
---

# Ascender Ledger

A reporting tool for [Ascender](https://github.com/ctrliq/ascender). Ledger accepts the log stream from one or more Ascender servers, stores the host facts and the changes each playbook run made, and lets you report across both. Recording only changes strips out the noise of unchanged tasks, so what remains is what your automation actually did.

## Requirements

- A running Ascender server configured to send its log stream to Ledger
- Docker with Compose, for a standalone deployment
- A Kubernetes cluster, if deploying through the installer

## Installation

Ledger is normally deployed alongside Ascender by the [Ascender installer](https://github.com/ctrliq/ascender-install), by setting `LEDGER_INSTALL: true`. To run it standalone:

```bash
docker compose up -d
```

## Using Ledger

Once a server is trusted, Ledger records two kinds of data as jobs run, both searchable from the web interface.

### Facts

Fact data is collected from any module that writes to `ansible_facts`. That covers the `setup` module used by `gather_facts`, modules that register facts automatically such as several of the Windows modules, and `set_fact`.

`set_fact` is deliberately allowed,…
