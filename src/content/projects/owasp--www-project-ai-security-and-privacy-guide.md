---
repo: "OWASP/www-project-ai-security-and-privacy-guide"
name: "www-project-ai-security-and-privacy-guide"
description: "OWASP Foundation Web Respository"
readmeQualityOk: true
url: "https://github.com/OWASP/www-project-ai-security-and-privacy-guide"
language: "HTML"
languages: ["HTML"]
languagePcts: [86]
stars: 430
forks: 125
openIssues: 18
closedIssues: 18
watchers: 39
contributors: 64
recentReleases: 0
createdAt: "2023-01-25T16:58:18Z"
lastCommitAt: "2026-09-28T10:06:20Z"
status: "thriving"
tags: []
healthScore: 88
undervaluedScore: 34
maintainers: ["robvanderveer", "vishnu-77", "3nesdeniz"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/593285023/a9f11283-b515-42db-b3e7-fcabc0805d96"
discussionCount: 8
---

# OWASP AI Exchange Flagship project

Welcome to the GitHub repository for the OWASP AI Exchange, to be found at [owaspai.org](http://owaspai.org/): the living set of documents that collect AI threats and controls from collaboration between experts worldwide.

The goal of this initiative is to collect and clearly present the state of the art on AI security and privacy through community collaboration.

## Project Lead

- [Rob van der Veer (Software Improvement Group)](https://www.linkedin.com/in/robvanderveer/) - [rob.vanderveer@owasp.org](mailto:rob.vanderveer@owasp.org)

## Tech

The website at owaspai.org is rendered from this Github repository by technology called Hugo, part of the CI/CD pipeline. Search is powered by [Pagefind](https://pagefind.app/), which runs after the Hugo build.

### Testing the site (including search) locally

From the repo root (Hugo is run via `npx`, so you don't need it installed):

```bash
npm run test:site
```

This builds the site, builds the Pagefind search index, and serves it at **http://localhost:3000**. Open that URL, click the search icon in the header, and try a query.

Or run the steps separately:

```bash
npm run build:site    # Hugo build…
