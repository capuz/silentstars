---
repo: "agentgateway/website"
name: "website"
description: "Official website for agentgateway"
readmeQualityOk: true
url: "https://github.com/agentgateway/website"
homepage: "https://agentgateway.dev/"
language: "HTML"
languages: ["HTML"]
languagePcts: [99]
stars: 16
forks: 73
openIssues: 8
closedIssues: 162
watchers: 3
contributors: 72
recentReleases: 3
createdAt: "2025-04-07T18:32:48Z"
lastCommitAt: "2026-11-09T12:01:09Z"
lastReleaseAt: "2026-10-27T23:37:34Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 98
undervaluedScore: 88
maintainers: ["kristin-kronstain-brown", "artberger", "actions-user"]
openGraphImageUrl: "https://opengraph.githubassets.com/9065e17c70d1af5496e06475fedae9b42aec0081e93eaa0fc34e03075288e0de/agentgateway/website"
---

# agentgateway-dev/website Contribution Guide

## Getting Started

Required dependencies:

* `node.js` v18.18.2 or later
* `hugo` extended v0.160.1 or later

To run a local preview:

1. `gh repo clone agentgateway/website`

2. `cd website`

3. `npm install`

4. Start the server with one of these commands:

   | Command | Builds |
   |---|---|
   | `make serve` | Only the doc versions listed in `hugo.yaml` under `params.versions`, which is about three times faster. Use this for most local work. |
   | `make serve VERSION=<linkVersion>` | Only one listed version, such as `VERSION=main` or `VERSION=latest`, for a faster preview. Links into other versions do not resolve locally. |
   | `make serve NO_SEARCH=1` | Same as `make serve`, without the search index. The search box does nothing, but the build is faster. Combine with `VERSION=`. |
   | `make serve FULL=1` or `hugo server` | Every version directory in `content/docs/`, including older versions that are still published but not in the version list. |

5. [`http://localhost:1313`](http://localhost:1313)

## Framework tests

Rendered-HTML quality is checked by a shared Playwright harness that lives in…
