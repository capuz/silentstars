---
repo: "dshworks/awesome-dsh-plugins"
name: "awesome-dsh-plugins"
description: "Spam-filtered, open-data registry of DeepSeek Harness (dsh) plugins, bundles, and skills. "
readmeQualityOk: true
url: "https://github.com/dshworks/awesome-dsh-plugins"
homepage: "https://dsh.works/awesome-dsh-plugins/"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
topics: ["awesome-list", "deepseek", "dsh", "ai-agents", "curated-list", "deepseek-harness", "dsh-plugins", "llm", "open-data", "plugin-registry"]
stars: 21
forks: 53
openIssues: 2
closedIssues: 5
watchers: 0
contributors: 52
recentReleases: 0
createdAt: "2026-08-13T17:27:38Z"
lastCommitAt: "2026-10-19T09:14:36Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "fork_magnet"]
healthScore: 94
undervaluedScore: 57
maintainers: ["github-actions[bot]", "lroolle"]
openGraphImageUrl: "https://opengraph.githubassets.com/a2caec4a508c1c4b027c1cf527f1318f5fdcdf893b863f50bb75a843d4fafd98/dshworks/awesome-dsh-plugins"
---

# awesome-dsh-plugins

A spam-filtered, open-data registry of [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness) (`dsh`) plugins, bundles, and skills — 20,769 entries from 12,181 authors across 17 functional areas, every one carrying the file its install path was proven in and the dsh version it was checked against.

**[Browse the reef](https://dsh.works/awesome-dsh-plugins/)** — the same registry as a filterable, sortable gallery.

Most awesome lists are prose. This one is data: [`data/plugins.json`](https://github.com/dshworks/awesome-dsh-plugins/blob/HEAD/data/plugins.json) is the source of truth, this README is rendered from it. Build on the JSON directly:

```sh
curl -s https://dsh.works/awesome-dsh-plugins/plugins.json                 # every entry
curl -s https://dsh.works/awesome-dsh-plugins/stats.json                   # just the counts, ~150 bytes
```

Each entry carries two orthogonal dimensions: `category` is the form factor (bundle, plugin, skill, theme, tool — what dsh docs call things) and `tags` is the functional area (what it actually does). `stars` is the linked repo's GitHub count (refreshed by `scripts/stars.mjs`, display signal only), and…
