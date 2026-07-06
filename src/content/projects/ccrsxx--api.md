---
repo: "ccrsxx/api"
name: "api"
description: "My personal API for my projects built with Go using modern net/http"
readmeQualityOk: true
url: "https://github.com/ccrsxx/api"
homepage: "https://api.ccrsxx.com"
language: "Go"
languages: ["Go"]
languagePcts: [99]
topics: ["go", "nethttp", "oauth", "testing", "goose", "postgresql", "sqlc", "rest-api"]
stars: 9
forks: 3
openIssues: 2
closedIssues: 5
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2026-01-17T18:58:38Z"
lastCommitAt: "2026-07-06T07:01:26Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 81
undervaluedScore: 55
maintainers: ["ccrsxx", "renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/fd01a5792d2b0a40e0f4e4690b081624e08808774a953978187a3bb491af1a8e/ccrsxx/api"
---

# API

Personal API for my projects and services. Built with Go and a Node.js for the Open Graph . It provides small utility endpoints and integrations used across my projects.

## Features

Currently available features/endpoints:

- Auth with GitHub OAuth and JWT session management.
- Content management for blog and project entries.
- Content statistics, views, and likes tracking.
- Guestbook with email notifications on new posts.
- Pixiv user bookmarks retrieval.
- Spotify, Jellyfin, and Navidrome currently playing endpoints.
- Real-time updates for Spotify, Jellyfin, and Navidrome via Server-Sent Events (SSE).
- Tools endpoints (IP address, IP info, HTTP headers).
- Open Graph image generation (OG images).

## Development

Steps to run the project locally:

1. Clone the repository

   ```bash
   git clone https://github.com/ccrsxx/api
   ```

1. Change directory to the project

   ```bash
   cd api
   ```

1. Install dependencies

   ```bash
   go mod download
   ```

1. Install Tools

   ```bash
   make setup-tools
   ```

1. Set up environment variables
   Create a copy of the `.env.example` file and name it `.env.local`. Fill in credentials as needed.

   ```bash
   cp…
