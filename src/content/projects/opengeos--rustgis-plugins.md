---
repo: "opengeos/rustgis-plugins"
name: "rustgis-plugins"
description: "Plugins for RustGIS: the SDK, sample plugins and the plugin registry at plugins.rustgis.app"
readmeQualityOk: true
url: "https://github.com/opengeos/rustgis-plugins"
homepage: "https://plugins.rustgis.app"
language: "Python"
languages: ["Python", "Rust"]
languagePcts: [77, 22]
stars: 13
forks: 10
openIssues: 0
closedIssues: 2
watchers: 2
contributors: 14
recentReleases: 0
createdAt: "2026-10-11T15:28:15Z"
lastCommitAt: "2026-11-07T16:12:02Z"
status: "newborn"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 98
undervaluedScore: 61
maintainers: ["giswqs", "DanielD-S", "elpidioassinaturas"]
openGraphImageUrl: "https://opengraph.githubassets.com/7cf4d0fb406af9130a369dab986587954763d2bcd8671681d20aebfc3deab46e/opengeos/rustgis-plugins"
discussionCount: 1
---

# RustGIS Plugins

The plugin registry of [RustGIS](https://github.com/opengeos/RustGIS), published at
**[plugins.rustgis.app](https://plugins.rustgis.app)**, and the plugin SDK.

A RustGIS plugin is a WebAssembly module (or, for a process plugin, a native Rust executable or
Python script) with a `plugin.json` manifest, packaged as a `.rgplugin` file. It adds commands,
ribbon tabs, panels and geoprocessing tools. See
[RustGIS's plugin documentation](https://github.com/opengeos/RustGIS/blob/main/docs/plugins.md)
for the design, the permissions and the ABI.

**This repository holds registry entries, not plugin source.** Each plugin lives in its own
repository and releases its `.rgplugin` there; a pull request here adds or updates one file,
`registry/<id>.json`, which points at that package and its SHA-256. Browse the plugins in the
[catalog](https://plugins.rustgis.app/catalog/).

| Where | What |
|---|---|
| [`registry/`](https://github.com/opengeos/rustgis-plugins/blob/HEAD/registry) | one entry per listed plugin |
| [`blocklist.json`](https://github.com/opengeos/rustgis-plugins/blob/HEAD/blocklist.json) | withdrawn plugins |
|…
