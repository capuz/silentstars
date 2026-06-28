---
repo: "mnaoumov/obsidian-backlink-cache"
name: "obsidian-backlink-cache"
description: "Obsidian plugin that stores backlink cache to speed up app.metadataCache.getBacklinksForFile()."
url: "https://github.com/mnaoumov/obsidian-backlink-cache"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
topics: ["obsidian", "obsidian-md", "obsidian-plugin"]
stars: 51
forks: 0
openIssues: 1
closedIssues: 12
watchers: 3
contributors: 2
recentReleases: 0
createdAt: "2023-09-10T23:34:47Z"
lastCommitAt: "2026-06-28T03:11:16Z"
lastReleaseAt: "2024-07-11T10:05:36Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 93
undervaluedScore: 49
maintainers: ["mnaoumov"]
openGraphImageUrl: "https://opengraph.githubassets.com/ffc621baa649f4954db6e3639baf4c1571a2efcd74edbd1e6fceb166600b61cd/mnaoumov/obsidian-backlink-cache"
fundingLinks: ["BUY_ME_A_COFFEE:https://buymeacoffee.com/mnaoumov"]
discussionCount: 1
---

# Backlink Cache

This is a plugin for [Obsidian](https://obsidian.md/) that maintains backlink cache to speed up undocumented `app.metadataCache.getBacklinksForFile()` function.

It's mostly useful for users with the large vaults. On smaller vaults the difference might be unnoticeable.

It speeds up `Backlinks Pane` performance and plugins that deal with the backlinks.

This plugin the most likely will be useful for other plugin developers that deal with the backlinks.

Its idea came from the [forum](https://forum.obsidian.md/t/store-backlinks-in-metadatacache/67000).

Also the plugin includes canvas into the backlinks for the referenced files. This includes the `app.metadataCache.getBacklinksForFile` function and the `Backlinks Pane`.

## Usage

### Fast version

The provided version is faster than the built-in version. Also the overload to accept `path` was added.

```js
const backlinks1 = app.metadataCache.getBacklinksForFile(file);
const backlinks2 = app.metadataCache.getBacklinksForFile(path);
```

### Safe version

If you want to ensure the all recent file changes are processed and the backlinks are 100% accurate.

```js
const backlinks1 = await…
