---
repo: "Morriz/itsUP"
name: "itsUP"
description: "Lean, automated, poor man's infra for lightweight services running in docker."
readmeQualityOk: true
url: "https://github.com/Morriz/itsUP"
language: "Python"
languages: ["Python"]
languagePcts: [88]
topics: ["automation", "docker", "docker-compose", "ias", "infra", "infrastructure-as-code", "openapi", "zero-downtime"]
stars: 9
forks: 2
openIssues: 7
closedIssues: 4
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2024-02-06T14:54:17Z"
lastCommitAt: "2026-07-24T06:09:42Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 84
undervaluedScore: 67
maintainers: ["Morriz", "github-actions[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/d65d2f82f04414347f0c76a342b21520b213af07a7a9bc6b907053b5b98c6e36/Morriz/itsUP"
discussionCount: 0
---

# itsUP 

_Lean, secure, automated, zero downtime<sup>\*</sup>, poor man's infra for services running in docker._

<p></p>
<p>
Running a home network? Then you may already have a custom setup, probably using docker compose. You might enjoy all the maintenance and tinkering, but you are surely aware of the pitfalls and potential downtime. If you think that is ok, or if you don't want automation, then this stack is probably not for you.
Still interested? Then read on...
</p>

**Table of contents:**

- [Documentation](#documentation)
- [Key concepts](#key-concepts)
  - [Single source of truth](#single-source-of-truth)
  - [Managed proxy setup](#managed-proxy-setup)
  - [Managed service deployments \& updates](#managed-service-deployments--updates)
  - [\*Zero downtime?](#zero-downtime)
- [Apps included](#apps-included)
- [Prerequisites](#prerequisites)
- [Dev/ops tools](#devops-tools)
  - [itsup CLI](#itsup-cli)
  - [Utility scripts](#utility-scripts)
  - [Makefile](#makefile)
  - [DNS Honeypot](#dns-honeypot)
  - [Container Security Monitor](#container-security-monitor)
- [Howto](#howto)
  - [Install \& run](#install--run)
    - [1. Clone and setup…
