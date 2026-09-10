---
repo: "alpic-ai/apps-sdk-template"
name: "apps-sdk-template"
description: "A minimalist Typescript ChatGPT App based on the Skybridge framework"
readmeQualityOk: true
url: "https://github.com/alpic-ai/apps-sdk-template"
homepage: "http://alpic.ai"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [86]
topics: ["chatgpt", "mcp", "openai", "skybridge"]
stars: 112
forks: 19
openIssues: 0
closedIssues: 6
watchers: 1
contributors: 11
recentReleases: 0
createdAt: "2025-10-09T17:24:13Z"
lastCommitAt: "2026-09-10T08:20:19Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 97
undervaluedScore: 45
maintainers: ["paulleseute", "qchuchu"]
openGraphImageUrl: "https://opengraph.githubassets.com/1033d69ca5158ded5b88aa66b5d5d55198a7e5e2a02f13520db145add96f37aa/alpic-ai/apps-sdk-template"
---

# Apps SDK Template

A minimal TypeScript template for building ChatGPT and MCP Apps with widget rendering.

**This template has been generated and is powered by [Skybridge](https://github.com/alpic-ai/skybridge).**

## Getting Started

### Prerequisites

- Node.js 24+
- HTTP tunnel such as [ngrok](https://ngrok.com/download)

### Local Development

#### 1. Install

```bash
git clone git@github.com:alpic-ai/apps-sdk-template.git
cd apps-sdk-template
npm install
```

#### 2. Start your local server

Run the development server from the root directory:

```bash
npm run dev
```

Open DevTools to test your app locally: http://localhost:3000/
MCP server running at:  http://localhost:3000/mcp

#### 3. Connect to ChatGPT

- ChatGPT requires connectors to be publicly accessible. To expose your server on the Internet, run:
```bash
ngrok http 3000
```
- In ChatGPT, navigate to **Settings → Connectors → Create** and add the forwarding URL provided by ngrok suffixed with `/mcp` (e.g. `https://3785c5ddc4b6.ngrok-free.app/mcp`)

### Create your first widget

#### 1. Add a new widget

- Register a widget in `server/server.ts` with a unique name (e.g., `my-widget`)
- Create a matching React…
