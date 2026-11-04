---
repo: "EachFly/HttpMate"
name: "HttpMate"
description: "IntelliJ Plugin | REST API Search | JSON & Mock Generator | Markdown API Docs | Code Statistics"
originalDescription: "IntelliJ Plugin | REST API Search | JSON & Mock Generator | Markdown API Docs | Code Statistics"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/EachFly/HttpMate"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [100]
stars: 9
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2025-11-21T14:43:34Z"
lastCommitAt: "2026-11-04T13:04:50Z"
lastReleaseAt: "2026-03-22T10:04:37Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 87
undervaluedScore: 58
maintainers: ["JerAxxxxxxx", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/55fdddc3bcf8749b6b106da2dd0cd72109dd6144c445598fc1ccc163f791c648/EachFly/HttpMate"
---

# HttpMate

## 📝 Project Overview

**HttpMate** is an IntelliJ IDEA plugin that improves REST API development efficiency in Java/Kotlin projects.  
It provides the following frequently used development assistance features:

- Quickly search for and jump to REST endpoint definitions (similar to the search-and-jump experience within the IDE)
- One-click generation of JSON / Mock JSON based on class structure
- Automatic generation of Markdown API documentation based on controller methods
- Code line statistics: right-click a directory to recursively analyze the proportions of code lines, comment lines, and blank lines, including visual charts
- Naming style switching: select text and convert it in one click among camelCase / snake_case / PascalCase / SCREAMING_SNAKE / kebab-case

The plugin currently recognizes endpoints for **Spring Web** and **JAX-RS (javax / jakarta)** through PSI + annotation scanning, and handles interaction and navigation within the IDE.

## ✨ Key Features

1. **Global REST API search and navigation**
   - Shortcuts: `Ctrl + \` or `Ctrl + Alt + H`
   - Supports fuzzy subsequence matching by path/method; `Enter` jumps directly to the endpoint definition
2.…
