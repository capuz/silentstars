---
repo: "app-sre/qontract-development-cli"
name: "qontract-development-cli"
description: "Qontract Development CLI"
url: "https://github.com/app-sre/qontract-development-cli"
language: "Python"
languages: ["Python", "Jinja"]
languagePcts: [72, 24]
stars: 7
forks: 13
openIssues: 1
closedIssues: 0
watchers: 1
contributors: 7
recentReleases: 0
createdAt: "2022-10-04T07:45:17Z"
lastCommitAt: "2026-06-24T00:21:04Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "fork_magnet"]
healthScore: 79
undervaluedScore: 76
maintainers: ["red-hat-konflux[bot]", "chassing"]
openGraphImageUrl: "https://opengraph.githubassets.com/c8b570c185daa89afc61e4492119a853b9921e8d02bc332503ddb28cca255ecc/app-sre/qontract-development-cli"
---

# Qontract Development CLI

![PyPI - License](https://img.shields.io/pypi/l/qontract-development-cli)

Qontract Development CLI supports your daily [qontract-reconcile][qontract-reconcile] development work.

[toc]

## Recommended Installation Method

The recommended way to install `qontract-development-cli` is to use the [uv](https://docs.astral.sh/uv/) tool:

```shell
uv tool install qontract-development-cli
```

and upgrade an existing installation with:

```shell
uv tool upgrade qontract-development-cli
```

## Alternative Installation Methods

You can install this library from [PyPI][pypi-link] with `pip`:

```shell
python3 -m pip install qontract-development-cli
```

or install it with `pipx`:

```shell
pipx install qontract-development-cli
```

and upgrade an existing installation with:

```shell
pipx upgrade qontract-development-cli
```

## Quickstart

* Create initial configuration

  ```shell
  qd config init
  ```

  

* Create a profile `sql-query` to run the `sql-query` integration

  ```shell
  qd profile create sql-query
  ```

  

* Run `sql-query` profile

  ```shell
  qd profile run dev sql-query
  ```

  

## Features

Qontract Development CLI currently provides…
