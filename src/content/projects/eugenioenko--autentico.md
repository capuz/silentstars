---
repo: "eugenioenko/autentico"
name: "autentico"
description: "Autentico is a self-hosted OpenID Connect Identity Provider built with Go. It handles the full authentication lifecycle; login, MFA, passkeys, session management, token issuance, and administration. All in a single binary backed by SQLite."
readmeQualityOk: true
url: "https://github.com/eugenioenko/autentico"
homepage: "http://getautentico.dev/"
language: "Go"
languages: ["Go"]
languagePcts: [60]
topics: ["go", "oidc", "openid", "server", "sqlite", "authentication", "golang", "identity-provider", "mfa", "oauth2"]
stars: 46
forks: 7
openIssues: 24
closedIssues: 175
watchers: 1
contributors: 7
recentReleases: 0
createdAt: "2025-04-06T05:01:28Z"
lastCommitAt: "2026-10-29T21:23:44Z"
lastReleaseAt: "2026-03-24T22:20:50Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem"]
healthScore: 94
undervaluedScore: 57
maintainers: ["eugenioenko", "bfs2021", "arin30"]
openGraphImageUrl: "https://opengraph.githubassets.com/b42b0b03854429e81930d05082e54e3d6c0e3e967ea6379cba911a7b2b1c607f/eugenioenko/autentico"
discussionCount: 5
---

# Autentico — OAuth 2.0 / OIDC Identity Provider


**Auténtico is a self-contained OAuth 2.0 / OpenID Connect (OIDC) Identity Provider built with Go. It handles the full authentication lifecycle — login, MFA, passkeys, sessions, token issuance, and admin — in a single binary backed by SQLite. No external database, no infrastructure dependencies, no ceremony.**


  Onboarding, self-signup, registering a client, 2FA enrollment, and the audit log.<br>

Identity infrastructure is typically complex to operate: a separate database to provision and back up, a cache tier, a worker queue, multiple services to keep running, and credentials to rotate. Auténtico takes a different approach. The entire IdP — authentication, token issuance, session management, and the admin UI — runs as one Go binary backed by a single SQLite file. You deploy one thing and it works. If you have multiple projects, point them all at one instance and centralize your users, sessions, and security in one place.

Auténtico implements OAuth2 and OpenID Connect correctly. It is not a simplified or non-standard subset. Authorization Code + PKCE, refresh tokens, token introspection, OIDC discovery, RS256-signed…
