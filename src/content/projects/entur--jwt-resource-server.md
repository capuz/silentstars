---
repo: "entur/jwt-resource-server"
name: "jwt-resource-server"
description: "OpenID: Client, server and unit-testing support for machine-to-machine calls using access-tokens."
readmeQualityOk: true
url: "https://github.com/entur/jwt-resource-server"
language: "Java"
languages: ["Java"]
languagePcts: [100]
topics: ["spring-boot", "json-web-token", "openid-connect", "java", "junit5", "openid", "jwt", "caching", "auth0"]
stars: 50
forks: 5
openIssues: 0
closedIssues: 8
watchers: 18
contributors: 7
recentReleases: 0
createdAt: "2019-10-10T11:14:01Z"
lastCommitAt: "2026-08-28T15:32:00Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 96
undervaluedScore: 51
maintainers: ["dependabot[bot]", "skjolber"]
openGraphImageUrl: "https://opengraph.githubassets.com/b59abaf7490dab38c6dad7db116fea19e5bfb0e6a911f5cc9277c75ecae41381/entur/jwt-resource-server"
---

# jwt-resource-server

Tools for synchronous (servlet-based) __OpenID resource servers__ relying on use of [Access Tokens](https://github.com/entur/jwt-resource-server/blob/HEAD/[https://auth0.com/docs/tokens/access-tokens](https://auth0.com/docs/tokens/access-tokens)) for authorization. These come in the form of JSON Web Tokens (JWT) issued by Authorization Servers like Auth0 and Keycloak. Authorization Servers __sign JWTs__ with private keys, resource servers then download the corresponding public keys from the Authorization Servers and __validate the JWTs__ by verifying the signature.

## Primer
Technically, this library deals with HTTP requests using the __Authorization__ header. Example HTTP request:

``` 
GET /some/restricted/service/1
Accept: application/json
Authorization: Bearer eyJhbGciOiJIUzI1NiIsI.eyJzdWIIjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpM
```
where the __Base64-encoded value__ is the token itself. For a valid token, the server could process the request and respond:

```
HTTP/1.1 200 OK
Content-Type: application/json
Content-Length: 1024
```

Alternatively, the server might return __HTTP 401 Unauthorized__ if the token was not accepted, or __HTTP 403 Forbidden__…
