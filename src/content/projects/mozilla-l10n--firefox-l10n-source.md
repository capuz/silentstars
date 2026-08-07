---
repo: "mozilla-l10n/firefox-l10n-source"
name: "firefox-l10n-source"
description: "Source (en-US) localization messages for Firefox"
readmeQualityOk: true
url: "https://github.com/mozilla-l10n/firefox-l10n-source"
language: "Fluent"
languages: ["Fluent"]
languagePcts: [100]
stars: 5
forks: 5
openIssues: 1
closedIssues: 13
watchers: 4
contributors: 50
recentReleases: 0
createdAt: "2024-01-17T16:57:30Z"
lastCommitAt: "2026-08-07T05:14:26Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "fork_magnet"]
healthScore: 97
undervaluedScore: 84
maintainers: ["github-actions[bot]", "flodolo"]
openGraphImageUrl: "https://opengraph.githubassets.com/62e7136df00d9dcfb5129dd0c126ffcab76b03aa53490fe3529d7eedcc3a2bc8/mozilla-l10n/firefox-l10n-source"
---

# Firefox Localization: Source

This repository contains the source locale messages for Firefox.
They are extracted from the active branches (Nightly, Beta, Release, ESRs)
by a scheduled [GitHub action](https://github.com/mozilla-l10n/firefox-l10n-source/blob/HEAD/.github/workflows/update.yml),
which produces pull requests that are reviewed by the L10n team before merging.

From here, messages are exposed to translators in [Pontoon](https://pontoon.mozilla.org/).

Note that unless otherwise specified,
files in this repository have been processed from their Source Code Form,
and therefore following our [license](https://github.com/mozilla-l10n/firefox-l10n-source/blob/HEAD/LICENSE) (MPL-2.0)
do not necessarily carry a Source Code Form License Notice.
The Source Code Form for each such file is available from
[mozilla/mozilla-firefox/firefox](https://github.com/mozilla-firefox/firefox).

## Adding a New Firefox Version

Before adding a new supported Firefox version, make sure to merge pending update pull requests
(it will avoid the need to rebase existing PRs). Then:

1. Create a local branch.
2. Add the new version to the update configuration in `.github/update-config.json`.
Note…
