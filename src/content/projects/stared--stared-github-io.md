---
repo: "stared/stared.github.io"
name: "stared.github.io"
description: "Personal website and blog by Piotr Migdał, in Astro"
readmeQualityOk: true
url: "https://github.com/stared/stared.github.io"
homepage: "https://p.migdal.pl"
language: "MDX"
languages: ["MDX", "TypeScript"]
languagePcts: [70, 20]
stars: 7
forks: 1
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 3
recentReleases: 0
createdAt: "2024-03-25T12:14:25Z"
lastCommitAt: "2026-11-02T17:57:11Z"
status: "thriving"
tags: []
healthScore: 82
undervaluedScore: 45
maintainers: ["stared"]
openGraphImageUrl: "https://opengraph.githubassets.com/b9f3fa3804249cdda92d4564954ea0e696cd15798a45c41cb4d80c7043554bac/stared/stared.github.io"
---

# Piotr Migdał - blog and website

For previous versions of the website, see:

- [stared/jekyll-blog-pre-2022](https://github.com/stared/jekyll-blog-pre-2022) - Jekyll static site
- [stared/old-blog-gridsome-pre-2024](https://github.com/stared/old-blog-gridsome-pre-2024) - Gridsome (Vue 2)
- Nuxt 3 Content (2024-2025) - Vue 3 + TypeScript

Built with [Astro](https://astro.build/): static site generation, content collections with Zod-typed schemas, MDX, and Vue islands where needed.

## License

I share all code on this repository under the MIT license. Feel invited to use these pieces in your projects.

I share all content (blog posts, images, etc.) under the Creative Commons Attribution-ShareAlike Non-Commercial 4.0 International license. If you want to use any material on a different license, please let me know - in most cases, I would be more than happy to be permissive.

## Setup

Look at the [Astro documentation](https://docs.astro.build/) to learn more.

If you want to run it locally:

```bash
pnpm install
pnpm dev
```

To create a static build, see how I do it in GitHub Actions, `.github/workflows/build-and-deploy.yml`; in general, you need to run:

```bash
pnpm build
```…
