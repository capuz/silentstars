---
repo: "palasthotel/blockX"
name: "blockX"
description: "WordPress-Plugin and npm package to make Gutenberg-block-development easier."
readmeQualityOk: true
url: "https://github.com/palasthotel/blockX"
homepage: "https://wordpress.org/plugins/blockx/"
language: "PHP"
languages: ["PHP", "JavaScript"]
languagePcts: [58, 38]
topics: ["gutenberg-blocks", "npm-package", "wordpress", "wordpress-plugin", "dx"]
stars: 6
forks: 2
openIssues: 0
closedIssues: 30
watchers: 10
contributors: 4
recentReleases: 0
createdAt: "2020-10-08T15:42:19Z"
lastCommitAt: "2026-10-15T07:58:38Z"
lastReleaseAt: "2021-06-23T14:29:24Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "community_watch"]
healthScore: 92
undervaluedScore: 75
maintainers: ["JanaME", "palasthotel-release-bot[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/302388213/9325b644-8df1-4611-9412-4835c5b8e771"
postedAt: "2026-10-14T09:04:45.239Z"
---

# BlockX

This is a npm package as well as a WordPress plugin for easier Gutenberg Block development. You can add configurable boxes and templates without any javascript code. Everything can be configured and rendered in PHP. But you can also use `@palasthotel/blockx` package to add react editor views for your blockx blocks or to provide custom editor widgets.

- **WordPress.org:** https://wordpress.org/plugins/blockx/
- **npm:** [`@palasthotel/blockx`](https://www.npmjs.com/package/@palasthotel/blockx)
- **Changelogs:** [wp-plugin/CHANGELOG.md](https://github.com/palasthotel/blockX/blob/HEAD/wp-plugin/CHANGELOG.md) and
  [npm-package/CHANGELOG.md](https://github.com/palasthotel/blockX/blob/HEAD/npm-package/CHANGELOG.md) - release-please owns both, so
  do not edit them by hand

## Repository layout

| Path | What it is |
|---|---|
| `wp-plugin/public/` | exactly what ships to wordpress.org |
| `wp-plugin/src/` | sources of the editor bundle, built to `wp-plugin/public/assets/dist/` (not in the repository) |
| `npm-package/` | the `@palasthotel/blockx` library the editor bundle and your own editor scripts import |
| `assets/` | media for the wordpress.org plugin page - not part of…
