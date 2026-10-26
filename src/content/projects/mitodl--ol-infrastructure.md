---
repo: "mitodl/ol-infrastructure"
name: "ol-infrastructure"
description: "Infrastructure automation code for use by MIT Open Learning"
readmeQualityOk: true
url: "https://github.com/mitodl/ol-infrastructure"
language: "Python"
languages: ["Python"]
languagePcts: [95]
topics: ["infrastructure", "devops", "aws"]
stars: 59
forks: 6
openIssues: 38
closedIssues: 613
watchers: 21
contributors: 48
recentReleases: 0
createdAt: "2020-05-26T20:31:47Z"
lastCommitAt: "2026-10-26T18:08:39Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 98
undervaluedScore: 49
maintainers: ["blarghmatey", "renovate[bot]", "Ardiea"]
openGraphImageUrl: "https://opengraph.githubassets.com/d9b1c4e357d6b10adfb84d32594e74f583c49a5f155cc2f3102e088446d37b4e/mitodl/ol-infrastructure"
---

# Overview
This repository is a monorepo for managing the configuration and deployment of services managed by MIT Open Learning engineering. It uses a combination of Pulumi and PyInfra to build a pure-python deployment stack to enable more developer-friendly access to creating and modifying the systems that power the applications that we build and serve.

All infrastructure provisioning performed via Pulumi is located under `src/ol-infrastructure/` and all configuration management written in PyInfra lives under `src/bilder`.

# Infrastructure Management

## Getting Started
This is a Pulumi project, so the first step is to install the Pulumi CLI along with the relevant language
protocol. Instructions [here](https://www.pulumi.com/docs/get-started/install/).

To install and manage the relevant dependencies this project uses [Poetry](https://python-poetry.org/). After installing
the Poetry CLI simply run `poetry install`.

We use the S3 state backend for Pulumi, so after installing the Pulumi CLI run `pulumi login s3://mitol-pulumi-state`.

## Structure

This is a monorepo of the Pulumi code that we use to manage the infrastructure that powers MIT Open Learning

Component resources…
