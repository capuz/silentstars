---
repo: "learnrahulrai-ui/ml_blog"
name: "ml_blog"
description: "blog for learning ml in my style "
url: "https://github.com/learnrahulrai-ui/ml_blog"
homepage: "https://learnrahulrai-ui.github.io/ml_blog/"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 5
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-06-03T17:17:10Z"
lastCommitAt: "2026-07-03T12:21:42Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 88
undervaluedScore: 54
maintainers: ["learnrahulrai-ui", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/faece76dd0019d59d00e2e52962d879992695d595dc9cfb70917658198c5695c/learnrahulrai-ui/ml_blog"
discussionCount: 1
---

# Rahul's ML Blog

A plain-text machine-learning blog, styled like the linux-kernel mailing list /
kernel.org: pure monospace, ASCII diagrams, authored to a 100-column terminal width.
No JavaScript, no web fonts, no frameworks.

Live: https://learnrahulrai-ui.github.io/ml_blog/

## How it works

- **Source of truth is plain text.** Every page lives as a `.txt` file under `txt/`.
  Write normal text, draw diagrams in ASCII, keep lines within 100 columns.
- **`build.py` wraps each `.txt` in a minimal `<pre>` HTML page** so it renders the same
  in any browser while staying readable piped through `less` in a terminal.
- **The `.html` is generated, never committed.** On every push to `main`, a GitHub Actions
  workflow (`.github/workflows/deploy.yml`) runs `python3 build.py` and publishes the result
  to GitHub Pages. You only ever commit `.txt` files; the `.html` is built in the cloud.
- **`build.py` also generates `feed.xml` (RSS 2.0) and `sitemap.xml`** from the curated
  listing in `txt/index.txt`. Both are git-ignored and rebuilt in CI alongside the HTML.
- **Each page carries full `<head>` metadata** -- description, Open Graph + Twitter card
  tags (so shared links preview…
