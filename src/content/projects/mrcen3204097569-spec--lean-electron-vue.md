---
repo: "mrcen3204097569-spec/lean-electron-vue"
name: "lean-electron-vue"
description: "Lightweight Electron + Vite + Vue 3 + TypeScript desktop app template, with no dependency on third-party integration plugins | A lean Electron + Vite + Vue 3 + TS desktop app template"
originalDescription: "轻量的 Electron + Vite + Vue 3 + TypeScript 桌面应用模板，不依赖第三方集成插件 | A lean Electron + Vite + Vue 3 + TS desktop app template"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/mrcen3204097569-spec/lean-electron-vue"
language: "Vue"
languages: ["Vue", "TypeScript"]
languagePcts: [55, 44]
topics: ["desktop-app", "electron", "electron-builder", "electron-updater", "element-plus", "pinia", "template", "typescript", "vite", "vue3"]
stars: 207
forks: 13
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2026-10-22T07:09:16Z"
lastCommitAt: "2026-10-31T19:02:19Z"
status: "newborn"
tags: []
healthScore: 71
undervaluedScore: 24
maintainers: ["1152046116", "cursoragent", "cursor[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/24322cce4bee8f4e23148a51c557cbecabd082fb30760a323045db6f3450178b/mrcen3204097569-spec/lean-electron-vue"
---

# lean-electron-vue

A ready-to-use desktop app development template for **Vite + Electron + Vue 3 + TypeScript**

Simplified Chinese | [English](https://github.com/mrcen3204097569-spec/lean-electron-vue/blob/HEAD/README.en.md)

## Introduction

An Electron template that does not depend on third-party integration solutions such as `electron-vite` or `vite-plugin-electron`. Two very thin custom Vite plugins connect Vite and Electron. The entire build process is only a few dozen lines of code, **easy to understand and easy to modify**.

- `pnpm dev`: starts the Vite dev server, compiles the main process with esbuild, then automatically launches Electron. The dev server URL is passed in via the environment variable `VITE_DEV_SERVER_URL`. The renderer process supports HMR
- `pnpm build`: builds the renderer process and compiles the main process, producing a runnable `dist/` without calling electron-builder
- `pnpm dist`: on top of `pnpm build`, calls electron-builder to generate an installer package
- `pnpm test`: runs pure-logic unit tests with Vitest (`app://` path validation, update notes YAML, window policy, CSP)

## Features

- ⚡️ **Vite 8 + Vue 3.5 + TypeScript**, `<script…
