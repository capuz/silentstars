---
repo: "icpc/ncpc-web"
name: "ncpc-web"
description: "Webpage for the Nordic Collegiate Programming Contest"
readmeQualityOk: true
url: "https://github.com/icpc/ncpc-web"
language: "HTML"
languages: ["HTML"]
languagePcts: [85]
stars: 6
forks: 2
openIssues: 5
closedIssues: 4
watchers: 7
contributors: 9
recentReleases: 0
createdAt: "2019-08-23T03:09:50Z"
lastCommitAt: "2026-10-01T10:24:37Z"
lastReleaseAt: "2023-01-29T10:37:18Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 68
undervaluedScore: 42
maintainers: ["Tagl"]
openGraphImageUrl: "https://opengraph.githubassets.com/b82d2676e83ceef035ff92624bd09043ab238c744b53999d12bf553c7570ef4d/icpc/ncpc-web"
---

# NCPC website

This is a jekyll site.

Given that you have a working ruby installation with the ruby manager `gem`, install dependencies with:

- `gem install jekyll`
- `gem install jekyll-redirect-from`

Run it locally with `jekyll serve`

NCPC data (testdata, judges solutions, problem pdfs and solution slides) are published as releases in the github repo: [https://github.com/icpc/ncpc-web](https://github.com/icpc/ncpc-web).

On 2023-01-29 Måns performed a filter repo to remove all old pdfs, zips and .tar.bz2 files from teh repo (making cloning and deployment very slow). If you had a clone of this repo before that date you can't get the new changes with `git pull` instead you need to do:

```
git fetch
git reset --hard origin/master
```
