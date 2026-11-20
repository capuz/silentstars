---
repo: "hugomd/blog"
name: "blog"
description: "✍️ My blog."
readmeQualityOk: true
url: "https://github.com/hugomd/blog"
homepage: "https://hugo.md"
language: "Go"
languages: ["Go", "JavaScript"]
languagePcts: [46, 42]
topics: ["blog", "gohugo", "javascript", "development", "lessons"]
stars: 9
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2017-02-22T09:54:49Z"
lastCommitAt: "2026-11-20T12:02:56Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 88
undervaluedScore: 43
maintainers: ["ampagent"]
openGraphImageUrl: "https://opengraph.githubassets.com/0ba7dcad355263c094411a2687e45c0852ea654f6cc2925fd4ed836555c53f88/hugomd/blog"
---

# Hugo's Blog

This is the repository that houses my blog and personal website. It runs [Hugo](https://gohugo.io/) (I know, I know, it has a very cool name).

It uses the [TBD](https://github.com/hugomd/blog/tree/develop/themes/simple) theme (of my own making) and is hosted on [Cloudflare Pages](https://pages.cloudflare.com/).

## Running locally

The toolchain is pinned with [Hermit](https://cashapp.github.io/hermit/).
Run `./bin/hermit install` to install it, then activate it with
`source bin/activate-hermit` before running:

```
hugo server
```

### Amp orbs

`.agents/setup` bootstraps Hermit and installs the versions pinned in `bin/`:
Hugo Extended 0.111.3 and Go 1.27.3. Hugo is kept at this version
for compatibility with the site's legacy templates; the gallery needs Extended's
Sass support. Setup then builds a pinned `openring` revision with Hermit's Go
compiler into its standard `.hermit/go/bin` directory. Go verifies module
checksums; generated binaries are ignored by Git.
