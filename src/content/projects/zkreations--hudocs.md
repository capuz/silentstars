---
repo: "zkreations/hudocs"
name: "hudocs"
description: "Documentation theme created for Hugo."
readmeQualityOk: true
url: "https://github.com/zkreations/hudocs"
homepage: "https://hudocs.com"
language: "SCSS"
languages: ["SCSS", "HTML"]
languagePcts: [45, 26]
topics: ["gohugo", "gohugo-theme", "open-source"]
stars: 12
forks: 3
openIssues: 0
closedIssues: 11
watchers: 3
contributors: 2
recentReleases: 0
createdAt: "2022-09-26T15:01:28Z"
lastCommitAt: "2026-08-09T04:47:28Z"
lastReleaseAt: "2025-07-21T22:53:49Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 71
maintainers: ["danieIabel"]
openGraphImageUrl: "https://opengraph.githubassets.com/083191a405a741ff985a669bb18fb5b26e2ded730125c3629163a52bb94456c1/zkreations/hudocs"
---

</p>

</p>

---

I made this project to easily document my own projects, but I thought it would be great to share it, so you will save the time it took me to learn everything that finally resulted in this documentation. I hope you do a lot of work!

## Features

- Optimized compatible with [Core Web Vitals](https://pagespeed.web.dev/report?url=https://hudocs.com)
- A+ Security Level on [Mozilla Observatory](https://observatory.mozilla.org/analyze/hudocs.com)
- Zero initial configuration
- Support for multiple languages
- Advanced automated searcher
- Light and dark theme
- Shortcodes for alerts, notes, tables, etc.
- Advanced code blocks
- High customization

## Requirements

- Hugo 0.164.0 or higher (extended version)
- Git - [Install Git](https://git-scm.com/downloads)
- Desire to document

## Install

Go to the root of your Hugo project and run the following command:

```bash
git submodule add https://github.com/zkreations/hudocs themes/hudocs
```

## Recommended structure

I made this documentation thinking that you could generate multiple versions of the same project, that's why the recommended structure should first contain a version number, for example:

```bash
content
└──…
