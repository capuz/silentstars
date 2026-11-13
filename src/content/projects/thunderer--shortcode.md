---
repo: "thunderer/Shortcode"
name: "Shortcode"
description: "Advanced shortcode (BBCode) parser and engine for PHP"
readmeQualityOk: true
url: "https://github.com/thunderer/Shortcode"
homepage: "http://kowalczyk.cc"
language: "PHP"
languages: ["PHP"]
languagePcts: [98]
topics: ["php", "shortcode", "parser", "library", "bbcode", "bbcode-parser", "decoda"]
stars: 390
forks: 32
openIssues: 5
closedIssues: 54
watchers: 12
contributors: 6
recentReleases: 0
createdAt: "2015-04-02T12:14:07Z"
lastCommitAt: "2026-11-13T18:36:13Z"
lastReleaseAt: "2016-01-27T19:10:35Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 72
undervaluedScore: 27
maintainers: ["thunderer", "rhukster"]
openGraphImageUrl: "https://opengraph.githubassets.com/894e3bf97bf64690cec0c1215702be37561e00329192cd4aa612dd640ddd705b/thunderer/Shortcode"
---

# Shortcode

Shortcode is a framework agnostic PHP library allowing to find, extract and process text fragments called "shortcodes" or "BBCodes". Examples of their usual syntax and usage are shown below:

```
[user-profile /]
[image width=600]
[link href="http://google.pl" color=red]
[quote="Thunderer"]This is a quote.[/quote]
[text color="red"]This is a text.[/text]
```

The library is divided into several parts, each of them containing logic responsible for different stages and ways of processing data:

- **parsers** extract shortcodes from text and transform them to objects,
- **handlers** transform shortcodes into desired replacements,
- **processors** use parsers and handlers to extract shortcodes, compute replacements, and apply them in text,
- **events** alter the way processors work to provide better control over the whole process,
- **serializers** convert shortcodes from and to different formats like Text, XML, JSON, and YAML.

Each part is described in the dedicated section in this document.

## Installation

There are no required dependencies and all PHP versions from 5.3 up to latest 8.x are tested…
