---
repo: "MattOpen/moTimeline"
name: "moTimeline"
description: "Responsive two-column timeline layout library — plain JavaScript, zero dependencies, MIT licensed."
readmeQualityOk: true
url: "https://github.com/MattOpen/moTimeline"
homepage: "https://mattopen.github.io/moTimeline/"
language: "JavaScript"
languages: ["JavaScript", "HTML"]
languagePcts: [65, 22]
topics: ["javascript", "npm-package", "responsive-layout", "timeline", "two-column", "vanilla-js", "mattopen"]
stars: 5
forks: 0
openIssues: 1
closedIssues: 11
watchers: 2
contributors: 2
recentReleases: 10
createdAt: "2014-09-06T18:59:28Z"
lastCommitAt: "2026-11-05T08:05:55Z"
lastReleaseAt: "2026-11-03T15:52:45Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "release_machine"]
healthScore: 82
undervaluedScore: 72
maintainers: ["MattOpen"]
openGraphImageUrl: "https://opengraph.githubassets.com/645b924fc535a4962533fa76f582b9bc2c4d19de6f3e9943be3f4a017a06464d/MattOpen/moTimeline"
---

# moTimeline

Responsive timeline layout library for JavaScript — four layouts, zero dependencies, MIT licensed.
Works with any framework or a plain `<script>` tag.

**[Live demo & docs → mattopen.github.io/moTimeline](https://mattopen.github.io/moTimeline/)**

---

## Features

- **Zero dependencies** — no jQuery, no frameworks required
- **Four layouts, one option** — `layout: 'fill'` fills the shorter column, `'rows'` alternates card and date across the spine, `'stacked'` keeps one column with a date gutter; `mirrorText` mirrors the right-hand column. See **[Layouts](#layouts)**.
- **Responsive** — two columns on desktop, single column on mobile
- **Configurable breakpoints** — control column count at xs / sm / md / lg
- **Badges & arrows** — numbered badges on the center line, directional arrows
- **Optional theme** — `theme: 'default'` gives a built-in card theme with image banners and overlapping avatars; `theme: 'gap'` gives your own cards only the spacing; without a theme cards sit flush (masonry)
- **CSS custom properties** — override colors and sizes with one line of CSS
- **Category filtering** — tag items with `categories` and call `filterByCategory()` to show/hide by…
