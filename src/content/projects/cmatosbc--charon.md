---
repo: "cmatosbc/charon"
name: "charon"
description: "Throttling and rate limiting in a cohesive and simple way."
readmeQualityOk: true
url: "https://github.com/cmatosbc/charon"
language: "PHP"
languages: ["PHP"]
languagePcts: [100]
topics: ["laravel", "php-library", "php-rest-api", "php81", "symfony", "throttling", "wordpress", "wordpress-rest-api"]
stars: 6
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 1
createdAt: "2024-11-27T11:20:37Z"
lastCommitAt: "2026-11-19T05:00:17Z"
lastReleaseAt: "2026-11-19T05:09:11Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 90
undervaluedScore: 39
maintainers: []
openGraphImageUrl: "https://repository-images.githubusercontent.com/894993609/de60aa1b-d0c2-44a8-81ea-b3f2db57edc9"
---

# Charon

A simple yet powerful PSR-15 compliant rate limiting middleware for PHP applications. Charon provides an effective way to protect your applications from abuse through configurable request throttling.

## Features

- 🚀 PSR-15 Middleware compliant
- 💾 PSR-16 Simple Cache support for storage
- 🏭 PSR-17 Response Factory for throttle responses (works with any PSR-7 implementation)
- 🕐 PSR-20 Clock support for testable time handling
- 📝 Optional PSR-3 Logger integration
- ⚡ Efficient rate limiting using fixed window counters
- 🔒 IP or IP+User-Agent based throttling, or bring your own signature resolver
- � Trusted proxy support for correct client IP resolution (X-Forwarded-For, IPv4 CIDR)
- ⏭️ Bypass callable for exempt requests (health checks, internal traffic)
- �🎯 Configurable rate limits and time windows
- 📊 IETF `RateLimit-*` headers plus legacy `X-RateLimit-*` for compatibility
- 📄 RFC 9457 `application/problem+json` error responses
- 🚫 Automatic blacklisting for repeat offenders, with optional TTL
- 🧩 Standalone `RateLimiter` usable without the middleware, with atomic counter support

## Installation

You can install the package via composer:
