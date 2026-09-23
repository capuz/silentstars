---
repo: "nf-core/website"
name: "website"
description: "Code and files for the main nf-core website."
readmeQualityOk: true
url: "https://github.com/nf-core/website"
homepage: "https://nf-co.re"
language: "MDX"
languages: ["MDX", "Astro"]
languagePcts: [40, 32]
topics: ["nf-core", "nextflow", "website"]
stars: 98
forks: 298
openIssues: 121
closedIssues: 495
watchers: 153
contributors: 385
recentReleases: 0
createdAt: "2018-04-18T20:10:52Z"
lastCommitAt: "2026-09-23T08:46:34Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "community_watch", "fork_magnet"]
healthScore: 96
undervaluedScore: 48
maintainers: ["nf-core-bot", "ewels", "maxulysse"]
openGraphImageUrl: "https://opengraph.githubassets.com/b47ad9a91c9e6848cfe1c580732e41fa9cb6ab2eba35492bfae81c661f748559/nf-core/website"
---

<picture>
  <source srcset="sites/main-site/src/assets/images/logo/nf-core-logo-darkbg.svg" media="(prefers-color-scheme: dark)">
  <source srcset="sites/main-site/src/assets/images/logo/nf-core-logo.svg" media="(prefers-color-scheme: light)">
</picture>

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

### Running a local server

Ok, you're…
