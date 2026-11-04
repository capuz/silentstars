---
repo: "dblock/run.dblock.org"
name: "run.dblock.org"
description: "Personal running website."
readmeQualityOk: true
url: "https://github.com/dblock/run.dblock.org"
language: "Ruby"
languages: ["Ruby", "JavaScript", "SCSS"]
languagePcts: [30, 27, 23]
stars: 5
forks: 3
openIssues: 1
closedIssues: 3
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2018-02-16T02:49:42Z"
lastCommitAt: "2026-11-04T13:05:15Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 95
undervaluedScore: 83
maintainers: ["dblock"]
openGraphImageUrl: "https://opengraph.githubassets.com/3dcf19ec8e5cb77f3f04fd3e24a2a31acb9e6e0f54f77bf49f52a4b94c59718a/dblock/run.dblock.org"
---

This is my personal running blog, see it at [run.dblock.org](http://run.dblock.org).

It synchronizes runs from Strava to Github Pages. See [Rakefile](https://github.com/dblock/run.dblock.org/blob/HEAD/Rakefile) and [CRON](https://github.com/dblock/run.dblock.org/blob/HEAD/CRON.md) for details.

## Site builds

The Strava update and deployment workflows use Ruby 3.4.12, which has a prebuilt runtime for Ubuntu 26.04. Keep both workflow pins in sync when updating Ruby; newer GitHub runner images may not provide older patch releases.

The site uses Jekyll 4 and explicitly declared plugins, built and deployed by GitHub Actions rather than GitHub Pages' bundled Jekyll runtime. Run `bundle install`, then `bundle exec jekyll serve` locally or `bundle exec jekyll build --profile` to profile a full build. Stylesheets compile with Dart Sass through jekyll-sass-converter 3 and use Sass modules (`@use`), namespaced built-in functions, and `math.div` for arithmetic division. The checked-in Font Awesome and Magnific Popup Sass sources have been migrated too; preserve these module changes when updating vendored styles.

## Activities

Run `rake strava:generate_md` to regenerate activity posts…
