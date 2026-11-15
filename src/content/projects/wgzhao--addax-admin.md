---
repo: "wgzhao/addax-admin"
name: "addax-admin"
description: "Addax Admin is a web-based management console for Addax ETL jobs, offering task scheduling, monitoring, and data management with a Vue 3 frontend and Spring Boot backend."
originalDescription: "Addax Admin is a web-based management console for Addax ETL jobs, offering task scheduling, monitoring, and data management with a Vue 3 frontend and Spring Boot backend."
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/wgzhao/addax-admin"
language: "Java"
languages: ["Java", "Vue"]
languagePcts: [49, 30]
topics: ["etl", "managment-tool", "springboot3", "typescript", "vue3", "vuetify3"]
stars: 38
forks: 9
openIssues: 2
closedIssues: 9
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2023-08-29T06:12:53Z"
lastCommitAt: "2026-11-15T08:19:22Z"
lastReleaseAt: "2026-05-25T01:14:56Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 96
undervaluedScore: 57
maintainers: ["wgzhao"]
openGraphImageUrl: "https://opengraph.githubassets.com/705bc0a41999b04db2c3fa9ab29d004eb5e7789cfb278c54518e39791b651b9a/wgzhao/addax-admin"
---

# Addax Admin

Addax Admin is a modern, enterprise-grade ETL management and monitoring console built for the Addax ETL engine. The project is organized as a monorepo, containing a complete backend API service and a frontend management interface. It aims to provide a one-stop operations experience covering job configuration, scheduled execution, runtime monitoring, and log auditing.

Core goal: make it easier for data engineers and operations staff to manage Addax jobs, observe runtime status, tune concurrency and retry policies, and ensure high availability and concurrency control in multi-node deployments.

---

## Interface Preview

The following are system interface screenshots (demo data) to help you quickly understand the interface and feature coverage:

For more page screenshots, see [screenshots/](https://github.com/wgzhao/addax-admin/blob/HEAD/screenshots/).

## Directory Structure (Brief)

```text
addax-admin/
├── backend/                 # Spring Boot 4 backend service (API, scheduling, persistence, queues and leases)
├── frontend/                # Vue 3 + Vite + TypeScript + Vuetify admin interface
├── docs/                    # Installation and usage manual, ADRs,…
