---
repo: "googlefonts/chws_tool"
name: "chws_tool"
description: "Add OpenType chws/vchw features to fonts."
readmeQualityOk: true
url: "https://github.com/googlefonts/chws_tool"
language: "HTML"
languages: ["HTML", "Python"]
languagePcts: [52, 45]
topics: ["font", "opentype", "cjk"]
stars: 38
forks: 1
openIssues: 0
closedIssues: 3
watchers: 12
contributors: 10
recentReleases: 0
createdAt: "2021-06-25T17:11:05Z"
lastCommitAt: "2026-07-11T05:56:59Z"
lastReleaseAt: "2021-08-27T20:02:00Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 94
undervaluedScore: 39
maintainers: ["dependabot[bot]", "kojiishi"]
openGraphImageUrl: "https://opengraph.githubassets.com/9acf7abd186416987b56044982cffc698fb92b04fdf212a864733491d3af9c49/googlefonts/chws_tool"
---

# chws_tool

This tool adds the OpenType
[`chws`], [`vchw`], [`halt`], and [`vhal`]
features to OpenType/TrueType fonts when any of these features are missing.
Please see [east-asian-spacing] for details of these features.

This tool uses the [east-asian-spacing] package as its core engine,
and has following advantages:
* Simpler API and command line options.
* Supports CJK fonts at [fonts.google.com] in its built-in [config].

To add new fonts to the supported font list,
please see the [Adding Fonts] section below.

[east-asian-spacing]: https://github.com/kojiishi/east_asian_spacing
[`chws`]: https://docs.microsoft.com/en-us/typography/opentype/spec/features_ae#tag-chws
[`halt`]: https://docs.microsoft.com/en-us/typography/opentype/spec/features_fj#tag-halt
[`vchw`]: https://docs.microsoft.com/en-us/typography/opentype/spec/features_uz#tag-vchw
[`vhal`]: https://docs.microsoft.com/en-us/typography/opentype/spec/features_uz#tag-vhal
[fonts.google.com]: https://fonts.google.com/

## Install

You can install this tool by [pipx] or [uv].
```shell-session
pipx install chws-tool
```
```shell-session
uv tool install chws-tool
```
Using [pip] is also supported, but please be aware that,…
