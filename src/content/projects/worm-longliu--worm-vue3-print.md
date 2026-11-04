---
repo: "worm-longliu/worm-vue3-print"
name: "worm-vue3-print"
description: "A open-source monorepo (npm workspaces) combining a Vue 3 visual print template designer, a template expression engine, and an isomorphic rendering pipeline. Design print templates visually by drag and drop, with data binding, expression evaluation, and pagination layout. Browser preview and backend output stay consistent. Built with native Vue 3 and HTML/CSS/SVG controls, with no dependency on any UI component library, so it can be integrated into any Vue 3 project."
originalDescription: "Vue 3 可视化打印模板设计器 + 模板表达式引擎 + 同构渲染管线的开源 monorepo（npm workspaces）。  可视化拖拽设计打印模板、数据绑定、表达式求值、分页排版，浏览器预览与后端输出保持一致。 纯 Vue 3 + HTML/CSS/SVG 原生控件实现，不依赖任何 UI 组件库，可以接入任意 Vue 3 项目中。"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/worm-longliu/worm-vue3-print"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [64]
stars: 23
forks: 5
openIssues: 3
closedIssues: 7
watchers: 2
contributors: 3
recentReleases: 10
createdAt: "2026-09-05T22:59:55Z"
lastCommitAt: "2026-11-04T08:03:32Z"
lastReleaseAt: "2026-10-19T09:05:06Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 94
undervaluedScore: 48
maintainers: ["worm-longliu", "MoraxCloud"]
openGraphImageUrl: "https://opengraph.githubassets.com/4631ced718cf4288826025a8041050e79b4933b819a9fa0176ab9ebd580d9c92/worm-longliu/worm-vue3-print"
---

# worm-vue3-print

An open-source monorepo (npm workspaces) combining a Vue 3 visual print template designer, a template expression engine, and an isomorphic rendering pipeline.

Design print templates visually by drag and drop, with data binding, expression evaluation, and pagination layout. All three endpoints share the same rendering and pagination algorithms (the logic has the same source; pixel-level consistency also requires the same fonts and the same Chromium engine).
Built with native Vue 3 and HTML/CSS/SVG controls, with no dependency on any UI component library, so it can be integrated into any Vue 3 project.

> ⚠️ **Experimental capability statement**: `packages/print-common` (`@worm-vue3-print/common`) and the example `demo-common/` are **experimental**. They are intended to provide the designer in a zero-framework runtime form (native custom elements) for **Vue 3 / Vue 2 / React / jQuery and other runtime frameworks** (including framework-free hosts). This package **has not yet completed stability testing**, but it has been published to npm under a formal version number (dist-tag `latest`, currently `1.4.3`; install directly with `npm i @worm-vue3-print/common`). The…
