---
repo: "lingyicute/ProxyEverything"
name: "ProxyEverything"
description: "An experimental general-purpose web reverse proxy based on Cloudflare Workers"
originalDescription: "基于 Cloudflare Workers 的实验性通用网页反向代理"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/lingyicute/ProxyEverything"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
stars: 15
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2025-03-09T02:38:22Z"
lastCommitAt: "2026-11-23T13:32:16Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 60
maintainers: ["lingyicute"]
openGraphImageUrl: "https://opengraph.githubassets.com/f6db859de6a265692b1bc6c007112db1dc9d256c5e74f958fb512b53ca799939/lingyicute/ProxyEverything"
---

# ProxyEverything

An experimental general-purpose web reverse proxy based on Cloudflare Workers.

## Try

1. Deploy `worker.js` as an ES Module to Cloudflare Workers, using a relatively recent compatibility date (`2026-04-23` or later is recommended).
2. Configure `ALLOWED_TARGET_ORIGINS` in the Worker's variables, for example `https://example.com,https://static.example.com`. The list matches exact origins (protocol, host, and port). Redirect targets and resource domains that need to be proxied must also be included. If it is not configured, left empty, or invalid, the Worker will not fetch from the origin.
3. Use a dedicated HTTPS-only domain. It is recommended to restrict access through Cloudflare Access or similar facilities and configure rate limiting, then visit the deployment domain. Do not use cache rules to force caching of requests that carry credentials.

Newly generated `/~…` links preserve the percent-encoding in the target path. Older links that encode each segment separately, or encode the entire address, remain accessible. If the upstream signs the original URL, confirm that the URL normalization rules of the deployment domain do not alter these escapes.
