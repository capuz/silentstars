---
repo: "picodata/picodata"
name: "picodata"
description: "Distributed, PostgreSQL-compatible database with plugins in Rust."
readmeQualityOk: true
url: "https://github.com/picodata/picodata"
homepage: "https://picodata.io/en/"
language: "Rust"
languages: ["Rust"]
languagePcts: [79]
topics: ["database", "distributed-database", "distributed-sql", "newsql", "postgresql", "rust"]
stars: 125
forks: 16
openIssues: 2
closedIssues: 6
watchers: 4
contributors: 51
recentReleases: 0
createdAt: "2024-10-18T10:46:59Z"
lastCommitAt: "2026-11-05T14:02:17Z"
status: "thriving"
tags: []
healthScore: 85
undervaluedScore: 46
maintainers: ["darthunix", "elmaxxo", "funbringer"]
openGraphImageUrl: "https://opengraph.githubassets.com/f4be9b8227921367fde38a91ea21281defc90a3e224eb7a2abbe8f3e8113c239/picodata/picodata"
---

> This repository contains the source code of Picodata, a distributed
in-memory database with plugins in Rust.

## What is Picodata

Picodata is a PostgreSQL-compatible distributed DBMS with plugins
in Rust. It is based on [shared-nothing architecture] and partitions the
entire data set across independent processes each running on an own CPU core.
Picodata is SQL- and wire-compatible with PostgreSQL.

Learn more about our software at the [picodata.io] web site.

[picodata.io]: https://picodata.io/picodata/
[shared-nothing architecture]: https://en.wikipedia.org/wiki/Shared-nothing_architecture

## Getting Picodata

We provide pre-built Picodata packages for Debian, Ubuntu, and
RHEL-based Linux distributions. Head over to [picodata.io/download] to
see what is available.

[picodata.io/download]: https://picodata.io/download/

## Running Picodata

Running a Picodata instance only takes one simple command:

```bash
picodata run
```

Getting a basic distributed cluster made of two instances running on
different hosts involves two commands, like this:

```bash
picodata run --listen 192.168.0.1:3301 --pg-listen 192.168.0.1:5432
picodata run --listen 192.168.0.2:3301 --pg-listen…
