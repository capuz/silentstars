---
repo: "metonym/svelte-intersection-observer"
name: "svelte-intersection-observer"
description: "Detect if an element is in the viewport using the Intersection Observer API"
readmeQualityOk: true
url: "https://github.com/metonym/svelte-intersection-observer"
homepage: "https://metonym.github.io/svelte-intersection-observer/"
language: "Svelte"
languages: ["Svelte", "TypeScript"]
languagePcts: [47, 38]
topics: ["intersection-observer", "viewport", "lazy-loading", "conditional", "svelte", "svelte-component", "typescript-definitions", "intersection-event"]
stars: 338
forks: 9
openIssues: 1
closedIssues: 13
watchers: 3
contributors: 5
recentReleases: 0
createdAt: "2020-04-06T00:46:00Z"
lastCommitAt: "2026-07-04T23:14:51Z"
lastReleaseAt: "2021-10-05T23:19:16Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 82
undervaluedScore: 35
maintainers: ["metonym"]
openGraphImageUrl: "https://opengraph.githubassets.com/0620be12c383d8656558930559278cb9cd2993a8a9f14cb4f1d02bfdaa971322/metonym/svelte-intersection-observer"
---

# svelte-intersection-observer

> Detect if an element is in the viewport using the [Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API).

Try it in the [Svelte REPL](https://svelte.dev/repl/8cd2327a580c4f429c71f7df999bd51d).

## Installation

```sh
# NPM
npm i svelte-intersection-observer

# pnpm
pnpm i svelte-intersection-observer

# Bun
bun i svelte-intersection-observer

# Yarn
yarn add svelte-intersection-observer

```

## Usage

### Basic

Use the [`bind:this`](https://svelte.dev/docs#bind_element) directive to pass an element reference to the `IntersectionObserver` component.

Then, simply bind to the reactive `intersecting` prop to determine if the element intersects the viewport.

```svelte
<script>
  import IntersectionObserver from "svelte-intersection-observer";

  let element;
  let intersecting;
</script>

<header class:intersecting>
  {intersecting ? "Element is in view" : "Element is not in view"}
</header>

<IntersectionObserver {element} bind:intersecting>
</IntersectionObserver>
```

### Once

Set `once` to `true` for the intersection event to occur only once. The `element` will be unobserved after the first…
