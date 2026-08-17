---
repo: "MGrin/awesome-bb-plugins"
name: "awesome-bb-plugins"
description: "A curated list of community plugins for bb, the agent IDE — the ecosystem's missing directory."
readmeQualityOk: true
url: "https://github.com/MGrin/awesome-bb-plugins"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
topics: ["ai-agents", "awesome", "awesome-list", "bb", "bb-plugin"]
stars: 23
forks: 3
openIssues: 0
closedIssues: 4
watchers: 1
contributors: 5
recentReleases: 0
createdAt: "2026-08-09T12:33:28Z"
lastCommitAt: "2026-08-17T04:18:40Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 40
maintainers: ["MGrin", "Diffuzmetall", "jmporchet"]
openGraphImageUrl: "https://opengraph.githubassets.com/ce6e1713d250350dffa228d4ae074b7af672fd8b44538249ce325be35dcded63/MGrin/awesome-bb-plugins"
---

# Awesome bb plugins [](https://awesome.re)

> Community plugins for [bb](https://getbb.app) — the agent IDE that builds itself.

bb ships 13 official plugins bundled inside the app and [deliberately has no remote
marketplace](https://github.com/get-bb/bb/pull/737), so third-party plugins are found by
word of mouth. This list is the missing directory.

**Two install forms.** Everything here installs from git:

```sh
bb plugin install git:https://github.com/<owner>/<repo>.git@main
```

Some now publish to npm as well — [16 packages carry the `bb-plugin`
keyword](https://www.npmjs.com/search?q=keywords:bb-plugin) as of 2026-08-12 — and where an
entry lists one, that is the shorter route:

```sh
bb plugin install npm:<package>
```

A plugin living in a subdirectory of a monorepo cannot be installed with the `git:` form at
all — bb reads the manifest at the repo root
([get-bb/bb#1097](https://github.com/get-bb/bb/issues/1097)). Use the npm package where the
entry names one, otherwise clone the repo and `bb plugin install <path>`.

([`@bb/plugin-sdk` itself is still unpublished](https://github.com/get-bb/bb/issues/1134);
plugins vendor it. That blocks the SDK, not the plugins.)…
