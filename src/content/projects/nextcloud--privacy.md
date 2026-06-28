---
repo: "nextcloud/privacy"
name: "privacy"
description: "🔑 The privacy center shows you where your data is stored and who can access it, either because you shared with them or because they are administrators."
url: "https://github.com/nextcloud/privacy"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [95]
topics: ["privacy", "privacy-center", "admin-tools"]
stars: 22
forks: 14
openIssues: 6
closedIssues: 37
watchers: 3
contributors: 254
recentReleases: 0
createdAt: "2019-02-17T23:48:38Z"
lastCommitAt: "2026-06-28T01:47:33Z"
status: "thriving"
tags: ["needs_contributors", "legacy_hero", "fork_magnet"]
healthScore: 95
undervaluedScore: 68
maintainers: ["nextcloud-bot", "dependabot[bot]", "skjnldsv"]
openGraphImageUrl: "https://opengraph.githubassets.com/d44d013287d59473b2d090351fd35bfeded09b392e8fbc7b2a0fc9b24815b3ff/nextcloud/privacy"
---

# :key: Privacy

The privacy center shows you where your data is stored and who can access it, either because you shared with them or because they are administrators.

## Installation

This app is shipped and enabled by default in every Nextcloud instance starting with Nextcloud 16. If you wish to disable this app, go to `Apps`, `Active Apps`, scroll down to find `Privacy` and click `Disable`.

## Building the app

The app can be built by using the provided Makefile by running:

    make

This requires the following things to be present:
* make
* which
* tar: for building the archive
* curl: used if phpunit and composer are not installed to fetch them from the web
* npm: for building and testing everything JS, only required if a package.json is placed inside the **js/** folder

The make command will install or update Composer dependencies if a composer.json is present and also **npm run build** if a package.json is present in the **js/** folder. The npm **build** script should use local paths for build systems and package managers, so people that simply want to build the app won't need to install npm libraries globally, e.g.:

**package.json**:
```json
"scripts": {
    "test":…
