---
repo: "wikimedia/mediawiki-extensions-VisualEditor"
name: "mediawiki-extensions-VisualEditor"
description: "This is a mirror from https://gerrit.wikimedia.org/g/mediawiki/extensions/VisualEditor. See https://www.mediawiki.org/wiki/Developer_access for contributing."
readmeQualityOk: true
url: "https://github.com/wikimedia/mediawiki-extensions-VisualEditor"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [87]
topics: ["visualeditor", "wikitext", "mediawiki"]
stars: 84
forks: 52
openIssues: 0
closedIssues: 0
watchers: 10
contributors: 183
recentReleases: 0
createdAt: "2012-11-01T19:33:14Z"
lastCommitAt: "2026-09-01T08:06:16Z"
status: "thriving"
tags: ["legacy_hero", "fork_magnet"]
healthScore: 80
undervaluedScore: 48
maintainers: ["kemayo", "translatewiki", "edg2s"]
openGraphImageUrl: "https://opengraph.githubassets.com/95714e2f4d254709670a45c3335f3c9bff70bbf7dab8dfbc4d98722fa4769286/wikimedia/mediawiki-extensions-VisualEditor"
---

# VisualEditor

VisualEditor provides a visual editor for wiki pages. It is written in
JavaScript and runs in a web browser.

It uses the Parsoid parser to convert wikitext documents to annotated HTML
which the VisualEditor is able to load, modify and emit back to Parsoid at
which point it is converted back into wikitext.

For more information about these projects, check out the [VisualEditor][]
and [Parsoid][] pages on mediawiki.

## Developing and installing

For information on installing VisualEditor on a local wiki, please
see <https://www.mediawiki.org/wiki/Extension:VisualEditor>

For information about running tests and contributing code to VisualEditor,
see [CONTRIBUTING.md](https://github.com/wikimedia/mediawiki-extensions-VisualEditor/blob/HEAD/CONTRIBUTING.md).  Patch submissions are reviewed and managed with
[Gerrit][].  There is also [API documentation][] available for VisualEditor.

## Terminology

* CE: ContentEditable
* DM: Data model
* Invocation: Here the act of calling a template from a page, visible as e.g. `{{reflist}}` in the wikitext.
* MW: MediaWiki
* Page: See <https://www.mediawiki.org/wiki/OOUI/Layouts/Booklets_and_Pages>
* Parameter: A template…
