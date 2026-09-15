---
repo: "Lanfei/playable.js"
name: "playable.js"
description: "A lightweight HTML5 game engine."
readmeQualityOk: true
url: "https://github.com/Lanfei/playable.js"
homepage: "http://lanfei.github.io/playable.js/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
topics: ["html5", "playable", "game-engine", "canvas"]
stars: 17
forks: 3
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2015-03-02T08:15:51Z"
lastCommitAt: "2026-09-15T08:56:04Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 74
undervaluedScore: 40
maintainers: ["Lanfei", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/659d190603ccff85c18a267e646079ebd2d972bb78a38a9989a39c10a2d47d88/Lanfei/playable.js"
---

# playable.js

A lightweight HTML5 game engine.

## Installation

### Webpack/Browserify

```bash
npm install playable.js
```

### Direct `<script>` Include

Simply [download](https://github.com/Lanfei/playable.js/releases) and include with a script tag. `playable` will be registered as a global variable.

### CDN

For prototyping or learning purposes, you can use the latest version with:

```html
<script src="https://cdn.jsdelivr.net/npm/playable.js"></script>
```

For production, we recommend linking to a specific version number and build to avoid unexpected breakage from newer versions:

```html
<script src="https://cdn.jsdelivr.net/npm/playable.js@3.4.5/dist/playable.min.js"></script>
```

You can browse the source of the NPM package at [jsDelivr](https://cdn.jsdelivr.net/npm/playable.js/) or [unpkg](https://unpkg.com/playable.js/).

## Hello World

### JavaScript

```js
let stage = new playable.Stage();
let text = new playable.Text('Hello playable.js');
stage.addChild(text);
```

[Try it on CodePen](https://codepen.io/Lanfei/pen/WPzBLW/left/?editors=0010)

### TypeScript(Recommended)

```typescript
class Main extends playable.Stage {
  
  public constructor() {
    super();…
