---
repo: "Hemsby/tdns-stats"
name: "tdns-stats"
description: "Realtime Dashboard for Technitium"
readmeQualityOk: true
url: "https://github.com/Hemsby/tdns-stats"
language: "JavaScript"
languages: ["JavaScript", "CSS"]
languagePcts: [72, 21]
stars: 28
forks: 2
openIssues: 2
closedIssues: 9
watchers: 1
contributors: 2
recentReleases: 10
createdAt: "2026-05-26T16:14:33Z"
lastCommitAt: "2026-07-07T06:37:30Z"
lastReleaseAt: "2026-06-03T12:27:37Z"
status: "thriving"
tags: ["release_machine"]
healthScore: 96
undervaluedScore: 46
maintainers: ["sjclayton", "Hemsby"]
openGraphImageUrl: "https://opengraph.githubassets.com/3564ced2fab41ede375ed03f8cc9f6d9dfd072184656e1586fbe6253aa7331b9/Hemsby/tdns-stats"
discussionCount: 0
---

# tdns-stats

A self-hosted statistics dashboard for [Technitium DNS Server](https://technitium.com/dns/) v15 and later.

Displays live query feeds, per-server and cluster stats, top domains/clients, performance metrics (RTT, cache hit rate), and a real-time chart — all pushed to the browser via Server-Sent Events with no page refreshes required.

See the [CHANGELOG](https://github.com/Hemsby/tdns-stats/blob/HEAD/CHANGELOG.md) for a full history of changes.

## Screenshots

### Dark mode

### Light mode

## Requirements

- Node.js 18 or later
- Technitium DNS Server v15 or later
- A query log app installed on each DNS server (e.g. Query Logs SQLite, MySQL, PostgreSQL) if you want the live feed and RTT metrics

## Running locally

### 1. Clone the repository

```bash
git clone https://github.com/Hemsby/tdns-stats.git
cd tdns-stats
```

### 2. Install dependencies

```bash
cd backend
npm install
cd ..
```

### 3. Configure

```bash
cp config.example.yml config.yml
```

Edit `config.yml` and fill in your server details. At minimum you need the `name`, `url`, and `token` for each server. See `config.example.yml` for all available options with descriptions.

To get your API token: open…
