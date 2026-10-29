---
repo: "realsee-developer/vreo"
name: "vreo"
description: "Vreo (short for VR Video) is a 3D spatial script player built with React on top of Realsee's 3D rendering engine Five and its UI component library."
originalDescription: "Vreo (VR Video 缩写) 是基于如视三维渲染引擎 Five 和 用户界面构建库 React 实现的如视 3D 空间剧本播放器。"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/realsee-developer/vreo"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [97]
topics: ["vr", "realsee", "vreo"]
stars: 34
forks: 11
openIssues: 0
closedIssues: 1
watchers: 5
contributors: 9
recentReleases: 1
createdAt: "2021-12-01T10:43:26Z"
lastCommitAt: "2026-10-29T10:21:20Z"
lastReleaseAt: "2026-09-21T03:47:48Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 89
undervaluedScore: 40
maintainers: ["sansi-lcj"]
openGraphImageUrl: "https://opengraph.githubassets.com/c5c6fb30a8d93aaf3065e54e65e65a1be0cc0c4d97d492f16a49a63d20effa2b/realsee-developer/vreo"
---

# @realsee/vreo Monorepo

Vreo (short for VR Video) is a 3D spatial script player built with React on top of Realsee's 3D rendering engine Five and its UI component library.

## Project Structure

```
vreo/
├── packages/
│   ├── vreo/           # Main package, published to npm
│   └── test-app/       # Test app, imports the package the way a real npm package is imported
├── package.json        # Monorepo root config
├── pnpm-workspace.yaml # pnpm workspace config
└── README.md
```

## Development Guide

### Install dependencies

```bash
pnpm install
```

### Build the main package

```bash
pnpm build
```

This builds the `packages/vreo` package and generates the `lib` directory.

### Development and testing

#### Start the main package dev server
```bash
pnpm dev:vreo
```

#### Start the test app
```bash
pnpm dev:test
```

The test app starts at http://localhost:3088 and provides the following pages:
- http://localhost:3088/ - Basic player test
- http://localhost:3088/index-react.html - React component test
- http://localhost:3088/index-react-dynamic.html - Dynamic loading test
- http://localhost:3088/index-react-partial.html - Partial loading test
-…
