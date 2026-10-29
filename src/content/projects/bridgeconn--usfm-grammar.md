---
repo: "Bridgeconn/usfm-grammar"
name: "usfm-grammar"
description: "An elegant USFM parser."
readmeQualityOk: true
url: "https://github.com/Bridgeconn/usfm-grammar"
homepage: "https://usfmgrammar.vachanengine.org/"
language: "JavaScript"
languages: ["JavaScript", "Python"]
languagePcts: [66, 33]
topics: ["parser-generator", "grammar", "usfm-validator", "usfm", "javascript", "usfm-converter", "usfm-grammar", "parser", "usfm-json", "tree-sitter"]
stars: 62
forks: 18
openIssues: 22
closedIssues: 164
watchers: 7
contributors: 11
recentReleases: 0
createdAt: "2017-08-13T01:14:02Z"
lastCommitAt: "2026-10-29T10:37:43Z"
lastReleaseAt: "2020-08-14T00:33:42Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 86
undervaluedScore: 55
maintainers: ["dependabot[bot]", "kavitharaju", "longbored"]
openGraphImageUrl: "https://opengraph.githubassets.com/98645b01d76642cec563b8b2518280d6b068cb090b315073518341181ba0fa9b/Bridgeconn/usfm-grammar"
discussionCount: 4
---

# USFM Grammar
An elegant [USFM](https://docs.usfm.bible) parser and validator built with [tree sitter](https://tree-sitter.github.io/tree-sitter/), which uses a Generalized LR (GLR) parsing algorithm. **Supports USFM 3.x** onward. 

The USFM is parsed into a syntax tree, which may then be futher converted to more easy-to-manipulate file formats that allow for painless extraction of scriptural and other content from the markup. USFM Grammar is also capable of reconverting the generated formats back into USFM.

## Features
- Parses scripture in USFM, USX (as XML) and USJ (as JSON) formats. See [specification docs](https://docs.usfm.bible/usfm/latest/syntax.html) for more information.
- And then can convert to any of USJ, USX, USFM, CSV/TSV or [BibleNLP](https://github.com/BibleNLP/ebible?tab=readme-ov-file#data-format) formats.
- Bindings available for [Python](https://pypi.org/project/usfm-grammar/), [NodeJS](https://www.npmjs.com/package/usfm-grammar) and the [Web](https://www.npmjs.com/package/usfm-grammar-web).
- Command Line Interface (CLI) via the Python package.
- Ability to selectively include or exclude markers in the converted output.
- USFM validation and error…
