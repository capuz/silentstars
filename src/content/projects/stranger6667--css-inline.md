---
repo: "Stranger6667/css-inline"
name: "css-inline"
description: "High-performance library for inlining CSS into HTML 'style' attributes"
readmeQualityOk: true
url: "https://github.com/Stranger6667/css-inline"
homepage: "https://css-inline.org/"
language: "Rust"
languages: ["Rust"]
languagePcts: [68]
topics: ["html", "css", "css-inline", "rust", "python", "wasm", "hacktoberfest", "ruby", "javascript"]
stars: 318
forks: 42
openIssues: 18
closedIssues: 107
watchers: 3
contributors: 21
recentReleases: 0
createdAt: "2020-06-21T12:32:19Z"
lastCommitAt: "2026-10-14T08:58:12Z"
lastReleaseAt: "2020-12-07T08:21:15Z"
status: "thriving"
tags: ["legacy_hero", "funded"]
healthScore: 95
undervaluedScore: 40
maintainers: ["Stranger6667", "dependabot[bot]", "jmortlock"]
openGraphImageUrl: "https://opengraph.githubassets.com/1ba304f3d0e26b1778cba6bf2145a88a38d82c1fb6abed3dd90b1d6e6f826d28/Stranger6667/css-inline"
fundingLinks: ["GITHUB:https://github.com/Stranger6667"]
---

# css-inline

[<img alt="build status" src="https://img.shields.io/github/actions/workflow/status/Stranger6667/css-inline/build.yml?style=flat-square&labelColor=555555&logo=github" height="20">](https://github.com/Stranger6667/css-inline/actions/workflows/build.yml)
[<img alt="crates.io" src="https://img.shields.io/crates/v/css-inline.svg?style=flat-square&color=fc8d62&logo=rust" height="20">](https://crates.io/crates/css-inline)
[<img alt="docs.rs" src="https://img.shields.io/badge/docs.rs-css_inline-66c2a5?style=flat-square&labelColor=555555&logo=docs.rs" height="20">](https://docs.rs/css-inline)
[<img alt="codecov.io" src="https://img.shields.io/codecov/c/gh/Stranger6667/css-inline?logo=codecov&style=flat-square&token=tOzvV4kDY0" height="20">](https://app.codecov.io/github/Stranger6667/css-inline)
[<img alt="gitter" src="https://img.shields.io/gitter/room/Stranger6667/css-inline?style=flat-square" height="20">](https://gitter.im/Stranger6667/css-inline)

`css_inline` inlines CSS into HTML `style` attributes. Use it to prepare HTML emails or to embed HTML into third-party web pages.

It turns this HTML:

```html
<html>
  <head>
    <style>h1 { color:blue; }</style>
  </head>…
