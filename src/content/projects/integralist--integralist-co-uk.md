---
repo: "Integralist/integralist.co.uk"
name: "integralist.co.uk"
description: "Website"
readmeQualityOk: true
url: "https://github.com/Integralist/integralist.co.uk"
language: "Go"
languages: ["Go"]
languagePcts: [71]
stars: 5
forks: 1
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2018-03-17T07:32:55Z"
lastCommitAt: "2026-11-05T11:22:18Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 75
undervaluedScore: 62
maintainers: ["Integralist"]
openGraphImageUrl: "https://opengraph.githubassets.com/61bacd9a9931d9f35dd43dfcbbf65155bb367008259b8897135126d592cb232a/Integralist/integralist.co.uk"
---

# integralist.co.uk

A technical blog featuring a bespoke Static Site Generator written in Go.

> [!TIP]
> Can also be accessed via [integralist.netlify.app](https://integralist.netlify.app/)

## Architecture

This project uses a custom SSG to convert Markdown files into a
high-performance, SEO-friendly static website.

- **Frontend**: Vanilla HTML and CSS (no frameworks, no JavaScript).
- **Backend**: Custom SSG written in Go (v1.26+), utilizing
  `github.com/gomarkdown/markdown`.
- **Templates**: Standard Go `html/template`.
- **Deployment**: Automatically built and hosted on
  [Netlify](https://www.netlify.com/).

## Getting Started

### Prerequisites

- Go 1.26 or higher
- Make

### Local Development

1. **Build the site**:

   ```bash
   make build
   ```

   This compiles the SSG and generates the static files into the `public/`
   directory.

2. **Preview the site**:

   ```bash
   make serve
   ```

   This builds the site and starts a local development server at
   `http://localhost:8080`.

3. **Run tests**:

   ```bash
   make test
   ```

4. **Clean build artifacts**:

   ```bash
   make clean
   ```

## Project Structure

- `assets/`: CSS, images, and HTML templates.
-…
