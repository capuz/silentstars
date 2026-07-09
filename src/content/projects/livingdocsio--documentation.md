---
repo: "livingdocsIO/documentation"
name: "documentation"
description: "Livingdocs Documentation"
readmeQualityOk: true
url: "https://github.com/livingdocsIO/documentation"
homepage: "https://docs.livingdocs.io"
language: "CSS"
languages: ["CSS"]
languagePcts: [71]
topics: ["documentation"]
stars: 34
forks: 13
openIssues: 0
closedIssues: 0
watchers: 16
contributors: 67
recentReleases: 0
createdAt: "2014-02-28T13:03:39Z"
lastCommitAt: "2026-07-09T20:44:32Z"
lastReleaseAt: "2021-04-13T14:53:11Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 90
undervaluedScore: 55
maintainers: ["livingdocs-automation", "robinbisping", "eileenoo"]
openGraphImageUrl: "https://opengraph.githubassets.com/72efec5a492807022fb989a694feba16bc58aef6f26474b329e4b7c5abc8d26c/livingdocsIO/documentation"
---

# Livingdocs Documentation

## Local Setup

This documentation is built using [Hugo](https://gohugo.io/).

You can run it locally:

```bash
# install hugo
brew install hugo

# install dependencies
npm install

# start the hugo dev server
npm start
```

If you use WSL2 and want a new browser window to open automatically when running the documentation locally, install `wslu`. You can find installation instructions in the [`wslu` documentation](https://wslutiliti.es/wslu/install.html). For example, on Ubuntu in WSL2, run:

```bash
sudo apt install wslu
```

When working with the lunr search code it can be useful to test the real production setup, due to the way we edit the search index for production:

```bash
# build the static site into `./public`
npm run build
# or the uncompressed version
npm run build:fast

# serve the `./public` directory
npm run start:production
```

When editing code you can run `npm run build:fast` in a separate terminal and then refresh the page to see the latest changes. This only takes 1-2 seconds.

## Contribution Guide

### Titles and Subtitles

Always start with `h2` titles in your documents (`h1` should only be used by templates for the page title).…
