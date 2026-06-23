---
repo: "nomadjimbob/mikioplugin"
name: "mikioplugin"
description: "Mikio Plugin adds a heap of layout and Bootstrap 4 elements that can be used on your DokuWiki pages."
url: "https://github.com/nomadjimbob/mikioplugin"
homepage: "http://dokuwiki.org/plugin:mikioplugin"
language: "PHP"
languages: ["PHP"]
languagePcts: [78]
topics: ["bootstrap", "dokuwiki"]
stars: 14
forks: 5
openIssues: 2
closedIssues: 41
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2020-06-08T10:46:09Z"
lastCommitAt: "2026-06-23T23:18:12Z"
lastReleaseAt: "2021-11-12T12:43:22Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "funded"]
healthScore: 77
undervaluedScore: 52
maintainers: ["nomadjimbob", "jorge-leon"]
openGraphImageUrl: "https://opengraph.githubassets.com/6c7351d38c81d527b6d326abcd92b7a2888dfa831caf8a635bf54def1cbbd123/nomadjimbob/mikioplugin"
fundingLinks: ["KO_FI:https://ko-fi.com/nomadjimbob"]
---

Mikio Plugin adds a heap of layout and Bootstrap 4 elements that can be used on your [DokuWiki](http://dokuwiki.org/) pages.

This plugin can be used by itself, however is designed to complement the [Mikio DokuWiki template](http://dokuwiki.org/template:mikio).

## Flexbox Fix

A flexbox fix was applied to the card body element. This may affect existing layouts that relied on the previous (incorrect) formatting. For example, buttons that were unintentionally displayed as `block` elements will now render with their correct inline behavior.

## Updating Styles

You can update the colors used by the elements by editing the `/assets/variables.css` file. From version 2022-10-31 onwards, the theme supports darkmode within browsers.

If you have the [Mikio DokuWiki template](http://dokuwiki.org/template:mikio) 2022-10-31 onwards installed, the `/assets/variables.css` will be ignored as the template adds the variables itself. These can be edited using
**Template Style Settings** in your sites **Administration** page.

## Setting Up

Download the [latest release](https://github.com/nomadjimbob/mikioplugin/releases/latest) and place it in the\
\
:file_folder: dokuwiki\…
