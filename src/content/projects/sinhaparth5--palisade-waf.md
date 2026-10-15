---
repo: "sinhaparth5/palisade-waf"
name: "palisade-waf"
description: "A single-binary Web Application Firewall + reverse proxy for Go, built on Coraza (OWASP CRS) with a built-in admin dashboard. "
readmeQualityOk: true
url: "https://github.com/sinhaparth5/palisade-waf"
homepage: "https://waf.astrareconslabs.com/"
language: "Go"
languages: ["Go"]
languagePcts: [73]
topics: ["coraza", "coraza-waf", "firewall", "security", "tailwindcss", "waf"]
stars: 6
forks: 3
openIssues: 0
closedIssues: 38
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-07-08T09:59:04Z"
lastCommitAt: "2026-10-15T08:33:26Z"
lastReleaseAt: "2026-07-13T20:43:17Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 98
undervaluedScore: 66
maintainers: ["sinhaparth5", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/bc94f41fdd6f1e2209f171325f7d02dc5599c4f4b3d8cac0b1c62ca8eb94aa45/sinhaparth5/palisade-waf"
discussionCount: 0
---

**Palisade** is a web application firewall you can `scp` to a server: a WAF and reverse proxy in a single Go binary, built on [OWASP Coraza](https://github.com/corazawaf/coraza) and the OWASP Core Rule Set, with a built-in admin dashboard. It uses one binary, one SQLite file, CLI flags for bootstrap settings, and dashboard-managed runtime settings. There is no config file, external database, or Node toolchain. Docker is available for local development but is not required.

## Features

- **WAF protection:** Coraza v3 with the OWASP Core Rule Set embedded in the binary. It blocks SQLi, XSS, RCE, path traversal, restricted file access, and known scanner user agents out of the box. Custom `.conf` rules can be loaded on top of CRS.
- **Reverse proxy / multi-app routing:** route by Host header (virtual hosting) or by path prefix, with automatic prefix stripping like nginx `location`, to as many backend apps as you need.
- **IP & country blocking:** manual IP allow/block rules plus GeoIP2-based country blocking (MaxMind GeoLite2), with Cloudflare-aware real-IP extraction and opt-in trusted proxy CIDRs for `X-Forwarded-For` / `X-Real-IP`.
- **TLS:** plain HTTP, automatic Let's Encrypt…
