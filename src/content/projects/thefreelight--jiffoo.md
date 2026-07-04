---
repo: "thefreelight/Jiffoo"
name: "Jiffoo"
description: "Open-source commerce core with storefront, admin, themes, plugins, and marketplace-ready architecture."
url: "https://github.com/thefreelight/Jiffoo"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [87]
topics: ["ecommerce", "fastify", "headless-commerce", "marketplace", "multi-tenant", "nextjs", "plugins", "prisma", "saas", "themes"]
stars: 8
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 8
createdAt: "2025-05-28T03:01:05Z"
lastCommitAt: "2026-07-04T06:11:39Z"
lastReleaseAt: "2026-04-16T09:45:51Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 67
undervaluedScore: 66
maintainers: ["thefreelight"]
openGraphImageUrl: "https://opengraph.githubassets.com/bc11ed6b93a031f5a24a17e8df360ae236ee92fd0a8abc27c0ccd7a4510520b7/thefreelight/Jiffoo"
---

# Jiffoo - Open Source E-Commerce Platform

Jiffoo is a modern, open-source e-commerce platform built with TypeScript, Node.js, and React. It provides the core capabilities needed to run an independent online store with professional-grade engineering.

## Features

- 🛒 **Complete E-Commerce**: Products, cart, checkout, orders, payments
- 🎨 **Theme System**: Customizable themes with hot-swapping
- 🔌 **Plugin Architecture**: Extend functionality with plugins
- 🌐 **Internationalization**: Multi-language support (en, zh-Hans)
- 🔒 **Security**: Built-in rate limiting, CORS, input validation
- 📊 **Observability**: Structured logging, distributed tracing
- 🚀 **Modern Stack**: TypeScript, Fastify, Next.js, Prisma

## Quick Start

### Prerequisites

- Node.js 18+
- PostgreSQL 14+
- Redis 6+ (optional for basic features)
- pnpm 8+

### Installation

```bash
# Clone repository
git clone https://github.com/jiffoo/jiffoo.git
cd jiffoo

# Install dependencies
pnpm install

# Setup database
cp apps/api/.env.example .env
# Edit .env with your database credentials

# Run migrations
pnpm --filter api db:migrate

# Start development servers
pnpm dev
```

### Access

- Shop:…
