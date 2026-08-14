---
repo: "strapi-community/plugin-rest-cache"
name: "plugin-rest-cache"
description: "Speed-up HTTP requests with LRU cache."
readmeQualityOk: true
url: "https://github.com/strapi-community/plugin-rest-cache"
homepage: "https://strapi-community.github.io/plugin-rest-cache/"
language: "TypeScript"
languages: ["TypeScript", "JavaScript"]
languagePcts: [55, 45]
topics: ["cache", "strapi", "rest"]
stars: 153
forks: 43
openIssues: 0
closedIssues: 73
watchers: 7
contributors: 30
recentReleases: 0
createdAt: "2022-01-20T01:44:47Z"
lastCommitAt: "2026-08-14T05:14:24Z"
lastReleaseAt: "2022-12-02T14:45:45Z"
status: "thriving"
tags: ["solo_builder", "funded", "community_hub"]
healthScore: 100
undervaluedScore: 47
maintainers: ["derrickmehaffy", "dependabot[bot]", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/57801258e14c1b70aa9b9bde74afdd4497b1800b73829a05c262ae0d94492329/strapi-community/plugin-rest-cache"
fundingLinks: ["OPEN_COLLECTIVE:https://opencollective.com/strapi"]
discussionCount: 21
---

<h1>Strapi REST Cache Plugin</h1>

<p>
  </a>
  </a>
  </a>
</p>
</div>

A caching layer for the Strapi REST API. It injects a middleware that stores `GET`
responses, keyed by route and query, and invalidates them when the underlying
content changes — so you serve cached responses without serving stale ones.

Cached content lives in a **provider** (in-memory, Redis, or your own). What gets
cached, and for how long, is described by a **strategy** in your plugin config.

## Features

- **Pluggable providers.** In-memory by default; Redis via
  `@strapi-community/provider-rest-cache-redis`. Custom providers implement the
  `CacheProvider` abstract class.
- **Per-content-type and per-route caching.** Cache a list of content types with
  their default routes, or declare custom routes with their own `maxAge`,
  `paramNames` and key strategy.
- **Configurable cache keys.** Key on query params (`keys.useQueryParams`),
  specific request headers (`keys.useHeaders`), and — *since 5.1.0* — on the
  authenticated caller (`keys.useAuth`), so two callers authorised for the same
  route do not share one entry.
- **Automatic invalidation through the document service.** *Since 5.1.0*,…
