---
repo: "itchio/itchio-i18n"
name: "itchio-i18n"
description: "🌏 Translations for the itch.io website"
readmeQualityOk: true
url: "https://github.com/itchio/itchio-i18n"
homepage: "https://weblate.itch.ovh/projects/itchio/"
language: "MoonScript"
languages: ["MoonScript"]
languagePcts: [97]
topics: ["i18n", "itchio", "translations"]
stars: 26
forks: 4
openIssues: 1
closedIssues: 0
watchers: 2
contributors: 419
recentReleases: 0
createdAt: "2019-01-26T09:48:37Z"
lastCommitAt: "2026-07-05T21:00:21Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 72
undervaluedScore: 53
maintainers: ["bombocla7", "ninjum", "Mks4747"]
openGraphImageUrl: "https://opengraph.githubassets.com/bc1ccb0d6cda146df1c9d70a12b101244923642b15299a0c2b6ca3a052cb5b2e/itchio/itchio-i18n"
---

# itch.io Internationalization

This repository stores the internationalization project for the
[itch.io](https://itch.io) website. All source English strings and their
translations are located here. This repository also contains any scripts used
to build translations modules used by the itch.io website to insert localized
strings.

If you'd like to contribute to translations on itch.io then we recommend using
our [Weblate](https://weblate.itch.ovh/projects/itchio/). You can create an
account there and suggest translations. Accepted changes are merged back into
this branch automatically.

## Languages DB

The `languages.json` file lists the identifier and name for all supported
languages on itch.io. Supported languages are available for:

* Site translations
* Project tagging

> Making changes to `language.json`? Please ensure it remains sorted. You can
> use `js -S` to sort the file. Please ensure you use a valid code referenced
> here: https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes

## Translations markup guide

itch.io uses a custom translation markup parser that powers variable
interpolations and formatting of text.

### Interpolation

Variables are inserted with the…
