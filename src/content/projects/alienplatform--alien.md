---
repo: "alienplatform/alien"
name: "alien"
description: "Infrastructure for managed self-hosting"
readmeQualityOk: true
url: "https://github.com/alienplatform/alien"
homepage: "https://alien.dev"
language: "Rust"
languages: ["Rust", "TypeScript"]
languagePcts: [68, 31]
topics: ["ai", "aws", "azure", "google-cloud", "local-first", "on-premise"]
stars: 249
forks: 11
openIssues: 4
closedIssues: 3
watchers: 1
contributors: 6
recentReleases: 0
createdAt: "2026-03-12T17:20:35Z"
lastCommitAt: "2026-10-18T08:16:58Z"
lastReleaseAt: "2026-06-11T14:59:56Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 88
undervaluedScore: 27
maintainers: ["alongubkin", "islo-labs[bot]", "ItamarZand88"]
openGraphImageUrl: "https://opengraph.githubassets.com/90881bcf9bada7f00af66fb9634a9603bdfda70eae121fa325214356f19a5162/alienplatform/alien"
---

# Alien

**Infrastructure for software outside your cloud.**

Some of your product has to run where you don't control the infrastructure: a customer's AWS, Google Cloud or Azure account, their Kubernetes cluster, or a site with no internet access at all. Alien runs that piece there (the data plane) and keeps it connected to your control plane: releases roll out on their own, logs come back, and your backend can call into it, all over connections the environment opens outbound.

The manager is the center of it. Run it yourself from this repository, or let [alien.dev](https://alien.dev) run it for you. The same `alien` CLI works with both.

## Quickstart

Install the CLI:

```bash
curl -fsSL https://alien.dev/install | sh
```

### With alien.dev

```bash
alien login
alien init && cd alien
alien dev        # run the app locally, no cloud account needed
alien release    # build and publish a release
alien onboard acme --platforms kubernetes
```

The [Quickstart](https://alien.dev/docs/quickstart) walks through it.

### With your own manager

Start a manager. It prints an admin API key the first time:

```bash
docker run -d --name alien-manager -p 8080:8080 -v alien-data:/data \
  -e…
