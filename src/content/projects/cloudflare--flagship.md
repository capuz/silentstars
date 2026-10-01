---
repo: "cloudflare/flagship"
name: "flagship"
description: "OpenFeature compliant provider for Cloudflare's low-latency feature flag platform."
readmeQualityOk: true
url: "https://github.com/cloudflare/flagship"
homepage: "https://www.npmjs.com/package/@cloudflare/flagship"
language: "TypeScript"
languages: ["TypeScript", "Go", "Python"]
languagePcts: [55, 24, 21]
topics: ["feature-flags", "openfeature"]
stars: 71
forks: 11
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 68
recentReleases: 1
createdAt: "2026-04-06T07:30:56Z"
lastCommitAt: "2026-10-01T10:24:04Z"
lastReleaseAt: "2026-08-10T10:57:43Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 82
undervaluedScore: 27
maintainers: ["akshitsinha", "roerohan", "github-actions[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1202595699/0009826f-ce0e-46a1-9d94-fe4c5378ea59"
discussionCount: 1
---

# Cloudflare Flagship

Flagship is Cloudflare's feature flag platform. This repository contains the official Flagship SDKs for application developers who want to evaluate feature flags through [OpenFeature](https://openfeature.dev/).

The TypeScript SDK is recommended for most use cases. It supports HTTP evaluation, browser-side caching, and the native Flagship Workers binding — which skips HTTP entirely and requires no auth token configuration. If you are building on Cloudflare Workers, use the TypeScript SDK with the Workers binding. The Python and Go SDKs are available for server-side applications and support HTTP evaluation only.

## SDKs

| SDK        | Package                                                                      | Runtime                               | Evaluation modes                              | Docs                                 |
| ---------- | ---------------------------------------------------------------------------- | ------------------------------------- | --------------------------------------------- | ------------------------------------ |
| TypeScript | [`@cloudflare/flagship`](https://www.npmjs.com/package/@cloudflare/flagship) | Node.js,…
