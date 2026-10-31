---
repo: "peterruler/peterruler.github.io"
name: "peterruler.github.io"
description: "2025 Version of my web profile"
readmeQualityOk: true
url: "https://github.com/peterruler/peterruler.github.io"
language: "HTML"
languages: ["HTML"]
languagePcts: [84]
stars: 18
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2024-09-01T17:19:53Z"
lastCommitAt: "2026-10-31T15:59:03Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 70
undervaluedScore: 35
maintainers: ["peterruler"]
openGraphImageUrl: "https://opengraph.githubassets.com/da68f625d6e98f6439ad229c87fc09d5fe64a60edcf63c14f79454d60a1621b9/peterruler/peterruler.github.io"
---

# PSWeb – Peter Strössler Portfolio

Static personal portfolio website for Peter Strössler, a software engineer in Switzerland. The site presents services, selected web/mobile/AI projects, career history, testimonials, a downloadable CV, and a contact form.

## Technology

- Semantic HTML5
- Compiled utility CSS in `style.css`
- Small dependency-free JavaScript controller in `site.js`
- WebP images and SVG brand assets
- Static hosting with the custom domain `peterstroessler.com`
- Optional Cloudflare Worker proxy configuration in `cloudflare/`

No package installation or build step is required for the current production files.

## Local development

From the repository root, start any static file server. For example:

```bash
python3 -m http.server 4173
```

Then open `http://localhost:4173/`.

## Important files

| File | Purpose |
| --- | --- |
| `index.html` | Canonical, indexable portfolio homepage |
| `style.css` | Compiled site styles |
| `site.js` | Navigation, scrolling, portfolio filters, year, and form behavior |
| `robots.txt` | Crawler rules and sitemap discovery |
| `sitemap.xml` | Canonical URL submitted to search engines |
| `src/images/site.webmanifest` | Web app…
