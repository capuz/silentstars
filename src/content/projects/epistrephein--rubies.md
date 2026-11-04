---
repo: "epistrephein/rubies"
name: "rubies"
description: "A Sinatra API interface to Ruby versions, releases and branches."
readmeQualityOk: true
url: "https://github.com/epistrephein/rubies"
homepage: "https://rubies.io"
language: "Ruby"
languages: ["Ruby", "CSS"]
languagePcts: [58, 23]
topics: ["ruby", "ruby-versions", "version-checker", "rest-api", "sinatra", "redis", "json-api", "branches", "end-of-life", "lifecycle"]
stars: 27
forks: 1
openIssues: 0
closedIssues: 2
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2018-04-11T07:41:51Z"
lastCommitAt: "2026-11-04T11:28:04Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 95
undervaluedScore: 50
maintainers: ["depfu[bot]", "epistrephein"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/129054691/82d727e2-96df-4642-b854-048415b36511"
---

# Rubies [](https://github.com/epistrephein/rubies/actions/workflows/main.yml)

A Sinatra API interface to Ruby versions, releases and branches.

The application is live at [https://rubies.io](https://rubies.io).

## Usage

The API endpoint is `https://rubies.io/api`.  
All successful requests return a JSON response with Content-Type `application/json`
and status `200`.  
CORS is enabled by default.

### Statuses

[`/normal`](https://rubies.io/api/normal) - returns the branches and the latest
releases in normal maintenance (receiving bug fixes and security fixes).

```bash
$ curl -s https://rubies.io/api/normal | jq
{
  "status": "normal",
  "branches": [
    "3.4",
    "3.3"
  ],
  "latest": [
    "3.4.4",
    "3.3.8"
  ]
}
```

[`/security`](https://rubies.io/api/security) - returns the branches and the latest
releases in security maintenance (receiving security fixes only).

```bash
$ curl -s https://rubies.io/api/security | jq
{
  "status": "security",
  "branches": [
    "3.2"
  ],
  "latest": [
    "3.2.8"
  ]
}
```

[`/preview`](https://rubies.io/api/preview) - returns the branches and the latest
releases currently in preview.

```bash
$ curl -s…
