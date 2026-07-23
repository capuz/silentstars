---
repo: "Jan-IngenHousz-Institute/open-jii"
name: "open-jii"
description: "openJII is an open-source platform for analyzing photosynthesis data from IoT and manual sensors, enabling real-time processing and visualization for plant science research."
readmeQualityOk: true
url: "https://github.com/Jan-IngenHousz-Institute/open-jii"
homepage: "https://openjii.org"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [90]
stars: 10
forks: 2
openIssues: 179
closedIssues: 663
watchers: 2
contributors: 13
recentReleases: 0
createdAt: "2025-01-06T13:22:50Z"
lastCommitAt: "2026-07-23T06:15:16Z"
lastReleaseAt: "2025-12-10T12:58:36Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 95
undervaluedScore: 74
maintainers: ["dominikvrbic", "petar-INFO", "Blagoj95"]
openGraphImageUrl: "https://opengraph.githubassets.com/ab23bc7ca3332adb60b4cbc6d6b4fc45164c67d278b1cc0bce187c0f703730c7/Jan-IngenHousz-Institute/open-jii"
discussionCount: 6
---

# openJII Platform

</p>

An open-source platform for agricultural IoT research and plant phenotyping developed by the Jan IngenHousz Institute. openJII helps researchers collect, process, and analyze sensor data from MultispeQ devices and custom IoT sensors.

## What is openJII?

openJII is designed to support plant researchers throughout their workflow:

- Collect data from MultispeQ devices and custom IoT sensors
- Process and analyze data with our pipeline architecture
- Manage research experiments and datasets
- Visualize and share research results

## Tech Stack

### Frontend

Next.js with Tailwind CSS and Radix UI components via ShadCN.

### Backend

NestJS API with Drizzle ORM for databases and Zod for validation.

### Infrastructure

AWS infrastructure managed with OpenTofu (formerly Terraform) and Databricks for data processing pipelines.

## Codecov

## Getting Started

### Prerequisites

- Node.js v24+
- pnpm
- Docker (for local development)
- [uv](https://docs.astral.sh/uv/) (Python package manager, required for the `apps/data` Databricks workspace)

### Installation

```bash
# Clone and set up
git clone https://github.com/Jan-IngenHousz-Institute/open-jii.git
cd…
