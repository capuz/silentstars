---
repo: "osac-project/osac"
name: "osac"
description: "OSAC mono-repo: consolidates fulfillment-service, osac-operator, osac-aap, and osac-installer"
readmeQualityOk: true
url: "https://github.com/osac-project/osac"
language: "Go"
languages: ["Go"]
languagePcts: [74]
stars: 35
forks: 94
openIssues: 12
closedIssues: 7
watchers: 0
contributors: 87
recentReleases: 10
createdAt: "2026-07-29T15:51:37Z"
lastCommitAt: "2026-10-29T11:01:26Z"
lastReleaseAt: "2026-08-17T19:12:42Z"
status: "thriving"
tags: ["hidden_gem", "release_machine", "fork_magnet"]
healthScore: 85
undervaluedScore: 50
maintainers: ["eliorerz", "redhat-chai-bot", "CrystalChun"]
openGraphImageUrl: "https://opengraph.githubassets.com/5135c94d2390fb431eb09ede5d144f4b171b5fc0ee9d9d4d3156113c23ce39f0/osac-project/osac"
---

# OSAC

## Introduction

There is a worldwide trend towards local and specialized clouds, where
governments and service providers want to offer their own cloud services under
local jurisdiction and specific compliance regimes. Use cases include
traditional VMaaS clouds, neoclouds, and sovereign clouds.

Open Sovereign AI Cloud (OSAC) is an open-source project for organizations
standing up their own clouds. It offers multi-tenant self-service provisioning
of VMs, OpenShift clusters, bare-metal servers, Model-aaS, and more. OSAC
offers standard cloud features including tenancy, RBAC, quota, metering, and
tenant isolation at every layer.

OSAC interfaces:
* **gRPC API**: scalable, secure, and safe to put in front of unrelated tenants. It is standards-based and designed for automation.
* **CLI**: an out-of-the-box CLI for admins and tenants to accomplish their work with OSAC.
* **UI**: a brandable web interface for service providers who prefer an out-of-the-box UI vs building their own.

## Core Services

**Bare Metal-aaS** (BMaaS) allows tenants to allocate groups of computers, place
those computers onto isolated networks, and manage/configure those computers
themselves.  BMaaS is…
