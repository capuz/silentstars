---
repo: "scribeocr/scribe.js"
name: "scribe.js"
description: "JavaScript OCR and text extraction for images and PDFs."
readmeQualityOk: true
url: "https://github.com/scribeocr/scribe.js"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [99]
topics: ["javascript", "ocr", "tesseract", "webassembly", "mcp"]
stars: 300
forks: 21
openIssues: 24
closedIssues: 24
watchers: 3
contributors: 4
recentReleases: 0
createdAt: "2024-08-15T06:41:32Z"
lastCommitAt: "2026-07-04T22:20:33Z"
lastReleaseAt: "2024-09-30T07:30:36Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 89
undervaluedScore: 35
maintainers: ["Balearica"]
openGraphImageUrl: "https://opengraph.githubassets.com/9a777437f51e73b957b893340b68ef6dd2a52f4d9a388067e792b10fc31fb3af/scribeocr/scribe.js"
discussionCount: 6
---

# Scribe.js
Scribe.js is a JavaScript library that performs OCR and extracts text from images and PDFs.  

Common use cases:
1. Recognize text from images.
2. Extract text from user-uploaded `.pdf` files.
	1. If the `.pdf` file is already text-native, scribe.js can extract the existing text.
	2. If the `.pdf` file is image-native, scribe.js can recognize text using OCR.
3. Write `.pdf` files that include a high-quality invisible text layer.
	1. scribe.js can insert text into an existing `.pdf` file, making it searchable.

Scribe.js is a library intended for developers.  End users who want to scan documents should see the officially-supported GUI at [scribeocr.com](https://scribeocr.com/) (repo [here](https://github.com/scribeocr/scribeocr)).

# Setup
Install from `npm` by running the following:
```sh
npm i scribe.js-ocr
```

Scribe.js is written in JavaScript using ESM, so can be imported directly from browser or Node.js JavaScript code without a build step.

```js
// Node.js, or in the browser with a bundler
import scribe from 'scribe.js-ocr';
// In the browser without a bundler (import map or relative path):
import scribe from 'node_modules/scribe.js-ocr/scribe.js';
```

The…
