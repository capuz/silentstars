---
repo: "markmead/alpinejs-character-count"
name: "alpinejs-character-count"
description: "Track the character count of an input with the option to compare against the max length 🔟"
readmeQualityOk: true
url: "https://github.com/markmead/alpinejs-character-count"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
topics: ["alpinejs"]
stars: 14
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2022-06-10T17:25:30Z"
lastCommitAt: "2026-07-28T13:31:07Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 65
undervaluedScore: 33
maintainers: ["markmead", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/3423e378095681848c76784915b30d457dcb05336002dc311881136005e11103/markmead/alpinejs-character-count"
---

# Alpine JS Character Count

A lightweight Alpine.js plugin for tracking and displaying character counts with
support for maximum length validation and remaining character calculations.

## ✨ Features

- 🪶 **Lightweight** - Minimal overhead, maximum performance
- ⚡ **Real-time** - Live character count updates as users type
- 📏 **Flexible limits** - Static numbers, Alpine.js refs, or maxlength
  attributes
- 🎯 **Multiple displays** - Show character count or remaining characters
- 🚫 **Zero dependencies** - Only requires Alpine.js

## 📦 Installation

### With a CDN

```html
<script
  defer
  src="https://unpkg.com/alpinejs-character-count@latest/dist/count.min.js"
></script>

<script defer src="https://unpkg.com/alpinejs@latest/dist/cdn.min.js"></script>
```

### With a Package Manager

```shell
yarn add -D alpinejs-character-count

npm install -D alpinejs-character-count
```

```js
import Alpine from 'alpinejs'
import count from 'alpinejs-character-count'

Alpine.plugin(count)

Alpine.start()
```

## 🚀 Quick Start

1. Add the `x-count` directive to display character counts
2. Use modifiers to specify maximum length or reference elements
3. Customize display with static values…
