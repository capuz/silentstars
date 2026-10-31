---
repo: "ephpm/ephpm"
name: "ephpm"
description: "Run the same PHP app the same way from dev to prod, as one Rust binary. ePHPm embeds real PHP (Zend via FFI) and bundles a web server with auto-TLS, an embedded SQLite-compatible database, a KV cache, a pooling SQL proxy, and gossip clustering, so your code and config run on a single process with no other services to operate."
readmeQualityOk: true
url: "https://github.com/ephpm/ephpm"
homepage: "https://ephpm.dev"
language: "Rust"
languages: ["Rust"]
languagePcts: [91]
topics: ["application-server", "connection-pooling", "drupal", "ffi", "frankenphp", "kv-store", "laravel", "php", "php-fpm", "php8"]
stars: 54
forks: 3
openIssues: 8
closedIssues: 118
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2026-03-29T23:45:57Z"
lastCommitAt: "2026-10-31T02:00:24Z"
lastReleaseAt: "2026-07-27T01:18:02Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 98
undervaluedScore: 41
maintainers: ["luthermonson"]
openGraphImageUrl: "https://opengraph.githubassets.com/a896109b009f3b181a103f742cc13c043bfa4309dff0702f598d335def8d7650/ephpm/ephpm"
---

# ePHPm (Embedded PHP Manager)

Designed by [@luthermonson](https://github.com/luthermonson) in Arizona 🌵 Assembled in [Claude Opus](https://claude.ai).

I began my software career using PHP and like many I wasn't skilled enough about systems to know how to improve the speed in my PHP applications and just used common practices in the community to bolt on extra products and use shared memory caches. I moved on from PHP and entered cloud-native and have been writing a lot of go and working on massive products like managed kubernetes services. Now, 10yrs later I'm stretching my legs with AI and combining the last 20yrs of my software career to try and improve the things I didn't like about the bolt on deployments in PHP and combine it with the simplicity I enjoyed producing go binaries.

### What ePHPm is NOT:
Core functionality is an opinionated stack with sane defaults but it's not an opinionated project, everything can be overridden using config and php.ini to tune your PHP applications as they all have their own nuances. ePHPm will never be closed source or under a business license and all repos in the organization will remain 100% MIT, the PHP community is very opensource…
