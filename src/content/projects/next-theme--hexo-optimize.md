---
repo: "next-theme/hexo-optimize"
name: "hexo-optimize"
description: "🚩 A Hexo plugin that optimize the pages loading speed, written in Rust"
readmeQualityOk: true
url: "https://github.com/next-theme/hexo-optimize"
language: "JavaScript"
languages: ["JavaScript", "Shell"]
languagePcts: [56, 44]
topics: ["hexo", "hexo-plugin"]
stars: 16
forks: 2
openIssues: 2
closedIssues: 4
watchers: 1
contributors: 15
recentReleases: 0
createdAt: "2020-07-18T10:53:06Z"
lastCommitAt: "2026-07-29T06:12:40Z"
lastReleaseAt: "2025-03-29T16:56:28Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 87
undervaluedScore: 44
maintainers: ["renovate[bot]", "stevenjoezhang", "AlliotTech"]
openGraphImageUrl: "https://opengraph.githubassets.com/6a4c70e30ab2161fb3419495a981055d87274b1a4e445eedac735fe97001485c/next-theme/hexo-optimize"
---

# hexo-optimize

A hexo plugin that optimize the pages loading speed. It will automatically filter your blog files and make optimizations. For example:

- Minify CSS, JS and HTML files
- Inline specific CSS files (like `main.css`) directly into the html page to improve First Contentful Paint performance
- Add content hash to static resource filenames (versioning) for better cache control

It will help you get a higher score in the [Google PageSpeed Insights](https://pagespeed.web.dev).

## Installation

![size-image]

```bash
npm install hexo-optimize
```

## Usage

Activate the plugin in hexo's `_config.yml` like this:
```yml
filter_optimize:
  enable: true
  # static resource versioning
  versioning: false
  css:
    # minify all css files
    minify: true
    excludes:
    # use preload to load css elements dynamically
    delivery:
      - '@fortawesome/fontawesome-free'
      - 'fonts.googleapis.com'
    # make specific css content inline into the html page
    inlines:
      # support full path only
      - css/main.css
  js:
    # minify all js files
    minify: true
    excludes:
    # remove the comments in each of the js files
    remove_comments: false
  html:
    #…
