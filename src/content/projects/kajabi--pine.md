---
repo: "Kajabi/pine"
name: "pine"
description: "Pine Design System and Documentation"
readmeQualityOk: true
url: "https://github.com/Kajabi/pine"
homepage: "https://pine-design-system.netlify.app/"
language: "TypeScript"
languages: ["TypeScript", "MDX"]
languagePcts: [65, 21]
stars: 11
forks: 1
openIssues: 0
closedIssues: 0
watchers: 4
contributors: 27
recentReleases: 0
createdAt: "2022-09-19T13:27:09Z"
lastCommitAt: "2026-10-21T21:15:13Z"
lastReleaseAt: "2024-02-22T21:28:00Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 89
undervaluedScore: 66
maintainers: ["QuintonJason", "pixelflips", "kajabi-bot"]
openGraphImageUrl: "https://opengraph.githubassets.com/7f252c3302be6bd2433410554764eee73fdace43b5ccaa6b0e2b63413c6f012d/Kajabi/pine"
---

> Pine is a design system that includes the building blocks necessary to create beautiful and accessible user interfaces and experiences. Our library of tools comes with design tokens in the form of CSS custom properties and web components that can be added to any existing project. Created by Kajabi.

## Setup

Pine can be added to any project via CDN. Add the following link and script tags to the `<head>`:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@pine-ds/core@[VERSION]/dist/pine-core/pine-core.css" />
<script type="module" src="https://cdn.jsdelivr.net/npm/@pine-ds/core@[VERSION]/dist/pine-core/pine-core.esm.js"></script>
<script nomodule src="https://cdn.jsdelivr.net/npm/@pine-ds/core@[VERSION]/dist/pine-core/index.esm.js"></script>
```

Replace `[VERSION]` with the desired version number. For example, version 2.0.0 can be accessed as `core@2.0.0`. If the latest version is desired, use `core@latest`.

To use the components within React projects, they must also be installed via npm:

```
npm install @pine-ds/react
```

## Usage

As Pine components are web components, they can be used as simply as any other HTML tag. For example, to add an accent button…
