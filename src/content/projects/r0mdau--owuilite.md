---
repo: "r0mdau/owuilite"
name: "owuilite"
description: "Getting started guide adopting OpenWebUI and LiteLLM"
readmeQualityOk: true
url: "https://github.com/r0mdau/owuilite"
language: "Makefile"
languages: ["Makefile"]
languagePcts: [100]
stars: 7
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2025-10-06T15:24:39Z"
lastCommitAt: "2026-11-07T22:50:37Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 47
maintainers: ["r0mdau"]
openGraphImageUrl: "https://opengraph.githubassets.com/4363004ab2c731f3946103d5ffbea467ce72e10be88ef3aeff060aee30f92723/r0mdau/owuilite"
---

# owuilite

A getting started guide for adopting [Open WebUI][#openwebui] and [LiteLLM][#litellm].

## Overview

This repository provides multiple deployment configurations for running Open WebUI with LiteLLM, ranging from a simple single-container setup to a production-ready, autoscaling architecture with full observability. The configurations demonstrate progressive complexity:

- **Basic**: Single Open WebUI container for quick local testing
- **Intermediate**: Open WebUI + LiteLLM proxy for accessing public/private LLM APIs
- **Advanced**: Full autoscaling stack with PostgreSQL, pgvector, Valkey, and MinIO
- **Enterprise**: Complete solution with observability features using OpenTelemetry

## Pre-Requisites

Have docker and docker compose up and running.

## Getting Started

### Basic Setup (Single Container)

The fastest way to start using the Open WebUI chat application is to run it with Docker:

```bash
docker run --network=host -v open-webui:/app/backend/data --name open-webui ghcr.io/open-webui/open-webui:v0.13.0
```

### Intermediate Setup (Open WebUI + LiteLLM)

An intermediate solution shows Open WebUI and LiteLLM running on the same host and exposing public/private…
