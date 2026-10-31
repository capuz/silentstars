---
repo: "iap/pstack-hermes"
name: "pstack-hermes"
description: "pstack. Poteto mode for Hermes Agent"
readmeQualityOk: true
url: "https://github.com/iap/pstack-hermes"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["hermes", "hermes-agent", "hermes-plugin", "poteto-mode", "pstack"]
stars: 30
forks: 0
openIssues: 9
closedIssues: 15
watchers: 0
contributors: 1
recentReleases: 7
createdAt: "2026-09-03T13:19:10Z"
lastCommitAt: "2026-10-31T09:54:17Z"
lastReleaseAt: "2026-10-31T05:26:29Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 42
maintainers: ["iap", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/04bb5ec00849d0f088f412b45d4daad52abc47327e23eb8d54a778e05fa58e81/iap/pstack-hermes"
---

# pstack

*The pstack agent method as a **native Hermes Agent plugin installation** —
an unofficial community port of Lauren Tan's
[pstack](https://github.com/cursor/plugins/tree/main/pstack). Not affiliated
with Cursor or Lauren Tan; if you use Cursor, install the original instead.*

*Project slug: `pstack-hermes` · Package: `pstack` (upstream identity, v0.15.5) ·
Upstream pinned at `c47b1284` (MIT).*

**What this project is:** a native hermes plugin — a self-contained
`agent-plugins-v1` package published on the `dist` branch and installed and
updated through `hermes plugins`, plus the converter/validator tooling that
keeps it faithful to upstream. **What it is not:** a Cursor plugin, a fork of
the Cursor plugins repo, or the place to report upstream Cursor issues. Port
problems belong here (Issues); original issues that reproduce without this
port belong upstream.

## Install

Project name: **pstack**. Repository slug: **pstack-hermes**.

The desired command is `hermes plugins install iap/pstack --enable` for
this repository. Hermes does not currently resolve it here; [issue #100](https://github.com/iap/pstack-hermes/issues/100)
tracks support without creating another…
