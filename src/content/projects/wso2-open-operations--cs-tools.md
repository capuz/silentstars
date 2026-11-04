---
repo: "wso2-open-operations/cs-tools"
name: "cs-tools"
description: "OpenSource tools beneficial to customer success."
readmeQualityOk: true
url: "https://github.com/wso2-open-operations/cs-tools"
language: "Go"
languages: ["Go", "TypeScript"]
languagePcts: [53, 42]
topics: ["ballerina", "common"]
stars: 29
forks: 66
openIssues: 6
closedIssues: 94
watchers: 0
contributors: 47
recentReleases: 0
createdAt: "2025-11-19T09:15:54Z"
lastCommitAt: "2026-11-04T08:03:14Z"
lastReleaseAt: "2026-06-19T15:58:38Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 98
undervaluedScore: 68
maintainers: ["rksk", "Dinithi-Hasanika", "Hesara2003"]
openGraphImageUrl: "https://opengraph.githubassets.com/1176eb473daa293af8eecd362cd858038ddc90581466042140ab2e45ef81eed4/wso2-open-operations/cs-tools"
---

# cs-tools

Open-source tools built by WSO2 for customer success operations. This repository contains web applications and backend integrations that enable teams to manage customer-facing workflows, project visibility, and support experiences.

## Repository Structure

```
cs-tools/
├── apps/
│   ├── csm-portal/                        # CSM Portal — Go BFF + React webapp + React microapp
│   ├── customer-portal/                   # Customer Portal — Ballerina backend (v1, deprecated) +
│   │                                       #   Go backend-v2 (in progress) + React webapp + React microapp
│   ├── git-internals-dashboard/           # SLA monitor for GitHub issues — Go backend + React webapp
│   ├── knowledge-portal/                  # Public knowledge base — Go backend + React webapp
│   ├── mttr-application/                  # MTTR analytics for ServiceNow homepage widgets — Node.js
│   ├── security-advisory-patches-portal/  # Gated advisory-PDF portal — Ballerina backend + React webapp
│   └── today-i-learned/                   # Today I Learned (Go backend for the feed in One WSO2)
├── entity-service/          # Shared entity service (the CSM platform's system of record)
├──…
