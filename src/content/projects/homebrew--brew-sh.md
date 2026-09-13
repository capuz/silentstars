---
repo: "Homebrew/brew.sh"
name: "brew.sh"
description: "🔖 The Homebrew homepage"
readmeQualityOk: true
url: "https://github.com/Homebrew/brew.sh"
homepage: "https://brew.sh"
language: "HTML"
languages: ["HTML", "SCSS"]
languagePcts: [50, 45]
topics: ["homebrew", "jekyll", "github-pages", "transifex", "webpage", "translation"]
stars: 145
forks: 146
openIssues: 0
closedIssues: 64
watchers: 22
contributors: 181
recentReleases: 0
createdAt: "2013-07-18T23:33:14Z"
lastCommitAt: "2026-09-13T08:30:14Z"
status: "thriving"
tags: ["legacy_hero", "funded", "fork_magnet"]
healthScore: 99
undervaluedScore: 53
maintainers: ["dependabot[bot]", "BrewTestBot", "MikeMcQuaid"]
openGraphImageUrl: "https://opengraph.githubassets.com/533397598d15475b3dc4826506ab3313fd6bb1102a87a1f6ae95d2b41702c16b/Homebrew/brew.sh"
fundingLinks: ["GITHUB:https://github.com/Homebrew", "OPEN_COLLECTIVE:https://opencollective.com/homebrew", "PATREON:https://patreon.com/homebrew"]
---

# brew.sh

The webpage uses [Jekyll](https://github.com/jekyll/jekyll). The template for
the index is at `_layouts/index.html`.

## Translations

### GitHub Pull Request

If you want to add a new translation, follow these steps:

1. Copy `index_fr.html` to `index_{langcode}.html` and update its `lang` and `permalink` values.
2. Copy `_data/locales/en.yml` to `_data/locales/{langcode}.yml` and update its initial language code.
3. Change the values of the English strings to the new, translated language strings.

You can see the translated webpage by running `bundle install` and `bundler exec jekyll serve`, after executing it open
<http://localhost:4000/> and switch to your language.
