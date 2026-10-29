---
repo: "Draggable/i18n"
name: "i18n"
description: "Lightweight i18n solution for universal JavaScript apps and modules."
readmeQualityOk: true
url: "https://github.com/Draggable/i18n"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [94]
topics: ["internationalization", "i18n", "formbuilder", "universal"]
stars: 9
forks: 3
openIssues: 0
closedIssues: 3
watchers: 2
contributors: 3
recentReleases: 0
createdAt: "2016-06-18T23:36:02Z"
lastCommitAt: "2026-10-29T12:25:51Z"
lastReleaseAt: "2024-10-30T05:06:50Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 75
undervaluedScore: 49
maintainers: ["kevinchappell", "semantic-release-bot"]
openGraphImageUrl: "https://opengraph.githubassets.com/66b80fa0fad4099ca30553a1efba71d2caa68e042eef59b8deaff5cda469e38c/Draggable/i18n"
---

# i18n 

Add multi-lingual support to any JavaScript app or module with this light-weight package. Used by [Formeo](https://formeo.io).

### Features:

- Isomorphic/Universal: works in the browser and in Node (no `fetch` needed when languages are preloaded)
- easy translation of static text files
  - benefits: anyone can translate, no more xliff
  - reduced margin of error.
- Variable support
- Fallback locales and plurals
- TypeScript types included
- Dependency free
- Fast

## Install

```sh
npm install @draggable/i18n
```

## Usage

The default export is a shared singleton instance, `I18N` is the class.

```javascript
import i18n, { I18N } from '@draggable/i18n'

const i18nOptions = {
  extension: '.lang', // extension used by your language files, defaults to ".lang"
  location: 'https://location.of/language/files/', // absolute or relative url to language files
  langs: [
    // locales you would like to be active
    'en-US',
    'pt-BR',
    'de-DE', // will attempt to load `https://location.of/language/files/de-DE.lang` with current config
  ],
  locale: 'en-US', // default locale
  override: {
    'en-US': {
      autocomplete: 'Autofinish', // override individual keys or…
