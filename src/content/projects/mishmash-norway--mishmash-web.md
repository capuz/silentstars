---
repo: "MishMash-Norway/mishmash-web"
name: "mishmash-web"
description: "Source code for the web page of MishMash Centre for AI and Creativity."
readmeQualityOk: true
url: "https://github.com/MishMash-Norway/mishmash-web"
homepage: "https://mishmash.no/"
language: "Python"
languages: ["Python", "HTML"]
languagePcts: [55, 27]
topics: ["ai", "art", "creativity", "science"]
stars: 5
forks: 0
openIssues: 2
closedIssues: 20
watchers: 1
contributors: 12
recentReleases: 0
createdAt: "2025-06-17T04:53:30Z"
lastCommitAt: "2026-07-09T20:45:16Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 98
undervaluedScore: 81
maintainers: ["alexarje", "github-actions[bot]", "eskilms"]
openGraphImageUrl: "https://opengraph.githubassets.com/88d6f35be2c6b0244dd54bab3cb55c5007c980c94930231a1ebb92be9f22b406/MishMash-Norway/mishmash-web"
---

# MishMash-web

Source for [mishmash.no](https://mishmash.no) — the website of **MishMash Centre for AI and Creativity**, a Norwegian research consortium funded by the Research Council of Norway.

The site is a [Jekyll](https://jekyllrb.com/) static site published on GitHub Pages. It is also a research and teaching project in itself: content is pulled from authoritative sources (NVA, ORCID, Wikipedia), pages experiment with [adaptive content and stretchtext](https://github.com/MishMash-Norway/mishmash-web/wiki/Web-Philosophy), and students build alternative frontends and backend automation. **The [wiki](https://github.com/MishMash-Norway/mishmash-web/wiki) is the main documentation** — this README only covers getting started.

## Quick start

```bash
bundle install
bundle exec jekyll serve --livereload   # → http://127.0.0.1:4000
```

Python automation (NVA/ORCID sync, validation, tags — optional):

```bash
python3 -m venv venv && source venv/bin/activate
pip install -r scripts/requirements.txt
```

## What's where

| Path | Contents |
| --- | --- |
| `site/` | All published content: pages, collections (`_directory`, `_news`, `_events`), layouts, CSS/JS |
| `themes/` | Alternative…
