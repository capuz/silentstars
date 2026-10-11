---
repo: "BetterNCM/BetterNCM-Plugins"
name: "BetterNCM-Plugins"
description: "Plugin library for BetterNCM"
originalDescription: "BetterNCM 的插件库"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/BetterNCM/BetterNCM-Plugins"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [93]
stars: 150
forks: 62
openIssues: 0
closedIssues: 7
watchers: 2
contributors: 38
recentReleases: 0
createdAt: "2022-12-03T07:42:48Z"
lastCommitAt: "2026-10-11T10:14:17Z"
status: "thriving"
tags: []
healthScore: 99
undervaluedScore: 47
maintainers: ["github-actions[bot]", "solstice23", "Lzhyrifx"]
openGraphImageUrl: "https://opengraph.githubassets.com/61e27420cc7799aa1c06c85bb77d80f0705fc5cd7d57a78ed643012e9c90c48c/BetterNCM/BetterNCM-Plugins"
---

# BetterNCM - Plugin Library

This repo is the plugin library for BetterNCM.

## Plugin Submission and Updates

0. Confirm that your plugin complies with the [listing guidelines](https://github.com/MicroCBer/BetterNCM/wiki/%E6%8F%92%E4%BB%B6%E5%95%86%E5%BA%97%E4%B8%8A%E6%9E%B6%E6%8F%92%E4%BB%B6%E6%96%B9%E5%BC%8F%E5%8F%8A%E5%87%86%E5%88%99#%E4%B8%8A%E6%9E%B6%E5%87%86%E5%88%99)
1. Fork this repository
2. Create a JSON file in the `plugins-list` directory with the following content

```js
{
    "name": "ExamplePlugin", // Plugin name
    "repo": "BetterNCM/example-plugin", // Plugin's repo
    "branch": "main", // Branch name
    "subpath": "/", // Subdirectory of the plugin within the repo (optional)
    "author": "Author" // Author
}
```

3. Submit a PR
4. The script periodically fetches the version number from the plugin's Manifest and automatically submits updates and review requests. You can also send `update` in the QQ group to manually trigger the fetch script.
5.

## Notes

+ Make sure the plugin directory being synced to this repository contains no extra files (other than files required to run the plugin and the plugin preview image).
+ Alternatively, create a…
