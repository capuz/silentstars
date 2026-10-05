---
repo: "github/task-lists-element"
name: "task-lists-element"
description: "Drag and drop task list items."
readmeQualityOk: true
url: "https://github.com/github/task-lists-element"
homepage: "https://github.github.io/task-lists-element/examples/"
language: "TypeScript"
languages: ["TypeScript", "JavaScript"]
languagePcts: [69, 26]
topics: ["web-components", "custom-elements"]
stars: 152
forks: 24
openIssues: 4
closedIssues: 2
watchers: 233
contributors: 247
recentReleases: 0
createdAt: "2018-04-25T23:05:39Z"
lastCommitAt: "2026-10-05T10:47:53Z"
lastReleaseAt: "2020-06-04T17:16:33Z"
status: "thriving"
tags: ["legacy_hero", "community_watch"]
healthScore: 81
undervaluedScore: 33
maintainers: ["dependabot[bot]", "TylerJDev", "Copilot"]
openGraphImageUrl: "https://opengraph.githubassets.com/bac9dcbf4864b488562ae92a4ee59f5c4a2e5d1037606dc55d44871e133ae0ac/github/task-lists-element"
---

# &lt;task-lists&gt; element

Drag and drop task list items.

## Installation

```
$ npm install --save @github/task-lists-element
```

## Usage

### Script

Import as a module:

```js
import '@github/task-lists-element'
```

With a script tag:

```html
<script type="module" src="./node_modules/@github/task-lists-element/dist/task-lists-element.js">
```

### Markup

```html
<task-lists sortable>
  <ul class="contains-task-list">
    <li class="task-list-item">
      <input type="checkbox" class="task-list-item-checkbox">
      Hubot
    </li>
    <li class="task-list-item">
      <input type="checkbox" class="task-list-item-checkbox">
      Bender
    </li>
  </ul>

  <ul class="contains-task-list">
    <li class="task-list-item">
      <input type="checkbox" class="task-list-item-checkbox">
      BB-8
    </li>
    <li class="task-list-item">
      <input type="checkbox" class="task-list-item-checkbox">
      WALL-E
    </li>
  </ul>
</task-lists>
```

## Events

```js
const list = document.querySelector('task-lists')

list.addEventListener('task-lists-check', function(event) {
  const {position, checked} = event.detail
  console.log(position, checked)
})…
