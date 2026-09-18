---
repo: "openchoreo/openchoreo.github.io"
name: "openchoreo.github.io"
description: "OpenChoreo website and documentation repository"
readmeQualityOk: true
url: "https://github.com/openchoreo/openchoreo.github.io"
homepage: "https://openchoreo.dev/"
language: "MDX"
languages: ["MDX"]
languagePcts: [90]
topics: ["website", "openchoreo", "documentation"]
stars: 10
forks: 44
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 40
recentReleases: 0
createdAt: "2025-05-28T05:19:24Z"
lastCommitAt: "2026-09-18T14:02:58Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 99
undervaluedScore: 91
maintainers: ["Ketharan", "savisaluwadana", "kaviththiranga"]
openGraphImageUrl: "https://opengraph.githubassets.com/6f66abe1a7fa74acbfea86217a6f0b7b0b10dd68b9959de5a3e3756d9bf8ed27/openchoreo/openchoreo.github.io"
---

# OpenChoreo Documentation & Website

This repository contains the source code for the [OpenChoreo documentation website](https://openchoreo.dev), built with [Docusaurus](https://docusaurus.io/).

OpenChoreo is an open-source Internal Developer Platform (IDP) that simplifies Kubernetes complexity for development teams.

## Prerequisites

- **Node.js** version 20.0 or above
- **npm** (comes with Node.js)

## Installation

```bash
npm install
```

## Local Development

```bash
npm run start
```

This command starts a local development server and opens a browser window. Most changes are reflected live without having to restart the server.

The site will be available at `http://localhost:3000`

## Build

```bash
npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Project Structure

```
├── blog/                 # Blog content (optional)
├── docs/                 # Current documentation (next version)
├── versioned_docs/       # Documentation for released versions
│   └── version-v0.3.x/   # Docs for v0.3.x releases
├── versioned_sidebars/   # Sidebar configs for each version
├──…
