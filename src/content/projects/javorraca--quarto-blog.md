---
repo: "JavOrraca/quarto-blog"
name: "quarto-blog"
description: "Personal data science website rebuilt as a Quarto blog"
readmeQualityOk: true
url: "https://github.com/JavOrraca/quarto-blog"
homepage: "https://www.javierorracadeatcu.com/"
language: "HTML"
languages: ["HTML"]
languagePcts: [100]
topics: ["blog", "quarto", "analytics", "data-science", "machine-learning", "python", "rstats"]
stars: 8
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2022-10-16T00:36:11Z"
lastCommitAt: "2026-10-31T02:00:29Z"
status: "thriving"
tags: []
healthScore: 88
undervaluedScore: 70
maintainers: ["cursoragent", "JavOrraca"]
openGraphImageUrl: "https://opengraph.githubassets.com/3e36c7e9e092281b25303e094a1dec63cfaef305881b7fb28a581d7a43d18350/JavOrraca/quarto-blog"
discussionCount: 15
---

# Personal Blog using Quarto

Every few years, I like to update my personal data science website using bleeding-edge web frameworks. Several years back, I built my first data science blog using the R Markdown + [blogdown](https://bookdown.org/yihui/blogdown/) framework, then I ported it to the R Markdown + [distill](https://rstudio.github.io/distill/) framework, and this latest iteration of my site is built with Quarto.

I draft locally with `quarto::quarto_render(as_job = FALSE)` so I can preview posts and refresh `_freeze/` when knitr needs to re-run. GitHub Actions renders on pull requests (validate only) and on pushes to `main` (render, then publish). Posts inherit `freeze: auto` from `posts/_metadata.yml` (including drafts; freeze only controls code execution). `_quarto.yml` sets `website.draft-mode: unlinked`, so a `draft: true` post is rendered with Quarto's Draft banner and kept off the Blog listing, search, and sitemap. `_site/` is gitignored; Netlify is published from GitHub Actions, not from committed HTML.

## Deploy

This follows Quarto's recommended GitHub Actions → Netlify path ([Publishing to Netlify](https://quarto.org/docs/publishing/netlify.html), [Publishing…
