---
repo: "eth-sri/eth-sri.github.io"
name: "eth-sri.github.io"
description: "SRI Group Website"
readmeQualityOk: true
url: "https://github.com/eth-sri/eth-sri.github.io"
language: "HTML"
languages: ["HTML"]
languagePcts: [92]
stars: 12
forks: 10
openIssues: 1
closedIssues: 0
watchers: 22
contributors: 45
recentReleases: 0
createdAt: "2018-09-05T13:26:03Z"
lastCommitAt: "2026-11-04T13:04:17Z"
status: "thriving"
tags: ["legacy_hero", "community_watch", "fork_magnet"]
healthScore: 79
undervaluedScore: 56
maintainers: ["fiorellaETH", "Grogros4", "nielstron"]
openGraphImageUrl: "https://opengraph.githubassets.com/02035b0e6f459ca23661ed593aaa71236aa89dd9912373fcc3d7cbdfc047e559/eth-sri/eth-sri.github.io"
---

# SRI Website

## Notice

All larger files, including pdfs of papers/slides, should be uploaded to the file server.

```
$ ssh websrl@web-login-el6.inf.ethz.ch
[websrl@web-login htdocs-srl]$ cd /import/vechev/h1/htdocs-srl/website
```
Upload you files to the '/import/vechev/h1/htdocs-srl/website' directory. All files are then available under https://files.sri.inf.ethz.ch/ url. For example, file in '/import/vechev/h1/htdocs-srl/website/slides/deguard-androidsec17.pdf' is available at https://files.sri.inf.ethz.ch/website/slides/deguard-androidsec17.pdf

## Overview

The site is built on [Jekyll](https://jekyllrb.com/), a static site generator. The templating language is [Liquid](https://shopify.github.io/liquid/). 

To serve the webpage locally, run `script/server` (requires [uv](https://docs.astral.sh/uv/)).
You may need to run `bundle install` in case of errors like `Could not find gem`.

### Image thumbnails

The [generation workflow](https://github.com/eth-sri/eth-sri.github.io/blob/HEAD/.github/workflows/thumbnails.yml) runs automatically when
images or HTML/Markdown content change on `master`, including edits made on GitHub.
It generates thumbnails, removes obsolete variants…
