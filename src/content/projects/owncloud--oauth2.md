---
repo: "owncloud/oauth2"
name: "oauth2"
description: "🔐  Application for using OAuth 2.0 in ownCloud"
readmeQualityOk: true
url: "https://github.com/owncloud/oauth2"
language: "PHP"
languages: ["PHP", "JavaScript"]
languagePcts: [67, 29]
topics: ["owncloud-app", "owncloud", "owncloud-classic", "php"]
stars: 32
forks: 24
openIssues: 1
closedIssues: 135
watchers: 44
contributors: 53
recentReleases: 0
createdAt: "2016-11-07T12:35:17Z"
lastCommitAt: "2026-10-12T11:15:41Z"
lastReleaseAt: "2019-11-12T16:04:04Z"
status: "thriving"
tags: ["legacy_hero", "community_watch", "fork_magnet"]
healthScore: 90
undervaluedScore: 45
maintainers: ["DeepDiver1975", "dependabot[bot]", "oc-tmueller"]
openGraphImageUrl: "https://opengraph.githubassets.com/fadf1176d3ff516355d20946f33870030a66274a30164045567374d60a81e664/owncloud/oauth2"
---

# OAuth2

An ownCloud Server app that implements the OAuth 2.0 Authorization Code Flow (RFC 6749) for secure token-based authentication. It allows registered client applications (desktop, mobile, and web) to obtain access and refresh tokens for API access without handling user passwords directly.

## Getting Started

Follow the steps below to install and configure the OAuth2 app.

### Installation

Place the app in `owncloud/apps/oauth2` and enable it:

```bash
occ app:enable oauth2
```

### Client Registration

Register clients in the admin settings: `/index.php/settings/admin?sectionid=additional#oauth2`

### Endpoints

- Authorization URL: `/index.php/apps/oauth2/authorize`
- Access Token URL: `/index.php/apps/oauth2/api/v1/token`

### Run Tests

```bash
make test-php-unit
make test-php-style
make test-acceptance-webui
```

## Documentation

- [OAuth 2.0 Authorization Code Flow (RFC 6749)](https://tools.ietf.org/html/rfc6749#section-4.1)
- [ownCloud Server Admin Manual](https://doc.owncloud.com/server/latest/admin_manual/)

## Part of ownCloud Server (Classic)

This app extends [ownCloud Server 10](https://github.com/owncloud/core) with OAuth 2.0 support. It is used by the…
