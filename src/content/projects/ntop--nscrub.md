---
repo: "ntop/nScrub"
name: "nScrub"
description: "Open source components and extensions for nScrub"
readmeQualityOk: true
url: "https://github.com/ntop/nScrub"
language: "Makefile"
languages: ["Makefile"]
languagePcts: [100]
stars: 8
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 5
recentReleases: 0
createdAt: "2026-06-22T07:23:04Z"
lastCommitAt: "2026-11-27T16:30:45Z"
status: "thriving"
tags: []
healthScore: 73
undervaluedScore: 13
maintainers: ["cardigliano", "DGabri"]
openGraphImageUrl: "https://opengraph.githubassets.com/9d2423f3bb5a2d7bc864ce6768e6301b293aacb597861012708662bc6142fd6d/ntop/nScrub"
---

# nScrub
This repository contains open source components and extensions for nScrub available at http://www.ntop.org/products/ddos-mitigation/nscrub/

Here you can find:
* SDK for developing Plugins
* Documentation

Enjoy!

[nscrub_logo]: https://www.ntop.org/wp-content/uploads/2025/06/nscrub.png

[ntop_logo]: https://camo.githubusercontent.com/58e2a1ecfff62d8ecc9d74633bd1013f26e06cba/687474703a2f2f7777772e6e746f702e6f72672f77702d636f6e74656e742f75706c6f6164732f323031352f30352f6e746f702e706e67

### Documentation

If you want to learn more about nScrub please visit the [User's Guide](https://www.ntop.org/guides/nScrub/).

### Building the User's Guide

The User's Guide is a [VitePress](https://vitepress.dev) project in `doc/` (Markdown pages, same
URLs as the old Sphinx guide: `/guides/nscrub/<page>.html`). Requires Node 18+ and `make`.

```
cd doc
make dist      # build the static site into doc/dist (runs npm install if needed)
make serve     # build, then serve it at http://localhost:4173/guides/nscrub/   (PORT=8080 make serve)
```

For live reload while editing a page use `npm run dev` (http://localhost:5173/guides/nscrub/).
