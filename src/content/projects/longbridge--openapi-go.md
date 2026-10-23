---
repo: "longbridge/openapi-go"
name: "openapi-go"
description: "Longbridge OpenAPI SDK for Go"
readmeQualityOk: true
url: "https://github.com/longbridge/openapi-go"
homepage: "https://open.longportapp.com"
language: "Go"
languages: ["Go"]
languagePcts: [100]
topics: ["go", "longbridge", "sdk"]
stars: 60
forks: 14
openIssues: 0
closedIssues: 0
watchers: 12
contributors: 14
recentReleases: 0
createdAt: "2022-05-27T06:35:35Z"
lastCommitAt: "2026-10-23T08:47:19Z"
lastReleaseAt: "2023-01-28T03:04:21Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 86
undervaluedScore: 43
maintainers: ["hogan-yuan", "sunli829", "huacnlee"]
openGraphImageUrl: "https://opengraph.githubassets.com/a6e63898e740a1b76ec47f8a24ab942203cfa9b3753c7ae03ac8e4ddb8bad272/longbridge/openapi-go"
---

# Longbridge OpenAPI SDK for Go

`Longbridge` provides an easy-to-use interface for invoking [Longbridge OpenAPI](https://open.longbridge.com/).

## Quickstart

_With Go module support , simply add the following import_

```golang
import "github.com/longbridge/openapi-go"
```

## Authentication

Longbridge OpenAPI supports two authentication methods:

1. **OAuth 2.0 (Recommended)** — Bearer tokens, no HMAC; token is stored and refreshed automatically. See [Config: Using OAuth 2.0](#using-oauth-20-recommended).
2. **Legacy API Key** — App key, secret, and access token via environment variables. See [Config: Using Legacy API Key](#using-legacy-api-key-environment-variables).

If you use OAuth, register an OAuth client first to get your `client_id`:

```bash
curl -X POST https://openapi.longbridge.com/v1/oauth2/client/register \
  -H "Content-Type: application/json" \
  -d '{
    "name": "My Application",
    "redirect_uris": ["http://localhost:60355/callback"],
    "grant_types": ["authorization_code", "refresh_token"]
  }'
```

Response:
```json
{
  "client_id": "your-client-id-here",
  "name": "My Application",
  "redirect_uris": ["http://localhost:60355/callback"]
}
```

Save the…
