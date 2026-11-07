---
repo: "Backbase/stream-services"
name: "stream-services"
description: "Stream Services is an open-source accelerator designed to connect with Backbase Digital Banking Services (DBS). It provides a collection of libraries, REST services, and tools that orchestrate calls to DBS in a functional programming style using project reactor, enabling resiliency and scalability."
readmeQualityOk: true
url: "https://github.com/Backbase/stream-services"
homepage: "https://deepwiki.com/Backbase/stream-services"
language: "Java"
languages: ["Java"]
languagePcts: [99]
stars: 32
forks: 26
openIssues: 14
closedIssues: 37
watchers: 13
contributors: 105
recentReleases: 0
createdAt: "2020-08-28T08:50:10Z"
lastCommitAt: "2026-11-07T09:29:41Z"
lastReleaseAt: "2026-04-16T09:22:35Z"
status: "thriving"
tags: ["needs_contributors", "legacy_hero", "fork_magnet"]
healthScore: 90
undervaluedScore: 64
maintainers: ["backbaseoss", "apawan", "sianw"]
openGraphImageUrl: "https://opengraph.githubassets.com/563437530d54e656f16620257aaeef175f1509551d6000b86966dad09d92c3da/Backbase/stream-services"
---

# Stream Services
Stream Services are an Open-Source accelerator to connect with Backbase "out-of-the-box" components that talk to DBS and are responsible for orchestrating calls to DBS. 
The orchestration of calling different services is written in a functional programming style on project reactor enabling resiliency and scalability. 
Stream Services are packaged as libraries that can be included in any project, REST Service and/or Spring Cloud Data Flow Applications.

The Services are listed with Service name and how they are packaged.

Currently, the following DBS services are exposed as Stream Components:
* [Stream Legal Entity](https://github.com/Backbase/stream-services/blob/HEAD/stream-legal-entity) (Lib, Rest, Task) → Legal Entity Ingestion Service that orchestrate all calls to DBS from a single aggregate model. This service is exposed as a library and a REST full service. Supports retry of the aggregate and uses the Legal Entity Ingestion Model to have a single interface into DBS. Requires Access Control, Product Summary
* [Stream Product Catalog](https://github.com/Backbase/stream-services/blob/HEAD/stream-product-catalog) (Lib, Rest, Task) → Enabled bootstrapping of…
