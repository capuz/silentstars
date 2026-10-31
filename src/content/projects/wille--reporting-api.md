---
repo: "wille/reporting-api"
name: "reporting-api"
description: "Express middleware to collect Reporting API reports - CSP, COOP, COEP, Permissions-Policy, Document-Policy, NEL, crash, deprecation and intervention reports"
readmeQualityOk: true
url: "https://github.com/wille/reporting-api"
homepage: "https://www.npmjs.com/package/reporting-api"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
topics: ["content-security-policy", "express", "reporting", "webappsec", "csp", "nodejs", "middleware", "network-error-logging", "permissions-policy", "reporting-api"]
stars: 8
forks: 0
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 1
recentReleases: 1
createdAt: "2024-07-16T08:55:18Z"
lastCommitAt: "2026-10-31T07:45:34Z"
lastReleaseAt: "2026-10-31T07:45:54Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 54
undervaluedScore: 42
maintainers: ["wille"]
openGraphImageUrl: "https://opengraph.githubassets.com/3c882e46864a4c85df40293e131327c9d57eba214e78d54ea299c6f28d7bad6f/wille/reporting-api"
---

# reporting-api

Express.js middleware for the [Reporting API](https://w3c.github.io/reporting/). Automatically wires up `report-to` / `report-uri` on your existing policy headers and gives you a ready-made endpoint to collect violation, deprecation, crash, and network error reports.

## Supported headers and report types

| Header | Shorthand |
|--------|-----------|
| [`Content-Security-Policy`](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP) | CSP |
| [`Content-Security-Policy-Report-Only`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy-Report-Only) | |
| [`Cross-Origin-Opener-Policy`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cross-Origin-Opener-Policy) | COOP |
| [`Cross-Origin-Opener-Policy-Report-Only`](https://github.com/camillelamy/explainers/blob/main/coop_reporting.md) | |
| [`Cross-Origin-Embedder-Policy`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cross-Origin-Embedder-Policy) | COEP |
| [`Cross-Origin-Embedder-Policy-Report-Only`](https://gist.github.com/yutakahirano/f14f15bd1595e1e913b0870649000470) | |
|…
