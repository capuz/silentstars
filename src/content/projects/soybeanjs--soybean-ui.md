---
repo: "soybeanjs/soybean-ui"
name: "soybean-ui"
description: "A powerful and elegant Vue 3 component system with headless primitives and ready-to-use styled wrappers."
readmeQualityOk: true
url: "https://github.com/soybeanjs/soybean-ui"
homepage: "https://ui.soybeanjs.cn"
language: "TypeScript"
languages: ["TypeScript", "Vue"]
languagePcts: [69, 30]
topics: ["radix-vue", "shadcn-ui", "unocss", "uikit", "vue3"]
stars: 210
forks: 19
openIssues: 4
closedIssues: 47
watchers: 2
contributors: 15
recentReleases: 0
createdAt: "2022-12-20T13:14:46Z"
lastCommitAt: "2026-09-15T08:52:28Z"
lastReleaseAt: "2025-11-19T04:34:38Z"
status: "thriving"
tags: []
healthScore: 98
undervaluedScore: 43
maintainers: ["honghuangdc", "soybeanfe"]
openGraphImageUrl: "https://opengraph.githubassets.com/fe10e2aa651ba0c52e8103fed1a8c02dae547f968f128a902747f0e9f9de67f8/soybeanjs/soybean-ui"
---

</a>
</p>

# SoybeanUI

English | [中文](https://github.com/soybeanjs/soybean-ui/blob/HEAD/README.zh-CN.md)

SoybeanUI is an elegant, modern, accessible and high-quality UI component library with shadcn-like design for Vue 3, built on top of a robust headless foundation. It provides a comprehensive set of accessible, customizable, and performant components.

## 📚 Architecture

SoybeanUI's component runtime uses a strict **two-layer separation**. In the
diagram below, arrows mean “depends on”:

```
Consumer ──> @soybeanjs/ui ──> @soybeanjs/headless
                    │
                    └───────> @soybeanjs/theme

UnoCSS config ──> @soybeanjs/ui-uno
                    └───────> @soybeanjs/theme
```

### Packages

| Package                 | Role                                                                | Current inventory                                    |
| ----------------------- | ------------------------------------------------------------------- | ---------------------------------------------------- |
| **@soybeanjs/headless** | Logic, state, a11y, focus, keyboard interaction, and unstyled parts | 96 directories (94 public groups), 28 composables    |
|…
