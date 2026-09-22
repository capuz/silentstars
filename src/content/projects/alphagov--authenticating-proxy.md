---
repo: "alphagov/authenticating-proxy"
name: "authenticating-proxy"
description: "Allows authorised users to access the GOV.UK draft stack"
readmeQualityOk: true
url: "https://github.com/alphagov/authenticating-proxy"
homepage: "https://docs.publishing.service.gov.uk/apps/authenticating-proxy.html"
language: "Ruby"
languages: ["Ruby"]
languagePcts: [98]
topics: ["govuk"]
stars: 6
forks: 4
openIssues: 0
closedIssues: 1
watchers: 51
contributors: 69
recentReleases: 0
createdAt: "2015-06-10T11:06:56Z"
lastCommitAt: "2026-09-22T08:45:51Z"
lastReleaseAt: "2023-09-11T10:01:23Z"
status: "watched"
tags: ["legacy_hero", "community_watch"]
healthScore: 98
undervaluedScore: 62
maintainers: ["dependabot[bot]", "govuk-ci", "brucebolt"]
openGraphImageUrl: "https://opengraph.githubassets.com/8c0e927ccc29a10f9c610f4856377b37675d66aec78660e81869ca7d02ddc435/alphagov/authenticating-proxy"
---

# GOV.UK Authenticating Proxy

App to add authentication to the draft version of GOV.UK, so that only users with
a [signon][] account - or a valid JSON web token ([JWT]) - can access it.

This is a Rails application that [proxies][] requests to an upstream service, first
performing authentication using [gds-sso][] to ensure that only authenticated
users are able to view the site. It sets a `X-GOVUK-AUTHENTICATED-USER` header and a 
`X_GOVUK_AUTHENTICATED_USER_ORGANISATION` header so that the upstream service can identify the user.

It also removes the `Host` header and replaces it with a `X-Forwarded-Host` header.

The application also supports bypassing authentication via a valid JWT token.
If the URL being requested includes a `token` querystring containing a valid
token encoded with the value in the `JWT_AUTH_SECRET` environment variable, and
that token contains a `sub` key, the value of that key is passed upstream in
the `GOVUK_AUTH_BYPASS_ID` header. NB, the `sub` (or "subject") key is one of the
[reserved claims of a JWT][].

If a user is authenticated using [gds-sso][] and a JWT token is also provided, both
sets of information are passed upstream. It is up to the upstream…
