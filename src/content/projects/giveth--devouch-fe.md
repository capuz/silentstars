---
repo: "Giveth/DeVouch-FE"
name: "DeVouch-FE"
description: "Front-end repository of the DeVouch project"
readmeQualityOk: true
url: "https://github.com/Giveth/DeVouch-FE"
homepage: "https://de-vouch-fe-givethio.vercel.app"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [95]
stars: 24
forks: 3
openIssues: 4
closedIssues: 80
watchers: 10
contributors: 17
recentReleases: 0
createdAt: "2024-04-19T17:53:43Z"
lastCommitAt: "2026-11-23T10:25:25Z"
lastReleaseAt: "2025-06-09T18:59:38Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 43
maintainers: ["kkatusic"]
openGraphImageUrl: "https://opengraph.githubassets.com/cb862e4667050108b9f9c5a23fea783029456f9a63c672d6e4ec993de402bfb1/Giveth/DeVouch-FE"
---

# DeVouch Frontend

## 1. Project Overview

### Purpose

DeVouch is a decentralized verification and attestation platform built on the Ethereum blockchain. The frontend application provides a user-friendly interface for creating, managing, and verifying attestations using the Ethereum Attestation Service (EAS).

### Key Features

-   Web3 wallet integration for secure authentication
-   Attestation creation and management
-   Real-time verification of attestations
-   Responsive and modern UI built with Next.js and Tailwind CSS

### Live Links

-   Production: [https://devouch.xyz/](https://devouch.xyz/)
-   Staging: [https://staging.devouch.xyz/](https://staging.devouch.xyz/)

## 2. Architecture Overview

### System Diagram

```mermaid
graph TD
    A[Frontend] --> B[Ethereum Blockchain]
    A --> C[Ethereum Attestation Service]
    A --> D[Reown AppKit]
    A --> E[React Query]
```

### Tech Stack

-   **Framework**: Next.js 16
-   **UI**: React 19, Tailwind CSS 4
-   **State Management**: React Query
-   **Web3 Integration**:
    -   Wagmi
    -   Viem
    -   Reown AppKit (formerly Web3Modal)
-   **Attestation Service**: EAS SDK
-   **Language**: TypeScript
