---
repo: "MartinThoma/MartinThoma.github.io"
name: "MartinThoma.github.io"
description: "This repository contains my static website"
readmeQualityOk: true
url: "https://github.com/MartinThoma/MartinThoma.github.io"
homepage: "http://martin-thoma.com"
language: "JavaScript"
languages: ["JavaScript", "Python", "HTML"]
languagePcts: [34, 26, 22]
topics: ["blog", "pelican"]
stars: 6
forks: 11
openIssues: 1
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2013-11-24T03:02:10Z"
lastCommitAt: "2026-09-27T09:27:48Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "fork_magnet"]
healthScore: 72
undervaluedScore: 78
maintainers: ["MartinThoma"]
openGraphImageUrl: "https://opengraph.githubassets.com/e0140a43a13460edaa01b334bace3930b55b467261ca8006a21138b094e2d278/MartinThoma/MartinThoma.github.io"
---

# martin-thoma.com

Source of [martin-thoma.com](https://martin-thoma.com/), a static blog built with
[Pelican](https://getpelican.com/). The `pelican` branch holds the sources; `make github`
publishes the generated site to the `master` branch (GitHub Pages).

| Path | Content |
| ---- | ------- |
| `content/YYYY-MM-DD-slug.md` | Articles (Markdown with front matter) |
| `_drafts/` | Drafts that Pelican does not read |
| `images/<year>/<month>/` | Images used by the articles |
| `pelican-thoma/` | Theme (templates, CSS, JavaScript) |
| `plugins/` | Local Pelican plugins (search index, summaries, math fixes, table of contents, …) |
| `pelican-sitemap/` | Plugin included as a git submodule |
| `scripts/` | Checks and fix-up scripts, see [`scripts/README.md`](https://github.com/MartinThoma/MartinThoma.github.io/blob/HEAD/scripts/README.md) |
| `sublime/` | Sublime Text snippets for new articles, figures, galleries and math |
| `AGENTS.md` | Writing rules: front matter, tags, links, images, math |
| `ARTICLE_REVIEW_TODO.md` | Open review findings per article |
| `IMAGES.md` | Articles that could use an image, hotlinked and oversized images |

## Setup

The Python environment is…
