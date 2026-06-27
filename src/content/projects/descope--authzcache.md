---
repo: "descope/authzcache"
name: "authzcache"
description: "Authz cache"
url: "https://github.com/descope/authzcache"
homepage: "https://docs.descope.com"
language: "Go"
languages: ["Go"]
languagePcts: [94]
topics: ["authorization", "authz", "cache", "descope", "fga"]
stars: 23
forks: 1
openIssues: 2
closedIssues: 2
watchers: 8
contributors: 24
recentReleases: 4
createdAt: "2025-01-23T12:12:27Z"
lastCommitAt: "2026-06-27T00:37:00Z"
lastReleaseAt: "2026-05-31T15:52:48Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 63
maintainers: ["descope[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/a2444dab6541a3796a6cbf8e54d64d77e3aeb810dbdab167cb813e36a59e704e/descope/authzcache"
---

# Descope AuthZ Cache

A high-performance authorization cache service that accelerates Fine-Grained Authorization (FGA) checks by caching authorization data locally within your cluster.

## Docker Image

The latest image from the main branch is available on [Docker Hub](https://hub.docker.com/r/descope/authzcache).

## Quick Start

Run the service with Docker:

```bash
docker run -d \
  --name authzcache \
  -p 8189:8189 \
  -e HTTP_HOST=0.0.0.0 \
  -e DESCOPE_MANAGEMENT_KEY=your_management_key_here \
  descope/authzcache:latest
```

## Configuration

### Required Environment Variables

- `DESCOPE_MANAGEMENT_KEY` - Your Descope management key for authentication, required (and recommended) scope is "FGA read/write" permissions.

### Optional Environment Variables

- `DESCOPE_BASE_URL` - Custom Descope base URL (default: production Descope service)
- `CONTAINER_HTTP_PORT` - HTTP gateway port (default: 8189)
- `AUTHZCACHE_SDK_DEBUG_LOG` - Enable debug logging of the internally used Descope SDK (TRUE/FALSE, default: FALSE)
- `AUTHZCACHE_DIRECT_RELATION_CACHE_SIZE_PER_PROJECT` - Direct relation cache size per project (default: 1,000,000)
-…
