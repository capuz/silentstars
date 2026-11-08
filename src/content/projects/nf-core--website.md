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
forks: 300
openIssues: 125
closedIssues: 500
watchers: 152
contributors: 397
recentReleases: 0
createdAt: "2018-04-18T20:10:52Z"
lastCommitAt: "2026-11-08T14:13:48Z"
status: "thriving"
tags: ["legacy_hero", "community_watch", "fork_magnet"]
healthScore: 96
undervaluedScore: 48
maintainers: ["mashehu", "nf-core-bot", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/a34cc9055e4a96cfe69eec15c19a40127b7ccdc9bb0e122b734c762c7c35c6e4/nf-core/website"
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

### Running a local server

Ok, you're ready! The website is split up into sub-sites using npm workspaces ([see blogpost](https://nf-co.re/blog/2024/new-website-structure)). One usually works on just one sub-site, e.g., `sites/main-site` for blog posts, event pages and general code components,…
