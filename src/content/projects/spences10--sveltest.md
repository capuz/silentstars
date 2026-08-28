---
repo: "spences10/sveltest"
name: "sveltest"
description: "Comprehensive Svelte 5 testing examples and patterns using Vitest Browser Mode, Playwright, and vitest-browser-svelte"
readmeQualityOk: true
url: "https://github.com/spences10/sveltest"
homepage: "https://sveltest.dev"
language: "TypeScript"
languages: ["TypeScript", "Svelte"]
languagePcts: [72, 27]
topics: ["playwright", "svelte", "svelte5", "sveltekit", "testing", "typescript", "vitest", "vitest-browser-svelte"]
stars: 112
forks: 6
openIssues: 1
closedIssues: 6
watchers: 1
contributors: 8
recentReleases: 0
createdAt: "2022-05-09T18:41:51Z"
lastCommitAt: "2026-08-28T15:36:46Z"
status: "thriving"
tags: []
healthScore: 90
undervaluedScore: 35
maintainers: ["spences10", "renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/7b6e2e3b042a631f89de7f4e15a34b616e7989ed019d3ab994c4495ee034a6b2/spences10/sveltest"
discussionCount: 4
---

# Sveltest

A comprehensive example project demonstrating
**vitest-browser-svelte** testing patterns for modern Svelte 5
applications. Built over a weekend as a companion piece to my blog
post:
[Migrating from @testing-library/svelte to vitest-browser-svelte](https://scottspence.com/posts/migrating-from-testing-library-svelte-to-vitest-browser-svelte).

## 🎯 What is Sveltest?

Sveltest is both a comprehensive reference project and a CLI tool for
`vitest-browser-svelte` - the modern testing solution for Svelte
applications. Use it as:

- **📚 A reference project** showcasing real-world testing patterns
- **🤖 A CLI tool** for AI assistants to quickly access testing
  examples
- **📖 A learning resource** with comprehensive documentation

This project demonstrates my opinionated approach to testing with:

- **Client-side component testing** with real browser environments
- **Server-side testing** for SvelteKit API routes and hooks
- **SSR testing** for server-side rendering validation
- **Full-stack integration patterns** for modern web applications

## 🔄 Client-Server Alignment Strategy

**The Problem**: Server unit tests with heavy mocking can pass while
production breaks due to…
