---
repo: "VoidenHQ/docs"
name: "docs"
description: "Voiden Docs"
readmeQualityOk: true
url: "https://github.com/VoidenHQ/docs"
language: "TypeScript"
languages: ["TypeScript", "CSS"]
languagePcts: [51, 40]
stars: 5
forks: 4
openIssues: 0
closedIssues: 2
watchers: 0
contributors: 9
recentReleases: 0
createdAt: "2025-11-01T17:28:54Z"
lastCommitAt: "2026-11-02T11:36:56Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 97
undervaluedScore: 78
maintainers: ["davinder-sudo", "Phurpa10923"]
openGraphImageUrl: "https://opengraph.githubassets.com/57338f950e0e82ffb3b2d0da8d3a72f79957652089c58270684c6e7c1f4e8afd/VoidenHQ/docs"
---

# Voiden Documentation

> Official documentation for the Voiden platform, built with [Docusaurus](https://docusaurus.io/).

## 📖 Table of Contents

- [Quick Start](#-quick-start)
- [Project Structure](#-project-structure)
- [Contributing](#-contributing)
- [Development Workflow](#-development-workflow)
- [Styling & Theming](#-styling--theming)
- [Deployment](#-deployment)

## 🚀 Quick Start

### Prerequisites

- **Node.js** 18.0 or above ([Download](https://nodejs.org/))
- **npm** or **yarn** package manager

### Installation & Development

```bash
# 1. Clone the repository (if you haven't already)
git clone https://github.com/VoidenHQ/docs.git
cd docs

# 2. Install dependencies
npm install

# 3. Start the development server
npm start
```

The site will open at `http://localhost:3000/`. Changes are hot-reloaded automatically.

### Build & Preview

```bash
# Build for production
npm run build

# Preview the production build locally
npm run serve
```

## 📁 Project Structure

```
voiden-docs/
├── docs/                          # 📝 Documentation source files (Markdown/MDX)
│   ├── getting-started/
│   ├── guides/
│   └── intro.md
├── src/
│   ├── css/
│   │   └── custom.css…
