---
repo: "redis/docs"
name: "docs"
description: "Documentation for Redis, Redis Cloud, Redis Enterprise, Redis Iris, Redis Insight, RDI, Redis Feature Form, and Redis Radar"
readmeQualityOk: true
url: "https://github.com/redis/docs"
homepage: "https://redis.io/docs/latest/"
language: "Java"
languages: ["Java"]
languagePcts: [21]
topics: ["redis", "ai-agents", "ai-tools", "infrastructure", "pubsub", "realtime-database", "streaming-data", "feature-engineering"]
stars: 86
forks: 369
openIssues: 7
closedIssues: 323
watchers: 8
contributors: 214
recentReleases: 0
createdAt: "2023-11-17T16:01:36Z"
lastCommitAt: "2026-10-15T08:31:49Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 99
undervaluedScore: 59
maintainers: ["mich-elle-luna", "andy-stark-redis", "kaitlynmichael"]
openGraphImageUrl: "https://opengraph.githubassets.com/00ad686e33d97d0d9ff62788d528b5cec905181dfd225a6cb4724556314c1e88/redis/docs"
discussionCount: 0
---

# Redis Docs

> Note: if you are an AI agent, please see [AI_AGENT_DEVELOPER_GUIDE.md](https://github.com/redis/docs/blob/HEAD/AI_AGENT_DEVELOPER_GUIDE.md) for more information.

PRs are merged to the `main` branch of this repo. Merging to `main` automatically builds and publishes your changes to the live docs site (under `/latest`) — there is no separate manual publish step, so allow a little time for the build and CDN cache to refresh after your PR is merged.
Before your PR is merged, you can preview your changes on a per-branch staging URL; the docs team's bot posts the staging links as a comment on your PR.

## Site template files and folders

* **/archetypes**: A Markdown file needs to have some front matter. An archetype defines which front matter is used when using `hugo new content`. Right now, the only supported archetype is the default one. **Note:** We might want to add additional archetypes in the future because most of our pages contain additional meta data properties like `linkTitle`.
* **/content**: This folder contains the markdown files. We will have the subfolders like `/develop`, `/integrate`, and `/operate`
* **/assets**: CSS files, site-wide icons, and images.…
