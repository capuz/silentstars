---
repo: "kubara-io/catalogs"
name: "catalogs"
description: "This repository contains the catalog sources for kubara.  In kubara, a catalog is the reusable platform input that defines service metadata, Helm charts, Terraform modules, overlays, and other assets used to generate a platform setup."
readmeQualityOk: true
url: "https://github.com/kubara-io/catalogs"
language: "HCL"
languages: ["HCL", "Shell"]
languagePcts: [58, 30]
stars: 6
forks: 4
openIssues: 1
closedIssues: 1
watchers: 0
contributors: 8
recentReleases: 0
createdAt: "2026-06-17T12:49:39Z"
lastCommitAt: "2026-11-24T14:05:08Z"
lastReleaseAt: "2026-08-25T05:51:22Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 57
maintainers: ["kubara-renovate[bot]", "kubara-release[bot]", "Brilly-Bohyun"]
openGraphImageUrl: "https://opengraph.githubassets.com/9e116806def1d38a4a395006a8f494d6cded5dcb970717566298587e9733e811/kubara-io/catalogs"
---

# kubara catalogs

This repository contains the catalog sources for **kubara**.

In kubara, a catalog is the reusable platform input that defines service metadata, Helm charts, Terraform modules, overlays, and other assets used to generate a platform setup.

## What is in this repository?

Today this repo contains the official catalogs that kubara uses as its default platform baseline:

- `bootstrap/` – the fixed bootstrap foundation, like Argo CD and bootstrap CRDs, used during the initial platform bring-up
- `general/` – the general reusable platform services that are meant to be selected and configured per cluster

These catalogs are versioned and meant to be packaged and distributed as OCI artifacts.

## Versioning

Moving forward kubara catalogs are published using **CalVer (year.calendarWeek.releaseNumber)**. 

SemVer works well for single tools, but our catalogs contain a lot of dependencies from 
open source projects that follow SemVer loosely but not completely.
