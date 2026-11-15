---
repo: "hashiiiii/PrefabLens"
name: "PrefabLens"
description: "Semantic diffs and merges for UnityYAML assets."
readmeQualityOk: true
url: "https://github.com/hashiiiii/PrefabLens"
homepage: "https://prefablens.hashiiiii.workers.dev/"
language: "Zig"
languages: ["Zig"]
languagePcts: [74]
topics: ["cli", "code-review", "unity", "unity3d", "zig", "chrome-extension", "gamedev", "unity-editor", "unity-3d"]
stars: 36
forks: 3
openIssues: 4
closedIssues: 115
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-06-28T15:34:39Z"
lastCommitAt: "2026-11-15T11:24:36Z"
lastReleaseAt: "2026-07-17T14:01:40Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 98
undervaluedScore: 43
maintainers: ["hashiiiii", "renovate[bot]", "unidog-bot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/af3b7a3c3feef778c069165c5a051af9cbea1e936524ea3bc606b329fbb799fc/hashiiiii/PrefabLens"
---

# PrefabLens

PrefabLens shows changes to GameObjects, components, and fields in UnityYAML assets.  
Review diffs in GitHub pull requests, the Unity Editor, or the terminal.  
Use the CLI to merge conflicting assets.

Try the [live demo](https://prefablens.hashiiiii.workers.dev/).

| Use case | Install | Guide |
| --- | --- | --- |
| Review a GitHub pull request | [Chrome extension](#chrome-extension) | [Authentication, supported files, and development](https://github.com/hashiiiii/PrefabLens/blob/HEAD/docs/extension.md) |
| Review changes in a Unity project | [Unity Editor package](#unity-editor) | [CLI setup, window controls, and development](https://github.com/hashiiiii/PrefabLens/blob/HEAD/docs/editor.md) |
| Compare or merge assets locally | [CLI](#cli) | [Commands, merge behavior, and key bindings](https://github.com/hashiiiii/PrefabLens/blob/HEAD/docs/cli.md) |

Assets must use Unity's text serialization format.  
Binary assets do not produce semantic diffs.  
In Unity's Editor settings, set **Asset Serialization > Mode** to **Force Text** for text serialization.

## Chrome extension

Install from the [Chrome Web…
