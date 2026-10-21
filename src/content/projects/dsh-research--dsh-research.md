---
repo: "dsh-research/dsh-research"
name: "dsh-research"
description: "The research plugin market for DeepSeek Harness (dsh): a Research plugins page in Settings that installs a curated, hand-read catalog into the profile you are running. Catalog at dsh-research.com."
readmeQualityOk: true
url: "https://github.com/dsh-research/dsh-research"
homepage: "https://dsh-research.com"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
topics: ["academic", "ai4scholar", "deepseek-harness", "dsh-plugin", "research", "skills"]
stars: 10
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-08-16T17:03:20Z"
lastCommitAt: "2026-10-21T08:49:11Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 72
undervaluedScore: 35
maintainers: ["literaf"]
openGraphImageUrl: "https://opengraph.githubassets.com/d6e9083eff90613826341b73808ff5c272d18f899c1a92bc56cb91a8005bfe72/dsh-research/dsh-research"
---

# Research plugins, from the Plugins page

English | [中文](https://github.com/dsh-research/dsh-research/blob/HEAD/README_CN.md)

A curated market for literature search, reference management, writing and review plugins. Open **Plugins → Installed → dsh-research**, or use **Settings → Research plugins**. Each Install button adds the selected plugin to the profile you are running.

```sh
dsh plugin --profile web add dsh-research
```

Restart DSH Desktop or `dsh web`, then open **Plugins → Installed → dsh-research**. **Settings → Research plugins** remains available, including on older Harness versions.

## dsh-research.com

The catalog behind the panel lives at **[dsh-research.com](https://dsh-research.com)** — the same list, in a browser, at [/plugins](https://dsh-research.com/plugins/). Each entry says what the plugin does and where it stops, and there is a walkthrough that goes from an empty machine to a finished talk. The site is generated from one JSON file; the panel fetches that same file, so the two can never drift apart.

## Why this exists

The official market already installs anything in the community registry, and does it well. What it cannot do is tell a researcher which…
