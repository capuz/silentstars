---
repo: "yc-oss/api"
name: "api"
description: "📎 Public API for companies funded by Y Combinator"
readmeQualityOk: true
url: "https://github.com/yc-oss/api"
homepage: "https://yc-oss.github.io/api/meta.json"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
topics: ["api", "json", "rest-api", "typescript", "y-combinator"]
stars: 265
forks: 23
openIssues: 2
closedIssues: 0
watchers: 3
contributors: 2
recentReleases: 0
createdAt: "2023-10-14T15:11:21Z"
lastCommitAt: "2026-11-19T05:07:32Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 33
maintainers: ["actions-user", "AnandChowdhary", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/d2f07e47755acce7b87621c96b30ce952265c4652a4fc43180b3da514d78a39c/yc-oss/api"
---

# Y Combinator companies API

This repository contains an unofficial API for Y Combinator companies fetched
from the Y Combinator website's Algolia search index. It only includes
**publicly launched companies** with pages on the Y Combinator website. It does
not scrape the Y Combinator website, instead it uses the Algolia search index to
fetch the companies in a GitHub Actions workflow that runs every day. When
company records change, the workflow also publishes a daily change summary in
JSON and Markdown at `changes/latest.json` and `changes/latest.md`, so you can
review what YC changed without digging through the full repository diff.

## ℹ️ Metadata

API endpoint: https://yc-oss.github.io/api/meta.json

- Last updated: November 19, 2026 at 5:07 AM
- Companies: 6402
- Batches: 51
- Industries: 59
- Tags: 338
