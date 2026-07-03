---
repo: "idenplane/idenplane"
name: "idenplane"
description: "Open-source Identity and Access Management Server (Keycloak alternative)"
url: "https://github.com/idenplane/idenplane"
homepage: "https://idenplane.com"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [82]
topics: ["auth0-alternative", "authentication", "authorization", "fido2", "iam", "identity-management", "keycloak-alternative", "ldap", "mfa", "nestjs"]
stars: 12
forks: 1
openIssues: 0
closedIssues: 573
watchers: 3
contributors: 5
recentReleases: 3
createdAt: "2026-02-15T21:09:44Z"
lastCommitAt: "2026-07-03T06:23:01Z"
lastReleaseAt: "2026-05-21T21:50:56Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 99
undervaluedScore: 58
maintainers: ["Islamawad132", "dependabot[bot]", "Islam-Dreamy-sa"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1158744494/784a2239-5508-4acd-b3b6-bd8e641f08ca"
discussionCount: 1
---

</a>
</p>

  <strong>Open-Source Identity & Access Management</strong><br />
  <sub>Self-hosted authentication server with OAuth 2.0, OpenID Connect, SAML 2.0, WebAuthn, and more.</sub>
</p>

</p>

</p>

---

## Why Idenplane?

Most identity solutions are either too complex to self-host (Keycloak — 1GB+ RAM, Java) or too limited for production (simple JWT libraries). Idenplane fills that gap:

- **Deploy in 30 seconds** — single `docker compose up` gets you a full IAM server
- **Modern stack** — TypeScript, NestJS, React, PostgreSQL. No Java, no XML
- **Lightweight** — runs in ~150 MB RAM vs. Keycloak's 1 GB+
- **Complete** — OAuth 2.0, OIDC, SAML 2.0, WebAuthn, MFA, LDAP, SSO, Organizations — all built-in
- **Extensible** — plugin system, custom auth flows, webhooks, and 10 client SDKs
- **Admin Console** — full-featured React dashboard at `/console`

---

## Features

### Authentication & Protocols

| Feature | Description |
|---------|-------------|
| **OAuth 2.0 / OpenID Connect** | Authorization Code (with PKCE), Client Credentials, Password, Refresh Token, and Device Authorization grants |
| **SAML 2.0** | Identity Provider and Service Provider with signed assertions and…
