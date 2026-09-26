---
repo: "DavideCarvalho/adonis-agora-authkit"
name: "adonis-agora-authkit"
description: "AuthKit — AdonisJS OIDC Authorization Server kit + OIDC client + React helpers (@dudousxd/adonis-authkit-*)"
readmeQualityOk: true
url: "https://github.com/DavideCarvalho/adonis-agora-authkit"
homepage: "https://davidecarvalho.github.io/agora/docs/authkit"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [82]
stars: 5
forks: 0
openIssues: 7
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-06-04T17:11:44Z"
lastCommitAt: "2026-09-26T08:46:41Z"
lastReleaseAt: "2026-06-05T00:20:18Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 79
undervaluedScore: 43
maintainers: ["DavideCarvalho", "github-actions[bot]", "renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/9aa339e44fb0cc2ef1f8e938eee8147bb8e2127b5f5228950809e24493d7d971/DavideCarvalho/adonis-agora-authkit"
---

# AuthKit for AdonisJS

AuthKit is a set of packages that turn an [AdonisJS](https://adonisjs.com) app into
a full **OpenID Connect / OAuth2 Authorization Server** (Identity Provider), let other
apps consume it as **OIDC clients**, and give React frontends typed auth ergonomics.

It is built as an idiomatic wrapper around
[`oidc-provider`](https://github.com/panva/node-oidc-provider).

## Features

- **OIDC / OAuth2 Authorization Server** — authorization code + PKCE, refresh tokens,
  token exchange, discovery, JWKS, revocation, introspection.
- **MFA** — TOTP, WebAuthn passkeys, recovery codes, and trusted-device skip.
- **Passwordless** — magic-link email login and passkey-first login.
- **Protocol extensions** — Device Flow (RFC 8628), DPoP (RFC 9449, with client-side
  proof generation), PAR (RFC 9126), step-up auth via `acr_values`, Dynamic Client
  Registration (RFC 7591/7592).
- **Native apps** — RFC 8252 native clients (private-use scheme / claimed https / loopback
  redirects, public + PKCE, rotated refresh tokens) and `oidcBearerGuard`, an
  `@adonisjs/auth` guard for APIs called with a bearer access token (in-process, or as a
  remote resource server via JWKS /…
