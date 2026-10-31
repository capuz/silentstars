---
repo: "authelia/oauth2-provider"
name: "oauth2-provider"
description: "Authelia OAuth 2.0 Framework (Provider Role) "
readmeQualityOk: true
url: "https://github.com/authelia/oauth2-provider"
language: "Go"
languages: ["Go"]
languagePcts: [100]
stars: 11
forks: 5
openIssues: 1
closedIssues: 1
watchers: 1
contributors: 95
recentReleases: 0
createdAt: "2023-12-14T09:31:58Z"
lastCommitAt: "2026-10-31T09:53:51Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 70
maintainers: ["james-d-elliott", "renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/e3be215deae25d0d61025e2d89eb8c745df015aae58e6f2c9c2d760375268e70/authelia/oauth2-provider"
---

# OAuth 2.0 Framework

This library is the OAuth 2.0 and OpenID Connect 1.0 authorization server framework used by
[Authelia](https://github.com/authelia/authelia). It provides the request parsing, validation, client authentication,
token issuance, and response writing for the authorization, token, introspection, revocation, and related endpoints, and
leaves storage, user authentication, and consent to the implementer through a set of interfaces.

It started as a hard fork of [ORY Fosite](https://github.com/ory/fosite) and has since diverged significantly; see
[Thanks](#thanks) for details.

## Go Version Support Policy

This library officially supports only the latest minor version of go, which is currently **go 1.27**. Older versions of
go are not supported and are not tested. This rule applies at the time of a published release.

This library is intended to be used with [Go Toolchains](https://go.dev/doc/toolchain) as indicated by the `toolchain`
directive in the `go.mod`.

This library handles a critical element of security in dependent projects, so we prefer security over backwards
compatibility wherever the two conflict. Go's own compatibility guarantees usually make…
