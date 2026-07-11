---
repo: "kojiishi/east_asian_spacing"
name: "east_asian_spacing"
description: "OpenType East Asian Contextual Spacing Build Tools"
readmeQualityOk: true
url: "https://github.com/kojiishi/east_asian_spacing"
language: "Python"
languages: ["Python"]
languagePcts: [98]
topics: ["font", "opentype", "cjk"]
stars: 45
forks: 2
openIssues: 4
closedIssues: 4
watchers: 3
contributors: 2
recentReleases: 0
createdAt: "2019-03-30T17:03:41Z"
lastCommitAt: "2026-07-11T05:56:46Z"
lastReleaseAt: "2021-07-28T00:27:26Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 85
undervaluedScore: 39
maintainers: ["dependabot[bot]", "kojiishi"]
openGraphImageUrl: "https://opengraph.githubassets.com/4b9156200ce021c25ef5cdf3eda7072447cd2c521a0dc9f7da4b83d16d54abec/kojiishi/east_asian_spacing"
---

# East Asian Contextual Spacing

This directory contains tools for
the OpenType Contextual Half-width Spacing feature
for Japanese/Chinese/Korean typography.

This feature enables the typography described in
[JLREQ 3.1.2 Positioning of Punctuation Marks (Commas, Periods and Brackets)
for Japanese,
and [CLREQ 3.1.6.1 Punctuation Adjustment Space
for Chinese.
Following is a figure from JLREQ:

   title="East Asian contextual spacing examples">

An early discussion at [Adobe CJK Type blog article] and [Part II]
may help to understand the feature better.

[Adobe CJK Type blog article]: https://ccjktype.fonts.adobe.com/2018/04/contextual-spacing.html
[Part II]: https://ccjktype.fonts.adobe.com/2019/04/contextual-spacing-gpos-features-redux.html

### Demo

You can find [sample text here](http://kojiishi.github.io/chws/samples.html).
This sample page uses fonts built with this tool.

### OpenType Font Features

OpenType defines 4 feature tags
for fonts to support this feature:
* The "[`chws`]" feature tag,
and the "[`vchw`]" feature tag as its vertical flow counterpart.
* The "[`halt`]" feature tag,
and the "[`vhal`]" feature tag as its vertical flow counterpart.

All 4 features are…
