---
repo: "next-theme/theme-next-pdf"
name: "theme-next-pdf"
description: ":bookmark_tabs: PDF.js for NexT."
url: "https://github.com/next-theme/theme-next-pdf"
homepage: "http://github.com/mozilla/pdf.js"
language: "JavaScript"
languages: ["JavaScript", "Fluent"]
languagePcts: [63, 33]
stars: 6
forks: 1
openIssues: 0
closedIssues: 2
watchers: 1
contributors: 8
recentReleases: 0
createdAt: "2020-05-09T04:35:05Z"
lastCommitAt: "2026-06-28T02:01:38Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 90
undervaluedScore: 58
maintainers: ["stevenjoezhang"]
openGraphImageUrl: "https://opengraph.githubassets.com/5d82f7dd0747e088c0fb40b21c68ca61ebe0023cb5770a62955640ce65cff611/next-theme/theme-next-pdf"
---

# [PDF.js](https://github.com/mozilla/pdf.js) for [NexT](https://github.com/next-theme/hexo-theme-next)

## Introduce

This is a plugin that allows to preview PDF files in the blog pages.

If the browser supports embedded PDFs natively, NexT will create a `<embed>` tag and include the PDF file on your website. Otherwise, it will create a `<iframe>` tag and uses PDF.js by @mozilla to render the pdf file.

Follow the guide below to install the plugin.

## Installation

### Step 1 &rarr; Go to Hexo dir

Change dir to **Hexo** directory. There must be `source`, `themes` and other directories:

```sh
$ cd hexo-site
$ ls
_config.next.yml  db.json           package-lock.json scaffolds         themes
_config.yml       node_modules      package.json      source
```

### Step 2 &rarr; Install plugin

If you have already added the **Hexo** directory to a git repository, then install this plugin as a git submodule:

```sh
$ git submodule add https://github.com/next-theme/theme-next-pdf source/lib/pdf
```

Otherwise, install the plugin to `source/lib` directory via `git clone`:

```sh
$ git clone https://github.com/next-theme/theme-next-pdf source/lib/pdf
```

### Step 3 &rarr; Set it up…
