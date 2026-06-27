---
repo: "vekexasia/varco"
name: "varco"
description: "Externalize a slice of Home Assistant"
url: "https://github.com/vekexasia/varco"
language: "JavaScript"
languages: ["JavaScript", "Python", "TypeScript"]
languagePcts: [36, 32, 32]
stars: 15
forks: 0
openIssues: 12
closedIssues: 74
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-06-07T12:56:49Z"
lastCommitAt: "2026-06-27T06:23:41Z"
lastReleaseAt: "2026-06-21T12:52:32Z"
status: "thriving"
tags: ["solo_builder", "release_machine", "under_pressure"]
healthScore: 87
undervaluedScore: 52
maintainers: ["vekexasia"]
openGraphImageUrl: "https://opengraph.githubassets.com/0b0667ef250539eff44f34656b66dc533ea1d0433db7440c08526aa01c7203ff/vekexasia/varco"
---

# Varco

Varco lets external apps use Home Assistant without receiving a Home Assistant token and without requiring Home Assistant to be publicly reachable.

A consumer asks for a narrow grant. The Home Assistant owner approves or rejects it in the Varco panel. Home Assistant then enforces that stored grant on every read, subscription, history query, camera snapshot, and service call.

## Video overview

I made this short video explaining what Varco is and how it works.

## Start

> **Deploy in 10 minutes:** [vekexasia.github.io/varco/getting-started/quickstart](https://vekexasia.github.io/varco/getting-started/quickstart/)

- Home Assistant integration: install through HACS as a custom repository (`https://github.com/vekexasia/varco`) or copy `custom_components/varco`.
- Browser client: `npm install @varco/client`.
- Bridge: use the default public bridge (`wss://varco-bridge.andreabaccega.com`) unless you need to self-host on Cloudflare or with the Node in-memory bridge.
- After every Varco update, restart Home Assistant and hard-refresh `/varco` so the Python integration and panel bundle are reloaded.

Documentation:…
