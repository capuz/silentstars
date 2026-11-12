---
repo: "ephpm/ephpm"
name: "ephpm"
description: "Run the same PHP app the same way from dev to prod, as one Rust binary. ePHPm embeds real PHP (Zend via FFI) and bundles a web server with auto-TLS, an embedded SQLite-compatible database, a KV cache, a pooling SQL proxy, and gossip clustering, so your code and config run on a single process with no other services to operate."
readmeQualityOk: true
url: "https://github.com/ephpm/ephpm"
homepage: "https://ephpm.dev"
language: "Rust"
languages: ["Rust"]
languagePcts: [92]
topics: ["application-server", "connection-pooling", "drupal", "ffi", "frankenphp", "kv-store", "laravel", "php", "php-fpm", "php8"]
stars: 54
forks: 3
openIssues: 7
closedIssues: 123
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2026-03-29T23:45:57Z"
lastCommitAt: "2026-11-12T04:41:40Z"
lastReleaseAt: "2026-07-27T01:18:02Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 98
undervaluedScore: 42
maintainers: ["luthermonson"]
openGraphImageUrl: "https://opengraph.githubassets.com/d4f290b37d29647ada2300da1bff922ff0823ca8ff8000932172493f52d69db3/ephpm/ephpm"
---

# ePHPm (Embedded PHP Manager)

Designed by [@luthermonson](https://github.com/luthermonson) in Arizona 🌵 Assembled in [Claude Opus](https://claude.ai).

I began my software career using PHP and like many I wasn't skilled enough about systems to know how to improve the speed in my PHP applications and just used common practices in the community to bolt on extra products and use shared memory caches. I moved on from PHP and entered cloud-native and have been writing a lot of go and working on massive products like managed kubernetes services. Now, 10yrs later I'm stretching my legs with AI and combining the last 20yrs of my software career to try and improve the things I didn't like about the bolt on deployments in PHP and combine it with the simplicity I enjoyed producing go binaries.

### What ePHPm is NOT:
Core functionality is an opinionated stack with sane defaults but it's not an opinionated project, everything can be overridden using config and php.ini to tune your PHP applications as they all have their own nuances. ePHPm will never be closed source or under a business license and all repos in the organization will remain 100% MIT, the PHP community is very opensource…
