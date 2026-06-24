---
repo: "nikogura/nikogura.com"
name: "nikogura.com"
description: "Thoughts, opinions, and occasionally rantings of a passionate technologist."
url: "https://github.com/nikogura/nikogura.com"
language: "Astro"
languages: ["Astro"]
languagePcts: [66]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2017-04-27T20:58:52Z"
lastCommitAt: "2026-06-24T00:21:28Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 66
undervaluedScore: 67
maintainers: ["nikogura"]
openGraphImageUrl: "https://opengraph.githubassets.com/1ff940a45c1f981621cf73958499104096a8dda8ecb57c6754c45d4dc381bebb/nikogura/nikogura.com"
---

# nikogura.com

Personal website and blog for Nik Ogura — principal engineer, infrastructure architect, and security practitioner.

## Tech Stack

- [Astro](https://astro.build/) 5.x — static site generator
- [Tailwind CSS](https://tailwindcss.com/) 4.x — styling
- Based on the [Dante theme](https://github.com/JustGoodUI/dante-astro-theme) by JustGoodUI
- Deployed to GitHub Pages via GitHub Actions

## Development

```bash
npm install
npm run dev     # Start dev server at localhost:4321
npm run build   # Build for production
npm run preview # Preview production build
```

## Content

- **Blog posts**: `src/content/blog/` — Technical articles on Kubernetes, observability, GitOps, security, and engineering philosophy
- **Projects**: `src/content/projects/` — Open source project showcases
- **Pages**: `src/content/pages/` — About, Resume, Contact

## Deployment

Pushes to `main` trigger the GitHub Actions workflow at `.github/workflows/deploy.yml`, which builds and deploys to GitHub Pages at [nikogura.com](https://nikogura.com).
