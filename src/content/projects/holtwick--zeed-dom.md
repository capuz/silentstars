---
repo: "holtwick/zeed-dom"
name: "zeed-dom"
description: "🌱 Lightweight offline DOM"
readmeQualityOk: true
url: "https://github.com/holtwick/zeed-dom"
language: "HTML"
languages: ["HTML"]
languagePcts: [99]
stars: 55
forks: 6
openIssues: 0
closedIssues: 13
watchers: 2
contributors: 5
recentReleases: 0
createdAt: "2021-07-20T08:34:46Z"
lastCommitAt: "2026-11-19T11:59:04Z"
lastReleaseAt: "2024-05-13T10:56:47Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "funded"]
healthScore: 100
undervaluedScore: 48
maintainers: ["holtwick"]
openGraphImageUrl: "https://opengraph.githubassets.com/c19d0192e8152ee7c6ae799480f9232e6125f21a09230c5f85d49b8c2b5dcfd3/holtwick/zeed-dom"
fundingLinks: ["GITHUB:https://github.com/holtwick"]
---

# 🌱 zeed-dom

> **A lightweight offline DOM for Node.js, Bun and browsers: HTML parser, CSS selectors, JSX and serializers to HTML, XML, Markdown, plain text and safe HTML.**

Parses real-world pages several times faster than linkedom, happy-dom and jsdom, stays linear on hostile input, and has only two small dependencies. Made for server-side rendering, static site generation, post-processing HTML, and cleaning up user content.

- ⚡️ **Fast**: parsing and serialization several times faster than the alternatives, see [Performance](#-performance)
- 🔍 **CSS selectors**: `querySelector`, `querySelectorAll`, `matches` and the `.handle()` helper
- 🧩 **JSX**: build HTML strings or a DOM tree with JSX/TSX, no React needed
- 📝 **Serializers**: HTML, XML, Markdown, plain text, pretty printed HTML
- 🔒 **Safe HTML**: reduce untrusted HTML to allowed tags, attributes and URLs
- 🛡 **Robust**: no recursion and linear time, so no input can block the event loop or overflow the stack
- 🦾 **TypeScript**: full typings, ESM and CommonJS
