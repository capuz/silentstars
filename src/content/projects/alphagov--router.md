---
repo: "alphagov/router"
name: "router"
description: "HTTP router in front of GOV.UK to proxy to backend servers on a single domain."
readmeQualityOk: true
url: "https://github.com/alphagov/router"
homepage: "https://docs.publishing.service.gov.uk/repos/router.html"
language: "Go"
languages: ["Go"]
languagePcts: [81]
topics: ["govuk"]
stars: 218
forks: 23
openIssues: 1
closedIssues: 13
watchers: 74
contributors: 66
recentReleases: 0
createdAt: "2013-10-03T11:03:40Z"
lastCommitAt: "2026-09-14T09:12:23Z"
lastReleaseAt: "2023-10-19T13:13:28Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 96
undervaluedScore: 41
maintainers: ["jfharden", "dependabot[bot]", "nimalank7"]
openGraphImageUrl: "https://opengraph.githubassets.com/e985597186927f1ce153ea4ee7be46a78a1b154e072e69ea5344ad4cb03dd306/alphagov/router"
---

# Router

GOV.UK Router is an HTTP reverse proxy built on top of [`triemux`][tm].

## How router loads routes

Router loads its routing table from [Content Store's](https://github.com/alphagov/content-store/) PostgreSQL database (or optionally from a flat file) into a [trie data structure](https://en.wikipedia.org/wiki/Trie) for fast path lookups.

Router can reload routes without restarting:
1. Automatically via PostgreSQL's `LISTEN/NOTIFY` mechanism
2. Periodic schedule
3. Manually via the API server

Internally these use a Go channel to send reload requests that causes Router to reload from `content-store's` PostgreSQL database.

## Routes

Routes can be one of two types:
- **exact**: The path must match exactly (e.g. the exact route `/government` only matches a request for `/government`)
- **prefix**: The path prefix must match (e.g. the prefix route `/government` matches requests for `/government`, `/government/policies`, etc.)

The route type and URL path determine which route gets matched to a particular request.

Router maintains two separate tries:
1. Exact path matches
2. Prefix matches

Once a request comes in, Router uses the URL path to first check for an exact match,…
