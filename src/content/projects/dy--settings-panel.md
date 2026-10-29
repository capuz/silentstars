---
repo: "dy/settings-panel"
name: "settings-panel"
description: "Control panel for app, demo or tests"
readmeQualityOk: true
url: "https://github.com/dy/settings-panel"
homepage: "https://dy.github.io/settings-panel/"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [95]
stars: 73
forks: 3
openIssues: 14
closedIssues: 2
watchers: 4
contributors: 4
recentReleases: 3
createdAt: "2016-07-10T19:19:59Z"
lastCommitAt: "2026-10-29T12:24:34Z"
lastReleaseAt: "2026-10-29T12:24:43Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 53
undervaluedScore: 32
maintainers: ["dy"]
openGraphImageUrl: "https://opengraph.githubassets.com/67f58d1ece636a673bf7f2e5b66d7e048a508ecac32183603e6283bc184f2d93/dy/settings-panel"
---

# settings-panel

Settings panel for tweaking apps, demos or tests. Pass values, get controls.

```js
import settings from 'settings-panel'

const state = settings({
  enabled: true,
  volume: 0.8,
  color: '#4a90d9',
  quality: ['auto', 'low', 'high'],
  reset: () => location.reload()
})

state.volume = 0.5  // UI updates
```

## [Controls](https://github.com/dy/settings-panel/blob/HEAD/docs/controls.md)

Types are inferred from values.

| Type | Inferred from |
|------|---------------|
| `boolean` | `true`, `false` |
| `number` | `123` |
| `slider` | `0.5` (normalized 0-1), or `{ min, max }`; a `[low, high]` value gives two thumbs (`slider:range`) |
| `text` | `'hello'` |
| `textarea` | `'line one\nline two'` (multiline) |
| `color` | `'#hex'`, `'rgb()'`, `'hsl()'` |
| `select` | `['a', 'b', 'c']` or `{ options: [] }` |
| `curve` | `'cubic-bezier(0.4, 0, 0.2, 1)'`; or `{ type: 'curve', value: 'ease-out' }` |
| `button` | `() => {}` |
| `folder` | `'group.key'` dot-notation |

```js
settings({
  // Inferred
  debug: false,
  gain: 0.5,

  // Explicit
  frequency: { type: 'slider', min: 20, max: 20000, scale: 'log' },
  palette: { type: 'color', variant: 'swatches' },
  level: {…
