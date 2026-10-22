---
repo: "openkb-app/openkb"
name: "openkb"
description: "Main app repository."
readmeQualityOk: true
url: "https://github.com/openkb-app/openkb"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [80]
stars: 7
forks: 1
openIssues: 1
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 4
createdAt: "2026-09-22T09:30:17Z"
lastCommitAt: "2026-10-22T08:51:54Z"
lastReleaseAt: "2026-10-01T08:42:32Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 77
undervaluedScore: 46
maintainers: ["fago", "dependabot[bot]", "drubot"]
openGraphImageUrl: "https://opengraph.githubassets.com/0b6776086718490aa7ff0b81924f56e6c811ff4849e978e3e51e9aaeba855e8d/openkb-app/openkb"
---

# OpenKB

**The open knowledge base for people and AI agents.** Markdown pages, collaboratively edited, reviewed before they publish, and readable by people and by agents through the same store.

Website, product overview and documentation: **[openkb.app](https://openkb.app)**.

## Try it in five minutes

Two files into an empty directory, and the published images do the rest. Docker with the compose plugin (2.24 or newer) is the only prerequisite.

```sh
mkdir openkb && cd openkb && curl -fsSLO "https://raw.githubusercontent.com/openkb-app/openkb/v1.0.0-alpha1/quickstart/{docker-compose.yml,.env}"
docker compose up -d
```

The `drupal` container installs the site on its first boot — a few minutes, with a "setting up" page until it is through. Then open <http://localhost:8642> and sign in as `admin` / `admin`. `docker compose down -v` throws the stack away. [`quickstart/README.md`](https://github.com/openkb-app/openkb/blob/HEAD/quickstart/README.md) has the walk-through: what to try, the ports, the image tag, and why an evaluation stack runs OpenSearch without memory mapping. It is for evaluation only. A real install is [Installation](#installation) below.

## What you get

-…
