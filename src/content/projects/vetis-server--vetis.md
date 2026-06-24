---
repo: "vetis-server/vetis"
name: "vetis"
description: "A blazingly fast, minimalist HTTP server built for modern Rust applications."
url: "https://github.com/vetis-server/vetis"
homepage: "https://vetis-server.github.io/vetis/"
language: "Rust"
languages: ["Rust"]
languagePcts: [97]
topics: ["http-server", "network", "rust", "web"]
stars: 113
forks: 3
openIssues: 32
closedIssues: 29
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-01-17T23:11:35Z"
lastCommitAt: "2026-06-24T00:24:45Z"
status: "thriving"
tags: ["solo_builder", "funded", "under_pressure"]
healthScore: 87
undervaluedScore: 29
maintainers: ["ararog", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/e43a9d571ffbd99a587186387aa312f0b0d608ed338710af78960175e27d86e6/vetis-server/vetis"
fundingLinks: ["GITHUB:https://github.com/ararog"]
discussionCount: 3
---

# VeTiS (Very Tiny Server)

**A blazingly fast, minimalist HTTP server built for modern Rust applications**

VeTiS is a lightweight yet powerful web server that brings simplicity and performance together. Designed with Rust's safety guarantees in mind, it delivers HTTP/1, HTTP/2, and HTTP/3 support with a clean, intuitive API that makes building web services a breeze.

## History

VeTiS started as a component of deboa-tests, a private crate used by deboa http client for integration testing purposes, as it got more features, like HTTP1/2 and 3 support, alongside TLS, I realized project could be reused somehow.

So with reusability in mind, I started EasyHttpMock, a project which aims to be a quick and easy way to start a mock server for integration purposes, it didn't took too much to realized this internal http server used by EasyHttpMock could be reused for other purposes than simply be a mock server.

That's why VeTiS came to reality, by taking advantage of what I started on deboa-tests for testing purposes, it turned into a complete http server project, the goal is make it very flexible, while keeping it small and fast.

## Why VeTiS?

- **Minimalist Design**: Focus on what…
