---
repo: "kubestellar/console"
name: "console"
description: "World's first fully integrated and fully Automated Kubernetes management and orchestration solution"
url: "https://github.com/kubestellar/console"
homepage: "https://console.kubestellar.io"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [77]
stars: 119
forks: 126
openIssues: 12
closedIssues: 9600
watchers: 0
contributors: 75
recentReleases: 0
createdAt: "2026-01-16T06:32:19Z"
lastCommitAt: "2026-06-27T00:48:13Z"
lastReleaseAt: "2026-01-27T05:19:20Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "fork_magnet"]
healthScore: 100
undervaluedScore: 43
maintainers: ["clubanderson", "kubestellar-hive[bot]", "Jayant-kernel"]
openGraphImageUrl: "https://opengraph.githubassets.com/d580d86ebbf03b70eaa453d1e15622f17ce61f89e22b470afc6f6d075f7c1d40/kubestellar/console"
---

# KubeStellar Console

AI-powered multi-cluster Kubernetes dashboard with guided install missions for 250+ CNCF projects.

[Contributing](CONTRIBUTING.md)

## Try it now (no install)

The fastest way to evaluate the console is the **hosted version** — no Kubernetes cluster, no install, no configuration. Demo data is built in:

> 👉 **[console.kubestellar.io](https://console.kubestellar.io)**

The hosted demo is a self-contained showcase: it serves canned demo data and intentionally **does not** talk to a local agent (`LOCAL_AGENT_HTTP_URL` is disabled in the Netlify build, so the browser cannot reach a kc-agent on your laptop). Use it to explore the UI, browse missions, and test cards without touching your machine. To work against your **own** clusters or use AI features with your own keys, you need to self-host the console — see the next section.

## Which path do I need?

| I want to… | What to do | Need a cluster? | Need to install anything? |
|---|---|---|---|
| Explore the UI / evaluate the product | [console.kubestellar.io](https://console.kubestellar.io) | no | no |
| Connect the console to **my own** clusters | [**Self-host**](#local-install-self-host) the console **and**…
