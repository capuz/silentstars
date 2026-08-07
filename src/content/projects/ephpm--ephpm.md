---
repo: "ephpm/ephpm"
name: "ephpm"
description: "Rust alternative to nginx + PHP-FPM, FrankenPHP, RoadRunner etc. Embeds Zend PHP directly via FFI in a single static binary. 100% PHP compatibility and drop-in replacement for any PHP project with clustering and built-in shared KV store and SQL connection pooling."
readmeQualityOk: true
url: "https://github.com/ephpm/ephpm"
homepage: "https://ephpm.dev"
language: "Rust"
languages: ["Rust"]
languagePcts: [92]
topics: ["application-server", "connection-pooling", "drupal", "ffi", "frankenphp", "kv-store", "laravel", "php", "php-fpm", "php8"]
stars: 30
forks: 3
openIssues: 7
closedIssues: 17
watchers: 1
contributors: 3
recentReleases: 10
createdAt: "2026-03-29T23:45:57Z"
lastCommitAt: "2026-08-07T05:15:36Z"
lastReleaseAt: "2026-07-27T01:18:02Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 93
undervaluedScore: 47
maintainers: ["luthermonson", "ephpm-claude[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/9462eb62d4f8741cdbd70a5103f6250309449614d01f8fb7538c7a5c3e6b58cf/ephpm/ephpm"
---

# ePHPm — Embedded PHP Manager

Run PHP applications without the infrastructure. No PHP-FPM, no MySQL server, no Redis, no reverse proxy, no certbot. One binary, one config file. Drop in WordPress or Laravel and go. When you need more, it's already built in: MySQL connection pooling, read/write splitting, a Redis-compatible KV store, clustered SQLite with automatic failover, TLS, and Prometheus metrics. One binary from `localhost` to production — same runtime in development, CI, staging, and prod. No environment drift, no deployment surprises.

Designed by [@luthermonson](https://github.com/luthermonson) in Arizona 🌵 Assembled in [Claude Opus 4.6](https://claude.ai).

## Why ePHPm?

How ePHPm compares to other ways of running PHP with a webserver.

| | ePHPm | FrankenPHP | RoadRunner | Swoole | Apache + mod_php | Nginx + php-fpm |
|---|---|---|---|---|---|---|
| Language | Rust | Go (CGO) | Go | PHP + C | C | C |
| Dispatch to PHP | <1 μs (in-process C call) | ~2–3 μs (CGO crossings) | ~10–50 μs (IPC to worker) | <1 μs (in-process) | <1 μs (in-process) | ~50–100 μs (FastCGI socket) |
| Worker mode (boot app once) | Built-in (`mode = "worker"`; native Octane + WordPress adapters)…
