---
repo: "EVtivity/evtivity-csms"
name: "evtivity-csms"
description: "An OCPP 1.6 and 2.1 compliant Charging Station Management System for managing EV charging infrastructure. Handles real-time WebSocket communication with charging stations, OCPI 2.2.1/2.3.0 roaming, ISO 15118 Plug and Charge, a REST API for operators, and two React frontends for operators and drivers."
readmeQualityOk: true
url: "https://github.com/EVtivity/evtivity-csms"
homepage: "https://evtivity.com"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [95]
topics: ["csms", "electric-vehicles", "evcharging", "ocpi", "ocpp", "ocpp-server", "ocpp16", "ocpp16j", "ocpp201", "ocpp21"]
stars: 34
forks: 7
openIssues: 1
closedIssues: 18
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2026-04-14T02:08:39Z"
lastCommitAt: "2026-11-05T00:20:04Z"
lastReleaseAt: "2026-05-08T20:22:54Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 99
undervaluedScore: 46
maintainers: ["evtivity-admin", "kushal1o1", "MarcoSpittka"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1210008789/c9fd895a-42a9-40a6-962b-1a715c1005ae"
discussionCount: 9
---

EVtivity is an AI-powered EV charging platform. At its core is an OCPP 1.6, 2.0.1 and 2.1 compliant Charging Station Management System (CSMS) for EV charging infrastructure. It handles real-time WebSocket communication with charging stations, OCPI 2.2.1/2.3.0 roaming, ISO 15118 Plug and Charge, a REST API for operators, and two React frontends for operators and drivers.

AI is built into the operator dashboard. The AI assistant answers questions about stations, sessions, revenue, and operations, reads attachments such as a photo of a charger screen, a PDF, or a log, and proposes changes that run only after the operator confirms. The support assist drafts replies to support cases in the driver's language. Both work with Anthropic, OpenAI, Gemini, or DeepSeek, and secrets and personal data are masked before they reach the model.

## Architecture

```mermaid
graph TB
    subgraph Frontends
        CSMS[CSMS]
        Portal[Driver and Guest Charging Portal]
    end

    subgraph Backend Services
        API[REST API]
        OCPP[OCPP Server]
        OCPI[OCPI Server]
        Worker[Worker]
    end

    subgraph Data
        DB[(PostgreSQL)]
        Redis[(Redis)]
    end…
