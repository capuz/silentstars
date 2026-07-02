---
repo: "wechat-miniprogram/glass-easel"
name: "glass-easel"
description: "Multiple-backend component-based JavaScript framework"
url: "https://github.com/wechat-miniprogram/glass-easel"
language: "TypeScript"
languages: ["TypeScript", "Rust"]
languagePcts: [59, 29]
stars: 309
forks: 44
openIssues: 24
closedIssues: 100
watchers: 7
contributors: 13
recentReleases: 0
createdAt: "2023-02-03T07:05:32Z"
lastCommitAt: "2026-07-02T06:32:38Z"
status: "thriving"
tags: []
healthScore: 90
undervaluedScore: 29
maintainers: ["Tidyzq", "LastLeaf", "SgLy"]
openGraphImageUrl: "https://opengraph.githubassets.com/70bedd7ff3c78208ab9a9357d49cb1cf754da882850ca82407eefe1a0073977c/wechat-miniprogram/glass-easel"
---

</p>

# glass-easel

the new component-based framework for WeChat MiniProgram

[中文版 README](./README-zh_CN.md)

_glass-easel_ is the new implementation of the component management framework for WeChat MiniProgram.
Exactly, it is a JavaScript component-based UI framework, designed to component-based and declarative UI development.

_glass-easel_ is a rewrite of the legacy framework.
It keeps the feature-level compatibilities, while some new features are added.
The framework runtime does not require specific MiniProgram environment,
which means it can be executed in web or other JavaScript environments.

## Major Features

_glass-easel_ allows the same component code executed in different environments, i.e. in both web and MiniProgram environments.

_Backend_ is an important concept, which represents the current environment of the framework runtime.
When executed in browser, the backend is the DOM interface;
in MiniProgram, the backend is the MiniProgram environment interface.

_glass-easel_ contains the full implementation of custom components in MiniProgram, including templates, events, lifetimes, etc.
Furthermore, _glass-easel_ implements some extra practical features, and has…
