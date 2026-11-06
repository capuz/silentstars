---
repo: "mozilla-l10n/firefox-l10n"
name: "firefox-l10n"
description: "Localized messages for Firefox"
readmeQualityOk: true
url: "https://github.com/mozilla-l10n/firefox-l10n"
language: "Fluent"
languages: ["Fluent"]
languagePcts: [100]
stars: 20
forks: 24
openIssues: 1
closedIssues: 5
watchers: 4
contributors: 614
recentReleases: 0
createdAt: "2024-02-26T17:20:50Z"
lastCommitAt: "2026-11-06T13:20:20Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "fork_magnet"]
healthScore: 97
undervaluedScore: 73
maintainers: ["mozilla-pontoon"]
openGraphImageUrl: "https://opengraph.githubassets.com/85d4f604ec49c87206b790e49e9e1d8a59f6c258e8ad9946c055512382abce8c/mozilla-l10n/firefox-l10n"
---

# Firefox Localizations

This repository contains the localized messages for all Firefox locales.

If you’d like to submit translations or suggest improvements to existing
strings please visit us on [Pontoon](https://pontoon.mozilla.org/projects/firefox/).
Changes to translations will not be accepted by pull request
with exceptions for specific locales:
- `it`: Translations committed to repo directly by @flodolo as part of source string localizability review process.
- `ja` and  `ja-JP-mac`: Translations are merged via PR due to legacy constraints.

Issues with a locale should be reported [in Bugzilla](https://bugzilla.mozilla.org/enter_bug.cgi?product=Mozilla%20Localizations)
(select the locale in the component).

## String updates

This repo contains only localized files;
source strings are located in the
[firefox-l10n-source](https://github.com/mozilla-l10n/firefox-l10n-source/)
repository.

Newly translated strings are committed to the `main` branch
via Pontoon’s [translation sync](https://github.com/mozilla/pontoon/blob/main/pontoon/sync/README.md).

## Fluent migration GitHub actions

Fluent migrations copy existing Firefox translations to new strings from previous ones
when…
