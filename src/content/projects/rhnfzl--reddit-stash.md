---
repo: "rhnfzl/reddit-stash"
name: "reddit-stash"
description: "Take the control of your reddit saved post and the comments with context locally or on dropbox"
readmeQualityOk: true
url: "https://github.com/rhnfzl/reddit-stash"
language: "Python"
languages: ["Python"]
languagePcts: [99]
topics: ["python-reddit", "reddit", "reddit-scraper", "reddit-saved-posts", "dropbox-api", "python", "docker", "nas-storage"]
stars: 111
forks: 44
openIssues: 0
closedIssues: 10
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2024-08-25T12:35:34Z"
lastCommitAt: "2026-07-12T06:17:28Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 88
undervaluedScore: 45
maintainers: ["rhnfzl"]
openGraphImageUrl: "https://opengraph.githubassets.com/71ccef08e672ec56fe81f34c64689d07c605e183002eca350ff9fce9cd5c311f/rhnfzl/reddit-stash"
---

# Reddit Stash: Automatically Save Reddit Posts and Comments to Local, Dropbox, or S3

> **Reddit API Policy Change (November 2025):** Reddit now requires pre-approval to create new API apps. **If you already have API credentials, they still work normally.** New users must apply at [Reddit's API Request Form](https://support.reddithelp.com/hc/en-us/requests/new?ticket_form_id=14868593862164) (expect 2-4 weeks for approval). Alternatively, you can use the [GDPR Export Mode](#gdpr-only-mode-no-api-credentials-needed) to create an index of your saved content without any API credentials. See [Getting API Credentials](#getting-api-credentials) for full details.

**Reddit Stash** is a Python script designed to help you effortlessly back up your Reddit **saved/ posted/ upvoted** posts and comments to Dropbox, AWS S3, or your local machine. Utilizing GitHub Actions, this script runs every 3 hours during peak hours and twice during off-peak hours, automating the process of archiving your Reddit data after a simple setup.

> **Looking for search & AI chat?** Check out [reddit-stash-insights](https://github.com/rhnfzl/reddit-stash-insights) — a companion tool that adds semantic search and…
