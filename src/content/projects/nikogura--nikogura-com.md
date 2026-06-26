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
lastCommitAt: "2026-06-26T23:43:53Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 66
undervaluedScore: 69
maintainers: ["nikogura"]
openGraphImageUrl: "https://opengraph.githubassets.com/a71aac15bd00ce99d859636d71e89df76cc3d14c3f072b4975c61b2146f76d7f/nikogura/nikogura.com"
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
