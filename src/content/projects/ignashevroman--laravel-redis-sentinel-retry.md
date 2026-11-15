---
repo: "ignashevroman/laravel-redis-sentinel-retry"
name: "laravel-redis-sentinel-retry"
description: "Redis Sentinel connector for Laravel with automatic failover and retry logic for runtime Redis availability."
readmeQualityOk: true
url: "https://github.com/ignashevroman/laravel-redis-sentinel-retry"
language: "PHP"
languages: ["PHP"]
languagePcts: [100]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 7
recentReleases: 0
createdAt: "2025-04-25T09:03:02Z"
lastCommitAt: "2026-11-15T11:22:23Z"
lastReleaseAt: "2025-08-21T19:29:28Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 78
undervaluedScore: 38
maintainers: ["ignashevroman"]
openGraphImageUrl: "https://opengraph.githubassets.com/8ea7871b2faef9615232aac41a848783c35935203176a5dd8f31b760cae5cef0/ignashevroman/laravel-redis-sentinel-retry"
---

# Laravel Redis Sentinel Retry

## Overview

This package extends the standard Redis integration in Laravel, enabling it to work with Redis Sentinel while providing automatic failover handling and retry logic for transient errors.

It is based on the [Namoshek/laravel-redis-sentinel](https://github.com/Namoshek/laravel-redis-sentinel) package, with enhancements for retries and failover handling.

### Features:
- Connects to Redis through Sentinel.
- Retries on connection failure and failover.
- Uses `PhpRedis` extension for Redis connections.
- Simple configuration with Laravel built-in Redis system.

### Comparison with `namoshek/laravel-redis-sentinel`

| Feature                                | `ignashevroman/laravel-redis-sentinel-retry` | `namoshek/laravel-redis-sentinel` |
|:---------------------------------------|:---------------------------------------------|:----------------------------------|
| Connection via Redis Sentinel          | ✅                                           | ✅                                |
| Easy integration                       | ✅                                           | ✅                                |
| Automatic retry on connection…
