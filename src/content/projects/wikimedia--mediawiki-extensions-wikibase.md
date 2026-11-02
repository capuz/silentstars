---
repo: "wikimedia/mediawiki-extensions-Wikibase"
name: "mediawiki-extensions-Wikibase"
description: "🌐 The knowledge base software that drives Wikidata.org. Mirror from https://gerrit.wikimedia.org/g/mediawiki/extensions/Wikibase. See https://www.mediawiki.org/wiki/Developer_access for contributing."
readmeQualityOk: true
url: "https://github.com/wikimedia/mediawiki-extensions-Wikibase"
homepage: "https://wikiba.se"
language: "PHP"
languages: ["PHP"]
languagePcts: [75]
stars: 144
forks: 66
openIssues: 0
closedIssues: 0
watchers: 19
contributors: 253
recentReleases: 0
createdAt: "2012-11-01T19:33:23Z"
lastCommitAt: "2026-11-02T11:35:38Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 70
undervaluedScore: 44
maintainers: ["translatewiki", "codders", "thiemowmde"]
openGraphImageUrl: "https://opengraph.githubassets.com/ed8ba3c1f1a6a38b51d9de74a42a742780b81793bb30bae3a41fbce718e1a665/wikimedia/mediawiki-extensions-Wikibase"
---

- - -
Introduction to Wikibase
====================

The Wikibase.git package is part of the [Wikibase software](http://wikiba.se/) and consists of
multiple MediaWiki extensions and other components.

The package allows for the creation, maintenance, dissemination, and usage of structured data
in MediaWiki.

High level documentation can be found on [wikiba.se](https://wikiba.se/) and [mediawiki.org](https://www.mediawiki.org/wiki/Wikibase).
Lower level documentation can be found on doc.wikimedia.org [here](https://doc.wikimedia.org/Wikibase/master/php/).

## Install

Wikibase depends on various [composer](http://getcomposer.org/) libraries.

Once you have Wikibase in your MediaWiki extensions directory, go to the root of your MediaWiki folder,
and if `composer.local.json` does not yet exist there, copy `composer.local.json-sample` to `composer.local.json`
(see [MediaWiki's Composer documentation](https://www.mediawiki.org/wiki/Composer#Using_composer-merge-plugin)).

Then run:
```bash
composer install
```

If you already ran `composer install` during the installation of MediaWiki, run instead:
```bash
composer update
```

> When using ways to combine MediaWiki with the extension…
