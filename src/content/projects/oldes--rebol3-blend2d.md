---
repo: "Oldes/Rebol3-Blend2D"
name: "Rebol3-Blend2D"
description: "Blend2D extension for Rebol3 (drawing dialect)"
readmeQualityOk: true
url: "https://github.com/Oldes/Rebol3-Blend2D"
language: "C"
languages: ["C"]
languagePcts: [84]
topics: ["draw", "rebol", "rebol-codec", "rebol-extension", "rebol-lang", "rebol-module", "rebol3", "blend2"]
stars: 5
forks: 2
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2020-11-25T19:19:02Z"
lastCommitAt: "2026-11-27T16:27:46Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "funded"]
healthScore: 82
undervaluedScore: 55
maintainers: ["Oldes"]
openGraphImageUrl: "https://opengraph.githubassets.com/4ef70fc284ecbd7f1a247380db5b5bd77377446944c679acead1ddae9fd97d58/Oldes/Rebol3-Blend2D"
fundingLinks: ["GITHUB:https://github.com/Oldes", "PATREON:https://patreon.com/oldes"]
---

# Rebol/Blend2D

[Blend2D](https://github.com/blend2d/blend2d) extension for [Rebol3](https://github.com/Oldes/Rebol3) (drawing dialect)

## Usage

This extension requires Oldes' version of *Rebol* language interpreter (at least `3.22.5`),
which can be downloaded [here](https://github.com/Oldes/Rebol3/releases).
To use Blend2D's `draw` dialect, the extension must be loaded using:
```rebol
import 'blend2d
```
Once the module is imported, the new `draw` function may be used to draw into any image.
```rebol
>> help draw
USAGE:
     DRAW image commands

DESCRIPTION:
     Draws scalable vector graphics to an image.
     DRAW is a command! value.

ARGUMENTS:
     image         [image! pair!]
     commands      [block!]
```

The dialect is similar but not exactly same like the [original Rebol2 implementation](http://www.rebol.com/r3/docs/view/draw.html) or [Red language draw](https://github.com/red/docs/blob/master/en/draw.adoc).
Not all commands are implemented... it was more considered as a proof of concept.

**For some code examples, visit [test/README.md](https://github.com/Oldes/Rebol3-Blend2D/blob/HEAD/test/README.md).**
