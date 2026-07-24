---
repo: "wikimedia/mediawiki-extensions-WikimediaEvents"
name: "mediawiki-extensions-WikimediaEvents"
description: "This is a mirror from https://gerrit.wikimedia.org/g/mediawiki/extensions/WikimediaEvents/. See https://www.mediawiki.org/wiki/Developer_access for contributing."
readmeQualityOk: true
url: "https://github.com/wikimedia/mediawiki-extensions-WikimediaEvents"
language: "PHP"
languages: ["PHP", "JavaScript"]
languagePcts: [63, 36]
stars: 15
forks: 2
openIssues: 0
closedIssues: 0
watchers: 8
contributors: 122
recentReleases: 0
createdAt: "2013-10-07T18:52:56Z"
lastCommitAt: "2026-07-23T06:06:55Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 78
undervaluedScore: 58
maintainers: ["micgro42", "umherirrender", "sgimeno"]
openGraphImageUrl: "https://opengraph.githubassets.com/0a135514bee50331457b6b906a808a7dc6211f803add9f4a42c49f995420ec1a/wikimedia/mediawiki-extensions-WikimediaEvents"
---

# WikimediaEvents

WikimediaEvents houses Wikimedia-specific instrumentation code utilizing EventLogging.

This extension was previously known as 'CoreEvents'; it was renamed so that its name properly
reflects its scope, which is not specific to MediaWiki core.

Although the code in this extension was developed with Wikimedia use-cases in mind, you may find
that the functionality it implements is useful. You are welcome to use and adapt this extension
under the terms of its license.

## Ownership

The infrastructure that delivers the instruments is currently maintained by the [Data Products
team](https://www.mediawiki.org/wiki/Data_Products).

The owners of individual instruments is documented in [OWNERS.md](https://github.com/wikimedia/mediawiki-extensions-WikimediaEvents/blob/HEAD/OWNERS.md).

Indeed, when you create a new instrument, you are expected to document the ownership of your
instrument. This expectation is enforced by the [OwnersStructureTest PHPUnit
test](https://github.com/wikimedia/mediawiki-extensions-WikimediaEvents/blob/HEAD/tests/phpunit/OwnersStructureTest.php), which will fail if the files that make up the
instrument aren't listed alongside contact details for…
