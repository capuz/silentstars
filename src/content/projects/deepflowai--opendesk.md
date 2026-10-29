---
repo: "DeepFlowAI/OpenDesk"
name: "OpenDesk"
description: "An open-source customer service system supporting call centers, online support, ticketing, and customer management."
readmeQualityOk: true
url: "https://github.com/DeepFlowAI/OpenDesk"
language: "Python"
languages: ["Python", "TypeScript"]
languagePcts: [56, 43]
stars: 11
forks: 3
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-02-28T12:22:11Z"
lastCommitAt: "2026-10-29T05:49:51Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 57
undervaluedScore: 13
maintainers: ["unhejing"]
openGraphImageUrl: "https://opengraph.githubassets.com/9f7c3687ebcfe5d071b56a7120b20e847c53da366d836739048dccf448d92719/DeepFlowAI/OpenDesk"
---

# OpenDesk

**Open-source full-stack customer support platform** — tickets, multi-channel inbox, conversation routing, visual flow designer, unified field system.

## ✨ Features

- **Multi-channel inbox** — web chat, voice, email, and more, unified into one agent workspace.
- **Visual flow designer** — drag-and-drop routing rules and IVR voice flows; no code required.
- **Powerful ticket system** — fully customizable fields, layouts, and lifecycle.
- **Real-time agent workspace** — live chat, call center, ticket queue, all in a single SPA.
- **Unified field system** — share field definitions across users, organizations, tickets, and conversation summaries.
- **Multi-tenant ready** — single-tenant out of the box; the Enterprise edition adds platform-level tenant management.
- **Production-grade stack** — FastAPI · async SQLAlchemy 2.0 · PostgreSQL · Redis · Next.js 15 · React 19.

## 🚀 Quick Start

```bash
git clone https://github.com/DeepFlowAI/OpenDesk.git
cd OpenDesk/docker
cp .env.example .env
python -c "import secrets; print('SECRET_KEY=' + secrets.token_hex(32))" >> .env

docker compose up -d        # bundles PostgreSQL + Redis by default
```

Open <http://localhost:3000>…
