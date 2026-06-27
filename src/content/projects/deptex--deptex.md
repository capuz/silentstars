---
repo: "deptex/deptex"
name: "deptex"
description: "Deptex helps organizations manage open-source risk by tracking dependencies, enforcing security policies, and automatically remediating vulnerabilities with AI"
url: "https://github.com/deptex/deptex"
homepage: "https://deptex.dev"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [92]
stars: 5
forks: 0
openIssues: 2
closedIssues: 1
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2025-11-30T22:51:21Z"
lastCommitAt: "2026-06-27T00:45:33Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 86
undervaluedScore: 51
maintainers: ["henryru", "deptex"]
openGraphImageUrl: "https://opengraph.githubassets.com/c27bc6b6101be0260d9b68b3bce04aa5758a8522a3b8766d14bc092468c927e2/deptex/deptex"
---

# Deptex

The AI-powered, source-available security platform.  
Automate dependency intelligence, vulnerability analysis, and supply-chain security.

---

## Overview

Deptex is a security and compliance platform that helps organizations understand, monitor, and protect their codebases. It combines **dependency intelligence**, **continuous monitoring**, and an **autonomous AI security agent** to automate the hardest parts of modern software security.

**Documentation:** [deptex.dev/docs](http://deptex.dev/docs)

---

## How it works

Deptex uses open-source tools and builds on top of a core extraction and analysis pipeline. You sign up, connect your repos, and start getting dependency intelligence and vulnerability insights without installing anything.

### Architecture

```mermaid
flowchart TB
    subgraph Entry [Entry]
        Frontend[Dashboard]
        GitHubApp[GitHub / GitLab / Bitbucket App]
    end

    subgraph API [API Layer]
        Backend[Backend API]
    end

    subgraph Core [Core Engine]
        Extraction[Extraction Worker]
        Ingestion[Ingestion Engine]
        Vuln[Vulnerability Processing]
    end

    subgraph Data [Data Layer]…
