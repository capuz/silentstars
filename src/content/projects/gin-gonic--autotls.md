---
repo: "gin-gonic/autotls"
name: "autotls"
description: "Support Let's Encrypt for a Go server application."
readmeQualityOk: true
url: "https://github.com/gin-gonic/autotls"
language: "Go"
languages: ["Go"]
languagePcts: [97]
topics: ["golang", "letsencrypt", "tls"]
stars: 407
forks: 44
openIssues: 5
closedIssues: 21
watchers: 9
contributors: 12
recentReleases: 0
createdAt: "2017-04-16T08:58:27Z"
lastCommitAt: "2026-11-08T10:40:45Z"
lastReleaseAt: "2025-08-03T13:21:25Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 88
undervaluedScore: 26
maintainers: ["appleboy", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/8c109694a0ce23dd153e1cb7e7a906904c73ba53da50203d9cec1f13f115247e/gin-gonic/autotls"
---

# autotls

Support Let's Encrypt for a Go server application.

## Listening addresses

Use `RunWithOptions(ctx, handler, options...)` to choose both listening addresses
without changing the existing `Run`, `RunWithContext`, or custom-manager APIs:

```go
err := autotls.RunWithOptions(ctx, r,
  autotls.WithHTTPAddr("192.0.2.10:80"),
  autotls.WithHTTPSAddr("192.0.2.10:443"),
  autotls.WithDomains("example.com"),
)
```

Replace the sample IP with an address assigned to the intended interface and the
domain with one you control. For IPv6, use brackets, such as `[2001:db8::10]:443`.
Empty addresses default to `:80` and `:443` (all interfaces). Both listeners use
the supplied addresses, including the HTTPS listener; no package-wide mutable
address setting is needed.

Use `WithManager` instead of `WithDomains` to supply a custom `autocert.Manager`
and host policy. A non-nil manager with non-empty domains is an error. A nil
manager uses the default disk cache and accepts the CA terms of service;
explicitly list domains to limit issuance. `WithTLSConfig` is optional and its
configuration is cloned before installing the manager's certificate callback
and ALPN protocols.

Options are…
