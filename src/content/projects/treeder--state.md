---
repo: "treeder/state"
name: "state"
description: "Lightweight JavaScript client side state package using modules."
url: "https://github.com/treeder/state"
language: "JavaScript"
languages: ["JavaScript", "HTML"]
languagePcts: [75, 25]
topics: ["javascript", "javascript-library", "state-management"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 2
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2023-10-04T00:28:13Z"
lastCommitAt: "2026-06-26T21:33:50Z"
status: "thriving"
tags: ["hidden_gem", "funded"]
healthScore: 91
undervaluedScore: 62
maintainers: ["treeder"]
openGraphImageUrl: "https://opengraph.githubassets.com/6892e5ba231099dae886011559f02db123402b61bf7f3f0583a664701a9e5e0d/treeder/state"
fundingLinks: ["GITHUB:https://github.com/treeder"]
---

# state

Super lightweight JavaScript state library using ESM modules. Modern and easy to use.

Uses the standard [Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map) interface.

Features:

- Uses localStorage so state remains intact even if user leaves and comes back.
- Can listen for state changes from anywhere, even across browser tabs!

## Usage

Import this library:

```js
<script type="module">import state from 'https://cdn.jsdelivr.net/gh/treeder/state@3/state.js'</script>
```

Add listeners:

```js
state.addEventListener('car', (e) => {
  console.log('car change event:', e.detail)
  this.car = e.detail.value
})
```

Update state elsewhere:

```js
state.set('car', car)
```

Set state with a Time-To-Live (TTL) in milliseconds (e.g., expires in 5 seconds):

```js
state.set('car', car, { ttl: 5000 })
```

Fetch state on page load:

```js
state.get('car')
```

Delete from the state:

```js
state.delete('car')
```

## Storage Options

By default, the default `state` export uses `localStorage`. You can import the `State` class to create a new instance with a different storage backend:

- `'local'` (default): Uses `localStorage` (persists…
