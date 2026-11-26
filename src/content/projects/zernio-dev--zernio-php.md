---
repo: "zernio-dev/zernio-php"
name: "zernio-php"
description: "Zernio API - Official PHP SDK"
readmeQualityOk: true
url: "https://github.com/zernio-dev/zernio-php"
language: "PHP"
languages: ["PHP"]
languagePcts: [100]
stars: 5
forks: 1
openIssues: 0
closedIssues: 2
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2026-02-03T16:15:37Z"
lastCommitAt: "2026-11-26T23:34:09Z"
lastReleaseAt: "2026-02-09T12:28:09Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 95
undervaluedScore: 72
maintainers: ["github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/e148986584677f640f291275c245710784ea49bac5d0c1c369e978a4267978d0/zernio-dev/zernio-php"
---

# Zernio

API reference for Zernio. Authenticate with a Bearer API key.
Base URL: https://zernio.com/api

Versioning and deprecation: all endpoints are versioned in the URL path
(current version: /v1). Breaking changes only ship in a new path version;
existing versions keep working. Deprecated operations are marked
'deprecated: true' in this spec and announced in the changelog
(https://zernio.com/changelog) before removal.

Errors: every 4xx/5xx response is application/json with a machine-readable
'code' and a human-readable 'error' message (see the ErrorResponse schema).

Request ids: responses carry an X-Request-Id header with the id we log the
request under. Quote it when reporting a problem. A valid x-request-id you
send is reused as that id.

For more information, please visit [https://zernio.com](https://zernio.com).

## Installation

### Requirements

PHP 8.1 and later.

### Composer

```bash
composer require zernio-dev/zernio-php
```

Use the `Zernio\` namespace. The legacy `Late\` namespace is auto-aliased on load for backwards compatibility.

## Getting Started

Please follow the [installation procedure](#installation--usage) and then run the following:
