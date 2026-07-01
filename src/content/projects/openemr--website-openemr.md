---
repo: "openemr/website-openemr"
name: "website-openemr"
description: "OpenEMR website"
url: "https://github.com/openemr/website-openemr"
language: "SCSS"
languages: ["SCSS", "CSS", "PHP"]
languagePcts: [31, 31, 22]
stars: 15
forks: 23
openIssues: 19
closedIssues: 17
watchers: 4
contributors: 15
recentReleases: 0
createdAt: "2018-12-09T10:21:20Z"
lastCommitAt: "2026-07-01T07:06:06Z"
status: "thriving"
tags: ["legacy_hero", "funded", "fork_magnet"]
healthScore: 82
undervaluedScore: 71
maintainers: ["kojiromike", "dependabot[bot]", "stephenwaite"]
openGraphImageUrl: "https://opengraph.githubassets.com/40b39250a677fcb4e8494829385937b51ed3d37b8bb57af445afea0cbc2054df/openemr/website-openemr"
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
