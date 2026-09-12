---
repo: "LiteraryUniverse/intl-web"
name: "intl-web"
description: "Translation files for Literary Universe."
readmeQualityOk: true
url: "https://github.com/LiteraryUniverse/intl-web"
homepage: "https://crowdin.com/project/literary-universe"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
topics: ["translation", "l10n", "localization", "i18n", "internationalization", "translations"]
stars: 5
forks: 4
openIssues: 0
closedIssues: 1
watchers: 2
contributors: 6
recentReleases: 0
createdAt: "2016-10-23T17:04:41Z"
lastCommitAt: "2026-09-12T08:04:08Z"
lastReleaseAt: "2022-10-08T09:56:19Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "funded"]
healthScore: 99
undervaluedScore: 94
maintainers: ["StorytellerCZ", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/047c619ea2b686f4d531cac706a750ad6aeda9842a09affe6c3abbef6800aa79/LiteraryUniverse/intl-web"
fundingLinks: ["GITHUB:https://github.com/StorytellerCZ", "CUSTOM:https://www.literaryuniverse.com/plans"]
---

# Literary Universe intl-web

Localization for the Literary Universe web app. Translations are managed in our
self-hosted **[Weblate](https://trs.literaryuniverse.com)** (migrated from
Crowdin, 2026-05). Head there to start translating — no Git knowledge needed.

Questions or a mistake in the source text? [Open an issue](https://github.com/LiteraryUniverse/intl-web/issues/new/choose).

## Structure

Everything is **JSON** (there are no `.js` source files anymore):

- `en/<module>.json` — the English **source of truth**. Only English is edited
  here (via PR); every other locale is translated in Weblate, which writes
  translations back as PRs to `master`.
- `<locale>/<module>.json` — per-locale translations (Weblate-managed).
- `<locale>/index.json` — **generated, do not hand-edit.** The merged runtime
  bundle the app fetches. Regenerated and committed by CI (`build-index`
  workflow) on every push to `master`.
- 8 namespaces are kept **out** of `index.json` and lazy-loaded on demand:
  `faq`, `comparisons`, `signup`, `the_way`, `cookieconsent`, `tours`,
  `eventSignup`, `sharingCanvas`.

## Build

`scripts/buildIndex.mjs` is the single source of truth for merging
`<module>.json`…
