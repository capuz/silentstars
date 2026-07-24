---
repo: "yafoo/jj.js"
name: "jj.js"
description: "A super simple lightweight NodeJS MVC framework"
originalDescription: "A super simple lightweight NodeJS MVC framework（一个超级简单轻量的NodeJS MVC框架）"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/yafoo/jj.js"
homepage: "https://me.i-i.me/special/jj.html"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
topics: ["javascript", "koa2", "mvc", "nodejs", "web"]
stars: 16
forks: 2
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 1
recentReleases: 1
createdAt: "2021-03-22T09:45:48Z"
lastCommitAt: "2026-07-24T06:08:42Z"
lastReleaseAt: "2026-06-24T07:03:42Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 83
undervaluedScore: 73
maintainers: ["yafoo"]
openGraphImageUrl: "https://opengraph.githubassets.com/3d1ff98b8a88d400a55cf81408c68f944d406de7d6dbaeaf899203c3e1e245e2/yafoo/jj.js"
---

# jj.js


> A super simple lightweight Node.js MVC framework

## 📖 Project Introduction

jj.js is a lightweight Node.js MVC framework designed to mimic ThinkPHP5. It implements **automatic library loading**, **lazy loading**, and **automatic class instantiation and singleton** technology based on Proxy, allowing all libraries to be called directly without manual require/import.

The framework adopts a **single application with unlimited sub-levels** architecture, allowing the creation of any level of sub-modules freely in the `app/` directory (such as `app/admin/`, `app/api/`), with each sub-level having its own independent controller, model, middleware, etc., and sub-levels automatically inherit parent libraries.

### ✨ Core Features

| Feature | Description |
|------|------|
| 🏗️ **Classic MVC** | Mimics ThinkPHP5, friendly for PHP developers, quick to get started |
| 🔄 **Automatic Loading** | Both system libraries and user libraries support automatic loading and lazy loading |
| 🎯 **Smart Instantiation** | Classes automatically generate single instances, saving memory overhead |
| 🧩 **Three-level Middleware** | Application-level, route-level, controller-level, convenient…
