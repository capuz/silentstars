---
repo: "webishdev/stopnik"
name: "stopnik"
description: "STOPnik: A small OAuth2 and OpenId Connect server"
readmeQualityOk: true
url: "https://github.com/webishdev/stopnik"
homepage: "http://stopnik.webish.dev/"
language: "Go"
languages: ["Go"]
languagePcts: [95]
topics: ["go", "golang", "identity-provider", "idp", "oauth2", "oauth2-server", "security", "stopnik", "oidc", "oidc-server"]
stars: 9
forks: 1
openIssues: 1
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2024-08-13T12:46:28Z"
lastCommitAt: "2026-10-25T09:00:47Z"
lastReleaseAt: "2025-05-08T16:31:11Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 37
maintainers: ["giftkugel"]
openGraphImageUrl: "https://opengraph.githubassets.com/3139e125525e7277d3591cfbbdaaed95fb1835d284186031597cc0d39a737915/webishdev/stopnik"
---

# STOPnik

The simple and small `OAuth2 | OpenId Connect` server that secures applications without hassle.

**STOPnik** does not have any persistence layer and will only work in-memory with the clients and users defined in the
configuration file (`YAML`).
When restarted, all issued tokens will become invalid/forgotten by **STOPnik**.

This project was used to
learn [OAuth 2.0](https://datatracker.ietf.org/doc/html/rfc6749), [OpenId Connect Core 1.0](https://openid.net/specs/openid-connect-core-1_0-final.html)
and [Go](https://go.dev/).

The logo mascot was mostly inspired by the nice work of [gopherize.me](https://github.com/matryer/gopherize.me) and
redrawn by hand as a vector graphic with additional body and a cool hat.

## STOPnik alternatives

The awesome work of other servers is very appreciated, most of them were the inspiration for this small project! ♥️

They add features like persistence and access to user directories like LDAP.

- [dex](https://github.com/dexidp/dex)
- [Keycloak](https://github.com/keycloak/keycloak)
- [ORY Hydra](https://github.com/ory/hydra)
- [authentik](https://github.com/goauthentik/authentik)
- [ZITADEL](https://github.com/zitadel/zitadel)
-…
