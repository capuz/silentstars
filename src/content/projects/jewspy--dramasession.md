---
repo: "jewspy/dramasession"
name: "dramasession"
description: "Obsession movie-related community website for discussion, profiles, public chat, moderation, and community interaction."
readmeQualityOk: true
url: "https://github.com/jewspy/dramasession"
language: "Python"
languages: ["Python"]
languagePcts: [78]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-07-15T08:11:09Z"
lastCommitAt: "2026-07-23T06:16:27Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 46
maintainers: ["jewspy"]
openGraphImageUrl: "https://opengraph.githubassets.com/b42df30746063a61dbce35800546068810e0bbaaa4a9b174c66098c3dec2b5a1/jewspy/dramasession"
---

# Obsession Forum

Obsession Forum is a movie-related community website for discussion, profiles, badges, public chat, moderation, and shared discoveries.

## Features

- Forum posts and threaded comments
- User profiles and account pages
- Badges and community identity features
- Public chat for live community discussion
- Voting and ranking mechanics
- Moderation and admin tools
- Docker-based local setup

## Tech Stack

- Python / Flask
- PostgreSQL
- Redis
- Docker / Docker Compose
- JavaScript, CSS, and server-rendered templates

## Local Installation

1. Install Docker and Docker Compose.

2. Copy the environment template:

```sh
cp env_template .env
```

On Windows PowerShell:

```powershell
Copy-Item env_template .env
```

3. Start the application:

```sh
docker-compose up
```

4. Open the site in your browser:

```text
http://localhost
```

The first account created locally receives full admin access.

## Environment Setup

The `.env` file is required for local development. Start from `env_template`, then adjust values for your local environment as needed.

Never commit secrets, keys, tokens, passwords, or local credentials. Keep `.env` and other private configuration…
