---
repo: "lichong0429/weknora-mobile"
name: "weknora-mobile"
description: "WeKnora mobile client"
originalDescription: "WeKnora mobile client"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/lichong0429/weknora-mobile"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [93]
stars: 8
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-07-04T10:16:09Z"
lastCommitAt: "2026-11-07T16:11:23Z"
lastReleaseAt: "2026-07-06T05:03:20Z"
status: "thriving"
tags: []
healthScore: 76
undervaluedScore: 46
maintainers: ["lichong0429"]
openGraphImageUrl: "https://opengraph.githubassets.com/6d395bf2cf57fffd970353990564738e676fe0b73f8f9a9e9943bfbb45d53269/lichong0429/weknora-mobile"
---

# WeKnora Mobile

A mobile app built for WeKnora, addressing the inconvenience of accessing the WeKnora web layout on phones.

## Features

- Connect to a self-hosted WeKnora API
- Knowledge base list, details, and settings (models, indexing strategy, Wiki extraction granularity, etc.)
- Copy / move knowledge bases
- Knowledge base statistics and retrieval evaluation
- Knowledge base documents with infinite scroll, filtering, and bulk operations
- Knowledge base Wiki view and relationship graph view (requires the corresponding index to be enabled)
- Entry management for FAQ-type knowledge bases
- Tag management (create, edit, delete)
- Documents, web links, and manual knowledge creation
- Browsing of documents, agents, sessions, models, and system information
- Diagnostics and debugging pages for troubleshooting API issues
- Responsive mobile layout

## Why Use a WebView APK

The current version uses a **native WebView** to package the PWA into an APK, loading it from a local `file://` path:

- Does not depend on whether the phone's default browser is Chrome.
- Can bypass HTTPS→HTTP mixed content restrictions and cross-origin restrictions.
- Suitable for Tailscale / intranet /…
