---
repo: "oliverjessner/oliverjessner.github.io"
name: "oliverjessner.github.io"
description: "Oliver Jessner Website"
readmeQualityOk: true
url: "https://github.com/oliverjessner/oliverjessner.github.io"
homepage: "https://oliverjessner.at"
language: "SCSS"
languages: ["SCSS", "HTML"]
languagePcts: [48, 39]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2022-04-21T17:27:08Z"
lastCommitAt: "2026-09-08T08:18:42Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 85
undervaluedScore: 73
maintainers: ["oliverjessner"]
openGraphImageUrl: "https://opengraph.githubassets.com/c84f9302d701bda52b67bedf46c277dd6ab055b5eecae169f1bdaf687eb5115c/oliverjessner/oliverjessner.github.io"
fundingLinks: ["GITHUB:https://github.com/oliverjessner", "BUY_ME_A_COFFEE:https://buymeacoffee.com/oliverjessner"]
---

# Install

This thing is only runs on ruby 3.1.3. If you don't have it installed, you can install it with rvm:

```bash
rvm ruby-install ruby 3.1.3
```

## install gems

```bash
bundle install
```

## Run

```bash
bundle exec jekyll serve
```

---

# Write

- Blog post are in `collections/_posts`
- Naming format `YYYY-MM-DD-title.md`
- Custom Markdown-Bausteine sind in `template.md` dokumentiert.

## RSS-Feed

Der RSS-2.0-Feed unter `/feed.xml` enthält die 50 neuesten veröffentlichten Blogartikel
mit Titel, Kurzbeschreibung, Link, Datum und Kategorien. Jekyll aktualisiert ihn bei
jedem Build automatisch. Der Feed ist im HTML-Head und im Footer unter „Artikel“ verlinkt.
Die Vorlage liegt in `feed.xml`; zusätzliche Plugins sind nicht erforderlich.

## New Blog Post

1. First generate a new file with, which should automatically open in vscode:

```bash
sh scripts/blogposts/generate-empty-blogpost-file.sh
```

2. Write the blogpost
3. Auto rename the blog post

```bash
sh scripts/blogposts/name-md-blog-post-file.sh
```

4. thumbnail Generation

You need to generate a thumbnail via canva with the name `header.png` and put it into your Downloads folder. Attention the script will delete…
