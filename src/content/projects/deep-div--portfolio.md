---
repo: "deep-div/portfolio"
name: "portfolio"
description: "Senior AI Engineer portfolio showcasing projects, skills, and experience in Generative AI, Agentic AI, and software development."
readmeQualityOk: true
url: "https://github.com/deep-div/portfolio"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [90]
topics: ["portfolio", "portfolio-page", "portfolio-project", "portfolio-template", "portfolio-website", "react", "typescipt", "ai-portfolio", "dev-portfolio"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-11-16T11:51:28Z"
lastCommitAt: "2026-11-21T13:30:11Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 78
undervaluedScore: 14
maintainers: ["deep-div"]
openGraphImageUrl: "https://opengraph.githubassets.com/649443753530dcb54cc57c34844b22ba18ee02367fd2dba42b167bb1d9e09c6e/deep-div/portfolio"
---

# Portfolio

Personal portfolio built with React, TypeScript, Vite, Tailwind CSS v4, Motion and Lenis.

## Run

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in dist/
```

## Switch theme

Open [`src/theme.ts`](https://github.com/deep-div/portfolio/blob/HEAD/src/theme.ts) and change one line:

```ts
export const THEME: ThemeName = 'cream-editorial' // or 'minimal-light' or 'midnight'
```

Theme colours live in `src/index.css` under `[data-theme="…"]`.

## Edit content

Everything you'll want to change is in [`src/data/content.ts`](https://github.com/deep-div/portfolio/blob/HEAD/src/data/content.ts):
name, role, about text, email, social links, projects and experience. Items marked `TODO` are placeholders.

Put your resume at `public/resume.pdf`.

## Add a project

1. Create `public/media/<slug>/` with a walkthrough video (`<slug>.mp4`) and screenshots.
2. Generate a poster and optimized images (needs ffmpeg + Python Pillow):
