---
repo: "digitalocean/pydo"
name: "pydo"
description: "Official DigitalOcean Python Client based on the DO OpenAPIv3 specification"
url: "https://github.com/digitalocean/pydo"
homepage: "https://pypi.org/project/pydo/"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["api", "cloud", "digitalocean", "python", "hacktoberfest"]
stars: 134
forks: 63
openIssues: 14
closedIssues: 33
watchers: 11
contributors: 41
recentReleases: 0
createdAt: "2021-04-27T23:04:08Z"
lastCommitAt: "2026-07-03T12:23:14Z"
lastReleaseAt: "2024-09-18T18:31:51Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 89
undervaluedScore: 47
maintainers: ["digitalocean-engineering", "SSharma-10", "DO-rrao"]
openGraphImageUrl: "https://opengraph.githubassets.com/8791a6670e7c81dc61879badbde6f411f58fb8ec67dca9cfb7e59c9027fcf851/digitalocean/pydo"
---

# **PyDo**

`pydo` is the official Python client library that allows
Python developers to interact with and manage their DigitalOcean
resources through a Python abstraction layer on top of the raw
[DigitalOcean API HTTP Interface](https://developers.digitalocean.com/documentation/v2/).

A top priority of this project is to ensure the client abides by the API
contract. Therefore, the client itself wraps a generated client based
on the [DigitalOcean OpenAPI Specification](https://github.com/digitalocean/openapi) to support all of DigitalOcean's HTTP APIs.

> **🚀 New in v0.29.0 — AI & Inference support**
>
> `pydo` now ships first-class support for DigitalOcean's
> [Gradient AI Platform](https://www.digitalocean.com/products/gradient): chat
> completions (with streaming), image generation, audio, batch inference, and
> model listing — all from the same `Client`. Jump to
> [**AI & Inference**](#ai--inference) to get started.

# **Getting Started With the Client**

## Prerequisites

- Python version: >= 3.7.2

## Installation

To install from pip:

```shell
    pip install pydo
```

## Installing a Beta (Pre-Release)

Beta releases are published to PyPI as [PEP…
