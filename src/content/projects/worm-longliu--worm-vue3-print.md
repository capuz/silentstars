---
repo: "worm-longliu/worm-vue3-print"
name: "worm-vue3-print"
description: "An open-source monorepo (npm workspaces) for a Vue 3 visual print template designer, template expression engine, and isomorphic rendering pipeline. Design print templates by drag and drop, with data binding, expression evaluation, and pagination layout. Browser previews and backend output stay consistent. Implemented with pure Vue 3 and native HTML/CSS/SVG controls, with no dependency on any UI component library, so it can be integrated into any Vue 3 project."
originalDescription: "Vue 3 可视化打印模板设计器 + 模板表达式引擎 + 同构渲染管线的开源 monorepo（npm workspaces）。  可视化拖拽设计打印模板、数据绑定、表达式求值、分页排版，浏览器预览与后端输出保持一致。 纯 Vue 3 + HTML/CSS/SVG 原生控件实现，不依赖任何 UI 组件库，可以接入任意 Vue 3 项目中。"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/worm-longliu/worm-vue3-print"
language: "TypeScript"
languages: ["TypeScript", "JavaScript"]
languagePcts: [62, 21]
stars: 21
forks: 5
openIssues: 4
closedIssues: 6
watchers: 2
contributors: 2
recentReleases: 10
createdAt: "2026-09-05T22:59:55Z"
lastCommitAt: "2026-10-30T10:22:29Z"
lastReleaseAt: "2026-10-19T09:05:06Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 82
undervaluedScore: 47
maintainers: ["worm-longliu"]
openGraphImageUrl: "https://opengraph.githubassets.com/76a677e19fe4776088157e10dac0813d70de66a8efc37a928475a69b3005fe83/worm-longliu/worm-vue3-print"
---

# worm-vue3-print

An open-source monorepo (npm workspaces) for a Vue 3 visual print template designer, template expression engine, and isomorphic rendering pipeline.

Design print templates by drag and drop, with data binding, expression evaluation, and pagination layout. All three ends share the same rendering and pagination algorithms (the logic has the same origin; pixel-level consistency also requires the same fonts and Chromium engine).
Implemented with pure Vue 3 and native HTML/CSS/SVG controls, with no dependency on any UI component library, so it can be integrated into any Vue 3 project.

> ⚠️ **Experimental capability notice**: `packages/print-common` (`@worm-vue3-print/common`) and the example `demo-common/` are **experimental**. They are intended to provide the designer as a zero-framework runtime (native custom elements) for **Vue 3 / Vue 2 / React / jQuery and other runtime frameworks** (including non-framework hosts). This package **has not yet completed stability testing**. It has been published to npm with a **formal version number** (dist-tag `latest`, currently `1.4.2`; install directly with `npm i @worm-vue3-print/common`). The npm page keeps the experimental…
