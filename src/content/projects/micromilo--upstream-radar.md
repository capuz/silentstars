---
repo: "MicroMilo/upstream-radar"
name: "upstream-radar"
description: "Always-on compatibility testing for DeepSeek Harness plugins: exact releases, isolated runners, and fixable upstream issues."
readmeQualityOk: true
url: "https://github.com/MicroMilo/upstream-radar"
homepage: "https://github.com/MicroMilo/upstream-radar"
language: "TypeScript"
languages: ["TypeScript", "JavaScript"]
languagePcts: [80, 20]
topics: ["deepseek-harness", "dependency-security", "osv", "supply-chain-security", "typescript", "vulnerability-monitoring", "cordis", "deepseek", "dsh-plugin", "agent-security"]
stars: 8
forks: 1
openIssues: 1
closedIssues: 18
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-08-14T07:55:24Z"
lastCommitAt: "2026-08-25T04:09:36Z"
lastReleaseAt: "2026-08-15T16:38:09Z"
status: "newborn"
tags: ["hidden_gem", "release_machine"]
healthScore: 99
undervaluedScore: 65
maintainers: ["MicroMilo"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1333939452/87a6804c-cf5f-47d0-8893-da9c0ae62f41"
discussionCount: 1
---

<h1 align="center">Upstream Radar</h1>

</p>

Upstream Radar continuously checks the relationship between an exact published
DSH plugin, its DSH host, and its dependency graph. When a DSH or plugin release
changes that relationship, Radar shows what changed, what was actually observed,
and what a maintainer can fix.

It is built for the [DeepSeek Harness (DSH)](https://github.com/deepseek-ai/deepseek-harness)
plugin ecosystem. A static review is evidence about a package; an isolated
runtime review is evidence about one exact `plugin × DSH × Node/profile` pair.
Neither is presented as a timeless compatibility badge or a security certificate.

> Listed by the DSH ecosystem in
> [awesome-dsh-plugin](https://github.com/awesome-dsh-plugin/awesome-dsh-plugin/blob/main/data/plugins/MicroMilo__upstream-radar.yml),
> [awesome-deepseek-harness](https://github.com/0xsline/awesome-deepseek-harness), and
> [awesome-deepseek-harness-plugins](https://github.com/imsai-sh/awesome-deepseek-harness-plugins/blob/main/catalog/plugins/micromilo--upstream-radar.json).

## The problem

A source repository can be green while the package users install is not ready
for the current DSH host:

- the README…
