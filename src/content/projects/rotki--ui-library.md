---
repo: "rotki/ui-library"
name: "ui-library"
description: "Rotki's vue component library"
readmeQualityOk: true
url: "https://github.com/rotki/ui-library"
homepage: "https://rotki.github.io/ui-library/"
language: "TypeScript"
languages: ["TypeScript", "Vue"]
languagePcts: [71, 27]
topics: ["components", "library", "ui", "vue"]
stars: 6
forks: 7
openIssues: 2
closedIssues: 93
watchers: 3
contributors: 8
recentReleases: 0
createdAt: "2023-03-22T16:07:29Z"
lastCommitAt: "2026-10-29T10:14:59Z"
lastReleaseAt: "2023-09-13T07:49:25Z"
status: "thriving"
tags: ["solo_builder", "fork_magnet"]
healthScore: 99
undervaluedScore: 94
maintainers: ["kelsos"]
openGraphImageUrl: "https://opengraph.githubassets.com/5f98ac85abecc78cdb3a27c1c974b6fdd76469314db9f8b7df1a7929ac39cd2e/rotki/ui-library"
discussionCount: 1
---

# @rotki/ui-library

A Vue component library and design system for rotki

## Getting started

### Installing the library

You can start using the library after installing it from npm along with the Inter and Geist Mono fonts:

```bash
pnpm install -D --save-exact @rotki/ui-library @fontsource-variable/inter @fontsource-variable/geist-mono
```

### Importing the stylesheets

With Tailwind CSS 4 in the app, import the library into your Tailwind entry (see
[Use the @rotki/ui-library Tailwind CSS theme](#use-the-rotkiui-library-tailwind-css-theme)) and the fonts in
the project root (e.g. main.ts):

```typescript
import '@fontsource-variable/inter/opsz.css';
import '@fontsource-variable/geist-mono';
```

Without Tailwind, import the prebuilt stylesheet as well:

```typescript
import '@rotki/ui-library/style.css';
```

The library names the fonts but does not ship them. Inter's `opsz.css` adds the optical size axis, so large
headings get the display cut; `@fontsource-variable/inter` alone is about a third smaller. The static
`@fontsource/inter` and `@fontsource/geist-mono` builds work too. Self-host the fonts rather than loading
them from a CDN, so an offline app still renders them.…
