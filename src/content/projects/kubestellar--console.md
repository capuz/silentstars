---
repo: "kubestellar/console"
name: "console"
description: "World's first fully integrated and fully Automated Kubernetes management and orchestration solution"
readmeQualityOk: true
url: "https://github.com/kubestellar/console"
homepage: "https://console.kubestellar.io"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [78]
stars: 120
forks: 126
openIssues: 24
closedIssues: 9965
watchers: 0
contributors: 77
recentReleases: 0
createdAt: "2026-01-16T06:32:19Z"
lastCommitAt: "2026-07-08T05:42:17Z"
lastReleaseAt: "2026-01-27T05:19:20Z"
status: "thriving"
tags: ["needs_contributors", "fork_magnet"]
healthScore: 100
undervaluedScore: 43
maintainers: ["clubanderson", "kubestellar-hive[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/99e4e2f269e2dc70f23d76fd82fd4b2ee6588984dcb37f1fc647872654738c51/kubestellar/console"
---

# KubeStellar Console

AI-powered multi-cluster Kubernetes dashboard with guided install missions for 250+ CNCF projects.

[Contributing](https://github.com/kubestellar/console/blob/HEAD/CONTRIBUTING.md)

## Try it now (no install)

The fastest way to evaluate the console is the **hosted version** — no Kubernetes cluster, no install, no configuration. Demo data is built in:

> 👉 **[console.kubestellar.io](https://console.kubestellar.io)**

The hosted demo is a self-contained showcase: it serves canned demo data and intentionally **does not** talk to a local agent (`LOCAL_AGENT_HTTP_URL` is disabled in the Netlify build, so the browser cannot reach a kc-agent on your laptop). Use it to explore the UI, browse missions, and test cards without touching your machine. To work against your **own** clusters or use AI features with your own keys, you need to self-host the console — see the next section.

## Which path do I need?

| I want to… | What to do | Need a cluster? | Need to install anything? |
|---|---|---|---|
| Explore the UI / evaluate the product | [console.kubestellar.io](https://console.kubestellar.io) | no | no |
| Connect the console to **my own** clusters |…
