---
repo: "mizzy/peitho"
name: "peitho"
description: "An HTML-native presentation tool that treats Markdown as the source of truth."
readmeQualityOk: true
url: "https://github.com/mizzy/peitho"
homepage: "https://peitho.gosu.ke"
language: "Rust"
languages: ["Rust", "TypeScript"]
languagePcts: [73, 24]
stars: 43
forks: 3
openIssues: 12
closedIssues: 278
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2026-07-02T08:35:17Z"
lastCommitAt: "2026-10-20T08:49:51Z"
lastReleaseAt: "2026-07-06T12:42:21Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 98
undervaluedScore: 41
maintainers: ["mizzy"]
openGraphImageUrl: "https://opengraph.githubassets.com/d909d2ebf4cc9b79b214034da0aaa2e8df18a223cf8882d3db2176e2e554c5c9/mizzy/peitho"
---

# peitho

An HTML-native presentation tool that treats Markdown as the source of truth.

Peitho is the Greek goddess who presides over the power to move people's hearts with words rather than force — a fitting match for the essence of presentation.

Docs & demos: **[peitho.gosu.ke](https://peitho.gosu.ke/)** — a guide, an examples gallery, and the example decks built and served under `/demo/<name>/`. Auto-deployed on push to `main`; `envchain peitho make deploy-demo` for manual deploys.

## Offline and agent reference

The complete guide is embedded in the `peitho` binary. Run `peitho docs` to list topics, `peitho docs <topic>` to print one Markdown page, or `peitho docs --all` to print the full guide without network access.

## How it works

Content is Markdown. Design is layout HTML plus theme CSS, versioned in git right next to the content. The two never mix — and the layout itself is the schema: each `<slot>` declares what it accepts and how many, and peitho type-checks every slide against its layout at build time. This is the built-in default layout, in its entirety:

```html
<section class="peitho-slide">
  <h1><slot name="title" accepts="inline" arity="1"></slot></h1>…
