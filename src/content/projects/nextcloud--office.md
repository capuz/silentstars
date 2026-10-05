---
repo: "nextcloud/office"
name: "office"
description: "📑 Office document overview for your Nextcloud"
readmeQualityOk: true
url: "https://github.com/nextcloud/office"
homepage: "https://nextcloud.com/office"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [82]
topics: ["nextcloud", "nextcloud-app", "office"]
stars: 7
forks: 1
openIssues: 31
closedIssues: 5
watchers: 0
contributors: 247
recentReleases: 0
createdAt: "2026-05-22T12:08:58Z"
lastCommitAt: "2026-10-05T10:46:44Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 73
undervaluedScore: 45
maintainers: ["moodyjmz", "nextcloud-bot", "nextcloud-command"]
openGraphImageUrl: "https://opengraph.githubassets.com/03fa868642bed3849f289e9814d6963f462bf5276c13237b631cc6bf93616572/nextcloud/office"
---

# Office

A Nextcloud app that provides a dedicated hub for office documents. Users can browse,
filter, search, and create Documents, Spreadsheets, Presentations, and Diagrams from
a single page — without going through the Files app.

---

## Features

- **Overview page** at `/apps/office` — categorised file list with sidebar navigation
- **Filters** — All / Mine / Shared with me
- **Search** — within the active category, with an "Open in Files" escape hatch
- **View toggle** — Grid (thumbnail previews) or List, persisted per user
- **Template creator** — create new files from editor-provided templates
- **Editor integration** — opens files directly in the configured office editor

---

## Local development

### Requirements

- [nextcloud-docker-dev](https://github.com/juliushaertl/nextcloud-docker-dev)
- NC ≥ 33
- Node 24 / npm 11

### 1. Mount the app into the container

Add to `nextcloud-docker-dev/docker-compose.override.yml`:

```yaml
services:
  nextcloud:
    volumes:
      - /path/to/office:/var/www/html/apps-extra/office
```

Restart the container after saving.

### 2. Enable the app

```bash
docker exec -u www-data nextcloud-docker-dev-nextcloud-1 \
  php occ app:enable…
