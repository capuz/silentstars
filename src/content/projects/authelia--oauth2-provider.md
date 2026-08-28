---
repo: "authelia/oauth2-provider"
name: "oauth2-provider"
description: "Authelia OAuth 2.0 Framework (Provider Role) "
readmeQualityOk: true
url: "https://github.com/authelia/oauth2-provider"
language: "Go"
languages: ["Go"]
languagePcts: [100]
stars: 8
forks: 4
openIssues: 1
closedIssues: 1
watchers: 1
contributors: 95
recentReleases: 0
createdAt: "2023-12-14T09:31:58Z"
lastCommitAt: "2026-08-28T14:28:20Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 89
undervaluedScore: 74
maintainers: ["james-d-elliott", "renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/80c8809ad780eedb70ad87fe7d443d9c7689ec582bb065be18c7d41743d19658/authelia/oauth2-provider"
---

## OAuth 2.0 Framework

This library is the Authelia OAuth 2.0 Framework which is internally used to deliver OAuth 2.0 and OpenID Connect 1.0
Flows to its users.

## Notable Implemented or Intended Differences

In an effort to assist users who wish to use this library we aim to maintain the following list of differences:

- [x] Module path changed from `github.com/ory/fosite` to `authelia.com/provider/oauth2`.
- Documentation:
  - [ ] Add spec support documentation
- Overhaul testing:
  - [ ] Ensure all tests and subtests are well named
  - [ ] Ensure all tests are simplified where possible
  - [ ] Restore/Implement conformance tests
  - [ ] Fix all shadowed test vars
- Rename interfaces and implementations:
  - [x] `OAuth2Provider` to `Provider`.
  - [ ] `Fosite` to `TBA`.
- [x] Minimum dependency is go version 1.21
- [x] Replace string values with constants where applicable
      <sup>[commit](https://github.com/authelia/oauth2-provider/commit/de536dc0c9cd5f080c387621799e644319587bd0)</sup>
- [x] Simplify the internal JWT logic to leverage `github.com/golang-jwt/jwt/v5` or other such libraries
- [x] Implement internal JWKS logic
- [x] Higher Debug error information visibility…
