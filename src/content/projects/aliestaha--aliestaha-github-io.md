---
repo: "AliesTaha/aliestaha.github.io"
name: "aliestaha.github.io"
description: "Responsive website, displays my  portfolio, hosted on Github Pages"
readmeQualityOk: true
url: "https://github.com/AliesTaha/aliestaha.github.io"
homepage: "https://aliestaha.com"
language: "Python"
languages: ["Python", "JavaScript"]
languagePcts: [48, 29]
topics: ["css", "css3", "html", "javascript", "portfolio", "personal-website", "portfolio-website", "responsive"]
stars: 9
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2022-12-19T22:49:55Z"
lastCommitAt: "2026-10-29T14:07:17Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 90
undervaluedScore: 69
maintainers: ["AliesTaha"]
openGraphImageUrl: "https://opengraph.githubassets.com/8f75d5f6842475888bf9eb9dcbff6c8874451ec994ac6b3b072f1031055a08c9/AliesTaha/aliestaha.github.io"
---

# alibytes.com

Personal writing, technical articles, and a WHOOP dashboard. Built with Jekyll on GitHub Pages.

## Writing

All articles live in one place:

- `blogs/personal/`: personal writing in the journal style.
- `blogs/technical/`: technical articles and links to work published elsewhere.

Create a file such as `blogs/personal/on-purpose.md`:

```md
---
layout: post
title: "On Purpose"
description: "This is my current purpose. Hill-climb"
date: 2026-10-04
category: personal
permalink: /writing/on-purpose/
---

Your writing here. Keep crossed-out words with <del>hours</del>.
```

Use `category: technical` for technical writing. For an external article, use `layout: external` and add `external_url` and `external_source`. The homepage, RSS feed, and sitemap use these files automatically, sorted by date. Add `published: false` to keep a draft off the site.

`redirects/` preserves old links. It contains no articles.

## Preview

```sh
bundle install
bundle exec jekyll serve
```

The static site is generated in the ignored `_site/` folder. Dependencies stay in the ignored `vendor/` folder.

## Health

The browser reads WHOOP measurements from `assets/data/health.json` and Hevy…
