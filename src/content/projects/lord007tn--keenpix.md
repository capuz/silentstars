---
repo: "lord007tn/keenpix"
name: "keenpix"
description: "Image optimization CDN with managed cloud and a self-hosted transform engine."
readmeQualityOk: true
url: "https://github.com/lord007tn/keenpix"
homepage: "https://keenpix.com"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [87]
topics: ["avif", "cloudinary-alternative", "image-cdn", "image-optimization", "image-processing", "self-hosted", "sharp", "webp", "imgproxy-alternative"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-05-31T15:34:26Z"
lastCommitAt: "2026-08-19T04:08:28Z"
lastReleaseAt: "2026-06-19T18:28:52Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 89
undervaluedScore: 60
maintainers: ["lord007tn", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/3277905e56bed2bae9332d80b568162ba8400598fb8ad25393984760108f4690/lord007tn/keenpix"
---

# Keenpix

Keenpix is a self-hosted image optimization layer for teams that want the speed of an image CDN without handing the pipeline to another service. Point it at an allowlisted origin, request one URL, and Keenpix fetches the image, transforms it with [sharp](https://sharp.pixelplumbing.com/), caches the variant through memory, Dragonfly, and R2/MaxIO tiers, records analytics, and serves a CDN-ready response.

It is built for operators who want the important parts kept visible: project allowlists, request logs, disk cache behavior, and deployment configuration all live in your own stack.

Don't want to run it yourself? The same engine is available as a managed cloud at [keenpix.com](https://keenpix.com) — one managed-delivery meter, unlimited transforms and team members, and a 14-day free trial. The cloud funds the open-source work.

## What Keenpix ships

- **Transform API** - `GET /img/https://origin.example/photo.jpg?project=...&w=...&fmt=...` resizes, crops, filters, re-encodes, negotiates modern formats, and returns immutable cache headers.
- **No public API keys** - access is gated by each project's domain allowlist. An empty allowlist fails closed with 403, so a fresh…
