---
repo: "Johannes-Andersen/CyberTipline-Tools"
name: "CyberTipline-Tools"
description: "Unofficial Types and Utilities for working with the CyberTipline API"
readmeQualityOk: true
url: "https://github.com/Johannes-Andersen/CyberTipline-Tools"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
topics: ["cybertipline", "ncmec", "utils", "utils-library"]
stars: 6
forks: 0
openIssues: 1
closedIssues: 1
watchers: 1
contributors: 1
recentReleases: 1
createdAt: "2024-12-05T03:15:26Z"
lastCommitAt: "2026-07-18T05:47:03Z"
lastReleaseAt: "2026-05-07T15:45:39Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 72
maintainers: ["renovate[bot]", "Johannes-Andersen"]
openGraphImageUrl: "https://opengraph.githubassets.com/c017f0cb2b8b04f4743de8c17c4f1ec40e77ac7ca843c9e72ceea50448ceb9c6/Johannes-Andersen/CyberTipline-Tools"
---

# CyberTipline Tools

A **unofficial** collection of tools for interacting with the National Center for Missing & Exploited Children's [CyberTipline Reporting API](https://report.cybertip.org/ispws/documentation).

## Installation

```bash
# Using pnpm
pnpm add cybertipline-tools

# Using npm
npm install cybertipline-tools

# Using yarn
yarn add cybertipline-tools
```

## Quick Start

```typescript
import { Client, Environment, IncidentType } from 'cybertipline-tools';

// Create a new client
const client = new Client({
  environment: Environment.Testing, // Use Testing for development
  credentials: {
    username: 'your-username',
    password: 'your-password',
  },
});

// Test your connection
const status = await client.getStatus();
console.log('Connected:', status.data.responseDescription);

// Submit a report
const report = await client.submitReport({
  incidentSummary: {
    incidentType: IncidentType.ChildSexTourism,
    // ... other required fields
  },
  reporter: {
    reportingPerson: {
      email: 'reporter@example.com',
      // ... other required fields
    },
  },
});
console.log('Report ID:', report.data.reportId);

// Upload a file
const fileUpload = await…
