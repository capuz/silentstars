---
repo: "openemr/website-openemr"
name: "website-openemr"
description: "OpenEMR website"
readmeQualityOk: true
url: "https://github.com/openemr/website-openemr"
language: "PHP"
languages: ["PHP", "SCSS", "CSS"]
languagePcts: [30, 26, 26]
stars: 16
forks: 24
openIssues: 10
closedIssues: 31
watchers: 4
contributors: 13
recentReleases: 0
createdAt: "2018-12-09T10:21:20Z"
lastCommitAt: "2026-09-20T08:47:24Z"
status: "thriving"
tags: ["legacy_hero", "funded", "fork_magnet"]
healthScore: 90
undervaluedScore: 75
maintainers: ["bradymiller", "kojiromike", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/e190f1f4c2b198860cd6e096e224815f396e62be4d7096912be4bad639994eb7/openemr/website-openemr"
fundingLinks: ["GITHUB:https://github.com/openemr"]
---

# OpenEMR Website

This static-site is generated via [hugo](http://gohugo.io) and uses a custom theme to manage the main OpenEMR website.

# Installation

0. [Install hugo(extended version)](http://gohugo.io/getting-started/installing/) and install npm
1. Clone this repo
2. `cd` into the themes/openemr directory
3. Run `npm install`
4. `cd` into base directory of the repo
5. Run `hugo server -F` (need the -F parameter to include future entries, for example, for future lectures) (or `hugo server -F -D` to include draft pages)
6. Navigate to [localhost:1313](http://localhost:1313) in your browser

# Submitting changes

Fork, change, submit PR.

# Theme changes

The OpenEMR theme is built using webpack - `cd` into `themes/openemr` and run
`webpack` (or `webpack --watch` for auto-generation).

# Images

If you add images, we recommend they go in `static/images`.
