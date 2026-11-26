---
repo: "nf-core/website"
name: "website"
description: "Code and files for the main nf-core website."
readmeQualityOk: true
url: "https://github.com/nf-core/website"
homepage: "https://nf-co.re"
language: "MDX"
languages: ["MDX", "Astro"]
languagePcts: [40, 31]
topics: ["nf-core", "nextflow", "website"]
stars: 100
forks: 301
openIssues: 126
closedIssues: 500
watchers: 152
contributors: 400
recentReleases: 0
createdAt: "2018-04-18T20:10:52Z"
lastCommitAt: "2026-11-26T11:57:48Z"
status: "thriving"
tags: ["legacy_hero", "community_watch", "fork_magnet"]
healthScore: 96
undervaluedScore: 48
maintainers: ["nf-core-bot", "vagkaratzas", "mashehu"]
openGraphImageUrl: "https://opengraph.githubassets.com/73ccfca6a9ae6cf2efffef5e5d8583f37db8f2d7ada237b5f614c0b3275b0107/nf-core/website"
---

# [nf-co.re](https://github.com/nf-core/website)

This repository contains code for the nf-core website: **<http://nf-co.re/>**

## Packages used

Here's how the website is built:

- Language: Javascript
- Frameworks:
  - [Astro](https://astro.build/) (static site generator),
  - [Svelte](https://svelte.dev/) (interactive components),
  - [Bootstrap](https://getbootstrap.com/docs/) (CSS framework)
- Tools:
  - [npm](https://www.npmjs.com/) (package manager)

## Development

### Getting the code

To make edits to the website, fork the repository to your own user on GitHub and then clone to your local system.

```bash
gh repo fork nf-core/website nf-core_website
cd nf-core_website/
```

### Installing dependencies

The website is built using [Astro](https://astro.build/), a static site generator.
To install the dependencies for the root project and all sub-sites, run:

```bash
npm install
```
