---
repo: "agentgateway/website"
name: "website"
description: "Official website for agentgateway"
readmeQualityOk: true
url: "https://github.com/agentgateway/website"
homepage: "https://agentgateway.dev/"
language: "HTML"
languages: ["HTML"]
languagePcts: [97]
stars: 15
forks: 61
openIssues: 11
closedIssues: 141
watchers: 3
contributors: 62
recentReleases: 2
createdAt: "2025-04-07T18:32:48Z"
lastCommitAt: "2026-08-27T14:30:19Z"
lastReleaseAt: "2026-07-27T23:23:35Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 98
undervaluedScore: 87
maintainers: ["artberger", "danehans", "kristin-kronstain-brown"]
openGraphImageUrl: "https://opengraph.githubassets.com/84197d0513bd7c73e338fcb3b3e648577cf838517f1a150c65f02754b295e70a/agentgateway/website"
---

# agentgateway-dev/website Contribution Guide

## Getting Started

Required dependencies:

* `node.js` v18.18.2 or later
* `hugo` extended v0.160.1 or later

To run a local preview:

1. `gh repo clone agentgateway/website`

2. `cd website`

3. `npm install`

4. `hugo server`

5. [`http://localhost:1313`](http://localhost:1313)

## Framework tests

Rendered-HTML quality is checked by a shared Playwright harness that lives in
[solo-io/docs-theme-extras](https://github.com/solo-io/docs-theme-extras). The
harness asserts structural things (no shortcode delimiter leaks, no raw
markdown bleed, image alt text, tabs/mermaid/copy-md rendered correctly,
internal links resolve, etc.) against the built `public/` tree.

These are distinct from the doc tests (`make test-run`), which execute code
blocks against a cluster. Framework targets are prefixed `framework-test-*`.

### One-time setup

Clone `docs-theme-extras` as a sibling of this repo:

```sh
cd ../
git clone https://github.com/solo-io/docs-theme-extras.git
cd <agentgateway/website_clone_directory>
make framework-test-install   # ~1-3 min, ~120-180 MB
```

### If your clone lives somewhere else

The Makefile defaults to…
