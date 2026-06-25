---
repo: "mozilla-l10n/firefox-l10n"
name: "firefox-l10n"
description: "Localized messages for Firefox"
url: "https://github.com/mozilla-l10n/firefox-l10n"
language: "Fluent"
languages: ["Fluent"]
languagePcts: [100]
stars: 16
forks: 21
openIssues: 1
closedIssues: 4
watchers: 4
contributors: 510
recentReleases: 0
createdAt: "2024-02-26T17:20:50Z"
lastCommitAt: "2026-06-25T06:40:33Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "fork_magnet"]
healthScore: 96
undervaluedScore: 75
maintainers: ["mozilla-pontoon", "flodolo", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/1bc14f5adf5106cd313c4f38bac9aaed6270937f2bb7c294aa934a409783374e/mozilla-l10n/firefox-l10n"
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
