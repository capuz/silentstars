---
repo: "jsdoc-type-pratt-parser/jsdoc-type-pratt-parser"
name: "jsdoc-type-pratt-parser"
description: "A pratt parser for jsdoc types"
readmeQualityOk: true
url: "https://github.com/jsdoc-type-pratt-parser/jsdoc-type-pratt-parser"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
stars: 27
forks: 6
openIssues: 5
closedIssues: 51
watchers: 4
contributors: 7
recentReleases: 0
createdAt: "2021-02-10T15:13:01Z"
lastCommitAt: "2026-10-13T10:57:25Z"
lastReleaseAt: "2021-05-24T09:56:03Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 95
undervaluedScore: 61
maintainers: ["brettz9", "semantic-release-bot", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/3766644a573706c5b7709cf8514692819740eca23684984ef57b475f2cff6fd7/jsdoc-type-pratt-parser/jsdoc-type-pratt-parser"
---

# Jsdoc Type Pratt Parser

This project is a parser for jsdoc types. It takes jsdoc type expressions like `Array<string>` and creates an abstract
syntax tree (AST) out of it. It is heavily inspired by the existing libraries [catharsis](https://github.com/hegemonic/catharsis) and [jsdoctypeparser](https://github.com/jsdoctypeparser/jsdoctypeparser), but does
not use [PEG.js](https://pegjs.org/), instead it is written as a pratt parser.

You can find some more information about pratt parsers here:
* https://en.wikipedia.org/wiki/Operator-precedence_parser#Pratt_parsing
* http://journal.stuffwithstuff.com/2011/03/19/pratt-parsers-expression-parsing-made-easy/
* https://matklad.github.io/2020/04/13/simple-but-powerful-pratt-parsing.html

## Table of Contents
- [Live Demo](#live-demo)
- [Getting Started](#getting-started)
- [API Documentation](#api-documentation)
- [Available Grammars](#available-grammars)
- [Transforms](#transforms)
- [Traverse](#traverse)
- [Custom Parsers and Stringifiers](#custom-parsers-and-stringifiers)
- [Tests Status](#tests-status)
- [Performance](#performance)
- [Development](#development)

## Live Demo

A simple live demo to test expressions can be found at:…
