---
repo: "telerik/kendo-themes"
name: "kendo-themes"
description: "Monorepo for SASS-based Kendo UI themes"
readmeQualityOk: true
url: "https://github.com/telerik/kendo-themes"
homepage: "https://www.telerik.com/design-system/docs/"
language: "HTML"
languages: ["HTML", "SCSS"]
languagePcts: [62, 20]
topics: ["kendo-ui", "sass", "scss", "kendo"]
stars: 159
forks: 67
openIssues: 170
closedIssues: 1361
watchers: 50
contributors: 75
recentReleases: 0
createdAt: "2018-01-29T15:44:58Z"
lastCommitAt: "2026-09-08T08:15:47Z"
lastReleaseAt: "2022-01-24T10:41:57Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 97
undervaluedScore: 45
maintainers: ["kirchoni", "zhpenkov", "kendo-bot"]
openGraphImageUrl: "https://opengraph.githubassets.com/eda6fe702ea62c890fbeced91194a65a59643a5e480aa4ef969e09027ae6cc99/telerik/kendo-themes"
discussionCount: 16
---

# Kendo UI Themes Monorepo

`kendo-themes` is an [Nx](https://nx.dev/)-managed monorepo for all Kendo UI themes that are used across the Kendo UI suites and Telerik UI for Blazor. The themes are built with sass using scss syntax. The syntax is compatible with both `node-sass` and `dart-sass`, as we currently do not use the sass module system. Browser-specific properties are generated at build-time through [PostCSS autoprefixer](https://github.com/postcss/autoprefixer).

## Setup

* Make sure you have Node v20 or later.
* Clone the repo and run `npm ci` to install dependencies.

## Development Server

To run it, execute `npm start` and navigate to <http://localhost:3000/>

## Building Packages

The following npm commands are available for building the themes:

* To build all themes run `npm run sass`.
* To build all swatches run `npm run sass:dist`.

There are additional commands, which can be found in [`package.json`](https://github.com/telerik/kendo-themes/blob/HEAD/package.json) and [`gulpfile.js`](https://github.com/telerik/kendo-themes/blob/HEAD/gulpfile.js).

## Directory structure

* [build](https://github.com/telerik/kendo-themes/blob/HEAD/build) -- various bash scripts
*…
