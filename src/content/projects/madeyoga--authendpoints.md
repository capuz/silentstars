---
repo: "madeyoga/AuthEndpoints"
name: "AuthEndpoints"
description: "A composable authentication endpoints library for aspnetcore."
readmeQualityOk: true
url: "https://github.com/madeyoga/AuthEndpoints"
homepage: "https://authendpoints.harten.id"
language: "C#"
languages: ["C#"]
languagePcts: [94]
topics: ["aspnetcore", "authentication", "jwt", "passkey", "webauthn", "identity"]
stars: 122
forks: 15
openIssues: 1
closedIssues: 20
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2022-04-16T15:40:25Z"
lastCommitAt: "2026-10-23T09:32:22Z"
lastReleaseAt: "2022-06-02T10:22:05Z"
status: "thriving"
tags: []
healthScore: 98
undervaluedScore: 48
maintainers: ["madeyoga", "cursoragent", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/785cf9c47e5c18a01e348ec82c3111e46a6549d28c8d54733159c323758470da/madeyoga/AuthEndpoints"
discussionCount: 0
---

# AuthEndpoints

AuthEndpoints is an authentication library for ASP.NET Core Identity that gives you ready-made login, register, refresh, 2FA, passkey and password reset endpoints. It is for your own web and mobile clients. You keep ASP.NET Core Identity, your user type, and your database.

- Cookie sessions for browser apps, and JWT bearer sessions for token clients, including refresh
- Two-factor authentication with authenticator codes and recovery codes
- Passkeys (WebAuthn) for passwordless register and login
- Email-code sign-in. Account creation and magic links stay off until you enable them
- Password facade with `AddPasswordAuth`, `UseAuthEndpoints`, and `MapPasswordAuth`. Cookie is the default session. Set `AuthEndpointsSession.Jwt` for a JWT bearer session
- Account lifecycle: register, confirm email, forgot and reset password, manage account info, and step-up ReAuth
- Hardening on the routes: rate limits, antiforgery, lockout-aware login, and hashed JWT refresh tokens with reuse detection
- GitHub and Google sign-in through `AuthEndpoints.OAuth.GitHub` and `AuthEndpoints.OAuth.Google`. The endpoints live in the core package. Compose them. The password facade does not…
