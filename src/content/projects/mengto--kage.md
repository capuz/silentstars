---
repo: "MengTo/kage"
name: "kage"
description: "An interactive five-chapter night walk through a Kyoto mountain temple, rendered live in Three.js."
readmeQualityOk: true
url: "https://github.com/MengTo/kage"
homepage: "https://mengto.github.io/kage/"
language: "HTML"
languages: ["HTML"]
languagePcts: [100]
topics: ["creative-coding", "generative-art", "interactive-storytelling", "japanese-design", "threejs", "webgl"]
stars: 295
forks: 54
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-08-08T07:05:07Z"
lastCommitAt: "2026-08-09T04:46:42Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 12
maintainers: ["MengTo"]
openGraphImageUrl: "https://opengraph.githubassets.com/533bf4d1f987ce0f9441749c28178bfb569095acacd5841543411f39279ee5d9/MengTo/kage"
---

# Kage

An interactive five-chapter night walk through a Kyoto mountain temple, rendered live in Three.js and layered with cinematic generated imagery.

[**View the live project**](https://mengto.github.io/kage/) · [**View the source**](https://github.com/MengTo/kage) · [**Read the build prompt**](https://github.com/MengTo/kage/blob/HEAD/PROMPT.md)

## What it does

- Moves a live WebGL camera through a mountain temple as the page scrolls.
- Combines procedural architecture, lantern light, fog, rain, drifting leaves, a vermilion moon, and a restrained bloom pipeline.
- Layers editorial typography, generated scene plates, and alpha-preserving WebP foreground elements over the 3D world, with section-specific fade and blur transitions.
- Includes chapter navigation, a responsive mobile layout, reduced-motion behavior, and a custom cursor for precise pointer devices.

## How it is made

Kage is a deliberately small static site. `index.html` contains the document structure, CSS, procedural scene construction, scroll choreography, and interaction logic. A vendored Three.js r149 build provides WebGL rendering without a package manager or build step.

The temple, torii, lanterns, moon,…
