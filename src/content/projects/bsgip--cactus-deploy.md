---
repo: "bsgip/cactus-deploy"
name: "cactus-deploy"
description: "Home for all things cactus infrastructure/platform related"
readmeQualityOk: true
url: "https://github.com/bsgip/cactus-deploy"
language: "Shell"
languages: ["Shell", "Dockerfile"]
languagePcts: [69, 26]
topics: ["csip-aus-test-harness"]
stars: 6
forks: 3
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 6
recentReleases: 0
createdAt: "2025-03-14T01:12:01Z"
lastCommitAt: "2026-07-20T06:33:01Z"
lastReleaseAt: "2026-03-24T05:17:25Z"
status: "thriving"
tags: []
healthScore: 96
undervaluedScore: 83
maintainers: ["joshvote", "LachlanJW", "mikejturner"]
openGraphImageUrl: "https://opengraph.githubassets.com/840dbded3cc2108728c631eb7f1d3e216c39b36e99d0be862499b19dd67979f2/bsgip/cactus-deploy"
---

# cactus-deploy: Client Test Platform

This is the primary deployment repository for the client test harness orchestration platform used for cactus (**CSIP-AUS Compliance Testing for Utility Services**).

It contains the Docker images, PKI tooling, and deployment scripts required to build and operate the Cactus platform on a single host using rootful Podman.

## Overview

This project provides:
- Docker images for custom components in the cactus stack, along with associated build workflows.
- IEEE 2030.5 PKI certificate generation tooling.
- Deployment scripts and nginx configuration for a Podman-based single-host deployment.

## Layered Architecture

The diagram below illustrates the layered architecture of the platform. Teststack instances (each a Podman pod containing envoy, cactus-runner, postgres, taskiq-worker, and pubsub) are provisioned on demand by the orchestrator via the Podman API socket. They are served through the `test-execution` domain, which implements mutual TLS and the AES-128-CCM8 cipher suite as required by IEEE 2030.5.

## Directory Structure

```text
cactus-deploy/
├── docker/        # Dockerfiles for cactus components
├── server/        # Deployment…
