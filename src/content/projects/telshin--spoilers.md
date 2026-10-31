---
repo: "Telshin/Spoilers"
name: "Spoilers"
description: "Mediawiki extension that allows for spoiler tags."
readmeQualityOk: true
url: "https://github.com/Telshin/Spoilers"
language: "PHP"
languages: ["PHP", "JavaScript"]
languagePcts: [57, 29]
stars: 7
forks: 7
openIssues: 0
closedIssues: 15
watchers: 3
contributors: 10
recentReleases: 0
createdAt: "2013-10-23T19:18:04Z"
lastCommitAt: "2026-10-31T15:58:49Z"
lastReleaseAt: "2022-11-23T04:08:34Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 89
undervaluedScore: 68
maintainers: ["Telshin", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/8ea8e9c4086e9c0a298667bd3c31b1e054a7861dbb97d5c57b6c64a8a1937749/Telshin/Spoilers"
---

Spoilers
========
MediaWiki extension that allows for spoiler tags that will hide a block of text. The spoiler button's show/hide message can be customized for each set.

Installation
------------
Requires MediaWiki 1.41 or later.

To install this extension, add the following lines to the end of the LocalSettings.php file:
```
//Spoilers
wfLoadExtension('Spoilers');
```

Usage Example for `{{#spoiler}}`
-------------
```
{{#spoiler:hide=hide_message|spoiler_text}}
{{#spoiler:show=show_message|spoiler_text}}
{{#spoiler:show=show_message|hide=hide_message|spoiler_text}}
{{#spoiler:spoiler_text}}
```

Usage Example for `<spoiler>`
-------------
```
<spoiler show="show_message" hide="hide_message">
spoiler_text
</spoiler>
```
