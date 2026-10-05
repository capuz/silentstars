---
repo: "zikojs/ziko"
name: "ziko"
description: "zikojs is a javascript library with a focus on making coding effortless ."
readmeQualityOk: true
url: "https://github.com/zikojs/ziko"
homepage: "https://zikojs-docs.netlify.app/"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [98]
topics: ["javascript", "math", "ui", "zikojs", "morocco", "africa", "framwork", "hyperscript", "boilerplate", "file-based-routing"]
stars: 137
forks: 16
openIssues: 0
closedIssues: 2
watchers: 1
contributors: 3
recentReleases: 1
createdAt: "2021-08-31T08:06:48Z"
lastCommitAt: "2026-10-05T10:47:06Z"
lastReleaseAt: "2026-08-14T10:08:58Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "funded"]
healthScore: 96
undervaluedScore: 49
maintainers: ["zakarialaoui10", "anupamme", "amina-bhr"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/401622710/a6831884-74c3-4938-8b35-e997bcdba0f6"
fundingLinks: ["KO_FI:https://ko-fi.com/zakariaelalaoui"]
discussionCount: 0
---

# ZikoJS

This repository hosts the main packages of the ZikoJS ecosystem. It contains the core framework, essential tooling, and primary integrations.

The ZikoJS ecosystem also includes additional packages that are maintained independently in other repositories.

## install 
```bash
npm i ziko
```

## Quick start
```
nox create-ziko
```

## ziko anatomy
The `ziko` package is the core of ZikoJS. It is organized into a set of focused modules, each providing a fundamental part of the framework.

```mermaid
treeView-beta
    ziko :::highlight ## The core package
        math ## Mathematical utilities and operations
            const
            aithmetic
            mapfun
            utils
        mini-dom ## Lightweight, composable DOM primitives
            mixins
            text
            UINode
            UIElement
        dom ## Full DOM APIs built on top of the DOM primitives
            tags
            web-component
            UIElement
        hooks ## Reactivity and lifecycle hooks
        router
        string
        time
        components ## Built-in UI components and primitives
```

The modules are designed to be focused and composable, allowing applications to…
