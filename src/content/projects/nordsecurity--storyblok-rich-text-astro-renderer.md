---
repo: "NordSecurity/storyblok-rich-text-astro-renderer"
name: "storyblok-rich-text-astro-renderer"
description: "Storyblok Rich Text Renderer for Astro"
readmeQualityOk: true
url: "https://github.com/NordSecurity/storyblok-rich-text-astro-renderer"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [96]
stars: 38
forks: 9
openIssues: 4
closedIssues: 8
watchers: 5
contributors: 15
recentReleases: 0
createdAt: "2023-06-08T07:38:20Z"
lastCommitAt: "2026-11-06T12:17:50Z"
lastReleaseAt: "2024-01-05T09:41:21Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 86
undervaluedScore: 44
maintainers: ["dependabot[bot]", "edvinasjurele"]
openGraphImageUrl: "https://opengraph.githubassets.com/90ed2fa3862959af5bcae2a0b9acaa3bd35b49c59bc1ac21dac9a65f89f32c6e/NordSecurity/storyblok-rich-text-astro-renderer"
---

# Storyblok Rich Text Renderer for Astro

Renders Storyblok rich text content to Astro elements.

## Demo

If you are in a hurry, check out live demo:

## Motivation

Official Storyblok + Astro integration (`@storyblok/astro`) provides the most basic possibility to render rich-text in Astro. The integration package re-exports the generic rich text utility from `@storyblok/js` package, which is framework-agnostic and universal.

This renderer utility outputs HTML markup, which can be used in Astro via the [set:html](https://docs.astro.build/en/reference/directives-reference/#sethtml) directive:

```js
---
import { renderRichText } from '@storyblok/astro';

const { blok } = Astro.props

const renderedRichText = renderRichText(blok.text)
---

<div set:html={renderedRichText}></div>
```

Nevertheless, it is possible to customise `renderRichText` to some extent by passing the options as the second parameter:

```js
import { RichTextSchema, renderRichText } from "@storyblok/astro";
import cloneDeep from "clone-deep";

const mySchema = cloneDeep(RichTextSchema);

const { blok } = Astro.props;

const renderedRichText = renderRichText(blok.text, {
  schema: mySchema,
  resolver:…
