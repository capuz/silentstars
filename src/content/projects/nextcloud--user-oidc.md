---
repo: "nextcloud/user_oidc"
name: "user_oidc"
description: "OIDC connect user backend for Nextcloud"
readmeQualityOk: true
url: "https://github.com/nextcloud/user_oidc"
language: "PHP"
languages: ["PHP", "JavaScript"]
languagePcts: [53, 43]
topics: ["hacktoberfest", "nextcloud", "openid-connect"]
stars: 188
forks: 65
openIssues: 99
closedIssues: 198
watchers: 8
contributors: 289
recentReleases: 1
createdAt: "2020-04-27T08:45:24Z"
lastCommitAt: "2026-10-27T12:39:08Z"
lastReleaseAt: "2026-08-24T16:31:56Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 92
undervaluedScore: 43
maintainers: ["github-actions[bot]", "dependabot[bot]", "CarlSchwan"]
openGraphImageUrl: "https://opengraph.githubassets.com/ff3c118bbdc95dcb4642c8eb24bddace64e2bb089c0c559e54187878c9f7f6da/nextcloud/user_oidc"
---

# user_oidc

OpenID Connect user backend for Nextcloud

## General usage
See [Nextcloud and OpenID-Connect](https://web.archive.org/web/20240412121655/https://www.schiessle.org/articles/2023/07/04/nextcloud-and-openid-connect/)
for a proper jumpstart.

---

## `user_oidc.httpclient.allowselfsigned`

```php
'user_oidc' => [
    'httpclient.allowselfsigned' => true,
]
```

This configuration allows Nextcloud to **trust self-signed SSL certificates** when making HTTP requests through the internal HTTP client.
It is especially useful when your OAuth2 or OIDC provider is hosted locally or uses a self-signed certificate not recognized by public CAs.

* **true**: Disables SSL certificate verification (adds the `verify => false` option to the actual HTTP client)
* **false** (default): SSL verification remains enabled and strict

> ⚠️ Use with caution in production environments, as disabling certificate verification can introduce security risks.

---

## `user_oidc.prompt`

```php
'user_oidc' => [
  'prompt' => 'internal'
]
```

This option allows customizing the `prompt` parameter sent in the OAuth2/OIDC authorization request.

Supported values include:

* `none`
* `login`
* `consent`
*…
