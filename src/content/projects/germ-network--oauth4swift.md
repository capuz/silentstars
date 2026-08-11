---
repo: "germ-network/oauth4swift"
name: "oauth4swift"
description: "swift building blocks for oauth 2.1 clients, inspired by https://github.com/panva/oauth4webapi"
readmeQualityOk: true
url: "https://github.com/germ-network/oauth4swift"
language: "Swift"
languages: ["Swift"]
languagePcts: [100]
stars: 7
forks: 1
openIssues: 2
closedIssues: 1
watchers: 1
contributors: 5
recentReleases: 4
createdAt: "2026-03-17T23:22:18Z"
lastCommitAt: "2026-08-11T04:48:03Z"
lastReleaseAt: "2026-05-29T08:08:47Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 81
undervaluedScore: 51
maintainers: ["germ-mark", "ThisIsMissEm", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/d43c70a965c61816a0a343415dcf34702cccf20f1d108441cef31ef9d7be51d2/germ-network/oauth4swift"
---

Building blocks for an OAuth 2.1 client.

(This is pre-release and not yet stable. It is initially built for the atproto OAuth requirements (DPoP, PAR))

See [AtprotoOAuth](https://github.com/germ-network/AtprotoOAuth) for an example of using these
to build a full featured client.

This package comprises components and compositions of those components with
some adopter-supplied objects that handle application-specific state.

# Components
This package supplies:
- free functions under the `OAuth` namespace for making requests of OAuth endpoints.
- object implementations of client authentication methods
- object implementations of DPoP request signing

# Compositions
To construct a full authentication flow, an adopter can
1. Supply an implementation of the `Authorizer` protocol
2. OAuth4Swift provides an implementation of `performUserAuthentication`,
relying on the implementation of `Authorizer` to negotiate initial client
authentication and produce a stub `OAuth.ClientAuth.Authenticable` for the intitial
authorization flow. `performUserAuthentication` produces a session archive.
3. The adopter can supply an implementation of `SessionCapabilities` that
restores from a…
