---
repo: "rh-ai-quickstart/private-coding-assistant"
name: "private-coding-assistant"
description: "Private AI Coding Assistant"
readmeQualityOk: true
url: "https://github.com/rh-ai-quickstart/private-coding-assistant"
language: "HTML"
languages: ["HTML", "Python"]
languagePcts: [28, 24]
topics: ["completed"]
stars: 6
forks: 4
openIssues: 0
closedIssues: 3
watchers: 1
contributors: 6
recentReleases: 0
createdAt: "2026-06-30T14:30:04Z"
lastCommitAt: "2026-07-28T14:58:06Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 99
undervaluedScore: 64
maintainers: ["itay1551", "Hadar301"]
openGraphImageUrl: "https://opengraph.githubassets.com/d23ec55a0a330eb2e3c07885959107a7783bbbd0743b389cdd9039dbdf319a20/rh-ai-quickstart/private-coding-assistant"
---

# Private AI Code Assistant on Red Hat OpenShift

Deploy a private self-hosted AI coding assistant on OpenShift so developers get AI-powered IDEs while no code leaves your environment

## Table of Contents

1. [Detailed description](#detailed-description)
   - [Architecture diagrams](#architecture-diagrams)
2. [Requirements](#requirements)
   - [Minimum hardware requirements](#minimum-hardware-requirements)
   - [Minimum software requirements](#minimum-software-requirements)
   - [Required user permissions](#required-user-permissions)
3. [Deploy](#deploy)
   - [Option 1: ROSA (AWS)](#option-1-rosa-aws)
   - [Option 2: ARO (Azure)](#option-2-aro-azure)
   - [Option 3: Existing OpenShift](#option-3-existing-openshift)
   - [Validating the deployment](#validating-the-deployment)
   - [Delete](#delete)
4. [Documentation](#documentation)
5. [References](#references)
6. [Tags](#tags)

## Detailed description

### The challenge

Teams want IDE-integrated AI coding help without sending proprietary source to public model APIs. They also need governance: who can call the model, which model is served, and where data resides.

### Our solution

This quickstart deploys:

- **OpenShift Dev…
