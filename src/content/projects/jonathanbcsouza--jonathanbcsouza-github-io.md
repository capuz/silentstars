---
repo: "jonathanbcsouza/jonathanbcsouza.github.io"
name: "jonathanbcsouza.github.io"
description: "A full-stack website made in React"
readmeQualityOk: true
url: "https://github.com/jonathanbcsouza/jonathanbcsouza.github.io"
homepage: "https://jonathanbcsouza-github-io-6ig2.vercel.app/"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [98]
topics: ["appwrite-database", "baas-integration", "react"]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2020-09-12T23:18:33Z"
lastCommitAt: "2026-11-01T22:59:23Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 77
undervaluedScore: 54
maintainers: ["jonathanbcsouza"]
openGraphImageUrl: "https://opengraph.githubassets.com/6d943b34a2adc3c748d17f115b94966cece169e64860c1afb3f84044ddd3524a/jonathanbcsouza/jonathanbcsouza.github.io"
---

## Portfolio Website

Personal portfolio site for projects, skills, and music. Built with React and Vite; content lives in static data modules under `src/data/`.

### Technical Stack

- **Frontend**: React, Styled Components, React Router, Vite, React Icons
- **Content**: Static JS modules in `src/data/`
- **CI/CD**: GitHub Actions builds `main` and publishes `dist` to GitHub Pages

### Deployment

The site is served from GitHub Pages at https://jonathanbcsouza.github.io/.

Every push to `main` runs `.github/workflows/deploy.yml`, which lints, builds,
and uploads `dist` as the Pages artifact. This requires **Settings → Pages →
Build and deployment → Source** to be set to **GitHub Actions**. Pointing it at
a branch instead makes Pages serve this repository's unbuilt source, which
renders a blank page.

GitHub Pages applies no rewrite rules, so the build writes one `index.html` per
route (plus a `404.html` fallback) and routes resolve as real 200 responses.
Routes are declared once in `src/data/siteRoutes.js`.

`vercel.json` is retained so the same build also works on Vercel, which handles
SPA routing with a rewrite instead.

### Running Locally

1. **Clone the Repository**:…
