---
repo: "kospex/kospex"
name: "kospex"
description: "Know your code and know your developers: git analytics, code ownership, key person risk, dependency and supply chain freshness, and tech landscape — from a CLI and local web UI."
readmeQualityOk: true
url: "https://github.com/kospex/kospex"
homepage: "https://kospex.io/"
language: "Python"
languages: ["Python", "HTML"]
languagePcts: [78, 21]
topics: ["behavioral-code-analysis", "bus-factor", "code-intelligence", "code-ownership", "code-quality", "dependency-analysis", "developer-analytics", "developer-tools", "devsecops", "engineering-metrics"]
stars: 9
forks: 5
openIssues: 75
closedIssues: 108
watchers: 0
contributors: 4
recentReleases: 2
createdAt: "2023-08-10T01:24:07Z"
lastCommitAt: "2026-10-26T09:17:52Z"
lastReleaseAt: "2026-10-25T12:57:28Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "fork_magnet"]
healthScore: 91
undervaluedScore: 86
maintainers: ["sabbaticas"]
openGraphImageUrl: "https://opengraph.githubassets.com/7dee3cbcfe8853c8202caa2f28228f9f009ebd8fa6a4d8944cac16b985aab67f/kospex/kospex"
---

# kospex

Kospex maps the **knowledge**, **technology** and **maintenance risk** hiding in your git repositories.

It answers questions that are surprisingly hard to answer at scale:

- *Who still knows this code?*
- *What are we actually built on?*
- *What's quietly going stale?*

Kospex inspects cloned repositories on disk and aggregates everything into a single
queryable database, so you can ask those questions across one repo or thousands.
There are two ways to use it: a **CLI** for scanning, querying and automation, and a
**Web UI** (`kweb`) for exploring the data interactively.

Inspired by the excellent [Mergestat lite](https://github.com/mergestat/mergestat-lite),
whose database structure we use to model data from git repositories.

## Quickstart

Requires Python 3.12+. A virtual environment is optional but strongly recommended.

```bash
# 1. Install
pip install kospex

# 2. Set up ~/kospex (config, database, logs) and ~/code (cloned repos)
kospex init --create --verbose

# 3. Clone a repo — this clones into ~/code/GIT_SERVER/ORG/REPO and syncs it
kgit clone https://github.com/mergestat/mergestat-lite

# 4. Ask some questions
kospex summary
kospex developers -days 90…
