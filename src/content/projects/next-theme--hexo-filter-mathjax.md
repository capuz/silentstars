---
repo: "next-theme/hexo-filter-mathjax"
name: "hexo-filter-mathjax"
description: "💯 Server side MathJax renderer plugin for Hexo."
readmeQualityOk: true
url: "https://github.com/next-theme/hexo-filter-mathjax"
homepage: "https://www.npmjs.com/package/hexo-filter-mathjax"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [88]
topics: ["hexo", "hexo-plugin", "mathjax", "math"]
stars: 119
forks: 8
openIssues: 4
closedIssues: 25
watchers: 1
contributors: 12
recentReleases: 0
createdAt: "2019-03-20T12:32:33Z"
lastCommitAt: "2026-07-29T06:12:40Z"
lastReleaseAt: "2025-06-04T17:48:42Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 91
undervaluedScore: 35
maintainers: ["stevenjoezhang", "renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/f8de68c8c253ae1c734ff82935c95154aaf99a00e9adbd7e2af2142aeacb4424/next-theme/hexo-filter-mathjax"
---

# Hexo Filter MathJax

Server side [MathJax](http://www.mathjax.org/) Renderer Plugin for [Hexo](http://hexo.io/).

**WARNING: This plugin is a server-side math rendering plugin, which does not depend on any front-end scripts. If you have already enabled other math rendering methods before installing this plugin, please do the following to avoid conflicts:**
- Remove all other Hexo math plugins
- Disable front-end math renderer in Hexo theme settings (For theme NexT, you need to set both `math.mathjax.enable` and `math.katax.enable` to `false`)
- Delete front-end scripts related to math rendering

## Installation

![size-image]

```bash
$ npm install hexo-filter-mathjax
$ hexo clean
```

## Options

You can configure this plugin in Hexo `_config.yml`. Default options:

```yaml
mathjax:
  tags: none # or 'ams' or 'all'
  single_dollars: true # enable single dollar signs as in-line math delimiters
  cjk_width: 0.9 # relative CJK char width
  normal_width: 0.6 # relative normal (monospace) width
  append_css: true # add CSS to pages rendered by MathJax
  every_page: false # if true, every page will be rendered by MathJax regardless the `mathjax` setting in Front-matter
  packages: #…
