---
repo: "BetterNCM/BetterNCM-Plugins"
name: "BetterNCM-Plugins"
description: "BetterNCM Plugin Library"
originalDescription: "BetterNCM 的插件库"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/BetterNCM/BetterNCM-Plugins"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [93]
stars: 143
forks: 47
openIssues: 0
closedIssues: 7
watchers: 2
contributors: 28
recentReleases: 0
createdAt: "2022-12-03T07:42:48Z"
lastCommitAt: "2026-07-05T20:55:19Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 100
undervaluedScore: 46
maintainers: ["github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/0914aca81e9948c5e293509201e87098916e582431d9eda4daf00513bc78723c/BetterNCM/BetterNCM-Plugins"
---

# BetterNCM - Plugin Library

This repo is the plugin library for BetterNCM

## Plugin Submission and Update

0. Ensure your plugin meets the [submission guidelines](https://github.com/MicroCBer/BetterNCM/wiki/%E6%8F%92%E4%BB%B6%E5%95%86%E5%BA%97%E4%B8%8A%E6%9E%B6%E6%8F%92%E4%BB%B6%E6%96%B9%E5%BC%8F%E5%8F%8A%E5%87%86%E5%88%99#%E4%B8%8A%E6%9E%B6%E5%87%86%E5%88%99)
1. Fork this repository
2. Create a JSON file in the `plugins-list` directory with the following content

```js
{
    "name": "ExamplePlugin", // Plugin name
    "repo": "BetterNCM/example-plugin", // Plugin repo
    "branch": "main", // Branch name
    "subpath": "/", // Subdirectory of the plugin in the repo (optional)
    "author": "Author" // Author
}
```

3. Submit a PR
4. The script will periodically fetch the version number from the plugin manifest and automatically submit updates and reviews. You can also send `update` in the QQ group to manually trigger the fetching script.
5.

## Note

+ Please ensure that there are no extra files in the plugin directory to be synced to this repository (except for files necessary for the plugin to run and the plugin preview image).
+ Alternatively, create a .betterncm-ignore…
