---
repo: "veniceai/api-docs"
name: "api-docs"
description: "Docs powering https://docs.venice.ai"
readmeQualityOk: true
url: "https://github.com/veniceai/api-docs"
language: "MDX"
languages: ["MDX"]
languagePcts: [98]
stars: 71
forks: 77
openIssues: 11
closedIssues: 41
watchers: 3
contributors: 27
recentReleases: 0
createdAt: "2025-02-06T21:28:50Z"
lastCommitAt: "2026-11-11T11:20:02Z"
status: "thriving"
tags: ["solo_builder", "fork_magnet"]
healthScore: 95
undervaluedScore: 58
maintainers: ["github-actions[bot]", "sabrinaaquino", "veniceai-outerface-docs-publisher[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/f3d7f303e0115ac4a07b98430d76d5c2f9d45e8753df49a61e250bc328b6f40e/veniceai/api-docs"
---

# venice API Documentation

This repo holds the documentation for the Venice API. The doc-site itself is built using [Mintlify](https://mintlify.com), providing a clean, modern interface for exploring our API capabilities.

## 📚 Documentation Structure

Our documentation is organized into several key sections:

- **Docs** - Overview, getting started, and the capability guides for text, image, video, audio, search, and integrations
- **Models** - The model catalog, by modality
- **Learn** - Complete, runnable walkthroughs and projects built on the API
- **API Reference** - Endpoint documentation generated from `swagger.yaml`
- **Changelog** - Latest updates and API changes
- **Status Page** - Live service status

## 🚀 Getting Started

### Prerequisites

- Node.js installed on your system

### Local Development

> !! Make sure you're on the node version specified in the `.nvmrc` file.

1. Clone this repository and navigate to the project directory:
```bash
git clone git@github.com:veniceai/api-docs.git
cd api-docs
```

2. Install dependencies:
```bash
yarn
```

3. Start the development server:
```bash
yarn dev
```

The documentation will be available at `http://localhost:3000`.…
