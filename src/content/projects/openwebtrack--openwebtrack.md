---
repo: "openwebtrack/openwebtrack"
name: "openwebtrack"
description: "A free and open-source website analytics platform."
readmeQualityOk: true
url: "https://github.com/openwebtrack/openwebtrack"
homepage: "https://openwebtrack.github.io"
language: "Svelte"
languages: ["Svelte", "TypeScript"]
languagePcts: [56, 43]
topics: ["analytics", "open-source", "self-hosted", "sveltekit", "web", "webanalytics", "web-analytics", "mcp"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-02-23T07:33:11Z"
lastCommitAt: "2026-09-09T08:19:06Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 71
undervaluedScore: 29
maintainers: ["ge0rg3e"]
openGraphImageUrl: "https://opengraph.githubassets.com/567ab7d73a560b0d6dd74a7765ff55eeda05bd1ec233c5f83a561a7f8c7aadb1/openwebtrack/openwebtrack"
discussionCount: 0
---

# OpenWebTrack

A free and open-source website analytics platform.

### Quick Start

```yml
services:
    app:
        image: ghcr.io/openwebtrack/openwebtrack:latest
        container_name: openwebtrack
        restart: unless-stopped
        ports:
            - 8424:8424
        environment:
            - DATABASE_URL=postgres://postgres:{STRONG_PASSWORD}@db:5432/openwebtrack
            - ORIGIN=http://localhost:8424
            - AUTH_SECRET={STRONG_SECRET}
            - DISABLE_REGISTER=false
            # - AUTH_GOOGLE_CLIENT_ID=
            # - AUTH_GOOGLE_CLIENT_SECRET=
            # - CRON_SECRET={String} - For weekly summary emails
            # - SENDER_EMAIL=openwebtrack@yourdomain.com - To enable notifications set your email and preferred email provider
            # - RESEND_API_KEY={String}
            # - MAILEROO_API_KEY={String}
            # - SMTP_HOST=smtp.example.com
            # - SMTP_PORT=587
            # - SMTP_USER={String}
            # - SMTP_PASS={String}
        depends_on:
            - db

    db:
        image: postgres:17-alpine
        container_name: openwebtrack-db
        restart: unless-stopped
        ports:
            - 5432:5432…
