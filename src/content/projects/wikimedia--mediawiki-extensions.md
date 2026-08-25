---
repo: "wikimedia/mediawiki-extensions"
name: "mediawiki-extensions"
description: "GitHub mirror of the mediawiki/extensions repository. Development happens at https://gerrit.wikimedia.org. Please see https://www.mediawiki.org/wiki/Developer_account if you wish to contribute."
readmeQualityOk: true
url: "https://github.com/wikimedia/mediawiki-extensions"
homepage: "https://gerrit.wikimedia.org"
language: "Python"
languages: ["Python", "Shell"]
languagePcts: [74, 26]
stars: 46
forks: 16
openIssues: 0
closedIssues: 0
watchers: 15
contributors: 1083
recentReleases: 0
createdAt: "2019-02-10T04:44:20Z"
lastCommitAt: "2026-08-25T04:08:17Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 80
undervaluedScore: 52
maintainers: ["translatewiki", "gyan111", "SomeMWDev"]
openGraphImageUrl: "https://opengraph.githubassets.com/1647b85a0483e42e17ced0edef3da7e3a82d765ddce9168bdec241eddbde6005/wikimedia/mediawiki-extensions"
---

This is the collection of all MediaWiki extensions.

You can check out all MediaWiki extensions by cloning this repository, and then doing `git submodule update --init`.

Several maintenance and utility scripts are included:

* check-entry-points.py - Validate extension entry points.
* check-sync.sh - Compare latest submodule pointers with the master branch of each repo.
* quick-update - Fetch and update submodules in parallel.
* sort-gitmodules.py - Reorder existing .gitmodules
* sync-with-gerrit.py - Find all MediaWiki extensions in gerrit, add as submodules if state is not READONLY, removes any that state: READ_ONLY and rebuild .gitmodules
