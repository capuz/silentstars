---
repo: "cloudfour/elastic-textarea"
name: "elastic-textarea"
description: "A web component for progressively-enhanced auto-expanding textareas"
readmeQualityOk: true
url: "https://github.com/cloudfour/elastic-textarea"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [89]
stars: 38
forks: 1
openIssues: 1
closedIssues: 4
watchers: 3
contributors: 9
recentReleases: 0
createdAt: "2022-04-01T22:26:05Z"
lastCommitAt: "2026-10-11T10:16:13Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 82
undervaluedScore: 52
maintainers: ["dependabot[bot]", "renovate[bot]", "spaceninja"]
openGraphImageUrl: "https://opengraph.githubassets.com/954195bf5049cda807ff99e54e4b667f6b67eb78dcb6a04ad292e9aa038969d1/cloudfour/elastic-textarea"
---

# Elastic Textarea

_A web component for progressively-enhanced auto-expanding textareas._

This web component progressively enhances the native textarea: as a user types in the textarea, its height increases so that its content is never clipped. When the user deletes content in the textarea it shrinks back down to a minimum number of rows.

(Note: if a user manually resizes a textarea it will no longer be elastic.)

## Installation

### NPM

You can install via npm:

```zsh
npm i @cloudfour/elastic-textarea
```

Then you'll need to import the component code:

```js
import "@cloudfour/elastic-textarea";
```

### CDN

Alternately, you can load the script via CDN:

```html
<script
  type="module"
  src="https://unpkg.com/@cloudfour/elastic-textarea/index.min.js"
></script>
```

## Usage

Once the JavaScript has been loaded, you can use `elastic-textarea` in your HTML.

`elastic-textarea` is meant to wrap one or more `textarea` elements. This ensures that before the JS loads and runs, the textarea is still usable.

```html
<elastic-textarea>
  <label>
    Textarea 1
    <textarea name="textarea-1"></textarea>
  </label>
</elastic-textarea>
```

If multiple `textarea` elements are…
