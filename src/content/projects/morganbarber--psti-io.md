---
repo: "morganbarber/psti.io"
name: "psti.io"
description: "Enterprise Pastebin for Security Professionals"
url: "https://github.com/morganbarber/psti.io"
language: "TypeScript"
languages: ["TypeScript", "MDX"]
languagePcts: [63, 28]
stars: 5
forks: 0
openIssues: 13
closedIssues: 7
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2025-11-21T23:11:07Z"
lastCommitAt: "2026-06-27T06:24:34Z"
status: "thriving"
tags: ["hidden_gem", "under_pressure"]
healthScore: 72
undervaluedScore: 49
maintainers: ["morganbarber", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/dce8a1ecd137d8b1359454b365dc73ebefad6e49191547a848928c93f091ed4a/morganbarber/psti.io"
---

# psti.io - Enterprise Pastebin for Security Professionals

A production-ready, security-focused pastebin application built with modern technologies and enterprise-level security features.

## Architecture

This is a Turborepo monorepo containing:

### Applications
- **web** - Next.js 16 frontend with App Router
- **api** - NestJS backend API
- **raw** - Minimal raw paste viewer

### Packages
- **@psti/database** - Supabase client and database utilities
- **@psti/ui** - Shared UI components (shadcn/ui)
- **@psti/auth** - Authentication utilities
- **@psti/validation** - Zod validation schemas
- **@psti/security** - Security utilities (encryption, sanitization)
- **@psti/types** - Shared TypeScript types
- **@psti/config** - Shared configuration
- **@psti/eslint-config** - Shared ESLint configuration

## Features

### Core Functionality
- ✅ Create, view, edit, and delete pastes
- ✅ Syntax highlighting for 100+ languages
- ✅ Monaco editor integration
- ✅ Public, unlisted, and private pastes
- ✅ Password-protected pastes
- ✅ Expiration dates
- ✅ Burn after read
- ✅ Paste encryption (AES-256-GCM)
- ✅ Folders/collections
- ✅ Search functionality
- ✅ Raw paste viewer
- ✅ Download pastes…
