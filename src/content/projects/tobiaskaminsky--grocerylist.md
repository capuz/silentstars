---
repo: "tobiasKaminsky/grocerylist"
name: "grocerylist"
description: "Grocery list for Nextcloud"
readmeQualityOk: true
url: "https://github.com/tobiasKaminsky/grocerylist"
language: "PHP"
languages: ["PHP", "Vue"]
languagePcts: [51, 38]
stars: 23
forks: 5
openIssues: 3
closedIssues: 21
watchers: 1
contributors: 6
recentReleases: 1
createdAt: "2020-06-04T18:29:52Z"
lastCommitAt: "2026-11-14T22:02:00Z"
lastReleaseAt: "2026-11-14T21:42:44Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 86
undervaluedScore: 65
maintainers: ["dependabot[bot]", "renovate[bot]", "tobiasKaminsky"]
openGraphImageUrl: "https://opengraph.githubassets.com/668c5386072696deea7ba07b5edc8b0d2d3b074139e65102122bc463a6fc8bed/tobiasKaminsky/grocerylist"
---

# Grocery List
Place this app in **nextcloud/apps/**

## Building the app

The app can be built by using the provided Makefile by running:

    make

This requires the following things to be present:
* make
* which
* tar: for building the archive
* curl: used if phpunit and composer are not installed to fetch them from the web
* npm: for building and testing everything JS, only required if a package.json is placed inside the **js/** folder

The make command will install or update Composer dependencies if a composer.json is present and also **npm run build** if a package.json is present. The npm **build** script should use local paths for build systems and package managers, so people that simply want to build the app won't need to install npm libraries globally, e.g.:

**package.json**:
```json
"scripts": {
    "test": "node node_modules/gulp-cli/bin/gulp.js karma",
    "prebuild": "npm install && node_modules/bower/bin/bower install && node_modules/bower/bin/bower update",
    "build": "node node_modules/gulp-cli/bin/gulp.js"
}
```

## Demo data

To fill a test instance with some example lists (Supermarket, Discount Store, Drugstore, Farmers' Market) with categories and items,…
