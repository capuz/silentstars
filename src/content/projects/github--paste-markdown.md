---
repo: "github/paste-markdown"
name: "paste-markdown"
description: "Paste spreadsheet cells as a Markdown table."
readmeQualityOk: true
url: "https://github.com/github/paste-markdown"
homepage: "https://github.github.com/paste-markdown/examples/"
language: "JavaScript"
languages: ["JavaScript", "TypeScript"]
languagePcts: [54, 44]
topics: ["markdown", "clipboard"]
stars: 234
forks: 47
openIssues: 15
closedIssues: 3
watchers: 7
contributors: 250
recentReleases: 0
createdAt: "2018-09-17T22:34:35Z"
lastCommitAt: "2026-10-05T10:46:56Z"
lastReleaseAt: "2021-08-04T11:04:31Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 76
undervaluedScore: 32
maintainers: ["dependabot[bot]", "TylerJDev", "liuliu-dev"]
openGraphImageUrl: "https://opengraph.githubassets.com/e34cbd6f43213ce8a98bf1d9038829baf80ae2f01ae6734f4821f9d399ebc6ac/github/paste-markdown"
---

# Paste Markdown objects

- Paste spreadsheet cells and HTML tables as a Markdown tables.
- Paste URLs on selected text as Markdown links.
- Paste text containing links as text containing Markdown links.
- Paste image URLs as Markdown image links.
- Paste markdown as markdown. See [`@github/quote-selection`/Preserving markdown syntax](https://github.com/github/quote-selection/tree/9ae5f88f5bc3021f51d2dc9981eca83ce7cfe04f#preserving-markdown-syntax) for details.

## Installation

```
$ npm install @github/paste-markdown
```

## Usage

```js
import {subscribe} from '@github/paste-markdown'

// Subscribe the behavior to the textarea.
subscribe(document.querySelector('textarea[data-paste-markdown]'))
```

Using a library like [selector-observer][so], the behavior can automatically
be applied to any element matching a selector.

[so]: https://github.com/josh/selector-observer

```js
import {observe} from 'selector-observer'
import {subscribe} from '@github/paste-markdown'

// Subscribe the behavior to all matching textareas.
observe('textarea[data-paste-markdown]', {subscribe})
```

### Excluding `<table>`s

Some `<table>`s are not meant to be pasted as markdown; for example, a file…
