---
repo: "nimbleflux/fluxbase"
name: "fluxbase"
description: "Backend-as-a-service alternative for Supabase"
readmeQualityOk: true
url: "https://github.com/nimbleflux/fluxbase"
homepage: "https://fluxbase.eu"
language: "Go"
languages: ["Go", "TypeScript"]
languagePcts: [70, 25]
topics: ["backend-service", "docker", "helm", "postgres", "cli"]
stars: 46
forks: 3
openIssues: 3
closedIssues: 47
watchers: 3
contributors: 2
recentReleases: 0
createdAt: "2025-10-26T08:12:24Z"
lastCommitAt: "2026-11-20T11:25:10Z"
lastReleaseAt: "2026-01-07T11:35:52Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 96
undervaluedScore: 56
maintainers: ["bartcode", "renovate[bot]", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/cd76b08217c6c1918d7e455cbc2abd6f5e026f8e060891f77a28a5b88287631e/nimbleflux/fluxbase"
---

# Fluxbase

A lightweight, single-binary Backend-as-a-Service (BaaS) alternative to Supabase. Fluxbase provides essential backend services including auto-generated REST APIs, authentication, realtime subscriptions, file storage, and edge functions - all in a single Go binary with PostgreSQL as the only dependency.

## Features

### Core Services

- **PostgREST-compatible REST API**: Auto-generates CRUD endpoints from your PostgreSQL schema
- **GraphQL API**: Full GraphQL support with configurable depth/complexity limits
- **Authentication**: Email/password, magic links, OAuth2 (Google, GitHub, Microsoft, etc.), OIDC, SAML SSO, MFA/TOTP
- **Realtime Subscriptions**: WebSocket-based live data updates using PostgreSQL LISTEN/NOTIFY
- **Storage**: File upload/download with access policies (local filesystem or S3), image transformations
- **Edge Functions**: JavaScript/TypeScript function execution with Deno runtime
- **Background Jobs**: Long-running tasks with progress tracking, retry logic, cron scheduling
- **RPC/Procedures**: SQL-based serverless procedures with scheduling and RBAC
- **Webhooks**: Event-driven webhook delivery for database changes with retries and HMAC signing
-…
