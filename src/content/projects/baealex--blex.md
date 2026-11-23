---
repo: "baealex/BLEX"
name: "BLEX"
description: "Blog, Let me Express — Writing-first publishing platform."
readmeQualityOk: true
url: "https://github.com/baealex/BLEX"
homepage: "https://blex.me"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [97]
topics: ["python", "django", "blog", "markdown", "typescript", "alpinejs", "publishing", "react", "tiptap", "vite"]
stars: 53
forks: 9
openIssues: 0
closedIssues: 3
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2019-03-19T14:06:09Z"
lastCommitAt: "2026-11-23T12:21:16Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 96
undervaluedScore: 50
maintainers: ["baealex"]
openGraphImageUrl: "https://opengraph.githubassets.com/67f964a4f01c74245b9ecdb4d53ebed065128ac51f1bb235dc9755247c3c9980/baealex/BLEX"
---

An open-source platform for publishing and managing your own blog.

  English · <a href="README.ko.md">한국어</a>

## Features

- Visual and Markdown editing, drafts, autosave recovery, revision history, and scheduled publishing
- Series, tags, search, static pages, comments, likes, and pinned posts
- Site branding, user roles, webhooks, and Telegram integration
- RSS, sitemaps, public Markdown, and a Developer API
- GitHub and Google login, with TOTP two-factor authentication

## Run with Docker

Create a root `.env` with `SITE_URL=http://localhost:20002`, a random `SECRET_KEY`
(`openssl rand -hex 32`), and a 32-byte `CIPHER_KEY` (`openssl rand -hex 16`).

```sh
docker compose up --build -d
docker compose logs blex
```

Open the `/setup` link in the logs to create the first administrator.
The `blex-data` volume stores the database and uploads.

For HTTPS, backups, and configuration, see the [self-hosting guide](https://github.com/baealex/BLEX/blob/HEAD/docs/SELF_HOSTING.md).
Existing 3.x installations must follow the [upgrade guide](https://github.com/baealex/BLEX/blob/HEAD/docs/UPGRADE_FROM_3.md) before starting BLEX 4.
