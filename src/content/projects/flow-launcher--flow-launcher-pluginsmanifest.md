---
repo: "Flow-Launcher/Flow.Launcher.PluginsManifest"
name: "Flow.Launcher.PluginsManifest"
description: "Community-made plugins and submissions"
url: "https://github.com/Flow-Launcher/Flow.Launcher.PluginsManifest"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["submit-plugin", "flow-launcher-plugins", "plugins", "flow", "hacktoberfest"]
stars: 64
forks: 217
openIssues: 8
closedIssues: 39
watchers: 4
contributors: 221
recentReleases: 0
createdAt: "2020-12-04T10:23:41Z"
lastCommitAt: "2026-07-04T19:20:41Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "funded", "fork_magnet"]
healthScore: 96
undervaluedScore: 59
maintainers: ["jjw24"]
openGraphImageUrl: "https://opengraph.githubassets.com/26ccedcb2fc3c396774f93fa32712cb3e3deb530da1ceadfdb66a26e9c534096/Flow-Launcher/Flow.Launcher.PluginsManifest"
fundingLinks: ["GITHUB:https://github.com/Flow-Launcher", "OPEN_COLLECTIVE:https://opencollective.com/flow-launcher"]
---

# Welcome to Flow Launcher's plugins repository

This repository contains the information for community-made plugins used in [Flow](https://github.com/Flow-Launcher/Flow.Launcher) and how to make new submissions.

## Plugin list

Looking for a list of currently available plugins in Flow? Visit [here](https://www.flowlauncher.com/plugins)

## How to submit your plugin

1. Create a file named `${name}-${uuid}.json` in the [plugins](https://github.com/Flow-Launcher/Flow.Launcher.PluginsManifest/tree/main/plugins) directory.
2. Copy these items from your plugin project's `plugin.json` file:
   - `ID`
   - `Name`
   - `Description`
   - `Author`
   - `Version`
   - `Language`
   - `Website`
3. Add `UrlDownload`, `UrlSourceCode`, and `IcoPath` to the file.
4. It should look like this:
   ```json
   {
     "ID": "Unique GUID from your plugin.json, e.g. 2f4e384e-76ce-45c3-aea2-b16f5e5c328f",
     "Name": "Plugin name, e.g. Hello World Python",
     "Description": "Short description, e.g. Python Hello World example plugin",
     "Author": "Author, e.g. Flow Launcher",
     "Version": "Version from your plugin.json, e.g. 1.0.0",
     "Language": "Programming language, e.g. python",…
