---
repo: "modx-pro/modx-hybridauth"
name: "modx-hybridauth"
description: "MODX component for social sign on"
readmeQualityOk: true
url: "https://github.com/modx-pro/modx-hybridauth"
language: "PHP"
languages: ["PHP"]
languagePcts: [91]
stars: 22
forks: 23
openIssues: 0
closedIssues: 29
watchers: 9
contributors: 21
recentReleases: 1
createdAt: "2012-12-13T10:40:13Z"
lastCommitAt: "2026-07-25T06:00:43Z"
lastReleaseAt: "2026-07-25T05:59:44Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "fork_magnet"]
healthScore: 100
undervaluedScore: 58
maintainers: ["Ibochkarev"]
openGraphImageUrl: "https://opengraph.githubassets.com/13bccca214e7ebc1ddea86217e9ecbd7906cebfcc9542baee55de208aa9e2df7/modx-pro/modx-hybridauth"
---

## HybridAuth for MODX Revolution

Social login for MODX Revolution via [Hybridauth](https://github.com/hybridauth/hybridauth) **3.13**.

**PHP:** 7.4–8.4

### Build

`vendor/` is gitignored. `_build/build.transport.php` runs `composer install --no-dev`
and fails the build if `vendor/autoload.php` is missing (#54). `composer.lock` is committed.

### Providers

Built-in Hybridauth providers (Google, Facebook, GitHub, X, Yahoo, …) work through `ha.keys.{Name}` JSON settings. Prefer **X** (OAuth 2); `Twitter` remains as legacy OAuth 1.0a.

- **Yahoo** — create an app at [developer.yahoo.com/apps](https://developer.yahoo.com/apps/), enable OpenID Connect Permissions, set `ha.keys.Yahoo` to `{"keys":{"id":"...","secret":"..."},"scope":"profile"}`, use `&providers=`Yahoo``.

Local classmap providers:

- **VkId** (OAuth 2.1 + PKCE) — register in [VK ID](https://id.vk.com/about/business/go), set `ha.keys.VkId` to `{"keys":{"id":"...","secret":"..."},"scope":"vkid.personal_info email"}`, use `&providers=`VkId``. See [#56](https://github.com/modx-pro/modx-hybridauth/issues/56).
- **Yandex** — `{"keys":{"id":"...","secret":"..."}}`
- **Vkontakte** (legacy `api.vk.com` OAuth) — only for old…
