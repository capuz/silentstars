---
repo: "vexxhost/sunrise"
name: "sunrise"
description: "OpenStack Dashboard"
readmeQualityOk: true
url: "https://github.com/vexxhost/sunrise"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
stars: 9
forks: 8
openIssues: 1
closedIssues: 3
watchers: 10
contributors: 16
recentReleases: 0
createdAt: "2023-09-21T18:31:55Z"
lastCommitAt: "2026-10-16T08:27:48Z"
status: "thriving"
tags: ["solo_builder", "community_watch", "fork_magnet"]
healthScore: 93
undervaluedScore: 74
maintainers: ["fitbeard", "renovate[bot]", "stepsecurity-app[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/1cb3315a00f60c7aa979e4c925cac0b2f9d9ee6c4691ced9f66f710755104d01/vexxhost/sunrise"
---

# Sunrise

## Local Development

1. Create a client inside Keycloak which will be used for authenticating
   the user using Sunrise.

2. Copy `.env.dist` to `.env.local` and configure the local cloud and identity
   values. Never commit `.env.local`.

3. Start the development server:

   ```bash
   pnpm dev -p 9990
   ```

4. Navigate to the following URL. You will be redirected to login with Keycloak:

   [http://localhost:9990](http://localhost:9990)

## Local Production Container

The Compose stack builds the Next.js standalone runtime for the local host
architecture and runs it as a non-root user with a read-only root filesystem.
It also starts an internal Redis-compatible service and selects the server-side
session backend, so the same image can be exercised with the persistence model
intended for multiple Sunrise replicas. The local stack defaults to Valkey
while all Sunrise configuration uses the implementation-neutral Redis protocol
vocabulary.

Next.js writes ephemeral image/data cache entries under `.next/cache` and
promotes immutable prerender seeds into `.next/server/route-cache` at runtime.
Compose mounts both paths as bounded tmpfs volumes. Kubernetes deployments…
