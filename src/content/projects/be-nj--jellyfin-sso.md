---
repo: "be-nj/jellyfin-sso"
name: "jellyfin-sso"
description: "OpenID Connect single sign-on for Jellyfin 12 — Authentik, Keycloak and Authelia, with group-based library access"
readmeQualityOk: true
url: "https://github.com/be-nj/jellyfin-sso"
language: "C#"
languages: ["C#"]
languagePcts: [89]
topics: ["authelia", "authentik", "jellyfin", "jellyfin-plugin", "keycloak", "oidc", "openid-connect", "selfhosted", "single-sign-on", "sso"]
stars: 6
forks: 1
openIssues: 0
closedIssues: 137
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-09-17T17:33:56Z"
lastCommitAt: "2026-11-17T14:37:28Z"
lastReleaseAt: "2026-10-19T12:38:47Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 99
undervaluedScore: 65
maintainers: ["be-nj", "github-actions[bot]", "Copilot"]
openGraphImageUrl: "https://opengraph.githubassets.com/6aa32952d1009c22859ebc2d8674d75c1d760de8182858c5ff67fb4c8deb15d4/be-nj/jellyfin-sso"
---

# Jellyfin SSO Authentication

**Log in to Jellyfin with the account you already have — and let your identity provider's
groups decide who sees which libraries.**

[Install](#install) · [Set it up](#set-it-up) · [Documentation](https://github.com/be-nj/jellyfin-sso/blob/HEAD/docs/README.md) ·
[Troubleshooting](https://github.com/be-nj/jellyfin-sso/blob/HEAD/docs/troubleshooting.md)

---

OpenID Connect single sign-on for Jellyfin — for households already running
[Authentik](https://github.com/be-nj/jellyfin-sso/blob/HEAD/docs/authentik.md), [Keycloak](https://github.com/be-nj/jellyfin-sso/blob/HEAD/docs/keycloak.md) or
[Authelia](https://github.com/be-nj/jellyfin-sso/blob/HEAD/docs/authelia.md).

- **Sign in through your provider.** Authorization code with PKCE. A public client
  stores no secret; a confidential one reads its secret from an environment variable or
  a file, never from the plugin's configuration.
- **Groups decide access** — libraries, Live TV, downloads, deletion, collections,
  subtitles, lyrics, parental rating, admin — reapplied on every SSO login, except for
  the accounts you exclude from the sync and for a provider you tell to leave permissions
  alone…
