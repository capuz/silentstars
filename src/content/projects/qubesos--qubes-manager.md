---
repo: "QubesOS/qubes-manager"
name: "qubes-manager"
description: "Qubes component: manager"
readmeQualityOk: true
url: "https://github.com/QubesOS/qubes-manager"
language: "Python"
languages: ["Python"]
languagePcts: [99]
stars: 56
forks: 82
openIssues: 0
closedIssues: 0
watchers: 8
contributors: 61
recentReleases: 0
createdAt: "2015-02-11T01:27:44Z"
lastCommitAt: "2026-10-29T23:43:32Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "funded", "fork_magnet"]
healthScore: 82
undervaluedScore: 52
maintainers: ["marmarek", "ben-grande", "marmarta"]
openGraphImageUrl: "https://opengraph.githubassets.com/64981187c987860c83422dd9c2d1975d899b951bc55c30e3fb7873d240191c0b/QubesOS/qubes-manager"
fundingLinks: ["OPEN_COLLECTIVE:https://opencollective.com/qubes-os", "CUSTOM:https://www.qubes-os.org/donate"]
---

Qubes Manager
==============

Managing translations
----------------------

### Adding new language

1. Add `i18n/qubesmanager_LANGUAGECODE.ts` (replace `LANGUAGECODE` with actual code,
   for example `es`) to `qubesmanager.pro` - `TRANSLATIONS` setting.
2. Run `make res update_ts`

### Regenerating translation source files (`.ts`)

    make res update_ts

This will keep translated strings, but will add new ones.

### Updating translations

Commit updated `.ts` files into `i18n` directory.

### Pushing translations to transifex
You'll need a token (for your own transifex acount, to configure it just run
tx config once).

tx push -s

### Getting translation from transifex
tx pull

Tests
----------------------

Located in the tests/ directory.

To run qube manager and backup tests:
    python3 test_name.py -v
