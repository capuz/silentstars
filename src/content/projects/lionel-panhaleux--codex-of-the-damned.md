---
repo: "lionel-panhaleux/codex-of-the-damned"
name: "codex-of-the-damned"
description: "A website about VtES Strategy"
readmeQualityOk: true
url: "https://github.com/lionel-panhaleux/codex-of-the-damned"
language: "HTML"
languages: ["HTML"]
languagePcts: [86]
stars: 6
forks: 6
openIssues: 2
closedIssues: 27
watchers: 3
contributors: 6
recentReleases: 0
createdAt: "2020-01-03T18:35:40Z"
lastCommitAt: "2026-09-15T08:54:43Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "funded", "fork_magnet"]
healthScore: 91
undervaluedScore: 83
maintainers: ["lionel-panhaleux"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/231644205/e5c8ff00-8fbc-11ea-919a-3babd121500b"
fundingLinks: ["PATREON:https://patreon.com/krcg"]
---

# Codex of the Damned

This site is a compilation of Vampire: the Eternal Struggle strategy resources.
The site is publicly available at [codex-of-the-damned.org](http://www.codex-of-the-damned.org).

Portions of the materials are the copyrights and trademarks of Paradox Interactive AB,
and are used with permission. All rights reserved.
For more information please visit [www.worldofdarkness.com](http://www.worldofdarkness.com.).

## Contributing

Contributions are welcome. Pull Requests will be merged if they respect the general style.
Issues will be dealt with as quickly as possible.

This site uses [Flask](https://flask.palletsprojects.com) and [Babel](http://babel.pocoo.org)
to generate pages dynamically and handle internationalisation.

## Installation

To install a working developpment version of the site, use `pip`:

```bash
python3 -m venv venv
pip install -e ".[dev]"
```

### Translating

Install a PO editor like [POEdit](https://poedit.net), call the following command
to generate the messages in the language you're interested in:

```bash
BABEL_LANG=es make po-update
```

Then open the generated catalog file,
`codex_of_the_damned/translations/es/LC_MESSAGES/messages.po`,…
