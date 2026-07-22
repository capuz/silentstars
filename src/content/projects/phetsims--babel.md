---
repo: "phetsims/babel"
name: "babel"
description: "This repo contains the translated strings for PhET's simulations."
readmeQualityOk: true
url: "https://github.com/phetsims/babel"
homepage: "http://scenerystack.org/"
language: "Fluent"
languages: ["Fluent"]
languagePcts: [100]
topics: ["scenerystack"]
stars: 5
forks: 10
openIssues: 3
closedIssues: 19
watchers: 7
contributors: 20
recentReleases: 0
createdAt: "2015-01-06T21:50:50Z"
lastCommitAt: "2026-07-22T06:10:02Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 82
undervaluedScore: 87
maintainers: ["phet-dev"]
openGraphImageUrl: "https://opengraph.githubassets.com/f3568917ea1c65f24df5a185b3658185e017939823dae9831dcf29eae5192579/phetsims/babel"
---

babel
=====

This repo contains the translated strings for PhET's simulations. The strings are submitted to this repository via a
web-based utility. If you are interested in translating PhET simulations, please see
https://phet.colorado.edu/en/for-translators.

By PhET Interactive Simulations
https://phet.colorado.edu/

### localeData

We have a localeData.json file that is the ground truth for information about the locales that we support.
This is a critical file, since simulation builds always use the tip of babel's main branch to build. Be careful
about modifying this file!

If you modify localeData.json:

1. Run updateLocaleInfo.js (see documentation there). It will update information in various legacy files (e.g.
   localeInfo).
2. Notify the responsible developers for rosetta, weddell, yotta, and the website that localeData/localeInfo were
   updated.

Notes about the format and data:

Locale data was originally based on Java's Locale object, but has been modified. Essentially each locale has the
following data:

- locale: Either in the format `xx` or `xx_XX` (ISO-639-1 with 2-letter country code optional). Sometimes these do not
  match with ISO-639-1, we have had to add…
