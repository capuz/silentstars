---
repo: "Sogni-AI/sogni-client"
name: "sogni-client"
description: "Sogni API wrapper for browsers and Node.js"
readmeQualityOk: true
url: "https://github.com/Sogni-AI/sogni-client"
language: "TypeScript"
languages: ["TypeScript", "JavaScript"]
languagePcts: [57, 43]
stars: 17
forks: 8
openIssues: 0
closedIssues: 1
watchers: 2
contributors: 7
recentReleases: 0
createdAt: "2024-11-04T08:42:10Z"
lastCommitAt: "2026-11-04T02:57:48Z"
lastReleaseAt: "2025-03-25T17:17:26Z"
status: "thriving"
tags: []
healthScore: 99
undervaluedScore: 71
maintainers: ["fishmongr", "semantic-release-bot", "krunkosaurus"]
openGraphImageUrl: "https://opengraph.githubassets.com/bd9fb1ff8b5ca2508d604954736ee3e8da0cc88f0d8384a3186f37350e9579fc/Sogni-AI/sogni-client"
---

# Sogni SDK for JavaScript & Node.js

This library provides an easy way to interact with the [Sogni Supernet](https://www.sogni.ai/supernet) - a DePIN protocol for creative AI inference. It is written in TypeScript and can be used
in both TypeScript and JavaScript projects such as backend Node.js and browser environments.

Behind the scenes this SDK uses a WebSocket connection for communication between clients, server, and workers. It harnesses an event-based API to interact with Supernet to make things super efficient.

## Optional Priority mode

Paid Unlimited members can opt a media generation into earlier Fast queue placement with
`priorityMode: true`, `network: 'fast'`, `tokenType: 'spark'`, and
`billingMode: 'subscription'` in `projects.create()`. It uses 1.5× the usual daily and
monthly usage credits, behind Premium Spark priority. Existing caps and concurrency stay
the same. It changes queue placement, not render speed or quality; no GPU or start time
is guaranteed. Leave it off to preserve usage. Pass `priorityMode` to image, video and
audio estimate helpers to include the weighted share in `dailyFairUsePct`.

Omitting the option preserves standard behavior. Trials,…
