---
repo: "wikimedia/mediawiki-extensions-RevisionSlider"
name: "mediawiki-extensions-RevisionSlider"
description: "Github mirror of MediaWiki extension RevisionSlider - our actual code is hosted with Gerrit (please see https://www.mediawiki.org/wiki/Developer_access for contributing)"
readmeQualityOk: true
url: "https://github.com/wikimedia/mediawiki-extensions-RevisionSlider"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [89]
topics: ["mediawiki-extension", "revisionslider-extension"]
stars: 10
forks: 9
openIssues: 0
closedIssues: 0
watchers: 8
contributors: 66
recentReleases: 0
createdAt: "2016-04-18T11:53:14Z"
lastCommitAt: "2026-07-18T05:39:53Z"
status: "thriving"
tags: ["legacy_hero", "fork_magnet"]
healthScore: 77
undervaluedScore: 64
maintainers: ["translatewiki", "umherirrender", "jdforrester"]
openGraphImageUrl: "https://opengraph.githubassets.com/e87bd92c333d2f9388e11ab11837404ba8c8c0f9c2010c0c4f3dd14eadb76d72/wikimedia/mediawiki-extensions-RevisionSlider"
---

# RevisionSlider extension

This MediaWiki extension shows a slider allowing selecting and comparing of revisions on a diff page

## Installation
Check out this extension into the `extensions` folder of your MediaWiki installation and add the following line to your `LocalSettings.php`:

    wfLoadExtension( 'RevisionSlider' );

## Tests
Before executing tests run the following in the root directory of the extension once:

    composer install
    npm install

For the tests run:

    composer test
    node_modules/.bin/grunt test

## QUnit Tests
See https://www.mediawiki.org/wiki/Manual:JavaScript_unit_testing#Run_the_tests

## Browser Tests
See tests/selenium/README.md
