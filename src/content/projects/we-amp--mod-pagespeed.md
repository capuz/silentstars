---
repo: "We-Amp/mod_pagespeed"
name: "mod_pagespeed"
description: "mod_pagespeed web-server modules for Apache, nginx, IIS and Envoy: automatic page and image optimization, actively maintained by We-Amp. Apache-2.0."
readmeQualityOk: true
url: "https://github.com/We-Amp/mod_pagespeed"
homepage: "https://modpagespeed.com"
language: "C++"
languages: ["C++"]
languagePcts: [69]
topics: ["apache", "apache-module", "cpanel", "cpp", "envoy", "iis", "image-optimization", "minification", "mod-pagespeed", "nginx"]
stars: 25
forks: 10
openIssues: 62
closedIssues: 50
watchers: 2
contributors: 35
recentReleases: 2
createdAt: "2023-06-21T09:37:04Z"
lastCommitAt: "2026-10-24T20:37:35Z"
lastReleaseAt: "2026-10-22T02:40:01Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 84
undervaluedScore: 66
maintainers: ["oschaaf", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/780e65ad644b643c274549487bef29b612d60337ea6db57e5622df5c5ff22fc4/We-Amp/mod_pagespeed"
discussionCount: 0
---

# mod_pagespeed

Web performance optimization middleware that automatically applies 40+
optimization filters to web pages, including image compression/resizing,
CSS/JS minification, cache extension, and more.

Originally created by Google, now maintained by [We-Amp](https://we-amp.com).

## Platforms

| Platform | Module | Status |
|----------|--------|--------|
| **Apache 2.4+** | `mod_pagespeed.so` | Stable |
| **Nginx (per-distro stock)** | `ngx_pagespeed_module.so` | Stable |
| **Envoy** | `pagespeed_filter.so` / `envoy_pagespeed` | Experimental |
| **IIS 10+** | `pagespeed_iis.dll` | Stable |

## Features

- Image optimization: compression, resizing, format conversion (WebP)
- CSS & JavaScript: concatenation, minification, inlining
- Cache extension, domain sharding, domain rewriting
- Deferred loading of JavaScript and image resources
- DNS prefetching, preload hints
- 40+ configurable optimization filters
- Security patches for the CVEs that accumulated against the archived
  upstream, hardened builds, and active supply-chain management

## Quick Start

### Pre-built packages

All packages and installers are on the
[downloads…
