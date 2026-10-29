---
repo: "sihlfall/vba-regex"
name: "vba-regex"
description: "A regular expression engine written entirely in VBA"
readmeQualityOk: true
url: "https://github.com/sihlfall/vba-regex"
language: "VBA"
languages: ["VBA", "JavaScript", "Visual Basic 6.0"]
languagePcts: [39, 33, 24]
stars: 24
forks: 7
openIssues: 1
closedIssues: 17
watchers: 2
contributors: 3
recentReleases: 0
createdAt: "2024-07-25T15:48:11Z"
lastCommitAt: "2026-10-29T10:36:45Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 88
undervaluedScore: 42
maintainers: ["sihlfall", "jgbecker"]
openGraphImageUrl: "https://opengraph.githubassets.com/ab8037627a220f24409ba6d01908a916b1b4fb19bfd41af0617ec88ce1ea9f2b/sihlfall/vba-regex"
discussionCount: 1
---

# VbaRegex—A regular expression engine written entirely in VBA

## Overview

VbaRegex is a regular expression engine written entirely in VBA/VB 6. It is intended to support [JavaScript regular expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions). The project started as a VBA translation of [Duktape](https://github.com/svaarala/duktape)'s regex engine, but has since deviated considerably.

## Current status

The engine supports most of the JavaScript regular expression syntax.

Currently _not_ supported are, in particular,

* named backreferences like `\k<name>` (but named capturing groups _are_ supported);
* unicode categories like `\p{L}`.

In line with the JavaScript regex specification, [bounded modifiers](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Modifier) of the form `(?flags1-flags2:...)` are supported. As an extension to the JavaScript specification, we also support unbounded modifiers (such as `(?i)`).

Your experience with case-insensitive matching may vary—that probably depends on which characters are involved. Please do not expect great results for non-latin characters (but give it a…
