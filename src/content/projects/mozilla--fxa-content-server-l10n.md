---
repo: "mozilla/fxa-content-server-l10n"
name: "fxa-content-server-l10n"
description: "translated strings for Firefox accounts website"
readmeQualityOk: true
url: "https://github.com/mozilla/fxa-content-server-l10n"
language: "Fluent"
languages: ["Fluent"]
languagePcts: [92]
stars: 29
forks: 51
openIssues: 1
closedIssues: 60
watchers: 29
contributors: 536
recentReleases: 0
createdAt: "2014-02-26T00:45:33Z"
lastCommitAt: "2026-07-17T06:00:12Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 99
undervaluedScore: 63
maintainers: ["mozilla-pontoon"]
openGraphImageUrl: "https://opengraph.githubassets.com/da654be00de37a0b4b070213b3447ac6f4e4a04d7019cd32185593a9fe6df7ae/mozilla/fxa-content-server-l10n"
---

# fxa-content-server-l10n

| Group | Results |
|----|----|
| Tests | [](https://github.com/mozilla/fxa-content-server-l10n/actions/workflows/test.yaml) |
| L10n Linters | [](https://github.com/mozilla-l10n/mozl10n-linter/actions/workflows/fxa.yaml)<br>[](https://github.com/mozilla-l10n/mozl10n-linter/actions/workflows/fxa_gettext.yaml) |

This repo (abbreviated as "L10N" in this README) contains all translated/translatable strings for all of the FxA servers (fxa-content-server, fxa-auth-server, etc.). The FxA repository is abbreviated as "SOURCE" in this document.

The string localization is managed in [Pontoon](https://pontoon.mozilla.org/projects/firefox-accounts/) and it pushes changes anytime it likes.

On a regular basis (currently once a week) a [cron job runs](https://github.com/mozilla/fxa-content-server-l10n/blob/main/.github/workflows/l10n_extract.yaml) to extract all the strings from SOURCE and open a PR to merge them into this repository. Someone from the localization team will review that PR for any strings that are confusing to localize and, if there aren't any problems, will merge it. At that point Pontoon sees the changes and strings can be localized from the…
