---
repo: "dmaiken/konifer"
name: "konifer"
description: "A service for managing your application's images. Designed to fit your existing backend. Validate, store, transform, and manage images throughout their lifecycle."
readmeQualityOk: true
url: "https://github.com/dmaiken/konifer"
homepage: "https://konifer.io/"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [84]
topics: ["kotlin", "ktor", "libvips", "s3", "self-hosted", "postgresql", "docker", "image-api", "image-optimization", "image-processing"]
stars: 21
forks: 1
openIssues: 1
closedIssues: 90
watchers: 3
contributors: 4
recentReleases: 1
createdAt: "2025-04-05T21:33:43Z"
lastCommitAt: "2026-11-05T00:21:30Z"
lastReleaseAt: "2026-08-08T02:37:24Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 99
undervaluedScore: 68
maintainers: ["dependabot[bot]", "dmaiken", "ryanbolesta"]
openGraphImageUrl: "https://opengraph.githubassets.com/18476cfc474afc2d936cd4f38f13d63a7def32226b698a1b8e7f77fec0f43b13/dmaiken/konifer"
discussionCount: 0
---

# Konifer

Konifer is a self-hosted image backend for applications and vision pipelines. Upload an image once, then request a
WebP preview for your application or a resized raw pixel buffer for your inference worker. Define reusable
transformation profiles and manage storage, validation, and deletion through paths that match your application.

[10-minute quickstart](https://konifer.io/docs/start-here/getting-started) ·
[Pixels for inference](https://konifer.io/docs/guides/guides-pixels-for-inference) ·
[Documentation](https://konifer.io/) ·
[Performance report](https://dmaiken.github.io/konifer/performance/report/)

Konifer handles the image lifecycle. Put a CDN in front of it for delivery. If all you need is on-demand resizing,
[imgproxy](https://imgproxy.net/) or whatever your CDN offers may be a better fit.

## Why I built it

I've seen the same story on several teams: someone needs to store a product photo, then another feature needs
thumbnails, then a third needs different upload limits. Before long, image handling is spread across S3 buckets,
Lambdas, queues, and services. Konifer puts those jobs behind one API while letting each part of your application keep
its own rules.…
