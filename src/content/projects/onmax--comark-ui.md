---
repo: "onmax/comark-ui"
name: "comark-ui"
description: "Comark UI is a free, open source library built on Comark, with 40+ blocks for docs, reviews, and agent reports."
readmeQualityOk: true
url: "https://github.com/onmax/comark-ui"
homepage: "https://comark-ui.onmax.me"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [98]
topics: ["annotation", "comark", "markdown", "screenshot", "carousel", "comark-plugin", "lightbox", "mdc", "react", "svelte"]
stars: 22
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-10-12T16:07:19Z"
lastCommitAt: "2026-10-29T21:23:59Z"
lastReleaseAt: "2026-10-24T08:14:06Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 47
maintainers: ["onmax", "github-actions[bot]", "vite-hub[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/8a01eed163ce96e6a52ed0f6ba75f327b22163e155f228322bf915e0a51b9333/onmax/comark-ui"
---

Comark UI is a free, open source library built on [Comark](https://comark.dev), with 40+ blocks for docs, reviews, and agent reports. Write tabs, cards, charts, annotated screenshots, and more in Markdown. Install them together with [`comark-ui`](https://github.com/onmax/comark-ui/blob/HEAD/packages/ui), or use individual packages.

[Documentation](https://comark-ui.onmax.me) · [Getting started](https://comark-ui.onmax.me/getting-started/) · [Playground](https://comark-ui.onmax.me/play/) · [Badge builder](https://comark-ui.onmax.me/badges/)

An independent project by [@onmax](https://github.com/onmax).

## Get started

Install Comark UI with the HTML renderer:

```sh
pnpm add comark @comark/html comark-ui
```

```ts
import { createHtmlRenderer } from "@comark/html";
import comarkUi from "comark-ui/html";

const render = createHtmlRenderer(comarkUi());
const html = await render(`
::card{title="Getting started"}
Write your docs in Markdown, with components when you need them.
::
`);
```

Comark UI registers the plugins and components in the order they need. Every plugin is enabled except `include`, which reads files from disk. Pass `false` to disable a plugin, or an object to…
