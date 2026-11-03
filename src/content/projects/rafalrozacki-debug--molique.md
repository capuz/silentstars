---
repo: "rafalrozacki-debug/molique"
name: "molique"
description: "A lightweight, zero-dependency CSS framework for B2B - native cascade layers, no specificity wars, no JS unless truly needed."
readmeQualityOk: true
url: "https://github.com/rafalrozacki-debug/molique"
homepage: "https://molique.dec"
language: "HTML"
languages: ["HTML"]
languagePcts: [72]
topics: ["b2b", "css", "css-flexbox", "css-framework", "css-frameworks", "css-grid", "css3", "design-system", "framework", "js"]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-07-19T11:55:54Z"
lastCommitAt: "2026-11-03T19:05:02Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 76
undervaluedScore: 36
maintainers: ["rafalrozacki-debug", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/928691da0bfd14914d1f7deef86acb9b495cc35e6f04af41b04581b860d6d0ab/rafalrozacki-debug/molique"
discussionCount: 1
---

🇬🇧 **English** · 🇵🇱 [Polski](https://github.com/rafalrozacki-debug/molique/blob/HEAD/README.pl.md) · 🇩🇪 [Deutsch](https://github.com/rafalrozacki-debug/molique/blob/HEAD/README.de.md)

# molique

A lightweight, rigorously optimized CSS framework for B2B. Built on native
cascade layers (`@layer`), with zero specificity wars and zero dependencies
(no jQuery). Version: **1.7.38**.

## Repository structure

This repo contains two distinct things:

- **The framework itself** - `css/`, `js/`, `fonts/`, `starter.html`. This
  is the actual "product": the `dist/*.zip` packages (see [Releases][releases])
  are exactly these folders, zipped up and ready to drop into any project.
  The rest of this README covers only this part.
- **The source of [molique.dev][live]** - all the docs, examples,
  and module demos (`src/`), built with Vite (`npm run dev` /
  `npm run build`, configuration in `vite.config.js`, tooling in `tools/`).
  This is NOT part of the downloadable package - it's just our own site,
  built using molique. If you want to fix a typo in the docs or add a
  component example, this is the right place - the whole page is already
  publicly visible via "View Source" in the…
