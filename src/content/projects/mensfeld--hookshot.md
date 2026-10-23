---
repo: "mensfeld/hookshot"
name: "hookshot"
description: "A self-hosted webhook relay service built with Rails 8. Receives webhooks, filters them based on configurable rules, and dispatches to multiple target endpoints."
readmeQualityOk: true
url: "https://github.com/mensfeld/hookshot"
language: "Ruby"
languages: ["Ruby", "HTML"]
languagePcts: [65, 25]
topics: ["rails", "ruby", "webhook-receiver", "webhook-relay", "webhook-server", "webhooks", "webhooks-catcher"]
stars: 8
forks: 0
openIssues: 1
closedIssues: 4
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2025-12-22T08:10:28Z"
lastCommitAt: "2026-10-23T08:46:33Z"
status: "thriving"
tags: []
healthScore: 95
undervaluedScore: 62
maintainers: ["coipond-renovate[bot]", "mensfeld", "coipond-coder[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/188448535b0a2478fb855769e40782c3484aa17796f2c743022285f33998b996/mensfeld/hookshot"
---

# Hookshot

A self-hosted webhook relay service built with Rails 8. Receives webhooks, filters them based on configurable rules, and dispatches to multiple target endpoints.

## Quick Start

```bash
# Clone and install
git clone https://github.com/mensfeld/hookshot.git
cd hookshot
bundle install
npm install

# Setup database and assets
rails db:create db:migrate
rails tailwindcss:build

# Start the web server (port 3000) and the Tailwind CSS watcher;
# enqueued jobs run inside the web server, recurring tasks do not (see Background Jobs)
./bin/dev
```

Then:
1. Visit `http://localhost:3000/admin/targets` (login: `admin` / `changeme`)
2. Create a target with your destination URL
3. Send webhooks to `http://localhost:3000/webhooks/receive`

## Features

- **Webhook Reception**: Accepts POST requests at `/webhooks/receive` and stores headers, payload, and metadata
- **Endpoints**: Named inbound URLs (`/webhooks/receive/<slug>`) that each forward only to their own targets
- **Multiple Targets**: Configure multiple destination URLs for webhook delivery
- **Filtering**: Route webhooks to specific targets based on header or payload content
- **Background Processing**: Reliable delivery…
