---
repo: "dotside-studios/freshcoat"
name: "freshcoat"
description: "Create designs that scale.  An open-source editor, template format, and rendering engine for cards, badges, certificates, and more."
readmeQualityOk: true
url: "https://github.com/dotside-studios/freshcoat"
homepage: "https://freshcoat.dotsidestudios.com"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
topics: ["batch-processing", "canvaskit", "data-driven-design", "design-editor", "design-tools", "figma-plugin", "image-generation", "pdf-generation", "print-design", "skia"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 4
createdAt: "2026-09-27T01:36:42Z"
lastCommitAt: "2026-10-22T08:52:11Z"
lastReleaseAt: "2026-10-11T01:38:26Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 60
maintainers: ["nedpals"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1389950937/ae2d7b51-8ae4-4314-8a4c-d7b8982d5a17"
---

Freshcoat is an open-source design and rendering stack for creating cards,
badges, certificates, labels and watermarked photos from reusable templates.
A portable format describes each design, a Skia renderer turns it into pixels,
and print and workspace utilities help produce the output in batches.

Use the packages in your own application, render from a terminal with the
`freshcoat` command, create templates in Figma, or design and export in
Freshcoat Studio. The format and renderer also power
[Davi](https://davi.social)'s card production system.

## Why we're open sourcing it

Freshcoat grew out of our own production needs as a small team. We struggled
to find a design and rendering solution that fit our workflow, so we built one.
We're sharing it so others can build on it and adapt it to their own needs.
We want design files to be portable and the code that interprets them to be
understandable and open to change, without depending on proprietary formats.

We're not experts in graphics engines or compiler design, and most of the
work on Freshcoat has been AI-assisted. Our design decisions draw on working
knowledge of compilers, experience with Canvas2D rendering and the…
