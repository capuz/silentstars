---
repo: "blnkfinance/blnk-ts"
name: "blnk-ts"
description: "The official TypeScript SDK for Blnk."
url: "https://github.com/blnkfinance/blnk-ts"
homepage: "https://docs.blnkfinance.com"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
topics: ["blnk", "fintech", "js", "ledger", "nodejs", "ts", "backend"]
stars: 7
forks: 5
openIssues: 7
closedIssues: 57
watchers: 1
contributors: 5
recentReleases: 2
createdAt: "2024-09-19T18:33:08Z"
lastCommitAt: "2026-06-24T00:25:10Z"
lastReleaseAt: "2026-06-23T15:58:18Z"
status: "thriving"
tags: ["fork_magnet"]
healthScore: 97
undervaluedScore: 95
maintainers: ["ubcodes", "stkegoul"]
openGraphImageUrl: "https://opengraph.githubassets.com/9c875c9ffffa3144ecdc78f9824be0227f6fa1b5cce0b8ab521de885e7569445/blnkfinance/blnk-ts"
---

![Blnk logo](https://res.cloudinary.com/dmxizylxw/image/upload/v1724847576/blnk_github_logo_eyy2lf.png)

## Blnk TypeScript SDK Documentation

---

## 1. Installation

### Prerequisites
Ensure that you have the following installed on your machine:
- **Docker** and **Docker Compose** for running Blnk’s server locally.
- **Node.js** (v14 or later) and **npm** for installing the Blnk TypeScript SDK.

### Step 1: Clone the Blnk Repository

To start, clone the Blnk repository from GitHub:

```bash
git clone https://github.com/blnkfinance/blnk && cd blnk
```

### Step 2: Install Blnk TypeScript SDK

Install the Blnk TypeScript SDK in your project:

```bash
npm install @blnkfinance/blnk-typescript --save
```

### Step 3: Setting Up Configuration

In your cloned directory, create a configuration file named `blnk.json` with the following content:

```json
{
  "project_name": "Blnk",
  "data_source": {
    "dns": "postgres://postgres:password@postgres:5432/blnk?sslmode=disable"
  },
  "redis": {
    "dns": "redis:6379"
  },
  "server": {
    "domain": "blnk.io",
    "ssl": false,
    "ssl_email": "jerryenebeli@gmail.com",
    "port": "5001"
  },
  "notification": {
    "slack": {…
