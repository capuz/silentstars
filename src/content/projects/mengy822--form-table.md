---
repo: "mengy822/form-table"
name: "form-table"
description: "Form encapsulation for vue3 elementPlus"
originalDescription: "vue3 elementPlus表单封装"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/mengy822/form-table"
language: "Vue"
languages: ["Vue", "TypeScript"]
languagePcts: [62, 38]
stars: 6
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2025-11-13T12:30:47Z"
lastCommitAt: "2026-10-26T03:02:26Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 73
undervaluedScore: 53
maintainers: ["mengy822"]
openGraphImageUrl: "https://opengraph.githubassets.com/1d279f37d6dffa10db60eb5d116c62665a0b8144f528eab835c1abda4d633fa9/mengy822/form-table"
---

# Component Library Documentation

[👉 Go to GitHub](https://github.com/mengy822/form-table)

> **Last updated**: 2026-05-26

## Changes in this update

| Updated component | Changes |
|:--------|:--------|
| **MyEdit/MyForm** | `isRequired` now supports three types: `boolean`, `Function`, and `string` (built-in validation rules); added `numberAuto` for numeric range validation |
| **MyTable** | Added `dataConfig` data source configuration; the delete event callback supports the `(url, params, method)` parameter convention; the export event callback supports the `(url, params, fileName, methods)` parameter convention |
| **MyEdit/MyDetail** | Added `dataConfig` data source configuration; the `init` method accepts a Promise and shows a loading effect |

---

# Introduction

A form/table component library for [Vue3](https://cn.vuejs.org/) based on [Element-Plus](https://element-plus.org/zh-CN), providing core features such as search forms, tables, virtual tables, details, edit dialogs, import dialogs, and ECharts charts, with highly customizable configuration.

---

# Usage

## Search box (MyForm)

1. Properties

| Property name | Type | Default | Description |
|:--------…
